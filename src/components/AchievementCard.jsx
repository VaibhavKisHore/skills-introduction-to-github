import { Trophy } from 'lucide-react'
import { motion } from 'framer-motion'

const AchievementCard = ({ item }) => (
  <motion.article
    whileHover={{ y: -6 }}
    className="overflow-hidden rounded-2xl bg-white shadow-soft"
  >
    <img src={item.image} alt={item.title} loading="lazy" className="h-48 w-full object-cover" />
    <div className="p-5">
      <p className="inline-flex items-center gap-2 rounded-full bg-lightGreen px-3 py-1 text-xs font-semibold text-emerald">
        <Trophy size={14} /> {item.year}
      </p>
      <h3 className="mt-3 font-heading text-xl font-bold text-forest">{item.title}</h3>
      <p className="mt-2 text-sm text-slate-600">{item.description}</p>
    </div>
  </motion.article>
)

export default AchievementCard
