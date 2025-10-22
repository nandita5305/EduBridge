import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";


const FeaturesSection = () => {
  const features = [
    { 
      icon: "🔊", 
      title: "Screen Reader", 
      description: "Full compatibility for assistive technology.",
      courses: "45+ courses"
    },
    { 
      icon: "⌨️", 
      title: "Keyboard Access", 
      description: "Complete keyboard navigation for all elements.",
      courses: "32+ courses"
    },
    { 
      icon: "🎨", 
      title: "Custom Interface", 
      description: "Adjust colors, fonts, and contrast easily.",
      courses: "28+ courses"
    },
    { 
      icon: "🗣️", 
      title: "Text-to-Speech", 
      description: "Convert any text to audio with natural voices.",
      courses: "51+ courses"
    },
    { 
      icon: "👋", 
      title: "Sign Language", 
      description: "Integrated video guides for core content.",
      courses: "23+ courses"
    },
    { 
      icon: "🧠", 
      title: "Cognitive Tools", 
      description: "Reading masks and focus aids included.",
      courses: "39+ courses"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            Accessible Learning Features
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Designed for everyone. Learn with tools that adapt to your needs and preferences.
          </p>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-10 right-10 h-1 bg-gradient-to-r from-indigo-200 to-blue-200 dark:from-gray-700 dark:to-gray-600 transform -translate-y-1/2 z-0 rounded-full"></div>

         <Swiper
  modules={[Navigation, Pagination, Autoplay]}
  spaceBetween={30}
  slidesPerView={1}
  navigation
  pagination={{ clickable: true }}
  autoplay={{ delay: 3000, disableOnInteraction: false }}
  breakpoints={{
    640: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  }}
  className="pb-12"
>
  {features.map((feature, index) => (
    <SwiperSlide key={index}>
      <FeatureCard feature={feature} />
    </SwiperSlide>
  ))}
</Swiper>

        </div>
      </div>

      <style jsx="true">{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

// Sub-Component: Feature Card
const FeatureCard = ({ feature }) => {
  return (
    <div className="flex-shrink-0 w-80 snap-center bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-200 dark:border-gray-700 group relative">
      
      {/* Gradient Background Accent */}
      <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-gradient-to-br from-indigo-100 to-blue-100 dark:from-indigo-900 dark:to-blue-700 opacity-20 blur-3xl pointer-events-none"></div>
      
      <div className="flex flex-col items-center text-center relative z-10">
        {/* Icon Circle */}
        <div className="w-20 h-20 flex items-center justify-center text-3xl rounded-full bg-gradient-to-br from-indigo-500 to-blue-500 text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500">
          {feature.icon}
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
          {feature.title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 mb-5 leading-relaxed">
          {feature.description}
        </p>
        
        {/* Courses Count */}
        <div className="text-indigo-600 dark:text-indigo-400 font-semibold text-sm uppercase tracking-wide">
          {feature.courses}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
