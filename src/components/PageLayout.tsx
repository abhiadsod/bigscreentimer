import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ReactNode } from "react";

type PageLayoutProps = {
  children: ReactNode;
};

const navItems = [
  { to: "/", label: "Timer" },
  { to: "/online-stopwatch", label: "Stopwatch" },
  { to: "/how-to-use-online-timer", label: "Guide" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-background theme-transition">
      <ThemeToggle />

      <header className="border-b border-border/70 bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4 md:px-6">
          <Link to="/" className="text-lg font-semibold tracking-tight text-foreground">
            Big Screen Timer
          </Link>

          <nav className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t border-border/70 bg-background">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 md:px-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-base font-medium text-foreground">Big Screen Timer</p>
            <p className="mt-2 text-sm text-muted-foreground">
              A fast, full-screen timer and stopwatch designed for classrooms,
              focus sessions, workouts, meetings, and presentations.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <Link to="/about" className="hover:text-foreground">About</Link>
            <Link to="/privacy" className="hover:text-foreground">Privacy</Link>
            <Link to="/contact" className="hover:text-foreground">Contact</Link>
            <Link to="/how-to-use-online-timer" className="hover:text-foreground">Guide</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
