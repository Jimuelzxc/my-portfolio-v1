import React from "react";
import Navbar from "./components/Navbar";
import Introduction from "./sections/Introduction";
import AboutSkillsTools from "./sections/AboutSkillsTools";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Introduction />
      <AboutSkillsTools />
      <Projects />      
      <Contact />
    </React.Fragment> 
  );
}

export default App;
