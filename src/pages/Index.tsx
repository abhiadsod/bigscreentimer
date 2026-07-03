import { AdSlot } from "@/components/AdSlot";
import { PageLayout } from "@/components/PageLayout";
import { Seo } from "@/components/Seo";
import { Timer } from "@/components/Timer";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <PageLayout>
      <Seo
        title="Big Screen Timer - Free Online Timer and Stopwatch"
        description="Free full-screen online timer and stopwatch for classrooms, study sessions, workouts, meetings, and focus work."
        path="/"
      />

      <section className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="bg-gradient-to-r from-primary to-accent bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-6xl">
            Big Screen Timer
          </h1>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            A free online timer and stopwatch built for shared screens, study
            sessions, presentations, classrooms, workouts, and focus work.
          </p>
        </div>

        <div className="mt-12">
          <Timer />
        </div>

        <AdSlot
          slot={import.meta.env.VITE_ADSENSE_SLOT_INLINE}
          className="mx-auto mt-12 max-w-3xl"
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-border bg-card p-6">
            <h2 className="text-lg font-semibold text-foreground">Made for distance</h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Large digits and strong contrast make the timer readable from
              across a classroom, meeting room, or gym floor.
            </p>
          </div>
          <div className="rounded-3xl border border-border bg-card p-6">
            <h2 className="text-lg font-semibold text-foreground">Timer and stopwatch</h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Switch between countdown and elapsed time modes depending on
              whether you need deadlines, intervals, or lap tracking.
            </p>
          </div>
          <div className="rounded-3xl border border-border bg-card p-6">
            <h2 className="text-lg font-semibold text-foreground">Fast controls</h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Use presets, custom input, and keyboard shortcuts to start quickly
              without wasting time during a live session.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <section className="rounded-3xl border border-border bg-card p-8">
            <h2 className="text-2xl font-semibold text-foreground">When to use a big screen timer</h2>
            <div className="mt-5 space-y-4 text-sm leading-7 text-muted-foreground">
              <p>
                Use a full-screen timer when multiple people need to see the
                same countdown at once. This works well for classrooms,
                workshops, exam practice, team standups, public speaking,
                interval training, and focus sessions.
              </p>
              <p>
                For productivity, a visible countdown helps create urgency and
                reduces context switching. For meetings and presentations, it
                helps speakers stay on time without constantly checking a phone
                or laptop clock.
              </p>
              <p>
                If you need elapsed time instead of a countdown, switch to the
                stopwatch mode and use lap tracking for repeated drills or
                exercises.
              </p>
            </div>
          </section>

          <section className="rounded-3xl border border-border bg-card p-8">
            <h2 className="text-2xl font-semibold text-foreground">Useful pages</h2>
            <div className="mt-5 flex flex-col gap-3 text-sm">
              <Link className="text-primary hover:underline" to="/how-to-use-online-timer">
                How to use an online timer
              </Link>
              <Link className="text-primary hover:underline" to="/online-stopwatch">
                Online stopwatch guide
              </Link>
              <Link className="text-primary hover:underline" to="/about">
                About this tool
              </Link>
              <Link className="text-primary hover:underline" to="/privacy">
                Privacy policy
              </Link>
              <Link className="text-primary hover:underline" to="/contact">
                Contact
              </Link>
            </div>
          </section>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
