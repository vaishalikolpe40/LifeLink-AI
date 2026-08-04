const steps = [
  {
    number: "01",
    title: "Press Emergency Button",
    description: "One tap on Medical or Police Emergency starts the process instantly.",
  },
  {
    number: "02",
    title: "AI Analyzes the Situation",
    description: "AI checks emergency type, severity, and your medical history in seconds.",
  },
  {
    number: "03",
    title: "Hospital Gets Notified",
    description: "The best-matched hospital receives your details and prepares for arrival.",
  },
  {
    number: "04",
    title: "Help Reaches You",
    description: "Ambulance is dispatched and tracked live until you're safely at the hospital.",
  },
]

function HowItWorks() {
  return (
    <section className="bg-slate-50 px-6 py-20">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
          How It Works
        </h2>
        <p className="text-slate-600 mt-4 max-w-xl mx-auto">
          From emergency to treatment, every step is automated for speed.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {steps.map((step, index) => (
          <div key={step.number} className="relative text-center">
            <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-blue-600 text-white font-bold text-lg mb-5">
              {step.number}
            </div>

            <h3 className="text-slate-900 font-semibold text-lg mb-2">
              {step.title}
            </h3>
            <p className="text-slate-600 text-sm">
              {step.description}
            </p>

            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-7 left-[60%] w-full h-[2px] bg-slate-300"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default HowItWorks