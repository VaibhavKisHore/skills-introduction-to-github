import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
import { coreValues, principalMessage, schoolInformation, timeline } from '../data/schoolData'

const About = () => (
  <main className="mx-auto w-full max-w-7xl px-4 py-28 sm:px-6 lg:px-8">
    <SectionTitle
      eyebrow="About Garden Public School"
      title="Building Futures Through Quality Education"
      description="Garden Public School blends values, academics and innovation to prepare students for a dynamic world."
    />

    <section className="grid gap-8 md:grid-cols-2">
      <article className="rounded-2xl bg-white p-6 shadow-soft">
        <h2 className="font-heading text-2xl font-bold text-forest">School History</h2>
        <p className="mt-3 text-slate-700">
          Garden Public School began with a vision to provide meaningful education and has grown into a trusted learning institution focused on academic rigor and character.
        </p>
      </article>
      <article className="rounded-2xl bg-white p-6 shadow-soft">
        <h2 className="font-heading text-2xl font-bold text-forest">Mission & Vision</h2>
        <p className="mt-3 text-slate-700">
          Mission: To foster knowledgeable, compassionate and responsible learners.
        </p>
        <p className="mt-2 text-slate-700">
          Vision: To shape confident global citizens through holistic and future-ready education.
        </p>
      </article>
    </section>

    <section className="mt-12 rounded-2xl bg-white p-6 shadow-soft">
      <h2 className="font-heading text-2xl font-bold text-forest">Core Values</h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {coreValues.map((value) => (
          <p key={value} className="rounded-xl bg-lightGreen px-4 py-3 font-medium text-forest">
            {value}
          </p>
        ))}
      </div>
    </section>

    <section className="mt-12 grid gap-8 md:grid-cols-2">
      <article className="rounded-2xl bg-white p-6 shadow-soft">
        <h2 className="font-heading text-2xl font-bold text-forest">Principal Message</h2>
        <p className="mt-3 text-slate-700">{principalMessage}</p>
        <p className="mt-4 font-semibold text-forest">{schoolInformation.principal}</p>
      </article>
      <article className="rounded-2xl bg-white p-6 shadow-soft">
        <h2 className="font-heading text-2xl font-bold text-forest">Leadership Team</h2>
        <p className="mt-3 text-slate-700">
          Principal: {schoolInformation.principal}
          <br />
          Vice Principal: [Vice Principal Name]
          <br />
          Academic Coordinator: [Coordinator Name]
        </p>
      </article>
    </section>

    <section className="mt-12">
      <SectionTitle title="School Timeline" />
      <div className="space-y-3">
        {timeline.map((item) => (
          <motion.article
            key={item.year}
            whileHover={{ x: 4 }}
            className="rounded-2xl border border-emerald/15 bg-white p-5 shadow-soft"
          >
            <p className="font-heading text-xl font-bold text-emerald">{item.year}</p>
            <p className="text-slate-700">{item.event}</p>
          </motion.article>
        ))}
      </div>
    </section>
  </main>
)

export default About
