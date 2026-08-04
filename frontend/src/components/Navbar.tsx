import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="w-full px-8 py-4 flex items-center justify-between bg-gray-900 border-b border-gray-800">
      <Link to="/" className="text-xl font-bold text-white">
        LifeLink <span className="text-red-500">AI</span>
      </Link>

      <div className="flex gap-6 text-sm text-gray-300">
        <Link to="/" className="hover:text-white transition">Home</Link>
        <a href="#" className="hover:text-white transition">About</a>
        <a href="#" className="hover:text-white transition">Contact</a>
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