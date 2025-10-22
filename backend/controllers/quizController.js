const express = require("express");
const axios = require("axios");
require("dotenv").config();

const router = express.Router();

router.post("/generate", async (req, res) => {
  const { topic, difficulty, studentType } = req.body;

  const prompt = `
Generate a ${difficulty} quiz on "${topic}" for ${studentType} students.
- Include 5 multiple-choice questions.
- Each question should have 4 options (A, B, C, D) and one correct answer.
- Output in JSON format like:
[
  {"question": "...", "options": ["A","B","C","D"], "answer": "A"}
]
`;

  try {
    const response = await axios.post(
      `https://router.huggingface.co/hf-inference/google/flan-t5-small`,
      { inputs: prompt },
      {
        headers: {
          Authorization: `Bearer ${process.env.HF_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    // Hugging Face returns text in a "generated_text" field
    const generatedText = response.data?.generated_text;

    if (!generatedText) {
      return res.status(500).json({ error: "Hugging Face returned empty response" });
    }

    // Try to parse JSON safely
    let quiz;
    try {
      quiz = JSON.parse(generatedText);
    } catch {
      // fallback: return as single question if parsing fails
      quiz = [{ question: generatedText, options: [], answer: "" }];
    }

    res.json({ quiz });
  } catch (err) {
    console.error("Hugging Face API error:", err.response?.status, err.response?.data || err.message);
    res.status(500).json({ error: "Failed to generate quiz from Hugging Face" });
  }
});

module.exports = router;
