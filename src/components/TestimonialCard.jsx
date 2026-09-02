import { Star } from 'lucide-react'

const TestimonialCard = ({ testimonial }) => (
  <article className="rounded-2xl bg-white p-6 shadow-soft">
    <div className="mb-4 flex items-center gap-4">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-lightGreen font-semibold text-emerald">
        {testimonial.name.charAt(0)}
      </div>
      <div>
        <h3 className="font-heading text-lg font-bold text-forest">{testimonial.name}</h3>
        <p className="text-sm text-slate-600">{testimonial.class}</p>
      </div>
    </div>
    <div className="mb-3 flex gap-1">
      {Array.from({ length: testimonial.rating }).map((_, i) => (
        <Star key={i} size={16} className="fill-gold text-gold" />
      ))}
    </div>
    <p className="text-slate-700">“{testimonial.quote}”</p>
  </article>
)

export default TestimonialCard
