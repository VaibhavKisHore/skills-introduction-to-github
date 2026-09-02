import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const StatCard = ({ value, suffix, label }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.4 })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let start = 0
    const step = Math.max(1, Math.ceil(value / 30))
    const id = setInterval(() => {
      start += step
      if (start >= value) {
        setCount(value)
        clearInterval(id)
      } else {
        setCount(start)
      }
    }, 35)

    return () => clearInterval(id)
  }, [inView, value])

  return (
    <motion.article
      ref={ref}
      whileHover={{ y: -6 }}
      className="rounded-2xl border border-emerald/10 bg-white p-6 text-center shadow-soft"
    >
      <p className="font-heading text-4xl font-extrabold text-forest">
        {count}
        {suffix}
      </p>
      <p className="mt-2 text-sm font-medium text-slate-600">{label}</p>
    </motion.article>
  )
}

export default StatCard
