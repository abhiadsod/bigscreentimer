import { PageLayout } from "@/components/PageLayout";
import { Seo } from "@/components/Seo";

const Contact = () => {
  return (
    <PageLayout>
      <Seo
        title="Contact - Big Screen Timer"
        description="Contact page for Big Screen Timer."
        path="/contact"
      />

      <section className="mx-auto max-w-4xl px-4 py-14 md:px-6">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">Contact</h1>
        <div className="mt-6 space-y-5 text-base leading-7 text-muted-foreground">
          <p>
            If you want to report a bug, request a feature, or discuss the site,
            add your preferred contact method here before launch.
          </p>
          <p>
            Suggested options:
          </p>
          <p>
            Email:{" "}
            <a
              className="font-medium text-primary hover:underline"
              href="mailto:abhiadsod@gmail.com"
            >
              abhiadsod@gmail.com
            </a>
          </p>
          <p>
            GitHub:{" "}
            <a
              className="font-medium text-primary hover:underline"
              href="https://github.com/abhiadsod/bigscreentimer"
              target="_blank"
              rel="noreferrer"
            >
              github.com/abhiadsod/bigscreentimer
            </a>
          </p>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
