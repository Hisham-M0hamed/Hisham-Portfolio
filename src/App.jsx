import React from "react";

import Header from "./component/header/header";
import Home from "./component/Home/Home";
import Skills from "./component/skills/Skills";
import Project from "./component/projects/Project";
import Footer from "./component/footer/Footer";
import Contact from "./component/contact/Contact";
function App() {
  return (
    <div className="Container">
      <Header />
      <Home />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
