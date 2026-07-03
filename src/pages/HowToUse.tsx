import { PageLayout } from "@/components/PageLayout";
import { Seo } from "@/components/Seo";
import { Link } from "react-router-dom";

const HowToUse = () => {
  return (
    <PageLayout>
      <Seo
        title="How to Use an Online Timer - Big Screen Timer"
        description="A practical guide to using an online timer for classrooms, presentations, focus work, study sessions, and workouts."
        path="/how-to-use-online-timer"
      />

      <section className="mx-auto max-w-4xl px-4 py-14 md:px-6">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">How to Use an Online Timer</h1>
        <div className="mt-6 space-y-5 text-base leading-7 text-muted-foreground">
          <p>
            An online timer works best when it is visible, easy to adjust, and
            readable from a distance. Big Screen Timer is built for exactly that
            use case.
          </p>
          <p>
            For presentations and meetings, set the duration before you start
            and place the browser in full-screen mode. For study sessions and
            focus work, combine a fixed countdown with short breaks. For
            classrooms, keep the timer on a shared display so everyone sees the
            same remaining time.
          </p>
          <p>
            Keyboard shortcuts help keep the flow fast. Press Space to start or
            pause, press R to reset, and use the stopwatch mode when you need to
            measure elapsed time instead of a countdown.
          </p>
          <p>
            Go back to the <Link className="text-primary hover:underline" to="/">main timer page</Link> to start using the tool.
          </p>
        </div>
      </section>
    </PageLayout>
  );
};

export default HowToUse;
