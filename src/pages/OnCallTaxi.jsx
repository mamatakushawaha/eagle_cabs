import React from "react";
import { PhoneCall, ShieldCheck, Car, Clock, Star, Users } from "lucide-react";
import img from "../assets/back.jpg";
export default function OnCallTaxi() {
  const fleet = [
    {
      category: "Economy Segment",
      vehicles:
        "Tata Indica, Hyundai Santro, Maruti Alto, Tata Indigo, Mahindra Logan/Verito, and many more",
      description: "Perfect for daily commuting and budget-friendly travel with essential comfort features.",
    },
    {
      category: "Corporate Segment",
      vehicles:
        "Skoda Superb, Toyota Camry, Honda Accord, Hyundai Sonata, Volkswagen, Honda Civic, Toyota Corolla, Toyota Altis, Skoda Octavia, Ford Fiesta, Hyundai Verna, Maruti SX4, Honda City, Hyundai Accent, Toyota Etios, and many more",
      description: "Premium sedans designed for business professionals who value style, comfort, and reliability.",
    },
    {
      category: "SUV / MUV",
      vehicles:
        "Land Rover, Toyota Fortuner, Toyota Innova, Tata Sumo, Mahindra Xylo, Mahindra Scorpio, and many more",
      description: "Spacious vehicles ideal for family trips, group travel, and long-distance journeys with extra luggage space.",
    },
    {
      category: "Luxury Segment",
      vehicles:
        "Mercedes Benz C Class / E Class, BMW 3 Series / 5 Series / 7 Series, and many more",
      description: "Experience ultimate luxury with premium interiors, advanced technology, and world-class comfort.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-100 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-br from-orange-200 to-amber-200 rounded-full blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute bottom-32 left-16 w-32 h-32 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full blur-2xl opacity-60"></div>
        <div className="absolute top-2/3 right-1/4 w-24 h-24 bg-gradient-to-br from-amber-300 to-orange-300 rounded-full blur-xl opacity-40"></div>
      </div>

      <div className="relative px-6 py-16 max-w-6xl mx-auto">
        {/* Hero Title Section */}
        <div className="text-center mt-10 mb-20">
          <div className="inline-block">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 mb-2 leading-tight">
              On Call <span className="text-orange-500">Taxi</span>
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto rounded-full mb-4"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Your trusted transportation partner for over two decades, delivering excellence one ride at a time.
            </p>
          </div>
        </div>

        {/* Intro Section */}
        <div className="grid lg:grid-rows-2  items-center mb-10">
          {/* Left: Content Card */}
          <div className="relative">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-orange-100 hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
              {/* Content */}
              <div className="space-y-6 mb-8">
                <p className="text-gray-700 leading-relaxed text-lg">
                  Eagle Cabs is a trusted name in providing{" "}
                  <strong className="text-orange-600">On Call Taxi Services</strong> within Delhi/NCR for the last
                  20 years, offering world-class comfort and luxury for our valued
                  customers.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  With our wide range of vehicles, we ensure{" "}
                  <strong className="text-orange-600">comfortable, safe, and economical</strong> travel experiences
                  every time you ride with us.
                </p>
                <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-2xl border-l-4 border-orange-500">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Our commitment to punctuality and customer satisfaction has made us the preferred choice for thousands of regular customers across the region.
                  </p>
                </div>
              </div>

              {/* Highlights Grid */}
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="group hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center space-x-3 p-3 rounded-xl hover:bg-white/50 transition-all duration-300">
                      <div className="bg-gradient-to-br from-orange-500 to-amber-500 p-2 rounded-full group-hover:scale-110 transition-transform duration-300">
                        <ShieldCheck className="text-white w-5 h-5" />
                      </div>
                      <span className="text-gray-700 font-medium group-hover:text-gray-800">Safe & Reliable</span>
                    </div>
                  </div>
                  
                  <div className="group hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center space-x-3 p-3 rounded-xl hover:bg-white/50 transition-all duration-300">
                      <div className="bg-gradient-to-br from-orange-500 to-amber-500 p-2 rounded-full group-hover:scale-110 transition-transform duration-300">
                        <Car className="text-white w-5 h-5" />
                      </div>
                      <span className="text-gray-700 font-medium group-hover:text-gray-800">Wide Fleet Range</span>
                    </div>
                  </div>
                  
                  <div className="group hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center space-x-3 p-3 rounded-xl hover:bg-white/50 transition-all duration-300">
                      <div className="bg-gradient-to-br from-orange-500 to-amber-500 p-2 rounded-full group-hover:scale-110 transition-transform duration-300">
                        <PhoneCall className="text-white w-5 h-5" />
                      </div>
                      <span className="text-gray-700 font-medium group-hover:text-gray-800">On-Call Availability</span>
                    </div>
                  </div>
                  
                  <div className="group hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center space-x-3 p-3 rounded-xl hover:bg-white/50 transition-all duration-300">
                      <div className="bg-gradient-to-br from-orange-500 to-amber-500 p-2 rounded-full group-hover:scale-110 transition-transform duration-300">
                        <Car className="text-white w-5 h-5" />
                      </div>
                      <span className="text-gray-700 font-medium group-hover:text-gray-800">Luxury & Comfort</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Image Section */}
          <div className="relative">
            <div className="relative group">
              {/* Main Image Container */}
              <div className="bg-gradient-to-br from-orange-100 to-amber-100 rounded-3xl p-6 shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500">
                <div className="relative">
                  {/* Placeholder for taxi image */}
                  <div className="w-full h-96 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl flex items-center justify-center relative overflow-hidden">
                    {/* <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-amber-600/20"></div> */}
                    <div className="relative w-full h-full text-center">
                      {/* <PhoneCall className="w-24 h-24 text-gray-400 mx-auto mb-4" /> */}
                     <img src={img} className="w-full h-full object-cover"/>
                    </div>
                  </div>
                  
                  {/* Floating Badge */}
                  <div className="absolute top-6 left-6 bg-gradient-to-r from-orange-600 to-amber-600 text-white px-6 py-3 rounded-2xl flex items-center space-x-3 shadow-xl backdrop-blur-sm border border-white/20 group-hover:scale-105 transition-transform duration-300">
                    <PhoneCall className="w-5 h-5" />
                    <span className="font-semibold">20+ Years Service</span>
                  </div>
                </div>
              </div>

              {/* Floating Stats Cards */}
              <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-orange-100 hover:scale-105 transition-transform duration-300">
                <div className="text-center">
                  <Clock className="w-6 h-6 text-orange-600 mx-auto mb-1" />
                  <div className="text-sm font-semibold text-orange-600">24/7</div>
                  <div className="text-xs text-gray-600">Available</div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-orange-100 hover:scale-105 transition-transform duration-300">
                <div className="text-center">
                  <Star className="w-6 h-6 text-orange-600 mx-auto mb-1" />
                  <div className="text-sm font-semibold text-orange-600">Premium</div>
                  <div className="text-xs text-gray-600">Service</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Fleet Section */}
        <div className="bg-white/90 backdrop-blur-sm shadow-2xl rounded-3xl p-10 border border-orange-100">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600 mb-4">
              Glance at Our Fleet
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Choose from our extensive range of vehicles, each maintained to the highest standards and equipped with modern amenities for your comfort.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto rounded-full mt-4"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {fleet.map((item, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-orange-50 to-amber-50 p-6 border border-orange-100 rounded-2xl hover:shadow-xl hover:scale-[1.02] transition-all duration-500"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-gradient-to-br from-orange-500 to-amber-500 p-2 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Car className="text-white w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-orange-600 group-hover:text-orange-700 transition-colors duration-300">
                    {item.category}
                  </h3>
                </div>
                <p className="text-gray-700 text-sm mb-3 leading-relaxed">{item.vehicles}</p>
                <p className="text-gray-600 text-sm italic border-l-3 border-orange-300 pl-3">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          
          {/* Additional Features Section */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl hover:scale-105 transition-transform duration-300">
              <Users className="w-10 h-10 text-orange-600 mx-auto mb-3" />
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Experienced Drivers</h4>
              <p className="text-gray-600 text-sm">Professional, courteous drivers with extensive knowledge of Delhi/NCR routes.</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl hover:scale-105 transition-transform duration-300">
              <ShieldCheck className="w-10 h-10 text-orange-600 mx-auto mb-3" />
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Safety First</h4>
              <p className="text-gray-600 text-sm">Regular vehicle maintenance, GPS tracking, and comprehensive insurance coverage.</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl hover:scale-105 transition-transform duration-300">
              <Clock className="w-10 h-10 text-orange-600 mx-auto mb-3" />
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Quick Response</h4>
              <p className="text-gray-600 text-sm">Average pickup time of under 15 minutes with real-time tracking and updates.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-32 right-1/4 w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-amber-400 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-yellow-400 rounded-full animate-bounce" style={{animationDelay: '1.5s'}}></div>
      </div>
    </div>
  );
}