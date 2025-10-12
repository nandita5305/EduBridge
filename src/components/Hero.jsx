import React from "react";
import assets from "../assets/assets"; // make sure assets.hero exists (or replace with your path)

const Hero = () => {
  return (
    <section id="hero" className="relative overflow-visible bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-20 py-16 lg:py-24">
        <div className="relative flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* LEFT: Text */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="inline-block w-10 h-10 rounded-md bg-primary-500/90 shadow-md" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
                EDUBRIDGE
              </h2>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl leading-tight font-extrabold text-slate-900 dark:text-white">
              Learning that <span className="text-primary-500">connects</span> everyone
            </h1>

            <p className="mt-5 text-lg text-slate-600 dark:text-slate-300 max-w-xl">
              EduBridge brings inclusive, interactive education to learners of all abilities —
              expertly designed courses, accessible tools, and friendly guidance.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <a
                href="#get-started"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary-500 text-white font-semibold shadow-lg hover:shadow-xl transition"
              >
                Get Started
              </a>

              <button
                className="inline-flex items-center gap-3 px-4 py-3 rounded-full border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 bg-white/80 dark:bg-white/3 backdrop-filter backdrop-blur-sm"
                aria-label="Play demo"
              >
                <span className="w-8 h-8 rounded-full border-2 border-primary-500 flex items-center justify-center">
                  <span className="ml-[2px] w-2 h-2 bg-primary-500 rotate-0" />
                </span>
                Play demo
              </button>
            </div>
          </div>

          {/* RIGHT: Visual with bubbles + image placeholder */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-[380px] h-[380px] sm:w-[480px] sm:h-[480px] lg:w-[560px] lg:h-[560px]">
              {/* outer rounded frame */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-300 to-primary-500 shadow-2xl -z-10" />

              {/* large yellow circle (main backdrop) */}
              <div className="absolute right-0 bottom-0 translate-x-12 translate-y-8 w-[86%] h-[86%] rounded-tl-[140px] rounded-bl-[140px] bg-yellow-400 shadow-xl" />

              {/* bubbles (blue) positioned like the reference) */}
              <div className="absolute left-6 top-6 w-20 h-20 rounded-full bg-primary-500/95 shadow-md" />
              <div className="absolute left-0 bottom-8 w-28 h-28 rounded-full bg-primary-400/95 shadow-md" />
              <div className="absolute right-20 top-16 w-12 h-12 rounded-full bg-primary-500/95 shadow-sm" />
              <div className="absolute right-8 bottom-28 w-8 h-8 rounded-full bg-white/90 shadow-sm" />
              <div className="absolute left-28 top-36 w-6 h-6 rounded-full bg-yellow-300/90" />

              {/* floating square cards (decorative) */}
              <div className="absolute right-6 top-28 w-24 h-24 rounded-lg bg-blue-700/95 shadow-lg transform rotate-6 flex items-center justify-center text-white">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="opacity-90">
                  <rect x="3" y="3" width="18" height="18" rx="4" stroke="white" strokeWidth="1.5" />
                </svg>
              </div>

              {/* area to place the main hero image */}
              <div
                id="hero-image-wrapper"
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                aria-hidden
              >
                <div className="relative w-[260px] h-[420px] sm:w-[320px] sm:h-[520px] lg:w-[360px] lg:h-[560px]">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-800/95 shadow-2xl transform translate-x-6 -translate-y-6" />

                  {/* Replace the img src below with your EduBridge graphic.
                      The wrapper (.hero-img) sits above the yellow circle and bubbles. */}
                  <img
                    src={assets.hero_image ?? assets.placeholder} // replace with your asset path if needed
                    alt="EduBridge visual"
                    className="relative w-full h-full object-cover rounded-2xl z-20"
                  />
                </div>
              </div>

              {/* subtle outer blue frame like in the reference */}
              <div className="absolute -inset-4 rounded-3xl border-8 border-primary-300/40 -z-20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
