import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const data = [
  { week: "Week 1", score: 40 },
  { week: "Week 2", score: 55 },
  { week: "Week 3", score: 70 },
  { week: "Week 4", score: 85 },
];

const Progress = () => {
  return (
    <section className="py-20 px-6 sm:px-16 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
          Your <span className="text-primary-800">Progress Analytics</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-3">
          Track your weekly performance and learning improvement.
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg max-w-3xl mx-auto">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="week" />
            <YAxis domain={[0, 100]} />
            <Tooltip />
            <Line type="monotone" dataKey="score" stroke="#4f46e5" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default Progress;
