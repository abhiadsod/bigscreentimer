import { useState, useEffect, useCallback, useRef } from "react";
import { TimerDisplay } from "./TimerDisplay";
import { TimerControls } from "./TimerControls";
import { PresetButtons } from "./PresetButtons";
import { CustomTimeInput } from "./CustomTimeInput";
import { ModeToggle } from "./ModeToggle";
import { LapTimes } from "./LapTimes";
import { Button } from "@/components/ui/button";
import { Flag } from "lucide-react";
import { playNotificationSound } from "@/lib/timeUtils";
import { useToast } from "@/hooks/use-toast";

const DEFAULT_TIMER_SECONDS = 10 * 60;
const DEFAULT_TIMER_MS = DEFAULT_TIMER_SECONDS * 1000;
const STOPWATCH_TICK_MS = 10;

export function Timer() {
  const [mode, setMode] = useState<"timer" | "stopwatch">("timer");
  const [time, setTime] = useState(DEFAULT_TIMER_MS);
  const [initialTime, setInitialTime] = useState(DEFAULT_TIMER_MS);
  const [isRunning, setIsRunning] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const timerRootRef = useRef<HTMLElement>(null);
  const [lapTimes, setLapTimes] = useState<number[]>([]);
  const stopwatchStartRef = useRef<number | null>(null);
  const stopwatchElapsedRef = useRef(0);
  const { toast } = useToast();

  // Timer countdown logic
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRunning) {
      if (mode === "stopwatch") {
        if (stopwatchStartRef.current === null) {
          stopwatchStartRef.current = Date.now();
        }

        interval = setInterval(() => {
          const elapsed = stopwatchElapsedRef.current + (Date.now() - (stopwatchStartRef.current ?? Date.now()));
          setTime(elapsed);
        }, STOPWATCH_TICK_MS);
      } else {
        interval = setInterval(() => {
          setTime((prevTime) => {
            if (prevTime <= 1000) {
              setIsRunning(false);
              playNotificationSound();
              toast({
                title: "Timer Complete!",
                description: "Your timer has finished.",
                duration: 5000,
              });
              return 0;
            }
            return prevTime - 1000;
          });
        }, 1000);
      }
    }

    return () => clearInterval(interval);
  }, [isRunning, mode, toast]);

  const handleStart = useCallback(() => {
    if (mode === "timer" && time === 0) {
      toast({
        title: "Set a time first",
        description: "Please select a preset time or enter a custom duration.",
        variant: "destructive",
      });
      return;
    }
    setIsRunning(true);
  }, [mode, time, toast]);

  const handlePause = useCallback(() => {
    if (mode === "stopwatch" && isRunning && stopwatchStartRef.current !== null) {
      stopwatchElapsedRef.current += Date.now() - stopwatchStartRef.current;
      stopwatchStartRef.current = null;
      setTime(stopwatchElapsedRef.current);
    }
    setIsRunning(false);
  }, [isRunning, mode]);

  const handleReset = useCallback(() => {
    setIsRunning(false);
    if (mode === "timer") {
      setTime(initialTime);
    } else {
      setTime(0);
      stopwatchElapsedRef.current = 0;
      stopwatchStartRef.current = null;
      setLapTimes([]);
    }
  }, [mode, initialTime]);

  const handleModeChange = useCallback((newMode: "timer" | "stopwatch") => {
    setIsRunning(false);
    setMode(newMode);
    setTime(newMode === "timer" ? DEFAULT_TIMER_MS : 0);
    setInitialTime(newMode === "timer" ? DEFAULT_TIMER_MS : 0);
    stopwatchElapsedRef.current = 0;
    stopwatchStartRef.current = null;
    setLapTimes([]);
  }, []);

  const handleSetTime = useCallback((seconds: number) => {
    if (!isRunning) {
      const nextTime = seconds * 1000;
      setTime(nextTime);
      setInitialTime(nextTime);
    }
  }, [isRunning]);

  const handleLap = useCallback(() => {
    if (mode === "stopwatch" && isRunning) {
      const currentElapsed = stopwatchElapsedRef.current + (stopwatchStartRef.current === null ? 0 : Date.now() - stopwatchStartRef.current);
      setLapTimes((prev) => [currentElapsed, ...prev]);
    }
  }, [mode, isRunning]);

  const handleToggleFullscreen = useCallback(async () => {
    if (!document.fullscreenEnabled) return;

    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen();
      } else {
        await timerRootRef.current?.requestFullscreen();
      }
    } catch {
      toast({
        title: "Fullscreen unavailable",
        description: "Your browser could not switch this timer to fullscreen.",
        variant: "destructive",
      });
    }
  }, [toast]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(document.fullscreenElement === timerRootRef.current);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      // Prevent action if user is typing in an input
      if (event.target instanceof HTMLInputElement) return;
      
      if (event.code === "Space") {
        event.preventDefault();
        if (isRunning) {
          handlePause();
        } else {
          handleStart();
        }
      } else if (event.code === "KeyR") {
        event.preventDefault();
        handleReset();
      } else if (event.code === "KeyL" && mode === "stopwatch" && isRunning) {
        event.preventDefault();
        handleLap();
      } else if (event.code === "KeyF") {
        event.preventDefault();
        handleToggleFullscreen();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [isRunning, handleStart, handlePause, handleReset, handleLap, handleToggleFullscreen, mode]);

  return (
    <section
      ref={timerRootRef}
      className="timer-fullscreen-root mx-auto max-w-6xl px-3 py-3 md:px-6"
    >
      <div className="timer-card mx-auto max-w-5xl">
        <ModeToggle 
          mode={mode} 
          onModeChange={handleModeChange} 
          disabled={isRunning}
        />

        <TimerDisplay 
          time={time} 
          isRunning={isRunning} 
          mode={mode}
        />

        <TimerControls 
          isRunning={isRunning}
          onStart={handleStart}
          onPause={handlePause}
          onReset={handleReset}
          onToggleFullscreen={handleToggleFullscreen}
          isFullscreen={isFullscreen}
          fullscreenSupported={document.fullscreenEnabled}
          disabled={mode === "timer" && time === 0 && !isRunning}
        />

        {mode === "stopwatch" && isRunning && (
          <div className="flex justify-center mb-8">
            <Button
              onClick={handleLap}
              variant="outline"
              className="action-button-secondary"
              size="lg"
            >
              <Flag className="mr-2 h-4 w-4" />
              Lap
            </Button>
          </div>
        )}

        {mode === "timer" && !isRunning && (
          <>
            <PresetButtons 
              onSelectPreset={handleSetTime}
              disabled={isRunning}
            />
            <CustomTimeInput 
              onSetTime={handleSetTime}
              disabled={isRunning}
            />
          </>
        )}

        {mode === "stopwatch" && lapTimes.length > 0 && (
          <LapTimes lapTimes={lapTimes} />
        )}
      </div>

      <div className="text-center mt-10 text-muted-foreground">
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <span>
            <kbd className="px-2 py-1 bg-muted rounded text-xs">Space</kbd> Start/Pause
          </span>
          <span>
            <kbd className="px-2 py-1 bg-muted rounded text-xs">R</kbd> Reset
          </span>
          {mode === "stopwatch" && (
            <span>
              <kbd className="px-2 py-1 bg-muted rounded text-xs">L</kbd> Lap
            </span>
          )}
          <span>
            <kbd className="px-2 py-1 bg-muted rounded text-xs">F</kbd> Fullscreen
          </span>
        </div>
      </div>
    </section>
  );
}
