import { BriefcaseBusiness, Camera, Globe, Play } from 'lucide-react'
import { Link } from 'react-router-dom'
import { footerAcademics, navigationItems, schoolInformation } from '../data/schoolData'

const Footer = () => (
  <footer className="bg-forest text-white">
    <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
      <div>
        <div className="mb-3 flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald font-heading font-bold">
            G
          </div>
          <p className="font-heading text-xl font-bold">{schoolInformation.name}</p>
        </div>
        <p className="text-sm text-white/80">
          A welcoming and future-ready school focused on strong academics, values and holistic development.
        </p>
      </div>

      <div>
        <h3 className="mb-3 font-heading text-lg font-bold">Quick Links</h3>
        <ul className="space-y-2 text-sm text-white/85">
          {navigationItems.slice(1, 6).map((item) => (
            <li key={item.path}>
              <Link to={item.path} className="hover:text-gold">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="mb-3 font-heading text-lg font-bold">Academics</h3>
        <ul className="space-y-2 text-sm text-white/85">
          {footerAcademics.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="mb-3 font-heading text-lg font-bold">Contact Details</h3>
        <ul className="space-y-2 text-sm text-white/85">
          <li>{schoolInformation.address}</li>
          <li>{schoolInformation.phone}</li>
          <li>{schoolInformation.email}</li>
        </ul>
        <div className="mt-4 flex gap-3">
          {[Globe, Camera, Play, BriefcaseBusiness].map((Icon, i) => (
            <a
              key={i}
              href="#"
              aria-label="Social link"
              className="rounded-full border border-white/20 p-2 hover:border-gold hover:text-gold"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </div>

    <div className="border-t border-white/10">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 py-5 text-xs text-white/80 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>© 2026 Garden Public School. All Rights Reserved.</p>
        <div className="flex gap-4">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
