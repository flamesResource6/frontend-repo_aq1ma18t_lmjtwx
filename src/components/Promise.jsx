export default function Promise() {
  return (
    <section id="promise" className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900">The Authority Promise</h2>
            <p className="mt-4 text-neutral-700">We optimize for buying intent — not likes. Expect compounding credibility, warmer rooms, and consistent inbound from the right people.</p>
            <ul className="mt-8 space-y-4 text-neutral-700">
              <li className="flex gap-3"><span className="h-6 w-6 rounded-full bg-black/90 text-white inline-flex items-center justify-center text-[10px]">1</span> Content engineered to trigger conversations and DM replies from qualified prospects.</li>
              <li className="flex gap-3"><span className="h-6 w-6 rounded-full bg-black/90 text-white inline-flex items-center justify-center text-[10px]">2</span> Editorial cadence that builds familiarity with your ICP, reducing sales cycles.</li>
              <li className="flex gap-3"><span className="h-6 w-6 rounded-full bg-black/90 text-white inline-flex items-center justify-center text-[10px]">3</span> Leading indicators we actually track: profile visits, replies, call bookings, and pipeline value.</li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl border border-neutral-200 bg-white">
            <h3 className="text-xl font-medium">What you do each month</h3>
            <ul className="mt-4 space-y-3 text-neutral-700">
              <li>• Show up for a single 90-minute filming session</li>
              <li>• Approve strategy and scripts (we draft)</li>
              <li>• Review final cuts (optional)</li>
            </ul>
            <div className="mt-6 p-4 bg-neutral-100 rounded-xl text-neutral-700 text-sm">Everything else — research, scripting, production, posting, and distribution — is on us.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
