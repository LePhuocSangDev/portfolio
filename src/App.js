import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Work from "./components/Work";
import { Routes, Route } from "react-router-dom";
import { Loader } from "./riveAnimation/Hello";
import { useEffect, useState } from "react";

function App() {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  }, []);
  return (
    <div className="App">
      {loader && <Loader />}
      {!loader && (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
