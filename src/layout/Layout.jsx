import React from "react";
import { useLocation, Outlet } from "react-router-dom";
import Header from "../component/Header";
import HeroSection from "../component/HeroSection";
import Services from "../component/Services";
import Footer from "../component/Footer";

const Layout = () => {
  const location = useLocation();

  return (
    <div className="relative flex flex-col min-h-screen">
      {/* Background Image */}
      
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md shadow-md">
        <Header />
      </header>

      {/* Hero & Services on Home */}
      {location.pathname === "/" && (
        <>
          <HeroSection />
          <Services />
        </>
      )}

      {/* Page content */}
      <main className="relative z-10 flex-1 px-4 sm:px-6 lg:px-8 xl:px-12 min-h-[calc(100vh-200px)]">
        {/* Outlet renders nested routes */}
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;