import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6 bg-slate-50">
      <h1 className="text-5xl md:text-6xl font-bold text-slate-900 max-w-3xl leading-tight">
        Emergency Help, <span className="text-blue-600">Faster</span> Than Ever
      </h1>

      <p className="text-slate-600 text-lg mt-6 max-w-xl">
        LifeLink AI instantly connects patients, hospitals, ambulances, and police
        during emergencies — powered by AI, guided by speed.
      </p>

      <div className="flex gap-4 mt-8">
        <Link to="/emergency" className="bg-red-500 hover:bg-red-600 transition text-white font-medium px-6 py-3 rounded-lg shadow-sm">
          🚑 Emergency Help
        </Link>
        <a href="#" className="bg-white hover:bg-slate-100 transition text-slate-700 font-medium px-6 py-3 rounded-lg border border-slate-300">
          Learn More
        </a>
      </div>
    </section>
  )
}

export default Hero