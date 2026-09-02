import { motion } from 'framer-motion'

const FacilityCard = ({ title, description, image }) => (
  <motion.article
    whileHover={{ y: -6 }}
    className="group relative overflow-hidden rounded-2xl"
  >
    <img
      src={image}
      alt={title}
      loading="lazy"
      className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
    <div className="absolute bottom-0 p-5 text-white">
      <h3 className="font-heading text-xl font-bold">{title}</h3>
      <p className="mt-1 text-sm text-white/90">{description}</p>
    </div>
  </motion.article>
)

export default FacilityCard
