
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LearningModes from "./components/LearningModes";
import TrustIndicators from "./components/TrustIndicators";
import FeaturesSection from "./components/FeaturesSection";
import CourseCategories from "./components/CourseCategories";
import HowItWorks from "./components/HowItWorks";
import SuccessStories from "./components/SuccessStories";
import AuthAnimated from "./pages/AuthAnimated";
import VapiAssistant from "./components/VapiAssistant";
import QuizForm from "./components/QuizForm";
import QuizDisplay from "./components/QuizDisplay";
// import assets from "./assets/assets.js";

// import ThemeToggleBtn from "./ThemeToggleBtn";
// import { Link, useNavigate } from "react-router-dom";
import EduBridgeDashboard from "./components/EduBridgeProgressCharts";


function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const location = useLocation(); // ✅ get current route

  const [quiz, setQuiz] = useState(null);

  // ✅ hide navbar on auth (login/signup) page
  const hideNavbar = location.pathname === "/auth";

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {!hideNavbar && <Navbar theme={theme} setTheme={setTheme} />} {/* ✅ conditionally rendered */}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <LearningModes />
              <HowItWorks />
              <FeaturesSection />
              <CourseCategories />
              <SuccessStories />
              <TrustIndicators />
              {/* <VapiAssistant /> */}
            </>
          }
        />
        <Route path="/auth" element={<AuthAnimated />} />
        <Route path="/assistant" element={<VapiAssistant />} />
         <Route path="/quiz" element={<QuizForm setQuiz={setQuiz} />} />
  <Route path="/quiz/display" element={<QuizDisplay quiz={quiz} />} />
   <Route path="/progress" element={<EduBridgeDashboard dark={theme === "dark"} />} />
<Route path="/SuccessStories" element={<SuccessStories />} />
<Route path="/learning-modes" element={ <LearningModes />} />

      </Routes>
    </div>
  );
}

export default App;
