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
import AdminDashboard from "./components/AdminDashboard";
import ProjectList from "./components/admin/ProjectList";
import ProjectForm from "./components/admin/ProjectForm";
import ServiceList from "./components/admin/ServiceList";
import ServiceForm from "./components/admin/ServiceForm";
import ReferenceList from "./components/admin/ReferenceList";
import ReferenceForm from "./components/admin/ReferenceForm";
import UserList from "./components/admin/UserList";
import UserForm from "./components/admin/UserForm";

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
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/projects" element={<ProjectList />} />
        <Route path="/admin/projects/new" element={<ProjectForm />} />
        <Route path="/admin/projects/:id/edit" element={<ProjectForm />} />
        <Route path="/admin/services" element={<ServiceList />} />
        <Route path="/admin/services/new" element={<ServiceForm />} />
        <Route path="/admin/services/:id/edit" element={<ServiceForm />} />
        <Route path="/admin/references" element={<ReferenceList />} />
        <Route path="/admin/references/new" element={<ReferenceForm />} />
        <Route path="/admin/references/:id/edit" element={<ReferenceForm />} />
        <Route path="/admin/users" element={<UserList />} />
        <Route path="/admin/users/new" element={<UserForm />} />
        <Route path="/admin/users/:id/edit" element={<UserForm />} />
      </Routes>
    </div>
  );
};

export default MainRouter;