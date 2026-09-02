import { CheckCircle2 } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'

const steps = ['Submit Enquiry', 'School Interaction', 'Document Verification', 'Admission Confirmation']

const Admissions = () => (
  <main className="mx-auto w-full max-w-7xl px-4 py-28 sm:px-6 lg:px-8">
    <SectionTitle
      eyebrow="Admissions 2026–27"
      title="Join Garden Public School"
      description="A smooth, parent-friendly admission journey for the 2026–27 session."
    />

    <section className="grid gap-5 md:grid-cols-2">
      <article className="rounded-2xl bg-white p-6 shadow-soft">
        <h2 className="font-heading text-2xl font-bold text-forest">Admission Process</h2>
        <div className="mt-4 space-y-3">
          {steps.map((step, i) => (
            <p key={step} className="inline-flex items-center gap-3 rounded-xl bg-lightGreen px-4 py-3 font-medium text-forest">
              <CheckCircle2 size={18} className="text-emerald" /> Step {i + 1}: {step}
            </p>
          ))}
        </div>
      </article>
      <article className="rounded-2xl bg-white p-6 shadow-soft">
        <h2 className="font-heading text-2xl font-bold text-forest">Eligibility & Documents</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
          <li>Age-appropriate eligibility as per class level.</li>
          <li>Birth certificate, photographs and previous school records.</li>
          <li>Address and identity proof of parent/guardian.</li>
          <li>Fee structure: [Fee Structure Placeholder].</li>
        </ul>
      </article>
    </section>

    <section className="mt-10 grid gap-5 md:grid-cols-2">
      <article className="rounded-2xl bg-white p-6 shadow-soft">
        <h3 className="font-heading text-xl font-bold text-forest">Admission Enquiry</h3>
        <p className="mt-2 text-slate-700">
          For admission support, please use the contact form on the Contact page.
        </p>
        <a href="/contact" className="mt-4 inline-flex rounded-full bg-emerald px-6 py-3 font-semibold text-white">
          Apply Now
        </a>
      </article>
      <article className="rounded-2xl bg-white p-6 shadow-soft">
        <h3 className="font-heading text-xl font-bold text-forest">FAQs</h3>
        <ul className="mt-3 space-y-3 text-sm text-slate-700">
          <li><strong>When do admissions open?</strong> Admissions open for session 2026–27.</li>
          <li><strong>Is transport available?</strong> Yes, subject to route availability.</li>
          <li><strong>Can we visit campus?</strong> Yes, by prior appointment.</li>
        </ul>
      </article>
    </section>
  </main>
)

export default Admissions
