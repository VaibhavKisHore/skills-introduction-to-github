import { motion } from 'framer-motion'

const SectionTitle = ({ eyebrow, title, description, centered = false }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.25 }}
    transition={{ duration: 0.5 }}
    className={`mb-10 ${centered ? 'text-center' : ''}`}
  >
    {eyebrow ? (
      <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-emerald">
        {eyebrow}
      </p>
    ) : null}
    <h2 className="font-heading text-3xl font-bold text-forest md:text-4xl">{title}</h2>
    {description ? (
      <p className="mt-3 max-w-3xl text-base text-slate-600 md:text-lg">{description}</p>
    ) : null}
  </motion.div>
)

export default SectionTitle
