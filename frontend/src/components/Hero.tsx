import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6 bg-gray-900">
      <h1 className="text-5xl md:text-6xl font-bold text-white max-w-3xl leading-tight">
        Emergency Help, <span className="text-red-500">Faster</span> Than Ever
      </h1>

      <p className="text-gray-400 text-lg mt-6 max-w-xl">
        LifeLink AI instantly connects patients, hospitals, ambulances, and police
        during emergencies — powered by AI, guided by speed.
      </p>

      <div className="flex gap-4 mt-8">
        <Link to="/emergency" className="bg-red-500 hover:bg-red-600 transition text-white font-medium px-6 py-3 rounded-lg">
          🚑 Emergency Help
        </Link>
        <a href="#" className="bg-gray-800 hover:bg-gray-700 transition text-white font-medium px-6 py-3 rounded-lg border border-gray-700">
          Learn More
        </a>
      </div>
    </section>
  )
}

export default Hero