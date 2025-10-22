import React, { useEffect, useState, useRef, useMemo } from "react";

// --- 1. Custom Hook: Intersection Observer (useIsInViewport) ---
const useIsInViewport = (ref, threshold = 0.5) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          // Optional: Stop observing once it has been visible
          observer.unobserve(ref.current);
        }
      },
      {
        root: null, // viewport as the root
        rootMargin: "0px",
        threshold: threshold, // trigger when 50% of the element is visible
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(ref.current);
      }
    };
  }, [ref, threshold]);

  return isIntersecting;
};

// --- 2. Custom Hook: Count-Up Animation (useCountUpOnScreen) ---
const useCountUpOnScreen = (endValue, isVisible, duration = 2500) => {
  const [count, setCount] = useState(0);
  const startValue = 0;
  const startTimeRef = useRef(null);

  // Use useMemo to only re-run the animation when it becomes visible
  useEffect(() => {
    if (!isVisible) {
      // If not visible, reset state to 0 or initial state
      setCount(0);
      startTimeRef.current = null;
      return;
    }

    const animate = (timestamp) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out effect
      const easedProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      const currentValue = Math.floor(
        easedProgress * (endValue - startValue) + startValue
      );
      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        // Ensure it hits the exact end value
        setCount(endValue);
      }
    };

    const animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [endValue, isVisible, duration]);

  // If the component is not visible yet, return 0 (or the final value if already animated)
  return isVisible ? count : 0;
};

// --- 3. Component for a single animated stat card ---
const StatCard = ({ number, display, label, isVisible }) => {
  const endValue = number;
  const animatedNumber = useCountUpOnScreen(endValue, isVisible, 2500);

  // Custom display logic (same as before, but using the animatedNumber)
  let displayedValue;
  if (!isVisible) {
      displayedValue = "0"; // Show 0 or "..." before it loads/animates
  } else if (label === "Student Rating") {
    const score = (animatedNumber / 10).toFixed(1);
    displayedValue = animatedNumber === 49 ? display : `${score}/5`;
  } else if (label === "Completion Rate") {
    displayedValue = `${animatedNumber}%`;
  } else if (label === "Active Learners") {
    displayedValue = animatedNumber >= 1000 ? `${(animatedNumber / 1000).toFixed(0)}K+` : `${animatedNumber}+`;
  } else if (label === "Countries") {
    displayedValue = `${animatedNumber}+`;
  } else {
    displayedValue = display;
  }

  return (
    <div className="p-6 md:p-8 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg transform hover:scale-[1.02] transition duration-300 ease-in-out border-t-4 border-primary-500 dark:border-primary-400">
      <div className="text-4xl md:text-5xl font-extrabold text-primary-600 dark:text-primary-400 mb-2 text-center">
        {displayedValue}
      </div>
      <div className="text-gray-600 dark:text-gray-300 font-medium text-lg text-center">
        {label}
      </div>
    </div>
  );
};

// --- 4. Component for a single partner logo ---
const PartnerLogo = ({ name }) => (
    <div className="text-3xl font-extrabold text-gray-400 dark:text-gray-500 hover:text-gray-800 dark:hover:text-white transition-colors duration-300 transform hover:scale-105 cursor-pointer select-none relative group">
        {name}
        <span className="absolute left-0 bottom-[-5px] w-full h-0.5 bg-primary-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
    </div>
);

// --- 5. Main Component: TrustIndicators ---
const TrustIndicators = () => {
  const statsRef = useRef(null);
  const isStatsVisible = useIsInViewport(statsRef, 0.4); // Trigger when 40% of the stats section is visible

  const rawStats = [
    { number: 50000, display: "50K+", label: "Active Learners" },
    { number: 95, display: "95%", label: "Completion Rate" },
    { number: 49, display: "4.9/5", label: "Student Rating" },
    { number: 120, display: "120+", label: "Countries" }
  ];

  const partners = ["Google", "Microsoft", "IBM", "Stanford", "MIT", "Amazon"];

  return (
    <section className="py-20 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-16 tracking-tight">
            Our Global Impact
        </h2>

        {/* --- Stats Cards Section (ref attached here) --- */}
        <div 
            ref={statsRef}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-10 mb-20"
        >
          {rawStats.map((stat, index) => (
            <StatCard 
                key={index} 
                {...stat} 
                isVisible={isStatsVisible} 
            />
          ))}
        </div>

        {/* --- Partner Logos Section --- */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-12">
            Trusted by Leaders in Tech and Education
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-8 md:gap-x-16 lg:gap-x-20">
            {partners.map((partner, index) => (
              <PartnerLogo key={index} name={partner} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;