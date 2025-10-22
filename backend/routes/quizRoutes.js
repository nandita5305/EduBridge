// routes/quizRoutes.js
const express = require("express");
const axios = require("axios");
require("dotenv").config();

const router = express.Router();

router.post("/generate", async (req, res) => {
  const { topic, difficulty, studentType } = req.body;

  const prompt = `
Generate a ${difficulty} quiz on "${topic}" for ${studentType} students.
- Include 5 multiple-choice questions.
- Each question should have 4 options and one correct answer.
- Return output in JSON like:
[
  {"question":"...","options":["A","B","C","D"],"answer":"A"}
]
`;

  try {
    const response = await axios.post(
      "https://router.huggingface.co/hf-inference/google/flan-t5-small",
      { inputs: "Hello World" },
      {
        headers: {
          Authorization: `Bearer ${process.env.HF_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
console.log(response.data);

    // safe parsing
    let quiz = [];
    try {
      quiz = JSON.parse(response.data[0]?.generated_text || "[]");
    } catch {
      console.error("❌ Failed to parse HF output:", response.data);
      quiz = [{ question: "Error generating quiz", options: [], answer: "" }];
    }

    res.json({ quiz });
  } catch (err) {
    console.error("❌ Quiz generation error:", err.response?.status, err.response?.data || err.message);
    res.status(500).json({ error: "Failed to generate quiz" });
  }
});

module.exports = router;
