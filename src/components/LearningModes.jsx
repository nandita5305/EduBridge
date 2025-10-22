import React from "react";
import { useNavigate } from "react-router-dom";
import { Headphones, PlayCircle, ClipboardCheck, BarChart3, Youtube } from "lucide-react";

const LearningModes = () => {
  const navigate = useNavigate();
  const modes = [
    {
      title: "Audio-Based Learning",
      desc: "Learn through engaging, accessible audio lessons for every topic.",
      icon: <Headphones size={40} className="text-primary-600 dark:text-white" />,
      bgColorClass: "bg-blue-50 dark:bg-blue-900/40",
      route: "/assistant",
    },
    {
      title: "Video-Based Learning",
      desc: "Watch easy-to-understand videos designed for interactive education.",
      icon: <PlayCircle size={40} className="text-primary-600 dark:text-white" />,
      bgColorClass: "bg-blue-50 dark:bg-blue-900/40",
    },
    // --- Featured Video Resources (3rd position) ---
    {
      title: "Featured Video Resources",
      desc: "Access curated, external video content and tutorials from top creators.",
      icon: <Youtube size={40} className="text-red-600 dark:text-white" />,
      link: "#youtube-resources",
      isExternal: true,
      // Muted Red Background for subtle branding
      bgColorClass: "bg-red-50 dark:bg-red-900/30",
       externalLink: "https://www.youtube.com/results?search_query=adhd+learning+techniques",
      
    },
    {
      title: "Tests & Quizzes",
      desc: "Check your understanding with adaptive quizzes and quick tests.",
      icon: <ClipboardCheck size={40} className="text-primary-600 dark:text-white" />,
      // Neutral Blue Background
      bgColorClass: "bg-blue-50 dark:bg-blue-900/40",
      route: "/quiz",
    },
    {
      title: "Performance Assessment",
      desc: "Track progress, receive feedback, and improve step-by-step.",
      icon: <BarChart3 size={40} className="text-primary-600 dark:text-white" />,
      // Neutral Blue Background
      bgColorClass: "bg-blue-50 dark:bg-blue-900/40",
    },
  ];

  // Determine grid layout based on number of items (1, 2, 4, 5 items are common use cases)
  const gridClasses = modes.length <= 4
    ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
    : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"; // Adjusted for 5 items

  return (
    <section id="learning-modes" className="py-20 px-6 sm:px-16 bg-gray-100 dark:bg-gray-800">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white">
          Modes of <span className="text-primary-600 dark:text-primary-400">Learning</span> {/* Toned down color for neutrality */}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-3">
          Learn your way — whether by listening, watching, or testing your knowledge.
        </p>
      </div>

      <div className={`grid gap-8 ${gridClasses}`}>
        {modes.map((mode, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-white dark:bg-gray-600 shadow-lg hover:shadow-xl rounded-2xl p-8 transition-transform hover:-translate-y-2 cursor-pointer group"
             onClick={() => {
              if (mode.route) navigate(mode.route);          // internal page navigation
              else if (mode.externalLink) window.open(mode.externalLink, "_blank"); // external URL
            }}
          >
            {/* Icon Container */}
            <div
              className={`mb-5 p-4 rounded-full transition-colors ${mode.bgColorClass} group-hover:bg-opacity-80`}
            >
              {mode.icon}
            </div>
            
            {/* Bolder Heading for Focus */}
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
              {mode.title}
            </h3>
            
            {/* Description */}
            <p className="text-gray-800 dark:text-gray-300">{mode.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LearningModes;