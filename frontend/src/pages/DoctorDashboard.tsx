import { useState } from 'react'

const incomingAlerts = [
  { patient: "Unknown Patient", type: "Chest Pain", eta: "5 mins", severity: "High" },
  { patient: "Unknown Patient", type: "Snake Bite", eta: "12 mins", severity: "Medium" },
]

function DoctorDashboard() {
  const [available, setAvailable] = useState(true)

  return (
    <section className="min-h-[80vh] px-6 py-16 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-slate-900">Doctor Dashboard</h1>

          <button
            onClick={() => setAvailable(!available)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
              available ? "bg-green-100 text-green-700" : "bg-slate-200 text-slate-600"
            }`}
          >
            {available ? "🟢 Available" : "⚪ Unavailable"}
          </button>
        </div>

        <h2 className="font-semibold text-slate-900 mb-4">Incoming Emergency Alerts</h2>

        <div className="flex flex-col gap-4">
          {incomingAlerts.map((alert, index) => (
            <div key={index} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex items-center justify-between">
              <div>
                <div className="font-semibold text-slate-900">{alert.type}</div>
                <div className="text-sm text-slate-500">{alert.patient} · ETA {alert.eta}</div>
              </div>

              <div className="flex items-center gap-3">
                <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                  alert.severity === "High" ? "bg-red-100 text-red-700" : "bg-yellow-100 text-yellow-700"
                }`}>
                  {alert.severity}
                </span>
                <button className="bg-blue-600 hover:bg-blue-700 transition text-white text-sm font-medium px-4 py-2 rounded-lg">
                  View Patient
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DoctorDashboard