import { useState } from 'react'

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="min-h-[80vh] flex items-center justify-center px-6 bg-slate-50 py-16">
      <div className="max-w-md w-full bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
        {submitted ? (
          <div className="text-center">
            <div className="text-4xl mb-3">✅</div>
            <h1 className="text-xl font-bold text-slate-900">Message Sent</h1>
            <p className="text-slate-600 mt-2">We'll get back to you shortly.</p>
          </div>
        ) : (
          <>
            <h1 className="text-2xl font-bold text-slate-900 mb-2">Contact Us</h1>
            <p className="text-slate-600 mb-6">Have a question? Send us a message.</p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 transition text-white font-medium py-2.5 rounded-lg mt-2"
              >
                Send Message
              </button>
            </form>
          </>
        )}
      </div>
    </section>
  )
}

export default Contact