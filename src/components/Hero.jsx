import React, { useEffect, useRef, useState, Suspense } from 'react';

// Lazy-load the heavy Spline runtime only when needed
const LazySpline = React.lazy(() => import('@splinetool/react-spline'));

export default function Hero() {
  const containerRef = useRef(null);
  const [shouldLoadSpline, setShouldLoadSpline] = useState(false);

  useEffect(() => {
    // Conditions to avoid loading Spline on constrained devices
    const isMobile = typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches;
    const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Network heuristics
    const connection = typeof navigator !== 'undefined' && (navigator.connection || navigator.mozConnection || navigator.webkitConnection);
    const isSlowNetwork = !!connection && (
      ['slow-2g', '2g'].includes(connection.effectiveType) || (connection.downlink && connection.downlink < 1.5)
    );

    if (isMobile || prefersReducedMotion || isSlowNetwork) {
      setShouldLoadSpline(false);
      return;
    }

    // Only load when in view
    let observer;
    if (containerRef.current && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Defer to idle time for smoother main-thread
            const load = () => setShouldLoadSpline(true);
            if ('requestIdleCallback' in window) {
              window.requestIdleCallback(load, { timeout: 1200 });
            } else {
              setTimeout(load, 200);
            }
            observer.disconnect();
          }
        });
      }, { rootMargin: '200px' });
      observer.observe(containerRef.current);
    } else {
      // Fallback: load after a short delay on capable devices
      const t = setTimeout(() => setShouldLoadSpline(true), 400);
      return () => clearTimeout(t);
    }

    return () => observer && observer.disconnect();
  }, []);

  return (
    <section className="relative h-[88vh] sm:h-[92vh] w-full overflow-hidden" id="hero" ref={containerRef}>
      {/* Background: gradient + optional Spline */}
      <div className="absolute inset-0">
        {/* Lightweight gradient background as default */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0.06),rgba(0,0,0,0)_60%)]" />

        {/* Heavy Spline only on capable devices and after in-view */}
        {shouldLoadSpline && (
          <Suspense fallback={<div className="absolute inset-0 animate-pulse bg-neutral-100" />}>
            <LazySpline
              scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
          </Suspense>
        )}
      </div>

      {/* Soft white overlay to keep text readable */}
      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-white/10 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 sm:pt-36">
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
