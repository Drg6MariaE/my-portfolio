import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToHashElement() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return null;
}
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <ScrollToHashElement />
    </Router>
  );
}

export default App;
