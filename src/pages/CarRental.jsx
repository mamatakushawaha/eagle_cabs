import React from "react";
import { Car, CheckCircle } from "lucide-react";
import img from "../assets/car1.png";

export default function CarRental() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-100 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 right-16 w-36 h-36 bg-gradient-to-br from-orange-200 to-amber-200 rounded-full blur-3xl opacity-60 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-28 h-28 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full blur-2xl opacity-50"></div>
        <div className="absolute top-2/3 right-1/3 w-24 h-24 bg-gradient-to-br from-amber-300 to-orange-300 rounded-full blur-xl opacity-40"></div>
      </div>

      <div className="relative px-6 py-10 max-w-7xl mx-auto">
        {/* Hero Title Section */}
        <div className="text-center mb-6 mt-10">
          <div className="inline-block">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 mb-6 leading-tight">
              Car <span className="text-orange-500">Rental</span>
            </h1>
            {/* <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto rounded-full"></div> */}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content Card */}
          <div className="relative">
            <div className="backdrop-blur-sm rounded-3xl p-10  border border-orange-100 hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
              {/* Content */}
              <div className="space-y-6 mb-8">
                <p className="text-gray-700 leading-relaxed text-lg">
                  India is a perfect market for choosing any class of vehicle. With
                  our wide range of fleet we can cater to any type of customer
                  requirement to any place with any number of passengers. Our wide
                  network ensures ease of availability, comfort and a safe mode of
                  travelling.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Whether it's a business trip, a family vacation, or daily commuting,
                  we provide reliable and affordable car rental solutions tailored to
                  your needs.
                </p>
              </div>

              {/* Highlights Section */}
              <div className="rounded-2xl p-2">
                <div className="space-y-2">
                  <div className="group hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center space-x-3 p-3 rounded-xl hover:bg-white/50 transition-all duration-300">
                      <div className="bg-gradient-to-br from-orange-500 to-amber-500 p-1.5 rounded-full group-hover:scale-110 transition-transform duration-300">
                        <CheckCircle className="text-white w-4 h-4" />
                      </div>
                      <span className="text-gray-700 group-hover:text-gray-800 transition-colors duration-300">Wide range of Economy & Luxury cars</span>
                    </div>
                  </div>
                  
                  <div className="group hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center space-x-3 p-3 rounded-xl hover:bg-white/50 transition-all duration-300">
                      <div className="bg-gradient-to-br from-orange-500 to-amber-500 p-1.5 rounded-full group-hover:scale-110 transition-transform duration-300">
                        <CheckCircle className="text-white w-4 h-4" />
                      </div>
                      <span className="text-gray-700 group-hover:text-gray-800 transition-colors duration-300">Professional chauffeurs</span>
                    </div>
                  </div>
                  
                  <div className="group hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center space-x-3 p-3 rounded-xl hover:bg-white/50 transition-all duration-300">
                      <div className="bg-gradient-to-br from-orange-500 to-amber-500 p-1.5 rounded-full group-hover:scale-110 transition-transform duration-300">
                        <CheckCircle className="text-white w-4 h-4" />
                      </div>
                      <span className="text-gray-700 group-hover:text-gray-800 transition-colors duration-300">Comfort & safety guaranteed</span>
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
                  {/* Placeholder for car image */}
                  <div className="w-full h-96  rounded-2xl flex items-center justify-center relative overflow-hidden">
                    {/* <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-amber-600/20"></div> */}
                    <div className="relative z-10 text-center">
                      {/* <Car className="w-24 h-24 text-gray-400 mx-auto mb-4" /> */}
                      <img src={img} alt="Car" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  
                  {/* Floating Badge */}
                  <div className="absolute top-6 left-6 bg-gradient-to-r from-orange-600 to-amber-600 text-white px-6 py-3 rounded-2xl flex items-center space-x-3 shadow-xl backdrop-blur-sm border border-white/20 group-hover:scale-105 transition-transform duration-300">
                    <Car className="w-5 h-5" />
                    <span className="font-semibold">Premium Fleet</span>
                  </div>
                </div>
              </div>

              {/* Floating Feature Cards */}
              {/* <div className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-orange-100 hover:scale-105 transition-transform duration-300">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-1">
                    <Car className="w-5 h-5 text-orange-600" />
                  </div>
                  <div className="text-sm font-semibold text-orange-600">Economy</div>
                  <div className="text-xs text-gray-600">& Luxury</div>
                </div>
              </div> */}

              {/* <div className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-orange-100 hover:scale-105 transition-transform duration-300">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-1">
                    <CheckCircle className="w-5 h-5 text-orange-600" />
                  </div>
                  <div className="text-sm font-semibold text-orange-600">Safe</div>
                  <div className="text-xs text-gray-600">Travel</div>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        {/* Additional Features Section */}
        <div className="mt-16 bg-white/90 backdrop-blur-sm shadow-2xl rounded-3xl p-10 border border-orange-100">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600 mb-4">
              Why Choose Our Car Rental Service
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We go beyond traditional car rental to provide comprehensive transportation solutions with exceptional service standards.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto rounded-full mt-4"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl hover:scale-105 transition-transform duration-300">
              <div className="bg-gradient-to-br from-orange-500 to-amber-500 p-3 rounded-2xl w-fit mx-auto mb-4">
                <Car className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Diverse Fleet Options</h3>
              <p className="text-gray-600">From compact economy cars to luxurious sedans and spacious SUVs, find the perfect vehicle for every occasion and budget.</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl hover:scale-105 transition-transform duration-300">
              <div className="bg-gradient-to-br from-orange-500 to-amber-500 p-3 rounded-2xl w-fit mx-auto mb-4">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Quality Assurance</h3>
              <p className="text-gray-600">Regular maintenance, thorough inspections, and GPS tracking ensure you receive vehicles in perfect condition every time.</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl hover:scale-105 transition-transform duration-300">
              <div className="bg-gradient-to-br from-orange-500 to-amber-500 p-3 rounded-2xl w-fit mx-auto mb-4">
                <Car className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Flexible Booking</h3>
              <p className="text-gray-600">Easy online booking, instant confirmations, and flexible rental periods from hourly to monthly packages to suit your schedule.</p>
            </div>
          </div>

          {/* Service Highlights */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div className="bg-gradient-to-br from-orange-100 to-amber-100 p-4 rounded-xl text-center hover:scale-105 transition-transform duration-300">
              <div className="text-2xl font-bold text-orange-600 mb-1">24/7</div>
              <div className="text-sm text-gray-700">Customer Support</div>
            </div>
            
            <div className="bg-gradient-to-br from-orange-100 to-amber-100 p-4 rounded-xl text-center hover:scale-105 transition-transform duration-300">
              <div className="text-2xl font-bold text-orange-600 mb-1">100+</div>
              <div className="text-sm text-gray-700">Vehicle Options</div>
            </div>
            
            <div className="bg-gradient-to-br from-orange-100 to-amber-100 p-4 rounded-xl text-center hover:scale-105 transition-transform duration-300">
              <div className="text-2xl font-bold text-orange-600 mb-1">50+</div>
              <div className="text-sm text-gray-700">Pickup Locations</div>
            </div>
            
            <div className="bg-gradient-to-br from-orange-100 to-amber-100 p-4 rounded-xl text-center hover:scale-105 transition-transform duration-300">
              <div className="text-2xl font-bold text-orange-600 mb-1">15min</div>
              <div className="text-sm text-gray-700">Average Response</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-40 right-1/4 w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-1 h-1 bg-amber-400 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-yellow-400 rounded-full animate-bounce" style={{animationDelay: '1.5s'}}></div>
      </div>
    </div>
  );
}