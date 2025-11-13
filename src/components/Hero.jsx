import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[92vh] w-full" id="hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-36">
        <div className="max-w-2xl">
          <p className="uppercase tracking-widest text-xs text-neutral-500 mb-4">For Indian Founders & Senior Executives</p>
          <h1 className="text-4xl sm:text-6xl font-semibold leading-[1.05] tracking-tight text-neutral-900">
            Build authority that attracts inbound deals — by filming just <span className="underline decoration-neutral-300">90 minutes/month</span>.
          </h1>
          <p className="mt-6 text-neutral-600 text-lg">
            We handle 100%: strategy, scripting, production, editing, and organic growth across LinkedIn, Reels, and Shorts. You show up, we compound your authority.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#book" className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-black text-white text-sm font-medium hover:opacity-90">
              Book a Discovery Call
            </a>
            <a href="#system" className="inline-flex items-center justify-center px-5 py-3 rounded-full border border-neutral-300 text-sm font-medium hover:bg-neutral-50">
              See the 4-Step System
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
