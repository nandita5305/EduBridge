import React from "react";

const SuccessStories = () => {
  const stories = [
    {
      name: "Sarah Chen",
      role: "Software Developer",
      company: "Google",
      image: "👩‍💻",
      story: "Edubridge helped me transition from marketing to tech. The hands-on projects were exactly what I needed.",
      achievement: "3x salary increase"
    },
    {
      name: "Marcus Johnson",
      role: "Data Scientist",
      company: "Amazon",
      image: "👨‍🔬",
      story: "The self-paced courses allowed me to learn while working full-time. The community support was incredible.",
      achievement: "Promoted within 6 months"
    },
    {
      name: "Aisha Patel",
      role: "UX Designer",
      company: "Apple",
      image: "👩‍🎨",
      story: "As a visually impaired learner, the accessibility features made all the difference. I could focus on learning.",
      achievement: "First design job at dream company"
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Join thousands of learners who transformed their careers with Edubridge
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="text-4xl mb-4">{story.image}</div>
              
              <p className="text-gray-700 dark:text-gray-300 text-lg italic mb-6 leading-relaxed">
                "{story.story}"
              </p>
              
              <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                <h4 className="font-bold text-gray-900 dark:text-white text-lg">
                  {story.name}
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {story.role} at {story.company}
                </p>
                <div className="mt-2 inline-block bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 px-3 py-1 rounded-full text-sm font-medium">
                  {story.achievement}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;