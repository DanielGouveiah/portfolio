import React from "react";
import "./App.css";

import { MediaStorage } from "./context/MediaContext";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./pages/Intro/Intro";
import Projects from "./pages/Projects/Projects";
import Contacts from "./pages/Contacts/Contacts";
import Footer from "./pages/Footer/Footer";
import About from "./pages/About/About";

function App() {
  return (
    <div className={`App`}>
      <MediaStorage>
        <Navbar />
        <Intro />
        <Projects />
        <Contacts />
        <About />
        <Footer />
      </MediaStorage>
    </div>
  );
}

export default App;
