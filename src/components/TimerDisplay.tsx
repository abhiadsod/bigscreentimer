import { formatStopwatchTime, formatTime } from "@/lib/timeUtils";

interface TimerDisplayProps {
  time: number;
  isRunning: boolean;
  mode: "timer" | "stopwatch";
}

export function TimerDisplay({ time, isRunning, mode }: TimerDisplayProps) {
  const displayTime = mode === "stopwatch" ? formatStopwatchTime(time) : formatTime(time);

  return (
    <div className="text-center mb-8">
      <div 
        className={`timer-display ${mode === "stopwatch" ? "timer-display-stopwatch" : ""} ${isRunning ? 'text-primary' : 'text-foreground'} transition-colors duration-300`}
        role="timer"
        aria-live="polite"
        aria-label={`${mode === 'timer' ? 'Timer' : 'Stopwatch'}: ${displayTime}`}
      >
        {displayTime}
      </div>
      <div className="text-muted-foreground text-lg md:text-xl mt-2 font-medium">
        {mode === "timer" ? "Timer" : "Stopwatch"}
      </div>
    </div>
  );
}
