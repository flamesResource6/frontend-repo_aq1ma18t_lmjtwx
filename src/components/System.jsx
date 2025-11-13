export default function System() {
  const steps = [
    {
      title: '1) Deep-Dive Strategy',
      desc: 'We map your category, ICP, narrative, and deal-driving content pillars. Clear POV, messaging guidelines, and quarterly roadmap.'
    },
    {
      title: '2) 90-Minute Filming',
      desc: 'One high-leverage recording session per month. Guided prompts extract your expertise. We handle studios, remote kits, or on-location.'
    },
    {
      title: '3) End-to-End Production',
      desc: 'Scripting, b-roll, captions, design, and platform-native edits for LinkedIn, Reels, and Shorts. Publish-ready assets, scheduled for you.'
    },
    {
      title: '4) Authority-Led Distribution',
      desc: 'Organic growth focused on qualified, inbound demand — not vanity metrics. We track pipeline indicators and conversations, not just views.'
    }
  ];

  return (
    <section id="system" className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900">The 4-Step High-Leverage System</h2>
          <p className="mt-4 text-neutral-600">Built for busy leaders who want authority that moves pipeline, without turning content into a second job.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 gap-6">
          {steps.map((s) => (
            <div key={s.title} className="p-6 border border-neutral-200 rounded-2xl hover:shadow-sm transition">
              <h3 className="text-lg font-medium text-neutral-900">{s.title}</h3>
              <p className="mt-2 text-neutral-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
