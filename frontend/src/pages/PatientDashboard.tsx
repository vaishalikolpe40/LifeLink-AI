import { Link } from 'react-router-dom'

const patientInfo = {
  name: "Jane Doe",
  bloodGroup: "O+",
  allergies: "Penicillin",
  conditions: "None reported",
}

const recentActivity = [
  { label: "Symptom check: Fever", date: "2 days ago" },
  { label: "Medical profile updated", date: "1 week ago" },
]

function PatientDashboard() {
  return (
    <section className="min-h-[80vh] px-6 py-16 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-900 mb-8">
          Welcome back, {patientInfo.name.split(' ')[0]}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <Link
            to="/emergency"
            className="bg-red-500 hover:bg-red-600 transition text-white rounded-2xl p-6 flex flex-col items-center gap-2 shadow-sm"
          >
            <span className="text-3xl">🚑</span>
            <span className="font-semibold">Emergency Help</span>
          </Link>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col items-center gap-2 shadow-sm">
            <span className="text-3xl">🤖</span>
            <span className="font-semibold text-slate-900">AI Health Assistant</span>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col items-center gap-2 shadow-sm">
            <span className="text-3xl">📄</span>
            <span className="font-semibold text-slate-900">Medical Reports</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="font-semibold text-slate-900 mb-4">Medical Profile</h2>
            <div className="space-y-2 text-sm text-slate-600">
              <div>Blood Group: <span className="font-medium text-slate-900">{patientInfo.bloodGroup}</span></div>
              <div>Allergies: <span className="font-medium text-slate-900">{patientInfo.allergies}</span></div>
              <div>Conditions: <span className="font-medium text-slate-900">{patientInfo.conditions}</span></div>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="font-semibold text-slate-900 mb-4">Recent Activity</h2>
            <ul className="space-y-3 text-sm">
              {recentActivity.map((item, index) => (
                <li key={index} className="flex justify-between text-slate-600">
                  <span>{item.label}</span>
                  <span className="text-slate-400">{item.date}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PatientDashboard