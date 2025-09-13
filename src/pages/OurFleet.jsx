import React from "react";
import { Shield, Award, Users, Wrench, Leaf, AlertTriangle, Star, CheckCircle } from "lucide-react";
import eco from '../assets/cars.jpg';
import bus from '../assets/bus.jpg';
import bts from '../assets/bts.jpg';
import sdn from '../assets/car6.png';
import suv from '../assets/carimg.png';
// Placeholder images - replace with your actual imports
// const eco = "https://via.placeholder.com/300x200?text=Economy+Car";
// const sdn = "https://via.placeholder.com/300x200?text=Sedan";
// const suv = "https://via.placeholder.com/300x200?text=SUV";
// const bus = "https://via.placeholder.com/300x200?text=Bus";
// const bts = "https://via.placeholder.com/300x200?text=Tempo+Traveller";

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
      {/* Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-200/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-yellow-200/25 rounded-full animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-orange-300/15 rounded-full animate-ping"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-yellow-300/20 rounded-full animate-pulse"></div>
      </div>

      <div className="relative py-16 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto">
          {/* Enhanced Header */}
          <div className="text-center p-10 rounded-4xl relative bg-gradient-to-br from-amber-400/30 via-orange-400/30 to-red-400/30 mt-10 mb-16">

            {/* Heading - Original Content */}
            <h2 className="text-4xl lg:text-5xl  font-bold text-center bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent mb-6">
              Our Fleet              
              
            </h2>
            
            {/* Original Description */}
            <div className="bg-white/80 backdrop-blur-sm w-5xl absolute top-[180px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl p-8 shadow-lg max-w-4xl mx-auto mb-12">
              <p className="text-gray-600 text-center leading-relaxed">
                With over 20 years of experience in transport solutions, we maintain a
                wide range of owned fleet to meet diverse customer needs. Our
                chauffeurs are professionally trained in safe driving, customer
                interaction, and hygiene practices. We strive to deliver comfort,
                safety, and trust in every journey.
              </p>
            </div>
          </div>

          {/* Enhanced Fleet Categories */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 mt-[140px] gap-6 mb-16">
            {fleetTypes.map((fleet, index) => (
              <div
                key={index}
                className={`group relative bg-gradient-to-br ${fleet.bgGradient} rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/50`}
              >
                {/* Background decorative elements */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/20 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/15 rounded-full translate-y-8 -translate-x-8 group-hover:scale-125 transition-transform duration-700"></div>
                
                <div className="relative z-10 p-4">
                  {/* Image Container */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 mb-4 shadow-inner">
                    <img
                      src={fleet.img}
                      alt={fleet.name}
                      className="w-full h-32 object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  
                  {/* Fleet Name */}
                  <div className="text-center">
                    <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${fleet.gradient} px-4 py-2 rounded-full shadow-lg mb-2`}>
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      <h3 className="text-sm font-semibold text-white">
                        {fleet.name}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Quality Standards */}
          <div className="relative bg-gradient-to-br from-yellow-100 via-white to-orange-100 rounded-3xl shadow-2xl p-10 overflow-hidden border border-white/50">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-yellow-200/30 to-orange-200/30 rounded-full -translate-y-20 translate-x-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-orange-200/20 to-yellow-200/20 rounded-full translate-y-16 -translate-x-16"></div>
            
            <div className="relative z-10">
              {/* Quality Standards Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-4 rounded-2xl shadow-lg">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-yellow-600 mb-2">
                    Our Quality Standards
                  </h3>
                  <p className="text-gray-600">Excellence in every aspect of our service</p>
                </div>
              </div>

              {/* Enhanced Standards Grid */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-inner">
                <ul className="grid sm:grid-cols-2 gap-4 text-gray-700">
                  {qualityStandards.map((standard, i) => {
                    const StandardIcon = getStandardIcon(standard);
                    return (
                      <li
                        key={i}
                        className="flex items-start gap-3 p-4 rounded-xl hover:bg-white/70 transition-all duration-300 group/item border border-gray-100/50"
                      >
                        <div className="bg-green-100 p-2 rounded-lg group-hover/item:scale-110 transition-transform duration-200">
                          <StandardIcon className="w-5 h-5 text-green-600" />
                        </div>
                        <span className="group-hover/item:text-gray-800 transition-colors font-medium">
                          {standard}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>

          {/* Enhanced Stats Section */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-3xl font-bold text-orange-500 mb-2">20+</div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-3xl font-bold text-yellow-500 mb-2">500+</div>
              <div className="text-gray-600 font-medium">Fleet Size</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-3xl font-bold text-green-500 mb-2">100%</div>
              <div className="text-gray-600 font-medium">Compliance</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-3xl font-bold text-blue-500 mb-2">24/7</div>
              <div className="text-gray-600 font-medium">Support</div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-r from-orange-500 to-yellow-600 rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-white/10 backdrop-blur-sm"></div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full"></div>
            
            <div className="relative z-10">
              <Wrench className="w-16 h-16 mx-auto mb-6 text-white animate-pulse" />
              <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                Experience Our Premium Fleet
              </h3>
              <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                Book any vehicle from our extensive fleet and experience the difference quality makes
              </p>
              <button className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Book Your Ride Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}