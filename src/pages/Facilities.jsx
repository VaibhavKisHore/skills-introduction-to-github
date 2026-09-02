import SectionTitle from '../components/SectionTitle'
import { facilities } from '../data/schoolData'

const extraFacilities = [
  'Physics Lab',
  'Chemistry Lab',
  'Biology Lab',
  'Security',
  'Medical Room',
  'Activity Rooms',
]

const Facilities = () => (
  <main className="mx-auto w-full max-w-7xl px-4 py-28 sm:px-6 lg:px-8">
    <SectionTitle
      eyebrow="Facilities"
      title="Modern Infrastructure for Holistic Growth"
      description="Designed to support academics, arts, sports and student well-being."
    />

    <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {facilities.map((facility) => (
        <article key={facility.title} className="overflow-hidden rounded-2xl bg-white shadow-soft">
          <img src={facility.image} alt={facility.title} loading="lazy" className="h-52 w-full object-cover" />
          <div className="p-5">
            <h2 className="font-heading text-xl font-bold text-forest">{facility.title}</h2>
            <p className="mt-2 text-sm text-slate-700">{facility.description}</p>
          </div>
        </article>
      ))}
    </section>

    <section className="mt-10 rounded-2xl bg-white p-6 shadow-soft">
      <h2 className="font-heading text-2xl font-bold text-forest">Additional Learning Spaces</h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {extraFacilities.map((item) => (
          <p key={item} className="rounded-xl bg-lightGreen px-4 py-3 text-sm font-medium text-forest">
            {item}
          </p>
        ))}
      </div>
    </section>
  </main>
)

export default Facilities
