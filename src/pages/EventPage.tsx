import PageHero from "../components/PageHero";
import { getEvent } from "../data/eventsData";
import EventsPage from "./EventsPage";

export default function EventPage({ slug }: { slug: string }) {
  const event = getEvent(slug);

  if (!event) return <EventsPage />;

  return (
    <>
      <PageHero
        eyebrow={event.category}
        title={event.title}
        description={event.summary}
        aside={
          <dl className="page-fact-list">
            <div><dt>Date</dt><dd><time dateTime={event.startDate}>{event.displayDate}</time></dd></div>
            <div><dt>Status</dt><dd>{event.status === "past" ? "Past event" : event.status}</dd></div>
            {event.time ? <div><dt>Time</dt><dd>{event.time}</dd></div> : null}
            {event.location ? <div><dt>Location</dt><dd>{event.location}</dd></div> : null}
            {event.organizer ? <div><dt>Organizer</dt><dd>{event.organizer}</dd></div> : null}
          </dl>
        }
      />

      <section className="section section-white">
        <div className="container article-layout">
          <article className="article-body">
            {event.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}

            <div className="story-links">
              {event.registrationUrl && event.status === "upcoming" ? (
                <a className="button button-dark" href={event.registrationUrl}>Register for event</a>
              ) : null}
              {event.relatedPage ? (
                <a className="text-link" href={event.relatedPage}>Related AYU information →</a>
              ) : null}
            </div>
          </article>

          <aside className="article-aside">
            <strong>AYU Events</strong>
            <p>Meetings, community activities and important AYU events.</p>
            <a className="text-link" href="/?page=events">← Back to Events</a>
          </aside>
        </div>
      </section>
    </>
  );
}
