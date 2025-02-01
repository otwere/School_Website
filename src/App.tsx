import React from "react";
import { MemoryRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SchoolValues from "./components/SchoolValues";
import SchoolLevels from "./components/SchoolLevels";
import CBCSyllabus from "./components/CBCSyllabus";
import Classes from "./components/Classes";
import ClassroomSessions from "./components/ClassroomSessions";
import Activities from "./components/Activities";
import ClubsAndSocieties from "./components/ClubsAndSocieties";
import LeadershipMessages from "./components/LeadershipMessages";
import Transportation from "./components/Transportation";
import Leadership from "./components/Leadership";
import AdmissionsSection from "./components/AdmissionsSection";
import NewsAndEvents from "./components/NewsAndEvents";
import Footer from "./components/Footer";
import AdmissionForm from "./components/AdmissionForm";
import ContactPage from "./components/ContactPage";
import StaffPortal from "./components/StaffPortal";
import StudentPortal from "./components/StudentPortal";
import ParentPortal from "./components/ParentPortal";
import { AuthProvider } from "./components/context/AuthContext";
import LoginPage from "./components/LoginPage";
import ProtectedRoute from "./components/ProtectedRoute";
import "./index.css";
export function App() {
  return <AuthProvider>
      <Router>
        <div className="w-full min-h-screen bg-gray-50">
          <Navbar />
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/student-portal" element={<ProtectedRoute allowedRoles={["student"]}>
                  <StudentPortal />
                </ProtectedRoute>} />
            <Route path="/staff-portal" element={<ProtectedRoute allowedRoles={["staff"]}>
                  <StaffPortal />
                </ProtectedRoute>} />
            <Route path="/parent-portal" element={<ProtectedRoute allowedRoles={["parent"]}>
                  <ParentPortal />
                </ProtectedRoute>} />
            <Route path="/" element={<main className="w-full">
                  <Hero />
                  <SchoolValues />
                  <SchoolLevels />
                  <CBCSyllabus />
                  <Classes />
                  <ClassroomSessions />
                  <LeadershipMessages />
                  <Activities />
                  <ClubsAndSocieties />
                  <AdmissionsSection />
                  <NewsAndEvents />
                  <Transportation />
                  <Leadership />
                </main>} />
            <Route path="/admission-form" element={<AdmissionForm />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </AuthProvider>;
}