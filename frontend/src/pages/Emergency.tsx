import { useState } from 'react'

const emergencyTypes = [
  { icon: "🐍", label: "Snake Bite" },
  { icon: "🚗", label: "Accident" },
  { icon: "❤️", label: "Chest Pain" },
  { icon: "🩸", label: "Bleeding" },
  { icon: "🔥", label: "Burn Injury" },
  { icon: "❓", label: "Other" },
]

const firstAidGuide: Record<string, string[]> = {
  "Snake Bite": [
    "Keep the patient calm and still",
    "Keep the affected limb below heart level",
    "Remove tight jewellery or clothing near the bite",
    "Do not cut the wound or try to suck out venom",
    "Do not apply ice or a tight tourniquet",
  ],
  "Accident": [
    "Do not move the patient unless there's immediate danger",
    "Check for breathing and consciousness",
    "Apply gentle pressure to any bleeding wounds",
    "Keep the patient warm and calm",
    "Do not give food or water",
  ],
  "Chest Pain": [
    "Help the patient sit down and stay calm",
    "Loosen any tight clothing",
    "If prescribed, help them take their heart medication",
    "Do not let them exert themselves",
    "Be ready to perform CPR if they become unresponsive",
  ],
  "Bleeding": [
    "Apply firm, direct pressure with a clean cloth",
    "Keep the injured area elevated above the heart if possible",
    "Do not remove the cloth if it soaks through — add more on top",
    "Keep the patient still and calm",
  ],
  "Burn Injury": [
    "Cool the burn under running water for 10-20 minutes",
    "Do not apply ice, butter, or ointments",
    "Remove tight clothing/jewellery near the burn before swelling starts",
    "Cover loosely with a clean, non-stick cloth",
  ],
  "Other": [
    "Stay calm and keep the patient safe",
    "Do not move them if a spinal injury is suspected",
    "Monitor their breathing and consciousness",
    "Keep them warm while help is on the way",
  ],
}

const mockHospitals = [
  {
    name: "City Care General Hospital",
    distance: "2.4 km",
    eta: "6 mins",
    specialist: "Emergency & Trauma",
    icu: "Available",
    match: "Best Match",
  },
  {
    name: "St. Mary's Medical Center",
    distance: "4.1 km",
    eta: "10 mins",
    specialist: "General Medicine",
    icu: "Available",
    match: null,
  },
  {
    name: "Apex Multispecialty Hospital",
    distance: "5.8 km",
    eta: "13 mins",
    specialist: "Cardiology & ICU",
    icu: "Limited",
    match: null,
  },
]

type Step = "choose" | "medical-type" | "first-aid" | "ambulance-question" | "hospital-match"
type AmbulanceChoice = "yes" | "no" | "not-sure"

