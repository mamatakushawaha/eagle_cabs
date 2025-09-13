import React from "react";
import car from "../assets/carimg.png";

export default function HeroSection() {
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
      <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-yellow-200 opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 -right-20 w-96 h-96 rounded-full bg-amber-200 opacity-15 blur-3xl animate-ping"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-7xl px-6 lg:px-12">

        {/* Left Text */}
        <div className=" text-center lg:text-left text-gray-900">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Smooth Drives <br />
            with <span className="text-yellow-600">Premium Rentals</span>
          </h1>
          <p className="text-gray-800 text-lg md:text-xl mb-8 max-w-md mx-auto lg:mx-0">
            Rent your dream car, travel in style, and enjoy exclusive offers for a perfect journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-lg">
              See All Fleet
            </button>
            <button className="border border-yellow-600 text-yellow-600 px-8 py-4 rounded-full font-semibold hover:bg-yellow-600 hover:text-white transition-all">
              Book Now
            </button>
          </div>
        </div>


        <div className="w-[500px] h-[500px] right-[280px] top-1/2  absolute  transform translate-x-1/2 -translate-y-1/2">
          <img src={car} alt="car" className="w-full h-full  object-contain" />
        </div>

      </div>

    </section >
  );
}
