const features = [
  {
    icon: "🤖",
    title: "AI Health Assistant",
    description: "Describe your symptoms and get instant AI-powered guidance on what to do next.",
  },
  {
    icon: "🚑",
    title: "Emergency Response",
    description: "One tap connects you to the nearest hospital and dispatches an ambulance instantly.",
  },
  {
    icon: "🏥",
    title: "Smart Hospital Matching",
    description: "AI recommends the best hospital based on your needs, not just the nearest one.",
  },
  {
    icon: "📍",
    title: "Live Tracking",
    description: "Track your ambulance and emergency status in real time, every step of the way.",
  },
]

function Features() {
  return (
    <section className="bg-gray-900 px-6 py-20">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Built for Every Second That Matters
        </h2>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          LifeLink AI combines intelligence and speed to make emergencies less chaotic.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-red-500 transition"
          >
            <div className="text-3xl mb-4">{feature.icon}</div>
            <h3 className="text-white font-semibold text-lg mb-2">{feature.title}</h3>
            <p className="text-gray-400 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features