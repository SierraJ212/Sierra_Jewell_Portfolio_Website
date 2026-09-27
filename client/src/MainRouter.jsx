import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Refrences from "./components/References";
import Header from "./components/Header";

const MainRouter = () => {
  return (
    <div>
        <Header />
        <Layout />
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/education" element={<Contact />} />
        <Route exact path="/project" element={<Services />} />
        <Route exact path="/contact" element={<Projects />} />
        <Route exact path="/contact" element={<Refrences />} />
      </Routes>
    </div>
  );
};
export default MainRouter;
