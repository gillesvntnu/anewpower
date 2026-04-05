import React, { useEffect } from "react";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Zonnepanelen from "./components/pages/Zonnepanelen";
import Thuisbatterijen from "./components/pages/Thuisbatterijen";
import Laadpalen from "./components/pages/Laadpalen";
import "@fortawesome/fontawesome-free/css/all.min.css";

function ScrollToTop(): null {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App(): JSX.Element {
  return (
    <HashRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/zonnepanelen" element={<Zonnepanelen />} />
        <Route path="/thuisbatterijen" element={<Thuisbatterijen />} />
        <Route path="/laadpalen" element={<Laadpalen />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
