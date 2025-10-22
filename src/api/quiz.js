import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export const generateQuiz = async ({ topic, difficulty, studentType }) => {
  try {
    const res = await axios.post(`${API_URL}/api/quiz/generate`, {
      topic,
      difficulty,
      studentType,
    });
    return res.data.quiz; // return the quiz array
  } catch (err) {
    console.error("Frontend quiz API error:", err.message);
    throw new Error("Check your backend connection");
  }
};
