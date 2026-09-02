import { Suspense, lazy, useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { MessageCircle, School } from 'lucide-react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import LoadingScreen from './components/LoadingScreen'
import { schoolInformation } from './data/schoolData'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Academics = lazy(() => import('./pages/Academics'))
const Admissions = lazy(() => import('./pages/Admissions'))
const Facilities = lazy(() => import('./pages/Facilities'))
const Gallery = lazy(() => import('./pages/Gallery'))
const Events = lazy(() => import('./pages/Events'))
const Contact = lazy(() => import('./pages/Contact'))

const App = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    document.title = 'Garden Public School | Learn, Grow & Lead'

    const meta = document.querySelector('meta[name="description"]')
    const content =
      'Garden Public School provides quality education, modern facilities, experienced teachers and holistic development for students.'

    if (meta) meta.setAttribute('content', content)
    else {
      const newMeta = document.createElement('meta')
      newMeta.name = 'description'
      newMeta.content = content
      document.head.appendChild(newMeta)
    }

    const handleScroll = () => {
      const scrollTop = window.scrollY
      const height = document.documentElement.scrollHeight - window.innerHeight
      setProgress(height > 0 ? (scrollTop / height) * 100 : 0)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen">
      <div className="fixed left-0 top-0 z-[60] h-1 bg-gold" style={{ width: `${progress}%` }} />
      <Navbar />
      <ScrollToTop />

      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>

      <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
        <a
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-emerald px-4 py-3 text-sm font-semibold text-white shadow-soft hover:bg-forest"
          aria-label="Admission enquiry"
        >
          <School size={16} /> Enquiry
        </a>
        <a
          href={`https://wa.me/${schoolInformation.whatsappNumber}?text=${encodeURIComponent(
            'Hello Garden Public School, I would like to know more about admissions.'
          )}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-soft"
          aria-label="WhatsApp admission enquiry"
        >
          <MessageCircle size={16} /> WhatsApp
        </a>
      </div>

      <Footer />
    </div>
  )
}

export default App
