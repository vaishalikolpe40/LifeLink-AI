function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 px-6 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div className="text-xl font-bold text-white mb-3">
            LifeLink <span className="text-red-500">AI</span>
          </div>
          <p className="text-gray-400 text-sm max-w-xs">
            AI-powered emergency healthcare and response coordination, built to save time when it matters most.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="text-gray-400 text-sm space-y-2">
            <li><a href="#" className="hover:text-white transition">Home</a></li>
            <li><a href="#" className="hover:text-white transition">About</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Emergency</h4>
          <p className="text-gray-400 text-sm">
            If this is a life-threatening emergency, call your local emergency number immediately.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
        © 2026 LifeLink AI. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer