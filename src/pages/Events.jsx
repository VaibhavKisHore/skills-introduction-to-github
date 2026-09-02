import SectionTitle from '../components/SectionTitle'
import { events } from '../data/schoolData'

const Events = () => (
  <main className="mx-auto w-full max-w-7xl px-4 py-28 sm:px-6 lg:px-8">
    <SectionTitle eyebrow="Events" title="Upcoming & Past Events" description="Stay informed about school activities and celebrations." />

    <section>
      <h2 className="mb-4 font-heading text-2xl font-bold text-forest">Upcoming Events</h2>
      <div className="grid gap-5 md:grid-cols-2">
        {events.map((event) => (
          <article key={event.title} className="overflow-hidden rounded-2xl bg-white shadow-soft">
            <img
              src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80"
              alt={event.title}
              loading="lazy"
              className="h-44 w-full object-cover"
            />
            <div className="p-5">
              <p className="text-sm font-semibold text-emerald">{event.date}</p>
              <h3 className="mt-1 font-heading text-xl font-bold text-forest">{event.title}</h3>
              <p className="mt-2 text-sm text-slate-700">{event.description}</p>
              <p className="mt-2 text-xs text-slate-500">Venue: {event.venue}</p>
            </div>
          </article>
        ))}
      </div>
    </section>

    <section className="mt-12 grid gap-5 md:grid-cols-2">
      <article className="rounded-2xl bg-white p-6 shadow-soft">
        <h2 className="font-heading text-2xl font-bold text-forest">Past Events</h2>
        <p className="mt-2 text-slate-700">
          Archive of past academic, sports and cultural programs with highlights and memories.
        </p>
      </article>
      <article className="rounded-2xl bg-white p-6 shadow-soft">
        <h2 className="font-heading text-2xl font-bold text-forest">School Calendar</h2>
        <p className="mt-2 text-slate-700">
          Academic year calendar with examination, holiday and activity milestones. [Calendar Placeholder]
        </p>
      </article>
    </section>
  </main>
)

export default Events
