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
        title="AYU meetings, activities and important dates."
        description="This section brings together confirmed AYU events and the regular meeting calendar set by the Constitution."
        aside={
          <dl className="page-fact-list">
            <div><dt>Executive meetings</dt><dd>Held regularly</dd></div>
            <div><dt>General Assembly</dt><dd>Mid-year and end-year meetings</dd></div>
            <div><dt>Extraordinary meetings</dt><dd>Held when needed</dd></div>
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
            eyebrow="Meeting Calendar"
            title="Regular AYU meetings set by the Constitution."
            description="These meetings support member participation, oversight and reporting throughout the year."
          />
          <div className="calendar-grid">
            {constitutionalCalendar.map((item) => (
              <article className="calendar-card" key={item.title}>
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
            <SectionHeading eyebrow="Past Events" title="Previous AYU events and important dates." />
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
            <p className="eyebrow eyebrow-light">Meeting Responsibility</p>
            <h2 className="display-title display-title-light">Regular meetings help AYU stay accountable to its members.</h2>
          </div>
          <p>
            The Constitution provides for regular Executive Committee and General Assembly meetings, with additional meetings when necessary. Audit reports are also presented through the General Assembly.
          </p>
        </div>
      </section>
    </>
  );
}
