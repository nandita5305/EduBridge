import React from "react";

const CourseCategories = () => {
  const categories = [
    {
      name: "Technology & Programming",
      count: "120+ courses",
      color: "bg-blue-500",
      icon: "💻"
    },
    {
      name: "Business & Management",
      count: "85+ courses",
      color: "bg-green-500",
      icon: "📊"
    },
    {
      name: "Creative Arts",
      count: "65+ courses",
      color: "bg-purple-500",
      icon: "🎨"
    },
    {
      name: "Science & Mathematics",
      count: "90+ courses",
      color: "bg-orange-500",
      icon: "🔬"
    },
    {
      name: "Language Learning",
      count: "45+ courses",
      color: "bg-red-500",
      icon: "🌎"
    },
    {
      name: "Personal Development",
      count: "55+ courses",
      color: "bg-indigo-500",
      icon: "🚀"
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Explore Course Categories
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover your passion across diverse learning domains with expert-curated content.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group relative bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center text-white text-xl`}>
                  {category.icon}
                </div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {category.count}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {category.name}
              </h3>
              
              <div className="flex items-center text-primary-600 dark:text-primary-400 font-medium">
                Explore courses
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseCategories;