const incidents = [
  { type: "Theft", location: "5th Cross, Koramangala", time: "3 mins ago", status: "New" },
  { type: "Harassment", location: "Brigade Road", time: "20 mins ago", status: "In Progress" },
]

function PoliceDashboard() {
  return (
    <section className="min-h-[80vh] px-6 py-16 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-900 mb-8">Police Dashboard</h1>

        <div className="flex flex-col gap-4">
          {incidents.map((incident, index) => (
            <div key={index} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex items-center justify-between">
              <div>
                <div className="font-semibold text-slate-900">{incident.type}</div>
                <div className="text-sm text-slate-500">📍 {incident.location} · {incident.time}</div>
              </div>

              <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                incident.status === "New" ? "bg-red-100 text-red-700" : "bg-blue-100 text-blue-700"
              }`}>
                {incident.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PoliceDashboard