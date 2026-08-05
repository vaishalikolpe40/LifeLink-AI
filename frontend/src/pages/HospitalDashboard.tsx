const stats = [
  { label: "ICU Beds Available", value: "6 / 20" },
  { label: "General Beds Available", value: "18 / 40" },
  { label: "Ambulances Active", value: "3 / 5" },
  { label: "Doctors On Duty", value: "12" },
]

const emergencyRequests = [
  { type: "Accident", location: "MG Road", status: "Pending" },
  { type: "Chest Pain", location: "Indiranagar", status: "Pending" },
]

function HospitalDashboard() {
  return (
    <section className="min-h-[80vh] px-6 py-16 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-900 mb-8">Hospital Admin Dashboard</h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
              <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
              <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        <h2 className="font-semibold text-slate-900 mb-4">Incoming Emergency Requests</h2>

        <div className="flex flex-col gap-4">
          {emergencyRequests.map((req, index) => (
            <div key={index} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex items-center justify-between">
              <div>
                <div className="font-semibold text-slate-900">{req.type}</div>
                <div className="text-sm text-slate-500">📍 {req.location}</div>
              </div>

              <div className="flex gap-2">
                <button className="bg-green-600 hover:bg-green-700 transition text-white text-sm font-medium px-4 py-2 rounded-lg">
                  Accept
                </button>
                <button className="bg-slate-200 hover:bg-slate-300 transition text-slate-700 text-sm font-medium px-4 py-2 rounded-lg">
                  Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HospitalDashboard