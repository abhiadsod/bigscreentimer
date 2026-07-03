import { PageLayout } from "@/components/PageLayout";
import { Seo } from "@/components/Seo";
import { Link } from "react-router-dom";

const OnlineStopwatch = () => {
  return (
    <PageLayout>
      <Seo
        title="Online Stopwatch - Big Screen Timer"
        description="Use the Big Screen Timer stopwatch for workouts, classroom activities, experiments, presentations, and event timing."
        path="/online-stopwatch"
      />

      <section className="mx-auto max-w-4xl px-4 py-14 md:px-6">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">Online Stopwatch</h1>
        <div className="mt-6 space-y-5 text-base leading-7 text-muted-foreground">
          <p>
            A stopwatch is useful when you want to measure elapsed time instead
            of counting down from a preset duration. This is helpful for lap
            timing, classroom drills, exercise intervals, and experiments.
          </p>
          <p>
            Big Screen Timer includes a stopwatch mode with lap tracking and a
            high-contrast layout that is easy to read from a distance.
          </p>
          <p>
            Open the <Link className="text-primary hover:underline" to="/">main page</Link>, switch to stopwatch mode, and use the on-screen controls or keyboard shortcuts to begin.
          </p>
        </div>
      </section>
    </PageLayout>
  );
};

export default OnlineStopwatch;
