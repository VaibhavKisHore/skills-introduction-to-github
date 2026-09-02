import { ArrowRight, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'

const EventCard = ({ event }) => {
  const [day, monthYear] = event.date.split(' ')

  return (
    <motion.article
      whileHover={{ y: -6 }}
      className="rounded-2xl border border-emerald/15 bg-white p-5 shadow-soft"
    >
      <div className="mb-4 flex items-start gap-4">
        <div className="rounded-xl bg-emerald px-4 py-3 text-center text-white">
          <p className="font-heading text-2xl font-bold leading-none">{day}</p>
          <p className="mt-1 text-xs">{monthYear}</p>
        </div>
        <div>
          <h3 className="font-heading text-xl font-bold text-forest">{event.title}</h3>
          <p className="mt-2 text-sm text-slate-600">{event.description}</p>
        </div>
      </div>
      <p className="mb-4 inline-flex items-center gap-2 text-sm text-slate-600">
        <MapPin size={15} /> {event.venue}
      </p>
      <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald">
        View details <ArrowRight size={15} />
      </a>
    </motion.article>
  )
}

export default EventCard
