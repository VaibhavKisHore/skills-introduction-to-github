import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { navigationItems, schoolInformation } from '../data/schoolData'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => setOpen(false), [location.pathname])

  const transparent = location.pathname === '/' && !scrolled

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        transparent ? 'bg-transparent text-white' : 'bg-white/95 text-darkText shadow-soft backdrop-blur'
      }`}
      aria-label="Main navigation"
    >
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald font-heading font-extrabold text-white">
            G
          </div>
          <div>
            <p className="font-heading text-lg font-bold">{schoolInformation.name}</p>
            <p className={`text-xs ${transparent ? 'text-white/80' : 'text-slate-500'}`}>
              {schoolInformation.tagline}
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navigationItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-medium transition ${isActive ? 'text-emerald' : transparent ? 'text-white hover:text-gold' : 'hover:text-emerald'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/admissions"
            className="rounded-full bg-emerald px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-forest"
          >
            Apply for Admission
          </Link>
        </div>

        <button
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          className="rounded-md p-2 lg:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-emerald/10 bg-white px-4 pb-4 pt-2 text-darkText lg:hidden">
          {navigationItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `block rounded-lg px-3 py-2 text-sm font-medium ${isActive ? 'bg-lightGreen text-emerald' : 'hover:bg-slate-50'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/admissions"
            className="mt-3 block rounded-lg bg-emerald px-3 py-2 text-center text-sm font-semibold text-white"
          >
            Apply for Admission
          </Link>
        </div>
      ) : null}
    </nav>
  )
}

export default Navbar
