import SectionTitle from '../components/SectionTitle'
import { academicPrograms } from '../data/schoolData'

const Academics = () => (
  <main className="mx-auto w-full max-w-7xl px-4 py-28 sm:px-6 lg:px-8">
    <SectionTitle
      eyebrow="Academics"
      title="Curriculum for Every Learning Stage"
      description="Our curriculum supports concept mastery, values, critical thinking and digital-age skills."
    />

    <section className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {academicPrograms.map((program) => (
        <article key={program.title} className="rounded-2xl bg-white p-6 shadow-soft">
          <program.icon className="text-emerald" />
          <h2 className="mt-3 font-heading text-2xl font-bold text-forest">{program.title}</h2>
          <p className="font-medium text-emerald">{program.range}</p>
          <p className="mt-3 text-slate-700">{program.description}</p>
        </article>
      ))}
    </section>

    <section className="mt-10 grid gap-5 md:grid-cols-2">
      {[
        ['Teaching Methodology', 'Experiential and inquiry-based teaching with active participation.'],
        ['Assessment System', 'Continuous assessment with projects, tests and observation-driven feedback.'],
        ['Digital Learning', 'Blended learning methods with classroom technology and guided digital resources.'],
        ['Academic Calendar', 'Structured term-wise calendar with examinations and co-curricular balance.'],
        ['Faculty Section', 'Experienced and trained faculty dedicated to student growth and care.'],
      ].map(([title, text]) => (
        <article key={title} className="rounded-2xl bg-white p-6 shadow-soft">
          <h3 className="font-heading text-xl font-bold text-forest">{title}</h3>
          <p className="mt-2 text-slate-700">{text}</p>
        </article>
      ))}
    </section>
  </main>
)

export default Academics
