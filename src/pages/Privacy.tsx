import { PageLayout } from "@/components/PageLayout";
import { Seo } from "@/components/Seo";

const Privacy = () => {
  return (
    <PageLayout>
      <Seo
        title="Privacy Policy - Big Screen Timer"
        description="Privacy policy for Big Screen Timer, including local storage usage, analytics, and advertising placeholders."
        path="/privacy"
      />

      <section className="mx-auto max-w-4xl px-4 py-14 md:px-6">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">Privacy Policy</h1>
        <div className="mt-6 space-y-5 text-base leading-7 text-muted-foreground">
          <p>
            Big Screen Timer is designed to work with minimal data collection.
            The app may store basic preferences such as theme selection in your
            browser using local storage so the site can remember your settings.
          </p>
          <p>
            Big Screen Timer does not require you to create an account or submit
            personal information in order to use the timer or stopwatch.
          </p>
          <p>
            This website may use analytics or advertising services in order to
            understand traffic and support the site. Those services may use
            cookies or similar technologies, subject to their own privacy
            policies and applicable legal requirements.
          </p>
          <p>
            If you have questions about privacy or data handling related to this
            website, contact abhiadsod@gmail.com.
          </p>
        </div>
      </section>
    </PageLayout>
  );
};

export default Privacy;
