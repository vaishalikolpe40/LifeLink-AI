import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="w-full px-8 py-4 flex items-center justify-between bg-white border-b border-slate-200 sticky top-0 z-50">
      <Link to="/" className="text-xl font-bold text-slate-900">
        LifeLink <span className="text-blue-600">AI</span>
      </Link>

      <div className="flex gap-6 text-sm text-slate-600">
        <Link to="/" className="hover:text-blue-600 transition">Home</Link>
        <a href="#" className="hover:text-blue-600 transition">About</a>
        <a href="#" className="hover:text-blue-600 transition">Contact</a>
      </div>

      <Link
        to="/emergency"
        className="bg-red-500 hover:bg-red-600 transition text-white text-sm font-medium px-4 py-2 rounded-lg"
      >
        Get Started
      </Link>
    </nav>
  )
}

export default Navbar