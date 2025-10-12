import React from "react";
import { Headphones, PlayCircle, ClipboardCheck, BarChart3 } from "lucide-react";

const LearningModes = () => {
  const modes = [
    {
      title: "Audio-Based Learning",
      desc: "Learn through engaging, accessible audio lessons for every topic.",
      icon: <Headphones size={40} className="text-primary-800" />,
    },
    {
      title: "Video-Based Learning",
      desc: "Watch easy-to-understand videos designed for interactive education.",
      icon: <PlayCircle size={40} className="text-primary-800" />,
    },
    {
      title: "Tests & Quizzes",
      desc: "Check your understanding with adaptive quizzes and quick tests.",
      icon: <ClipboardCheck size={40} className="text-primary-800" />,
    },
    {
      title: "Performance Assessment",
      desc: "Track progress, receive feedback, and improve step-by-step.",
      icon: <BarChart3 size={40} className="text-primary-800" />,
    },
  ];

  return (
    <section id="learning-modes" className="py-20 px-6 sm:px-16 bg-gray-50 dark:bg-gray-900">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
          Modes of <span className="text-primary-800">Learning</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-3">
          Learn your way — whether by listening, watching, or testing your knowledge.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {modes.map((mode, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl rounded-2xl p-8 transition-transform hover:-translate-y-2"
          >
            <div className="mb-5 p-4 bg-primary-100 dark:bg-primary-900/30 rounded-full">
              {mode.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              {mode.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">{mode.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LearningModes;
