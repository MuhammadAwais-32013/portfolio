import type { Metadata } from "next";
import {
  Award,
  CalendarDays,
  type LucideIcon,
  MapPin,
  Presentation,
  Trophy,
  Users,
} from "lucide-react";
import { getCommunity, type CommunityActivity } from "@/lib/content";

export const metadata: Metadata = {
  title: "Conferences & Volunteering | Muhammad Awais",
  description:
    "Conferences, technical competitions, events, and campus volunteering by Muhammad Awais.",
};

function ActivityList({
  activities,
  icon: Icon,
}: {
  activities: CommunityActivity[];
  icon: LucideIcon;
}) {
  return (
    <ol className="relative space-y-4 before:absolute before:bottom-3 before:left-[11px] before:top-3 before:w-px before:bg-[var(--border-subtle)]">
      {activities.map((activity) => (
        <li key={activity.title} className="relative pl-9">
          <span className="absolute left-0 top-5 z-10 flex h-6 w-6 items-center justify-center rounded-full border border-[var(--accent-border)] bg-[var(--surface-1)] text-[var(--accent)]">
            <Icon className="h-3.5 w-3.5" aria-hidden="true" />
          </span>
          <article className="space-y-3 rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-1)] p-5 sm:p-6">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div className="space-y-1">
                <h3 className="text-base font-bold text-[var(--foreground)]">
                  {activity.title}
                </h3>
                {activity.role && (
                  <p className="text-sm font-medium text-[var(--accent)]">
                    {activity.role}
                  </p>
                )}
              </div>
              <div className="flex shrink-0 flex-wrap gap-x-3 gap-y-1 text-xs text-[var(--text-dim)]">
                {activity.period && (
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                    {activity.period}
                  </span>
                )}
                {activity.location && (
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                    {activity.location}
                  </span>
                )}
              </div>
            </div>
            <p className="max-w-3xl text-sm leading-relaxed text-[var(--text-muted)]">
              {activity.description}
            </p>
          </article>
        </li>
      ))}
    </ol>
  );
}

export default function CommunityPage() {
  const community = getCommunity();

  return (
    <div className="mx-auto max-w-5xl space-y-14 px-4 py-12 sm:px-6 lg:px-8">
      <header className="max-w-3xl space-y-5 border-b border-[var(--border-subtle)] pb-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-[var(--accent-border)] bg-[var(--accent-surface)] px-3 py-1 text-xs font-mono font-bold text-[var(--accent)]">
          <Users className="h-3.5 w-3.5" aria-hidden="true" />
          <span>Conferences · Events · Volunteering</span>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-[var(--foreground)] sm:text-5xl">
          Conferences &amp; Volunteering
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-[var(--text-muted)] sm:text-base">
          A record of conferences, technical events, competitions, and campus
          outreach alongside my engineering work.
        </p>
        <div className="flex flex-wrap gap-3 pt-1">
          <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-1)] px-4 py-3">
            <div className="text-lg font-bold text-[var(--accent)]">3</div>
            <div className="text-xs text-[var(--text-dim)]">AI & technology sessions</div>
          </div>
          <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-1)] px-4 py-3">
            <div className="text-lg font-bold text-[var(--accent)]">~250–300</div>
            <div className="text-xs text-[var(--text-dim)]">students reached</div>
          </div>
          <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-1)] px-4 py-3">
            <div className="text-lg font-bold text-[var(--accent)]">8th</div>
            <div className="text-xs text-[var(--text-dim)]">national GenAI hackathon</div>
          </div>
        </div>
      </header>

      <section aria-labelledby="volunteering-heading" className="space-y-6">
        <div className="flex items-center gap-3">
          <Users className="h-5 w-5 text-[var(--accent)]" aria-hidden="true" />
          <h2 id="volunteering-heading" className="text-xl font-bold text-[var(--foreground)] sm:text-2xl">
            Volunteering & outreach
          </h2>
        </div>
        <ActivityList activities={community.volunteering} icon={Presentation} />
      </section>

      <section aria-labelledby="honors-heading" className="space-y-6">
        <div className="flex items-center gap-3">
          <Award className="h-5 w-5 text-[var(--accent)]" aria-hidden="true" />
          <h2 id="honors-heading" className="text-xl font-bold text-[var(--foreground)] sm:text-2xl">
            Competitions & honors
          </h2>
        </div>
        <ActivityList activities={community.honors} icon={Trophy} />
      </section>

      <section aria-labelledby="events-heading" className="space-y-6">
        <div className="flex items-center gap-3">
          <CalendarDays className="h-5 w-5 text-[var(--accent)]" aria-hidden="true" />
          <h2 id="events-heading" className="text-xl font-bold text-[var(--foreground)] sm:text-2xl">
            Conferences & events
          </h2>
        </div>
        <ActivityList activities={community.events} icon={CalendarDays} />
        <p className="pl-9 text-xs text-[var(--text-dim)]">
          Participation is listed as attendee or team member as stated in the CV.
        </p>
      </section>
    </div>
  );
}
