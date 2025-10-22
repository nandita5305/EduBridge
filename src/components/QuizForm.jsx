import React, { useState } from "react";
import { generateQuiz } from "../api/quiz";

function QuizForm({ setQuiz }) {
  const [topic, setTopic] = useState("");
  const [difficulty, setDifficulty] = useState("Easy");
  const [studentType, setStudentType] = useState("ADHD");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");       // reset previous error
    setLoading(true);

    try {
      const quizData = await generateQuiz({ topic, difficulty, studentType });
      if (!quizData || !Array.isArray(quizData) || quizData.length === 0) {
        setError("No quiz questions generated. Try a different topic.");
      } else {
        setQuiz(quizData);
      }
    } catch (err) {
      console.error(err);
      setError("Failed to generate quiz. Check console for details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md mt-10"
    >
      <h2 className="text-xl font-semibold mb-4 text-center">
        Generate Adaptive Quiz
      </h2>

      <input
        type="text"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        placeholder="Enter Topic (e.g., Fractions)"
        className="border p-2 w-full mb-3 rounded"
        required
      />

      <select
        value={difficulty}
        onChange={(e) => setDifficulty(e.target.value)}
        className="border p-2 w-full mb-3 rounded"
      >
        <option>Easy</option>
        <option>Medium</option>
        <option>Hard</option>
      </select>

      <select
        value={studentType}
        onChange={(e) => setStudentType(e.target.value)}
        className="border p-2 w-full mb-3 rounded"
      >
        <option>ADHD</option>
        <option>Visually Impaired</option>
        <option>Hearing Impaired</option>
      </select>

      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? "Generating..." : "Generate Quiz"}
      </button>

      {error && <p className="mt-3 text-red-600 text-center">{error}</p>}
    </form>
  );
}

export default QuizForm;
