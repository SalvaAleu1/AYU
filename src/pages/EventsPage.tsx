import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import { constitutionalCalendar, events } from "../data/eventsData";

export default function EventsPage() {
  const upcomingEvents = events.filter((event) => event.status === "upcoming");
  const pastEvents = events.filter((event) => event.status === "past");

  return (
    <>
      <PageHero
        eyebrow="Events"
        title="AYU meetings, activities and institutional milestones."
        description="The events section brings together confirmed AYU activities and the constitutional meeting calendar that guides the Union's governance throughout each year."
        aside={
          <dl className="page-fact-list">
            <div><dt>Executive meetings</dt><dd>Quarterly</dd></div>
            <div><dt>General Assembly</dt><dd>Mid-year & end-year mandatory</dd></div>
            <div><dt>Extraordinary meetings</dt><dd>When required</dd></div>
          </dl>
        }
      />

      {upcomingEvents.length > 0 ? (
        <section className="section section-white">
          <div className="container">
            <SectionHeading eyebrow="Upcoming Events" title="Confirmed AYU activities ahead." />
            <div className="event-grid">
              {upcomingEvents.map((event) => (
                <a className="event-card" href={`/?page=event&slug=${event.slug}`} key={event.slug}>
                  <div className="event-date-block">
                    <time dateTime={event.startDate}>{event.displayDate}</time>
                  </div>
                  <div>
                    <span>{event.category}</span>
                    <h3>{event.title}</h3>
                    <p>{event.summary}</p>
                    {event.location ? <small>{event.location}</small> : null}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="section section-soft">
        <div className="container">
          <SectionHeading
            eyebrow="Constitutional Calendar"
            title="The Union's recurring governance calendar."
            description="AYU's Constitution establishes recurring meetings that support oversight, accountability and member participation."
          />
          <div className="calendar-grid">
            {constitutionalCalendar.map((item, index) => (
              <article className="calendar-card" key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{item.cadence}</strong>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {pastEvents.length > 0 ? (
        <section className="section section-white">
          <div className="container">
            <SectionHeading eyebrow="Event Archive" title="Institutional milestones and past AYU events." />
            <div className="event-grid">
              {pastEvents.map((event) => (
                <a className="event-card" href={`/?page=event&slug=${event.slug}`} key={event.slug}>
                  <div className="event-date-block">
                    <time dateTime={event.startDate}>{event.displayDate}</time>
                  </div>
                  <div>
                    <span>{event.category}</span>
                    <h3>{event.title}</h3>
                    <p>{event.summary}</p>
                    {event.location ? <small>{event.location}</small> : null}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="section section-dark">
        <div className="container event-governance-grid">
          <div>
            <p className="eyebrow eyebrow-light">Meeting Accountability</p>
            <h2 className="display-title display-title-light">AYU's meeting calendar supports participation and oversight.</h2>
          </div>
          <p>
            Executive Committee meetings are held quarterly. The General Assembly has mandatory mid-year and end-year meetings, and extraordinary meetings may be convened when necessary. The annual audit report is presented to the General Assembly at the year-end meeting.
          </p>
        </div>
      </section>
    </>
  );
}
