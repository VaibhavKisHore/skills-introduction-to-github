import { Link } from 'react-router-dom'

const AdmissionCTA = () => (
  <section className="relative overflow-hidden rounded-3xl bg-hero-grad px-6 py-14 text-white md:px-14">
    <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10" />
    <div className="absolute -bottom-14 left-1/4 h-44 w-44 rounded-full bg-gold/20" />
    <div className="relative">
      <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-lightGreen">
        Limited seats available
      </p>
      <h2 className="font-heading text-3xl font-bold md:text-4xl">
        Give Your Child the Foundation for a Bright Future
      </h2>
      <p className="mt-4 max-w-3xl text-white/90">
        Admissions for the 2026–27 academic session are now open at Garden Public School.
      </p>
      <div className="mt-7 flex flex-wrap gap-4">
        <Link
          to="/admissions"
          className="rounded-full bg-gold px-6 py-3 font-semibold text-forest transition hover:brightness-95"
        >
          Apply Now
        </Link>
        <Link
          to="/contact"
          className="rounded-full border border-white/80 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
        >
          Admission Enquiry
        </Link>
      </div>
    </div>
  </section>
)

export default AdmissionCTA
