import React from "react";
import { Shield, Award, Users, Wrench, Leaf, AlertTriangle, Star, CheckCircle } from "lucide-react";
import eco from '../assets/cars.jpg';
import bus from '../assets/bus.jpg';
import bts from '../assets/bts.jpg';
import sdn from '../assets/car6.png';
import suv from '../assets/carimg.png';

const fleetTypes = [
  { name: "Economy", img: eco, gradient: "from-blue-500 to-cyan-500", bgGradient: "from-blue-50 to-cyan-50" },
  { name: "Sedan", img: suv, gradient: "from-purple-500 to-pink-500", bgGradient: "from-purple-50 to-pink-50" },
  { name: "SUV", img: sdn, gradient: "from-green-500 to-teal-500", bgGradient: "from-green-50 to-teal-50" },
  { name: "Tempo Traveller", img: bts, gradient: "from-orange-500 to-red-500", bgGradient: "from-orange-50 to-red-50" },
  { name: "Bus", img: bus, gradient: "from-indigo-500 to-purple-500", bgGradient: "from-indigo-50 to-purple-50" },
];

const qualityStandards = [
  "Vehicle Statutory Compliances",
  "Driver Statutory Compliances",
  "Regular Quality Check of Fleet",
  "Regular Driver Training",
  "Eco-friendly & sustainable fleet upgrades",
  "Emergency-response trained chauffeurs",
];

const getStandardIcon = (standard) => {
  if (standard.includes("Vehicle") && standard.includes("Compliances")) return Shield;
  if (standard.includes("Driver") && standard.includes("Compliances")) return Users;
  if (standard.includes("Quality Check")) return Award;
  if (standard.includes("Training")) return Users;
  if (standard.includes("Eco-friendly")) return Leaf;
  if (standard.includes("Emergency")) return AlertTriangle;
  return CheckCircle;
};

