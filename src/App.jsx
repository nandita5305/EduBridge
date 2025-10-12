import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LearningModes from "./components/LearningModes";

const App = () => {

  const[theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light")

  return (
    <div className="dark:bg-black relative">
      <Navbar theme={theme} setTheme={setTheme}/>
      <Hero/>
      <LearningModes/>
    </div>
  )
}

export default App