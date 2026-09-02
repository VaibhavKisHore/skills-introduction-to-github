import { useState } from 'react'
import SectionTitle from '../components/SectionTitle'
import { mapEmbed, schoolInformation } from '../data/schoolData'

const Contact = () => {
  const [form, setForm] = useState({
    parentName: '',
    studentName: '',
    phone: '',
    email: '',
    classApplying: '',
    message: '',
  })
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const nextErrors = {}

    if (!form.parentName.trim()) nextErrors.parentName = 'Parent name is required'
    if (!form.studentName.trim()) nextErrors.studentName = 'Student name is required'
    if (!/^[0-9+\-\s]{10,}$/.test(form.phone)) nextErrors.phone = 'Enter a valid phone number'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = 'Enter a valid email'
    if (!form.classApplying.trim()) nextErrors.classApplying = 'Class is required'
    if (!form.message.trim()) nextErrors.message = 'Message is required'

    setErrors(nextErrors)
    if (Object.keys(nextErrors).length === 0) {
      alert('Enquiry submitted successfully.')
      setForm({ parentName: '', studentName: '', phone: '', email: '', classApplying: '', message: '' })
    }
  }

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-28 sm:px-6 lg:px-8">
      <SectionTitle eyebrow="Contact" title="Get in Touch" description="For admissions and school enquiries, contact us using the form below." />

      <section className="grid gap-8 md:grid-cols-2">
        <article className="rounded-2xl bg-white p-6 shadow-soft">
          <h2 className="font-heading text-2xl font-bold text-forest">Contact Information</h2>
          <div className="mt-4 space-y-2 text-slate-700">
            <p><strong>{schoolInformation.name}</strong></p>
            <p>Address: {schoolInformation.address}</p>
            <p>Phone: {schoolInformation.phone}</p>
            <p>Email: {schoolInformation.email}</p>
            <p>Office Hours: Monday – Saturday, 8:00 AM – 4:00 PM</p>
          </div>

          <div className="mt-6 rounded-xl bg-lightGreen p-4 text-sm text-forest">
            <p className="font-semibold">FAQ</p>
            <p className="mt-1">Admissions are open for 2026–27. For visits, please book an appointment.</p>
          </div>
        </article>

        <form onSubmit={handleSubmit} noValidate className="rounded-2xl bg-white p-6 shadow-soft">
          <div className="grid gap-4">
            {[
              ['parentName', 'Parent Name'],
              ['studentName', 'Student Name'],
              ['phone', 'Phone'],
              ['email', 'Email'],
              ['classApplying', 'Class Applying For'],
            ].map(([name, label]) => (
              <div key={name}>
                <input
                  type={name === 'email' ? 'email' : 'text'}
                  name={name}
                  value={form[name]}
                  onChange={handleChange}
                  placeholder={label}
                  aria-label={label}
                  aria-invalid={errors[name] ? 'true' : 'false'}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3"
                />
                {errors[name] ? <p className="mt-1 text-xs text-red-600">{errors[name]}</p> : null}
              </div>
            ))}
            <div>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Message"
                rows="4"
                aria-label="Message"
                aria-invalid={errors.message ? 'true' : 'false'}
                className="w-full rounded-xl border border-slate-300 px-4 py-3"
              />
              {errors.message ? <p className="mt-1 text-xs text-red-600">{errors.message}</p> : null}
            </div>
            <button type="submit" className="rounded-xl bg-emerald px-6 py-3 font-semibold text-white hover:bg-forest">
              Send Enquiry
            </button>
          </div>
        </form>
      </section>

      <section className="mt-10 overflow-hidden rounded-2xl shadow-soft">
        <iframe
          title="School location map"
          src={mapEmbed}
          loading="lazy"
          className="h-80 w-full border-0"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </main>
  )
}

export default Contact
