import { useState } from 'react'

const emergencyTypes = [
  { icon: "🐍", label: "Snake Bite" },
  { icon: "🚗", label: "Accident" },
  { icon: "❤️", label: "Chest Pain" },
  { icon: "🩸", label: "Bleeding" },
  { icon: "🔥", label: "Burn Injury" },
  { icon: "❓", label: "Other" },
]

function Emergency() {
  const [step, setStep] = useState<"choose" | "medical-type">("choose")

  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6 bg-slate-50 py-16">
      {step === "choose" && (
        <>
          <h1 className="text-4xl font-bold text-slate-900 mb-3">
            What's the Emergency?
          </h1>
          <p className="text-slate-600 max-w-md mb-10">
            Choose the type of help you need. We'll guide you through the rest.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <button
              onClick={() => setStep("medical-type")}
              className="bg-red-500 hover:bg-red-600 transition text-white font-semibold text-lg px-10 py-8 rounded-2xl flex flex-col items-center gap-2 w-64 shadow-sm"
            >
              <span className="text-4xl">🚑</span>
              Medical Emergency
            </button>

            <button className="bg-blue-600 hover:bg-blue-700 transition text-white font-semibold text-lg px-10 py-8 rounded-2xl flex flex-col items-center gap-2 w-64 shadow-sm">
              <span className="text-4xl">🚓</span>
              Police Emergency
            </button>
          </div>
        </>
      )}

      {step === "medical-type" && (
        <>
          <h1 className="text-4xl font-bold text-slate-900 mb-3">
            What Happened?
          </h1>
          <p className="text-slate-600 max-w-md mb-10">
            Select the type of medical emergency so we can help faster.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-2xl">
            {emergencyTypes.map((type) => (
              <button
                key={type.label}
                className="bg-white hover:bg-slate-100 transition border border-slate-200 rounded-xl p-6 flex flex-col items-center gap-2 shadow-sm"
              >
                <span className="text-3xl">{type.icon}</span>
                <span className="text-slate-800 font-medium text-sm">{type.label}</span>
              </button>
            ))}
          </div>

          <button
            onClick={() => setStep("choose")}
            className="mt-8 text-slate-500 hover:text-slate-700 text-sm underline"
          >
            ← Go back
          </button>
        </>
      )}
    </section>
  )
}

export default Emergency