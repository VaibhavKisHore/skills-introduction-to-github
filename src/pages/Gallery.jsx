import { useMemo, useState } from 'react'
import SectionTitle from '../components/SectionTitle'
import { galleryImages } from '../data/schoolData'

const filters = ['All', 'Campus', 'Events', 'Sports', 'Academics', 'Cultural', 'Activities']

const Gallery = () => {
  const [filter, setFilter] = useState('All')
  const [lightbox, setLightbox] = useState(null)

  const filtered = useMemo(() => {
    if (filter === 'All') return galleryImages
    return galleryImages.filter((img) => img.category.includes(filter))
  }, [filter])

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-28 sm:px-6 lg:px-8">
      <SectionTitle eyebrow="Gallery" title="School Moments" description="Explore campus life, academics, sports and celebrations." />

      <section className="mb-8 flex flex-wrap gap-2">
        {filters.map((item) => (
          <button
            key={item}
            onClick={() => setFilter(item)}
            className={`rounded-full px-4 py-2 text-sm font-medium ${
              filter === item ? 'bg-emerald text-white' : 'bg-white text-slate-700'
            }`}
          >
            {item}
          </button>
        ))}
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {filtered.map((img, i) => (
          <button key={`${img.src}-${i}`} className="overflow-hidden rounded-2xl" onClick={() => setLightbox(img.src)}>
            <img src={img.src} alt={img.category} loading="lazy" className="h-56 w-full object-cover transition hover:scale-105" />
          </button>
        ))}
      </section>

      {lightbox ? (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/90 p-4" role="dialog" aria-modal="true">
          <button onClick={() => setLightbox(null)} className="absolute right-4 top-4 rounded-full bg-white px-3 py-1 text-sm">
            Close
          </button>
          <img src={lightbox} alt="Gallery preview" className="max-h-[90vh] w-full max-w-5xl rounded-2xl object-cover" />
        </div>
      ) : null}
    </main>
  )
}

export default Gallery
