import React from "react";

const InstructorShowcase = () => {
  const instructors = [
    {
      name: "Dr. Emily Rodriguez",
      role: "AI Research Director",
      company: "Formerly at OpenAI",
      image: "👩‍🏫",
      students: "25K+",
      rating: "4.95",
      expertise: ["Machine Learning", "Deep Learning", "AI Ethics"]
    },
    {
      name: "James Kim",
      role: "Senior Software Engineer",
      company: "Ex-Meta",
      image: "👨‍💻",
      students: "18K+",
      rating: "4.92",
      expertise: ["React", "Node.js", "System Design"]
    },
    {
      name: "Dr. Maria Gonzalez",
      role: "Neuroscience Professor",
      company: "Harvard University",
      image: "👩‍🔬",
      students: "12K+",
      rating: "4.98",
      expertise: ["Cognitive Science", "Learning Methods", "Brain Health"]
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Learn from Industry Experts
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Our instructors are top professionals and educators committed to your success
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {instructors.map((instructor, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 group"
            >
              <div className="text-5xl mb-4">{instructor.image}</div>
              
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {instructor.name}
              </h3>
              
              <p className="text-primary-600 dark:text-primary-400 font-semibold mb-1">
                {instructor.role}
              </p>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {instructor.company}
              </p>
              
              <div className="flex justify-center items-center gap-6 mb-6">
                <div className="text-center">
                  <div className="font-bold text-gray-900 dark:text-white">{instructor.students}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Students</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-gray-900 dark:text-white">{instructor.rating}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Rating</div>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-2">
                {instructor.expertise.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstructorShowcase;