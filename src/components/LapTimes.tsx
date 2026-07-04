import { formatStopwatchTime } from "@/lib/timeUtils";
import { Badge } from "@/components/ui/badge";

interface LapTimesProps {
  lapTimes: number[];
}

export function LapTimes({ lapTimes }: LapTimesProps) {
  if (lapTimes.length === 0) {
    return null;
  }

  return (
    <div className="mt-8">
      <h3 className="text-lg font-semibold mb-4 text-center text-muted-foreground">
        Lap Times
      </h3>
      <div className="max-h-60 overflow-y-auto bg-card border border-border rounded-[var(--radius)] p-4">
        <div className="space-y-2">
          {lapTimes.map((lapTime, index) => {
            const lapNumber = lapTimes.length - index;
            const displayTime = formatStopwatchTime(lapTime);
            return (
              <div
                key={index}
                className="flex justify-between items-center py-2 px-3 bg-secondary rounded-lg"
              >
                <Badge variant="outline" className="text-sm">
                  Lap {lapNumber}
                </Badge>
                <span className="font-mono text-lg font-medium">
                  {displayTime}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
