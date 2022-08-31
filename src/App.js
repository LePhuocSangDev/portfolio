import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Work from "./components/Work";
import { Routes, Route } from "react-router-dom";
import { Loader } from "./animation/RiveAnimation";
import { useEffect, useState } from "react";

function App() {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1250);
  }, []);
  return (
    <div className={`${loader || "App dark:border-white"}`}>
      {loader && <Loader />}
      {!loader && (
        <div className="dark:bg-black dark:text-white">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
