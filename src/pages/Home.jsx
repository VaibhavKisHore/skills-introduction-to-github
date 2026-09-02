import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import {
  Bell,
  ChevronRight,
  Quote,
  Send,
} from 'lucide-react'
import Hero3D from '../components/Hero3D'
import SectionTitle from '../components/SectionTitle'
import StatCard from '../components/StatCard'
import FacilityCard from '../components/FacilityCard'
import AchievementCard from '../components/AchievementCard'
import EventCard from '../components/EventCard'
import TestimonialCard from '../components/TestimonialCard'
import AdmissionCTA from '../components/AdmissionCTA'
import {
  aboutHighlights,
  aboutPoints,
  academicPrograms,
  achievements,
  events,
  facilities,
  galleryImages,
  newsUpdates,
  principalMessage,
  schoolInformation,
  statistics,
  studentLife,
  testimonials,
  whyChooseUs,
  mapEmbed,
} from '../data/schoolData'

const Home = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [pauseTestimonials, setPauseTestimonials] = useState(false)
  const [lightbox, setLightbox] = useState(null)

  useEffect(() => {
    if (pauseTestimonials) return undefined
    const timer = setInterval(
      () => setActiveTestimonial((prev) => (prev + 1) % testimonials.length),
      4000
    )
    return () => clearInterval(timer)
  }, [pauseTestimonials])

  const testimonial = useMemo(() => testimonials[activeTestimonial], [activeTestimonial])

  return (
    <>
      <Hero3D />

      <main>
        <section className="bg-lightGreen/70 py-4">
          <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-center gap-3 px-4 text-sm text-forest sm:justify-between sm:px-6 lg:px-8">
            <p className="inline-flex items-center gap-2 font-medium">
              <Bell size={16} /> Latest Announcement: Admissions are now open for the 2026–27 academic session.
            </p>
            <a href="/admissions" className="inline-flex items-center gap-1 font-semibold text-emerald">
              View Details <ChevronRight size={14} />
            </a>
          </div>
        </section>

        <section className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:px-8">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80"
              alt="Garden Public School campus"
              loading="lazy"
              className="h-full min-h-[360px] w-full rounded-3xl object-cover"
            />
            <div className="absolute -bottom-6 left-6 rounded-2xl bg-white p-5 shadow-soft">
              <p className="font-heading text-3xl font-bold text-forest">25+</p>
              <p className="text-sm text-slate-600">Years of educational excellence</p>
            </div>
          </div>
          <div>
            <SectionTitle
              eyebrow="About Garden Public School"
              title="Education That Builds Knowledge, Character & Confidence"
              description="Our school nurtures academic excellence, character building, creativity, leadership, discipline, technology-based education and holistic development."
            />
            <div className="space-y-3">
              {aboutPoints.map((point, i) => {
                const Icon = aboutHighlights[i]
                return (
                  <p key={point} className="inline-flex w-full items-center gap-3 rounded-xl bg-white p-3 text-sm shadow-soft">
                    <Icon size={18} className="text-emerald" /> {point}
                  </p>
                )
              })}
            </div>
            <a
              href="/about"
              className="mt-6 inline-flex rounded-full bg-emerald px-6 py-3 text-sm font-semibold text-white hover:bg-forest"
            >
              Discover Our Story
            </a>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle centered title="School Statistics" description="Trusted by families for quality learning and student growth." />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {statistics.map((stat) => (
                <StatCard key={stat.label} {...stat} />
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionTitle centered title="Why Parents Choose Garden Public School" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item) => (
              <motion.article
                key={item.title}
                whileHover={{ y: -6 }}
                className="rounded-2xl border border-emerald/15 bg-white p-6 shadow-soft"
              >
                <item.icon className="text-emerald" />
                <h3 className="mt-3 font-heading text-xl font-bold text-forest">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.description}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle centered title="Learning for Every Stage" />
            <div className="flex snap-x gap-4 overflow-x-auto pb-2">
              {academicPrograms.map((program) => (
                <article
                  key={program.title}
                  className="min-w-[260px] snap-start rounded-2xl border border-emerald/10 bg-offWhite p-5 shadow-soft"
                >
                  <program.icon className="text-emerald" />
                  <h3 className="mt-3 font-heading text-xl font-bold text-forest">{program.title}</h3>
                  <p className="text-sm font-medium text-emerald">{program.range}</p>
                  <p className="mt-2 text-sm text-slate-600">{program.description}</p>
                  <a href="/academics" className="mt-4 inline-flex text-sm font-semibold text-emerald">
                    Learn More
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-16 sm:px-6 md:grid-cols-[280px,1fr] lg:px-8">
          <div className="rounded-2xl bg-lightGreen p-5">
            <img
              src="https://images.unsplash.com/photo-1580894894513-f6fdfd5ea40c?auto=format&fit=crop&w=800&q=80"
              alt="Principal portrait placeholder"
              loading="lazy"
              className="h-72 w-full rounded-xl object-cover"
            />
          </div>
          <div className="rounded-2xl bg-white p-8 shadow-soft">
            <Quote className="text-gold" />
            <h2 className="mt-3 font-heading text-3xl font-bold text-forest">A Message From Our Principal</h2>
            <p className="mt-4 text-slate-700">{principalMessage}</p>
            <p className="mt-6 font-heading text-lg font-bold text-forest">{schoolInformation.principal}</p>
            <p className="text-sm text-slate-600">Principal, Garden Public School</p>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle centered title="Facilities" />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {facilities.map((facility) => (
                <FacilityCard key={facility.title} {...facility} />
              ))}
            </div>
            <div className="mt-8 text-center">
              <a href="/facilities" className="rounded-full bg-emerald px-6 py-3 font-semibold text-white hover:bg-forest">
                Explore All Facilities
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionTitle centered title="Student Life" description="A vibrant campus where every learner explores talents and leadership." />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {studentLife.map((life, i) => (
              <article key={life} className="rounded-2xl bg-white p-6 shadow-soft">
                <p className="text-xs font-semibold text-gold">0{i + 1}</p>
                <h3 className="mt-2 font-heading text-xl font-bold text-forest">{life}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle centered eyebrow="Celebrating Excellence" title="Achievements" />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {achievements.map((item) => (
                <AchievementCard key={item.title} item={item} />
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionTitle centered title="Upcoming Events" />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {events.map((event) => (
              <EventCard key={event.title} event={event} />
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <AdmissionCTA />
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
            <SectionTitle centered title="Parent Testimonials" />
            <div onMouseEnter={() => setPauseTestimonials(true)} onMouseLeave={() => setPauseTestimonials(false)}>
              <TestimonialCard testimonial={testimonial} />
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionTitle centered title="School Gallery" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {galleryImages.slice(0, 8).map((img, i) => (
              <button
                key={`${img.src}-${i}`}
                onClick={() => setLightbox(img.src)}
                className="group relative overflow-hidden rounded-2xl"
              >
                <img src={img.src} alt={img.category} loading="lazy" className="h-56 w-full object-cover transition duration-500 group-hover:scale-105" />
                <span className="absolute inset-0 flex items-center justify-center bg-black/45 text-sm font-semibold text-white opacity-0 transition group-hover:opacity-100">
                  View Gallery
                </span>
              </button>
            ))}
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle centered title="News & Updates" />
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {newsUpdates.map((news) => (
                <article key={news.title} className="overflow-hidden rounded-2xl bg-offWhite shadow-soft">
                  <img src={news.image} alt={news.title} loading="lazy" className="h-44 w-full object-cover" />
                  <div className="p-5">
                    <p className="text-xs font-semibold text-emerald">{news.category} • {news.date}</p>
                    <h3 className="mt-2 font-heading text-lg font-bold text-forest">{news.title}</h3>
                    <p className="mt-2 text-sm text-slate-600">{news.summary}</p>
                    <a href="#" className="mt-3 inline-flex text-sm font-semibold text-emerald">Read More</a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-16 sm:px-6 md:grid-cols-2 lg:px-8">
          <div className="rounded-2xl bg-white p-6 shadow-soft">
            <SectionTitle title="Contact & Admission Enquiry" />
            <div className="space-y-2 text-sm text-slate-700">
              <p><strong>{schoolInformation.name}</strong></p>
              <p>{schoolInformation.address}</p>
              <p>{schoolInformation.phone}</p>
              <p>{schoolInformation.email}</p>
              <p>Monday – Saturday | 8:00 AM – 4:00 PM</p>
            </div>
          </div>
          <form className="rounded-2xl bg-white p-6 shadow-soft">
            <div className="grid gap-4">
              {['Parent Name', 'Student Name', 'Phone', 'Email', 'Class Applying For'].map((field) => (
                <input
                  key={field}
                  type={field === 'Email' ? 'email' : 'text'}
                  placeholder={field}
                  required
                  aria-label={field}
                  className="rounded-xl border border-slate-200 px-4 py-3"
                />
              ))}
              <textarea
                placeholder="Message"
                rows="4"
                required
                aria-label="Message"
                className="rounded-xl border border-slate-200 px-4 py-3"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald px-6 py-3 font-semibold text-white hover:bg-forest"
              >
                Send Enquiry <Send size={16} />
              </button>
            </div>
          </form>
        </section>

        <section className="bg-white pb-16">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle centered title="Visit Our Campus" />
            <div className="overflow-hidden rounded-2xl shadow-soft">
              <iframe
                title="Garden Public School map placeholder"
                src={mapEmbed}
                loading="lazy"
                className="h-80 w-full border-0"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </main>

      {lightbox ? (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/85 p-4" role="dialog" aria-modal="true">
          <button
            onClick={() => setLightbox(null)}
            className="absolute right-4 top-4 rounded-full bg-white px-3 py-1 text-sm font-medium text-black"
          >
            Close
          </button>
          <img src={lightbox} alt="Selected gallery" className="max-h-[90vh] w-full max-w-5xl rounded-2xl object-cover" />
        </div>
      ) : null}
    </>
  )
}

export default Home
