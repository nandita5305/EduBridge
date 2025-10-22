import React from "react";
import { Users, HeartHandshake, BarChart3, BookOpen } from "lucide-react";

const Parents = () => {
  const features = [
    {
      title: "Progress Monitoring",
      desc: "Track your child’s performance, test results, and attendance in one place.",
      icon: <BarChart3 size={40} className="text-primary-800" />,
    },
    {
      title: "Personalized Guidance",
      desc: "Get AI-powered tips and study plans tailored to your child’s learning needs.",
      icon: <HeartHandshake size={40} className="text-primary-800" />,
    },
    {
      title: "Parental Resources",
      desc: "Access guides, tutorials, and workshops to better support learning at home.",
      icon: <BookOpen size={40} className="text-primary-800" />,
    },
    {
      title: "Community Support",
      desc: "Join a network of parents and experts to share experiences and get advice.",
      icon: <Users size={40} className="text-primary-800" />,
    },
  ];

  return (
    <section id="parents" className="py-20 px-6 sm:px-16 bg-white dark:bg-gray-900">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
          For <span className="text-primary-800">Parents</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-3">
          Stay involved, informed, and empowered in your child’s educational journey.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-gray-50 dark:bg-gray-800 shadow-lg hover:shadow-xl rounded-2xl p-8 transition-transform hover:-translate-y-2"
          >
            <div className="mb-5 p-4 bg-primary-100 dark:bg-primary-900/30 rounded-full">
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              {feature.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Parents;
