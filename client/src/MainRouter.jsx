/**
 * Defines the site's page routes.
 * Renders the Header above the routes so it appears on every page, then
 * shows the matching page component for the current URL:
 * "/" (Home), "/about", "/projects", "/services", "/references", "/contact".
 *
 * @returns {JSX.Element} The header and the active page
 */


import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Services from "./components/Services";
import References from "./components/References";
import Contact from "./components/Contact";

const MainRouter = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/references" element={<References />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default MainRouter;