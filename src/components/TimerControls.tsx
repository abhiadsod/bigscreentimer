import { Play, Pause, RotateCcw, Maximize2, Minimize2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TimerControlsProps {
  isRunning: boolean;
  onStart: () => void;
  onPause: () => void;
  onReset: () => void;
  onToggleFullscreen: () => void;
  isFullscreen: boolean;
  fullscreenSupported: boolean;
  disabled?: boolean;
}

export function TimerControls({
  isRunning,
  onStart,
  onPause,
  onReset,
  onToggleFullscreen,
  isFullscreen,
  fullscreenSupported,
  disabled = false,
}: TimerControlsProps) {
  return (
    <div className="timer-controls">
      {!isRunning ? (
        <Button
          onClick={onStart}
          disabled={disabled}
          className="action-button-primary min-w-[136px]"
          size="lg"
        >
          <Play className="mr-2 h-5 w-5" />
          Start
        </Button>
      ) : (
        <Button
          onClick={onPause}
          className="action-button-primary min-w-[136px]"
          size="lg"
        >
          <Pause className="mr-2 h-5 w-5" />
          Pause
        </Button>
      )}
      
      <Button
        onClick={onReset}
        variant="outline"
        className="action-button-secondary"
        size="lg"
      >
        <RotateCcw className="mr-2 h-4 w-4" />
        Reset
      </Button>

      <Button
        onClick={onToggleFullscreen}
        variant="outline"
        className="action-button-secondary"
        size="lg"
        disabled={!fullscreenSupported}
        aria-pressed={isFullscreen}
      >
        {isFullscreen ? (
          <Minimize2 className="mr-2 h-4 w-4" />
        ) : (
          <Maximize2 className="mr-2 h-4 w-4" />
        )}
        {isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
      </Button>
    </div>
  );
}