export default function OurFleet() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50">
      {/* Background Pattern - Responsive */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-5 w-16 h-16 sm:top-15 sm:left-8 sm:w-24 sm:h-24 lg:top-20 lg:left-10 lg:w-32 lg:h-32 bg-orange-200/20 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-10 w-12 h-12 sm:top-32 sm:right-15 sm:w-18 sm:h-18 lg:top-40 lg:right-20 lg:w-24 lg:h-24 bg-yellow-200/25 rounded-full animate-bounce"></div>
        <div className="absolute bottom-16 left-1/4 w-10 h-10 sm:w-15 sm:h-15 lg:bottom-32 lg:w-20 lg:h-20 bg-orange-300/15 rounded-full animate-ping"></div>
        <div className="absolute bottom-10 right-1/3 w-14 h-14 sm:w-20 sm:h-20 lg:bottom-20 lg:w-28 lg:h-28 bg-yellow-300/20 rounded-full animate-pulse"></div>
      </div>

      <div className="relative py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-20">
        <div className="max-w-6xl mx-auto">
          {/* Enhanced Header - Responsive */}
          <div className="text-center p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl lg:rounded-4xl relative bg-gradient-to-br from-amber-400/30 via-orange-400/30 to-red-400/30 mt-6 sm:mt-8 lg:mt-10 mb-8 sm:mb-12 lg:mb-16">

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-center bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent mb-4 sm:mb-6">
              Our Fleet              
            </h2>
            
            {/* Description - Responsive positioning */}
            <div className="bg-white/80 backdrop-blur-sm w-full max-w-4xl mx-auto mt-6 sm:mt-8 lg:absolute lg:top-[140px] lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg">
              <p className="text-gray-600 text-center leading-relaxed text-sm sm:text-base">
                With over 20 years of experience in transport solutions, we maintain a
                wide range of owned fleet to meet diverse customer needs. Our
                chauffeurs are professionally trained in safe driving, customer
                interaction, and hygiene practices. We strive to deliver comfort,
                safety, and trust in every journey.
              </p>
            </div>
          </div>

          {/* Enhanced Fleet Categories - Responsive */}
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mt-4 sm:mt-8 lg:mt-[140px] gap-4 sm:gap-6 mb-8 sm:mb-12 lg:mb-16">
            {fleetTypes.map((fleet, index) => (
              <div
                key={index}
                className={`group relative bg-gradient-to-br ${fleet.bgGradient} rounded-2xl sm:rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/50`}
              >
                {/* Background decorative elements - Responsive */}
                <div className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-white/20 rounded-full -translate-y-6 translate-x-6 sm:-translate-y-8 sm:translate-x-8 lg:-translate-y-10 lg:translate-x-10 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="absolute bottom-0 left-0 w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-white/15 rounded-full translate-y-5 -translate-x-5 sm:translate-y-6 sm:-translate-x-6 lg:translate-y-8 lg:-translate-x-8 group-hover:scale-125 transition-transform duration-700"></div>
                
                <div className="relative z-10 p-3 sm:p-4">
                  {/* Image Container */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 mb-3 sm:mb-4 shadow-inner">
                    <img
                      src={fleet.img}
                      alt={fleet.name}
                      className="w-full h-20 sm:h-24 lg:h-32 object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  
                  {/* Fleet Name */}
                  <div className="text-center">
                    <div className={`inline-flex items-center gap-1 sm:gap-2 bg-gradient-to-r ${fleet.gradient} px-2 py-1 sm:px-3 sm:py-1.5 lg:px-4 lg:py-2 rounded-full shadow-lg mb-2`}>
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full animate-pulse"></div>
                      <h3 className="text-xs sm:text-sm font-semibold text-white">
                        {fleet.name}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Quality Standards - Responsive */}
          <div className="relative bg-gradient-to-br from-yellow-100 via-white to-orange-100 rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 overflow-hidden border border-white/50">
            {/* Background decorative elements - Responsive */}
            <div className="absolute top-0 right-0 w-20 h-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-gradient-to-br from-yellow-200/30 to-orange-200/30 rounded-full -translate-y-10 translate-x-10 sm:-translate-y-16 sm:translate-x-16 lg:-translate-y-20 lg:translate-x-20"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-orange-200/20 to-yellow-200/20 rounded-full translate-y-8 -translate-x-8 sm:translate-y-12 sm:-translate-x-12 lg:translate-y-16 lg:-translate-x-16"></div>
            
            <div className="relative z-10">
              {/* Quality Standards Header - Responsive */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-lg">
                  <Award className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-xl sm:text-2xl font-semibold text-yellow-600 mb-1 sm:mb-2">
                    Our Quality Standards
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">Excellence in every aspect of our service</p>
                </div>
              </div>

              {/* Enhanced Standards Grid - Responsive */}
              <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-inner">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 text-gray-700">
                  {qualityStandards.map((standard, i) => {
                    const StandardIcon = getStandardIcon(standard);
                    return (
                      <li
                        key={i}
                        className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg sm:rounded-xl hover:bg-white/70 transition-all duration-300 group/item border border-gray-100/50"
                      >
                        <div className="bg-green-100 p-1.5 sm:p-2 rounded-md sm:rounded-lg group-hover/item:scale-110 transition-transform duration-200 flex-shrink-0">
                          <StandardIcon className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                        </div>
                        <span className="group-hover/item:text-gray-800 transition-colors font-medium text-sm sm:text-base">
                          {standard}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>

          {/* Enhanced Stats Section - Responsive */}
          <div className="mt-8 sm:mt-12 lg:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-2xl sm:text-3xl font-bold text-orange-500 mb-1 sm:mb-2">20+</div>
              <div className="text-gray-600 font-medium text-xs sm:text-sm lg:text-base">Years Experience</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-2xl sm:text-3xl font-bold text-yellow-500 mb-1 sm:mb-2">500+</div>
              <div className="text-gray-600 font-medium text-xs sm:text-sm lg:text-base">Fleet Size</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-2xl sm:text-3xl font-bold text-green-500 mb-1 sm:mb-2">100%</div>
              <div className="text-gray-600 font-medium text-xs sm:text-sm lg:text-base">Compliance</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-2xl sm:text-3xl font-bold text-blue-500 mb-1 sm:mb-2">24/7</div>
              <div className="text-gray-600 font-medium text-xs sm:text-sm lg:text-base">Support</div>
            </div>
          </div>

          {/* CTA Section - Responsive */}
          <div className="mt-8 sm:mt-12 lg:mt-16 bg-gradient-to-r from-orange-500 to-yellow-600 rounded-2xl sm:rounded-3xl p-8 sm:p-10 lg:p-12 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-white/10 backdrop-blur-sm"></div>
            <div className="absolute -top-5 -right-5 w-20 h-20 sm:-top-8 sm:-right-8 sm:w-32 sm:h-32 lg:-top-10 lg:-right-10 lg:w-40 lg:h-40 bg-white/10 rounded-full"></div>
            <div className="absolute -bottom-5 -left-5 w-16 h-16 sm:-bottom-8 sm:-left-8 sm:w-24 sm:h-24 lg:-bottom-10 lg:-left-10 lg:w-32 lg:h-32 bg-white/10 rounded-full"></div>
            
            <div className="relative z-10">
              <Wrench className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-auto mb-4 sm:mb-6 text-white animate-pulse" />
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
                Experience Our Premium Fleet
              </h3>
              <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 text-white/90 max-w-2xl mx-auto px-2 sm:px-0">
                Book any vehicle from our extensive fleet and experience the difference quality makes
              </p>
              <button className="bg-white text-orange-600 px-6 py-3 sm:px-8 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Book Your Ride Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}