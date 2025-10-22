import React from "react";

function QuizDisplay({ quiz }) {
  if (!quiz || !Array.isArray(quiz) || quiz.length === 0) {
    return <p className="text-center mt-5">No quiz generated yet.</p>;
  }

  return (
    <div className="max-w-xl mx-auto mt-10 bg-gray-100 p-6 rounded-xl">
      <h3 className="text-lg font-bold mb-4 text-center">Generated Quiz</h3>
      {quiz.map((q, i) => (
        <div key={i} className="mb-4">
          <p className="font-semibold">
            {i + 1}. {q.question || "Question not available"}
          </p>
          {q.options && q.options.length > 0 ? (
            <ul className="ml-4 list-disc">
              {q.options.map((opt, idx) => (
                <li key={idx}>{opt}</li>
              ))}
            </ul>
          ) : (
            <p>No options provided</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default QuizDisplay;
