import { PageLayout } from "@/components/PageLayout";
import { Seo } from "@/components/Seo";

const About = () => {
  return (
    <PageLayout>
      <Seo
        title="About Big Screen Timer"
        description="Learn what Big Screen Timer is for and why it is built for classrooms, meetings, workouts, and focus sessions."
        path="/about"
      />

      <section className="mx-auto max-w-4xl px-4 py-14 md:px-6">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">About Big Screen Timer</h1>
        <div className="mt-6 space-y-5 text-base leading-7 text-muted-foreground">
          <p>
            Big Screen Timer is a simple web-based timer and stopwatch designed
            to stay visible from across a room. The goal is to make timing easy
            during classes, presentations, study sessions, workouts, workshops,
            and team meetings.
          </p>
          <p>
            The interface is intentionally minimal. You can switch between timer
            and stopwatch modes, use keyboard shortcuts, run the display full
            screen, and keep attention on the countdown instead of on UI clutter.
          </p>
          <p>
            This site is built for speed, clarity, and ease of use on laptops,
            tablets, and large external displays.
          </p>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