function Emergency() {
  const [step, setStep] = useState<Step>("choose")
  const [selectedType, setSelectedType] = useState<string | null>(null)
  const [ambulanceChoice, setAmbulanceChoice] = useState<AmbulanceChoice | null>(null)

  function handleSelectType(label: string) {
    setSelectedType(label)
    setStep("first-aid")
  }

  function handleAmbulanceChoice(choice: AmbulanceChoice) {
    setAmbulanceChoice(choice)
    setStep("hospital-match")
  }

  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6 bg-slate-50 py-16">
      {step === "choose" && (
        <>
          <h1 className="text-4xl font-bold text-slate-900 mb-3">What's the Emergency?</h1>
          <p className="text-slate-600 max-w-md mb-10">Choose the type of help you need. We'll guide you through the rest.</p>

          <div className="flex flex-col sm:flex-row gap-6">
            <button onClick={() => setStep("medical-type")} className="bg-red-500 hover:bg-red-600 transition text-white font-semibold text-lg px-10 py-8 rounded-2xl flex flex-col items-center gap-2 w-64 shadow-sm">
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
          <h1 className="text-4xl font-bold text-slate-900 mb-3">What Happened?</h1>
          <p className="text-slate-600 max-w-md mb-10">Select the type of medical emergency so we can help faster.</p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-2xl">
            {emergencyTypes.map((type) => (
              <button key={type.label} onClick={() => handleSelectType(type.label)} className="bg-white hover:bg-slate-100 transition border border-slate-200 rounded-xl p-6 flex flex-col items-center gap-2 shadow-sm">
                <span className="text-3xl">{type.icon}</span>
                <span className="text-slate-800 font-medium text-sm">{type.label}</span>
              </button>
            ))}
          </div>

          <button onClick={() => setStep("choose")} className="mt-8 text-slate-500 hover:text-slate-700 text-sm underline">
            ← Go back
          </button>
        </>
      )}

      {step === "first-aid" && selectedType && (
        <div className="max-w-xl w-full">
          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm text-left">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">🩹</span>
              <h1 className="text-2xl font-bold text-slate-900">
                First Aid: {selectedType}
              </h1>
            </div>

            <ul className="space-y-3">
              {firstAidGuide[selectedType].map((instruction, index) => (
                <li key={index} className="flex items-start gap-3 text-slate-700">
                  <span className="text-blue-600 font-bold">{index + 1}.</span>
                  <span>{instruction}</span>
                </li>
              ))}
            </ul>

            <p className="text-sm text-slate-500 mt-6 italic">
              These instructions remain visible while help is being arranged.
            </p>
          </div>

          <div className="flex items-center justify-between mt-6">
            <button onClick={() => setStep("medical-type")} className="text-slate-500 hover:text-slate-700 text-sm underline">
              ← Change emergency type
            </button>
            <button onClick={() => setStep("ambulance-question")} className="bg-blue-600 hover:bg-blue-700 transition text-white font-medium px-6 py-3 rounded-lg">
              Continue →
            </button>
          </div>
        </div>
      )}

      {step === "ambulance-question" && (
        <div className="max-w-md w-full">
          <h1 className="text-3xl font-bold text-slate-900 mb-3">
            Do You Need an Ambulance?
          </h1>
          <p className="text-slate-600 mb-8">
            This helps us arrange the right kind of transport to the hospital.
          </p>

          <div className="flex flex-col gap-4">
            <button
              onClick={() => handleAmbulanceChoice("yes")}
              className="bg-white hover:bg-blue-50 transition border-2 border-slate-200 hover:border-blue-500 rounded-xl p-5 text-left"
            >
              <div className="font-semibold text-slate-900">Yes, send an ambulance</div>
              <div className="text-sm text-slate-500">We'll dispatch the nearest available one</div>
            </button>

            <button
              onClick={() => handleAmbulanceChoice("no")}
              className="bg-white hover:bg-blue-50 transition border-2 border-slate-200 hover:border-blue-500 rounded-xl p-5 text-left"
            >
              <div className="font-semibold text-slate-900">No, we have our own vehicle</div>
              <div className="text-sm text-slate-500">We'll show you the fastest route instead</div>
            </button>

            <button
              onClick={() => handleAmbulanceChoice("not-sure")}
              className="bg-white hover:bg-blue-50 transition border-2 border-slate-200 hover:border-blue-500 rounded-xl p-5 text-left"
            >
              <div className="font-semibold text-slate-900">Not sure</div>
              <div className="text-sm text-slate-500">Ask us a few quick questions to decide</div>
            </button>
          </div>
        </div>
      )}

      {step === "hospital-match" && (
        <div className="max-w-2xl w-full text-left">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-slate-900 mb-3">
              Best Hospital Match Found
            </h1>
            <p className="text-slate-600">
              AI selected this based on distance, specialist availability, and ICU capacity.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {mockHospitals.map((hospital) => (
              <div
                key={hospital.name}
                className={`bg-white rounded-xl p-6 border-2 ${
                  hospital.match ? "border-blue-500 shadow-md" : "border-slate-200"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-slate-900 text-lg">{hospital.name}</h3>
                  {hospital.match && (
                    <span className="bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                      {hospital.match}
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm text-slate-600 mt-3">
                  <div>📍 {hospital.distance}</div>
                  <div>⏱️ {hospital.eta}</div>
                  <div>🩺 {hospital.specialist}</div>
                  <div>🛏️ ICU: {hospital.icu}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="bg-red-500 hover:bg-red-600 transition text-white font-semibold px-8 py-3 rounded-lg shadow-sm">
              Confirm & Notify Hospital
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

export default Emergency