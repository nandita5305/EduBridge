import React, { useState } from "react";
// Import all assets from the file you provided, assuming it's named 'assets'
import assets from "../assets/assets.js"; 

const HowItWorks = () => {
  // Use state to track which step is currently active (visible on the right)
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  // Define primary color for accents and consistency
  const primaryColor = "indigo"; 

  // Map step titles to the imported image keys in the assets object
  const stepImages = {
    "Sign Up & Assessment": assets.signupImage,
    "Choose Learning Path": assets.learningImage,
    "Start Learning": assets.startImage,
    "Get Certified": assets.certificateImage,
  };

  const steps = [
    {
      number: "01",
      title: "Sign Up & Assessment",
      description: "Create your account and take a quick assessment to determine your unique learning path and starting point.",
      icon: "📝"
    },
    {
      number: "02",
      title: "Choose Learning Path",
      description: "Select from personalized course recommendations based on your professional goals and current knowledge level.",
      icon: "🎯"
    },
    {
      number: "03",
      title: "Start Learning",
      description: "Begin your journey with interactive lessons, hands-on projects, and supportive community collaboration.",
      icon: "🚀"
    },
    {
      number: "04",
      title: "Get Certified",
      description: "Complete your chosen learning track, pass the final assessment, and earn recognized certificates to showcase your new skills.",
      icon: "🏆"
    }
  ];

  const activeStep = steps[activeStepIndex];

  return (
    <section id="HowItWorks"  className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        
        {/* --- Header Section --- */}
        <div className="text-center mb-16">
          <span className={`text-sm font-semibold uppercase text-${primaryColor}-600 dark:text-${primaryColor}-400 tracking-wider`}>
            SIMPLIFIED PROCESS
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mt-2 mb-4">
            How Edubridge Works
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Start your learning journey in just four simple, guided steps.
          </p>
        </div>

        {/* --- Two-Column Layout (Navigator on Left, Content on Right) --- */}
        <div className="lg:grid lg:grid-cols-12 lg:gap-12">
          
          {/* 1. Left Column: Navigation (Sticky) */}
          <div className="lg:col-span-4 mb-10 lg:mb-0">
            <div className="lg:sticky lg:top-8">
              {steps.map((step, index) => (
                <StepNavigationButton 
                  key={index}
                  step={step}
                  index={index}
                  isActive={index === activeStepIndex}
                  setActiveStep={setActiveStepIndex}
                  primaryColor={primaryColor}
                />
              ))}
            </div>
          </div>

          {/* 2. Right Column: Step Content */}
          <div className="lg:col-span-8">
            <StepContentDisplay 
              activeStep={activeStep} 
              primaryColor={primaryColor} 
              stepImages={stepImages} // Pass the image map
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Sub-Component: The Clickable Button for the Left Side ---
const StepNavigationButton = ({ step, index, isActive, setActiveStep, primaryColor }) => (
  <button
    onClick={() => setActiveStep(index)}
    className={`
      w-full flex items-center text-left py-4 px-4 my-2 rounded-xl transition-all duration-300
      border-l-4 lg:border-l-8 
      ${isActive 
        ? `border-${primaryColor}-600 dark:border-${primaryColor}-400 bg-${primaryColor}-50/50 dark:bg-gray-700/50 shadow-md`
        : 'border-transparent hover:border-gray-300 dark:hover:border-gray-600'
      }
    `}
  >
    <div 
      className={`
        w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full mr-4 text-sm font-bold transition-all duration-300
        ${isActive
          ? 'bg-gradient-to-br from-indigo-500 to-indigo-600 text-white'
          : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
        }
      `}
    >
      {step.number}
    </div>
    <div className={`
      text-lg font-semibold transition-colors duration-300
      ${isActive 
        ? 'text-gray-900 dark:text-white' 
        : 'text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200'
      }
    `}>
      {step.title}
    </div>
  </button>
);

// --- Sub-Component: The Detailed Content for the Right Side ---
const StepContentDisplay = ({ activeStep, primaryColor, stepImages }) => {
  // Get the correct image based on the active step's title
  const currentImage = stepImages[activeStep.title];

  return (
    <div 
      className="p-8 lg:p-10 bg-white dark:bg-gray-700 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-600 
                transform translate-y-0 transition-transform duration-500 ease-out"
      // Key change: use key to force re-render and fade-in when activeStep changes
      key={activeStep.number} 
    >
      <div className="flex items-center space-x-4 mb-6">
        <div className={`
          w-16 h-16 flex items-center justify-center text-4xl rounded-xl 
          bg-${primaryColor}-100 dark:bg-${primaryColor}-900 text-gray-900 dark:text-white
        `}>
          {activeStep.icon}
        </div>
        
        <div className="flex flex-col">
          <div className={`
            text-sm font-bold uppercase text-${primaryColor}-600 dark:text-${primaryColor}-400
          `}>
            Step {activeStep.number}
          </div>
          <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white">
            {activeStep.title}
          </h3>
        </div>
      </div>
      
      <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed border-t pt-6 mt-6 border-gray-200 dark:border-gray-600">
        {activeStep.description}
      </p>

      {/* Replaced placeholder with the actual image or a fallback */}
      <div className="mt-8 flex justify-center items-center"> {/* Added flex justify-center items-center for centering */}
        {currentImage ? (
          <img 
            src={currentImage} 
            alt={`Visual representation for ${activeStep.title}`}
            // CHANGED: max-h-80 to max-h-48 and added object-scale-down for better sizing
            className="w-full h-auto max-h-48 object-scale-down rounded-xl" 
          />
        ) : (
          <div className={`
            mt-8 h-48 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center 
            border-2 border-dashed border-${primaryColor}-300 dark:border-${primaryColor}-700
            text-gray-500 dark:text-gray-400 text-lg font-semibold w-full
          `}>
            [Visual Representation or Screenshot for "{activeStep.title}"] - Image Missing
          </div>
        )}
      </div>
    </div>
  );
};


export default HowItWorks;