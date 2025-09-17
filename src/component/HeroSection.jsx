import React from "react";
import car from "../assets/carimg.png";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {

  const navigate=useNavigate();  
  return (
    <section className="relative w-full mx-auto min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Gradient Background */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          background: "linear-gradient(50deg, #F5E0C3, #FFF3E0)"
        }}
      />
      
      {/* Optional soft overlay for text contrast */}
      <div className="absolute inset-0 bg-white/10"></div>
      
      {/* Soft floating glows */}
      <div className="absolute -top-20 -left-20 w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 rounded-full bg-yellow-200 opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 -right-20 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full bg-amber-200 opacity-15 blur-3xl animate-ping"></div>
      
      {/* Hero Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl py-12 sm:py-16 lg:py-20 px-10 sm:px-10 lg:px-8">
        
        {/* Left Text */}
        <div className="text-center sm:w-[330px] lg:w-full mt-10 lg:text-left text-gray-900 mb-8 lg:mb-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            Smooth Drives <br />
            with <span className="text-yellow-600">Premium Rentals</span>
          </h1>
          <p className="text-gray-800 text-sm  md:text-xl mb-6 sm:mb-6 max-w-md mx-auto lg:mx-0">
            Rent your dream car, travel in style, and enjoy exclusive offers for a perfect journey.
          </p>
          <div className=" w-full flex justify-around p-5 mt-10 gap-6  lg:justify-start">
            <button onClick={() => navigate("/fleet")} className="bg-yellow-600 w-[150px] hover:bg-yellow-700 text-white px-4 py-3 rounded-full font-semibold text-base  transition-all transform hover:scale-105 shadow-lg">
              See All Fleet
            </button>
            <button className="border w-[150px] border-yellow-600 text-yellow-600 px-4 py-3  rounded-full font-semibold hover:bg-yellow-600 hover:text-white transition-all">
              Book Now
            </button>
          </div>
        </div>
        
        {/* Car Image - Responsive positioning */}
        <div className="relative lg:absolute w-80 h-80 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px] lg:right-[200px] xl:right-[280px] lg:top-1/2 lg:transform lg:translate-x-1/2 lg:-translate-y-1/2  lg:mt-0">
          <img src={car} alt="car" className="w-full h-full object-contain" />
        </div>
        
      </div>
    </section>
  );
}