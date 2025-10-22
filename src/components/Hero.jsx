import React from "react";
import { motion } from "framer-motion";
import homeImage from "../assets/home.svg"; // make sure the path is correct

const Hero = () => {
  // Randomly scattered bubbles with varied colors and sizes
  const bubbles = [
    { left: "12%", top: "8%", size: 18, color: "bg-blue-100/70", yAnim: [0, -18, 0], duration: 6.5 },
    { left: "25%", top: "78%", size: 36, color: "bg-blue-200/60", yAnim: [0, 15, 0], duration: 7.2 },
    { left: "8%", top: "52%", size: 22, color: "bg-blue-300/50", yAnim: [0, -12, 0], duration: 5.8 },
    { left: "48%", top: "8%", size: 32, color: "bg-blue-400/40", yAnim: [0, -14, 0], duration: 8.1 },
    { left: "68%", top: "72%", size: 28, color: "bg-blue-500/30", yAnim: [0, 16, 0], duration: 6.7 },
    { left: "28%", top: "85%", size: 24, color: "bg-blue-600/25", yAnim: [0, 11, 0], duration: 7.5 },
    { left: "82%", top: "28%", size: 34, color: "bg-blue-700/20", yAnim: [0, -16, 0], duration: 9.2 },
    { left: "88%", top: "88%", size: 16, color: "bg-blue-800/15", yAnim: [0, 8, 0], duration: 4.8 },
    { left: "6%", top: "92%", size: 38, color: "bg-blue-900/12", yAnim: [0, 13, 0], duration: 8.7 },
    { left: "92%", top: "12%", size: 20, color: "bg-blue-100/65", yAnim: [0, -10, 0], duration: 5.3 },
    { left: "38%", top: "32%", size: 26, color: "bg-blue-200/55", yAnim: [0, -9, 0], duration: 6.9 },
    { left: "62%", top: "48%", size: 30, color: "bg-blue-300/45", yAnim: [0, 14, 0], duration: 7.8 },
    { left: "18%", top: "22%", size: 19, color: "bg-blue-400/35", yAnim: [0, -11, 0], duration: 5.6 },
    { left: "72%", top: "62%", size: 27, color: "bg-blue-500/28", yAnim: [0, 17, 0], duration: 8.3 },
    { left: "42%", top: "68%", size: 23, color: "bg-blue-600/22", yAnim: [0, 10, 0], duration: 6.2 },
  ];

  return (
    <section id="hero" className="relative overflow-visible bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-20 py-16 lg:py-24">
        <div className="relative flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* LEFT: Text */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="inline-block w-10 h-10 rounded-md bg-primary-600/90 shadow-md" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                EDUBRIDGE
              </h2>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl leading-tight font-extrabold text-slate-900 dark:text-white">
              Learning that{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-primary-300">
                connects
              </span>{" "}
              everyone
            </h1>

            <p className="mt-5 text-lg text-slate-600 dark:text-slate-300 max-w-xl">
              EduBridge brings inclusive, interactive education to learners of all abilities —
              expertly designed courses, accessible tools, and friendly guidance.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <a
                href="/#learning-modes"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary-600 dark:bg-primary-500 text-white font-semibold shadow-lg hover:shadow-xl transition w-[150px] text-center"
              >
                Get Started
              </a>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 bg-white/80 dark:bg-slate-700/50 backdrop-blur-sm hover:border-primary-500 transition w-[150px] justify-center whitespace-nowrap"
                aria-label="Play demo"
              >
                <span className="w-6 h-6 rounded-full border-2 border-primary-600 flex items-center justify-center flex-shrink-0">
                  <span className="ml-[1px] w-1.5 h-1.5 bg-primary-600" />
                </span>
                <span className="text-sm">Play demo</span>
              </motion.button>
            </div>
          </div>

          {/* RIGHT: Circular Visual */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-[380px] h-[380px] sm:w-[480px] sm:h-[480px] lg:w-[560px] lg:h-[560px]">
              {/* Outer Circular Frame */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-200 to-indigo-400 dark:from-indigo-600 dark:to-indigo-800 shadow-2xl -z-10" />

              {/* Central Circle */}
              <div
                className="absolute inset-0 m-4 rounded-full shadow-inner"
                style={{ background: "radial-gradient(circle at center, #f0f8ff, #cfe0ff)" }}
                data-dark-bg="dark:bg-white"
              />

              {/* Randomly Scattered Animated Bubbles */}
              {bubbles.map((bubble, index) => (
                <motion.div
                  key={index}
                  className={`absolute rounded-full shadow-md ${bubble.color}`}
                  style={{ 
                    width: `${bubble.size}px`, 
                    height: `${bubble.size}px`,
                    left: bubble.left,
                    top: bubble.top
                  }}
                  animate={{ y: bubble.yAnim }}
                  transition={{ 
                    duration: bubble.duration, 
                    repeat: Infinity, 
                    repeatType: "loop",
                    ease: "easeInOut"
                  }}
                />
              ))}

              {/* Main Image */}
              <div
                id="hero-animated-visual"
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[450px] lg:h-[450px]">
                  <img
                    src={homeImage}
                    alt="Home illustration"
                    className="relative w-full h-full object-contain rounded-full z-20 shadow-xl"
                  />
                </div>
              </div>

              {/* Subtle Outer Frame */}
              <div className="absolute -inset-4 rounded-full border-8 border-primary-300/40 dark:border-primary-700/40 -z-20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;