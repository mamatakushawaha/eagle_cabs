import React, { useState } from "react";
import { Car, CheckCircle, Phone, MapPin, Clock, Star, ArrowRight, Menu, X } from "lucide-react";
import car from "../assets/car.png"; // Placeholder image path    
export default function CarRental() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-100 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 right-16 w-36 h-36 bg-gradient-to-br from-orange-200 to-amber-200 rounded-full blur-3xl opacity-60 animate-pulse sm:w-24 sm:h-24 sm:top-20 sm:right-8"></div>
        <div className="absolute bottom-20 left-20 w-28 h-28 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full blur-2xl opacity-50 sm:w-20 sm:h-20 sm:bottom-10 sm:left-8"></div>
        <div className="absolute top-2/3 right-1/3 w-24 h-24 bg-gradient-to-br from-amber-300 to-orange-300 rounded-full blur-xl opacity-40 sm:w-16 sm:h-16"></div>
      </div>

      <div className="relative px-2 lg:px-6 lg:py-10 py-4 max-w-7xl mx-auto ">
        {/* Hero Title Section */}
        <div className="text-center mb-6 mt-3 lg:mt-10 sm:mt-4 sm:mb-2">
          <div className="inline-block">
            <h1 className="text-4xl md:text-5xl mt-8 sm:text-3xl font-heading font-semibold text-yellow-600 mb-6 sm:mb-4 leading-tight">
              Car <span className="text-yellow-600">Rental</span>
            </h1>
            <p className="lg:text-xl sm:text-sm text-gray-600 max-w-2xl mx-auto">
              Experience premium car rental services across India with our diverse fleet and professional service
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-5 sm:gap-4 md:gap-12 items-center">
          {/* Left: Content Card */}
          <div className="relative">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-4 sm:p-4 md:p-8 border border-orange-100 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
              {/* Content */}
              <div className="space-y-6 sm:space-y-4 mb-8 sm:mb-6">
                <p className="text-gray-700 leading-relaxed text-base lg:text-lg ">
                  India is a perfect market for choosing any class of vehicle. With
                  our wide range of fleet we can cater to any type of customer
                  requirement to any place with any number of passengers. Our wide
                  network ensures ease of availability, comfort and a safe mode of
                  travelling.
                </p>
                <p className="text-gray-700 leading-relaxed lg:text-lg text-base">
                  Whether it's a business trip, a family vacation, or daily commuting,
                  we provide reliable and affordable car rental solutions tailored to
                  your needs.
                </p>
              </div>

              {/* Highlights Section */}
              <div className="rounded-2xl p-2">
                <div className="lg:space-y-2 space-y-1">
                  <div className="group hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center lg:space-x-3 space-x-2 lg:p-3 p-2 rounded-xl hover:bg-white/50 transition-all duration-300">
                      <div className="bg-gradient-to-br from-orange-500 to-amber-500 p-1.5 sm:p-1 rounded-full group-hover:scale-110 transition-transform duration-300">
                        <CheckCircle className="text-white w-4 h-4 sm:w-3 sm:h-3" />
                      </div>
                      <span className="text-gray-700 text-sm group-hover:text-gray-800 transition-colors duration-300">Wide range of Economy & Luxury cars</span>
                    </div>
                  </div>
                  
                  <div className="group hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center lg:space-x-3 space-x-2 lg:p-3 p-2 rounded-xl hover:bg-white/50 transition-all duration-300">
                      <div className="bg-gradient-to-br from-orange-500 to-amber-500 p-1.5 sm:p-1 rounded-full group-hover:scale-110 transition-transform duration-300">
                        <CheckCircle className="text-white w-4 h-4 sm:w-3 sm:h-3" />
                      </div>
                      <span className="text-gray-700 text-sm group-hover:text-gray-800 transition-colors duration-300">Professional chauffeurs</span>
                    </div>
                  </div>
                  
                  <div className="group hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center lg:space-x-3 space-x-2 lg:p-3 p-2 rounded-xl hover:bg-white/50 transition-all duration-300">
                      <div className="bg-gradient-to-br from-orange-500 to-amber-500 p-1.5 sm:p-1 rounded-full group-hover:scale-110 transition-transform duration-300">
                        <CheckCircle className="text-white w-4 h-4 sm:w-3 sm:h-3" />
                      </div>
                      <span className="text-gray-700 text-sm group-hover:text-gray-800 transition-colors duration-300">Comfort & safety guaranteed</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              {/* <div className="mt-8 sm:mt-6">
                <button className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-4 rounded-2xl font-semibold flex items-center justify-center space-x-2 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div> */}
            </div>
          </div>

          {/* Right: Image Section */}
          <div className="relative">
            <div className="relative group">
              {/* Main Image Container */}
              <div className="bg-gradient-to-br from-orange-100 to-amber-100 rounded-3xl p-6 sm:p-4 shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500">
                <div className="relative">
                  {/* Placeholder for car image */}
                  <div className="w-full h-96 sm:h-64 md:h-80 rounded-2xl flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                    <div className="relative z-10 text-center">
                      <div className=" lg:h-54  mb-4 mx-auto w-fit">
                        {/* <Car className="w-16 h-16 sm:w-12 sm:h-12 text-white" /> */}
                        <img src={car} alt="Car" className=" w-full h-full object-cover "  />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-600 mb-2">Premium Vehicle</h3>
                      <p className="text-gray-500 sm:text-sm">Experience luxury and comfort</p>
                    </div>
                    
                    {/* Animated Elements */}
                    <div className="absolute top-4 right-4 flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  {/* Floating Badge */}
                  <div className="absolute lg:top-6  top-2 lg:left-6 -left-6 bg-gradient-to-r from-orange-600 to-amber-600 text-white lg:px-6 px-3 lg:py-3 py-2 rounded-2xl sm:rounded-xl flex items-center space-x-3 sm:space-x-2 shadow-xl backdrop-blur-sm border border-white/20 group-hover:scale-105 transition-transform duration-300">
                    <Car className="lg:w-5 lg:h-5 w-4 h-4" />
                    <span className="font-semibold text-sm">Premium Fleet</span>
                  </div>

                  {/* Quick Contact Info */}
                  <div className="absolute lg:bottom-6 bottom-2 lg:right-6 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg">
                    <div className="flex items-center space-x-2 text-sm">
                      <Phone className="w-4 h-4 text-orange-500" />
                      <span className="text-gray-700 font-medium">24/7 Support</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Booking Section */}
        <div className="mt-16 sm:mt-8 md:mt-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl p-8 sm:p-6 text-white shadow-2xl">
          <div className="text-center mb-8 sm:mb-6">
            <h3 className="text-2xl sm:text-xl font-bold mb-2">Quick Booking</h3>
            <p className="text-orange-100">Reserve your perfect ride in minutes</p>
          </div>
          
          <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-4 sm:gap-3">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 sm:p-3">
              <MapPin className="w-5 h-5 mb-2 text-orange-100" />
              <label className="block text-sm text-orange-100 mb-1">Pickup Location</label>
              <input 
                type="text" 
                placeholder="Enter location" 
                className="w-full bg-white/30 border-0 rounded-lg px-3 py-2 text-white placeholder-orange-200 focus:bg-white/40 transition-all"
              />
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 sm:p-3">
              <Clock className="w-5 h-5 mb-2 text-orange-100" />
              <label className="block text-sm text-orange-100 mb-1">Pickup Date</label>
              <input 
                type="date" 
                className="w-full bg-white/30 border-0 rounded-lg px-3 py-2 text-white focus:bg-white/40 transition-all"
              />
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 sm:p-3">
              <Car className="w-5 h-5 mb-2 text-orange-100" />
              <label className="block text-sm text-orange-100 mb-1">Car Type</label>
              <select className="w-full bg-white/30 border-0 rounded-lg px-3 py-2 text-white focus:bg-white/40 transition-all">
                <option>Economy</option>
                <option>Luxury</option>
                <option>SUV</option>
              </select>
            </div>
            
            <div className="flex items-end">
              <button className="w-full bg-white text-orange-600 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-transform duration-300 shadow-lg">
                Search Cars
              </button>
            </div>
          </div>
        </div>

        {/* Additional Features Section */}
        <div className="lg:mt-16 mt-4 md:mt-12 bg-white/90 backdrop-blur-sm shadow-2xl rounded-3xl lg:p-10 p-6 md:p-8 border border-orange-100">
          <div className="text-center mb-12 sm:mb-8">
            <h2 className="lg:text-4xl text-xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600 mb-4 sm:mb-3">
              Why Choose Our Car Rental Service
            </h2>
            <p className="text-gray-600 lg:text-lg text-base max-w-2xl mx-auto">
              We go beyond traditional car rental to provide comprehensive transportation solutions with exceptional service standards.
            </p>
            <div className="w-24 sm:w-16 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto rounded-full mt-4 sm:mt-3"></div>
          </div>
          
          <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-8 sm:gap-6">
            <div className="text-center lg:p-6 p-4 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl hover:scale-105 transition-transform duration-300 border border-orange-100">
              <div className="bg-gradient-to-br from-orange-500 to-amber-500 p-3 sm:p-2 rounded-2xl w-fit mx-auto mb-4 sm:mb-3 shadow-lg">
                <Car className="lg:w-10 lg:h-10  w-6 h-6 text-white" />
              </div>
              <h3 className="lg:text-xl text-lg font-heading font-bold text-gray-800 mb-3 sm:mb-2">Diverse Fleet Options</h3>
              <p className="text-gray-600 font-body text-sm">From compact economy cars to luxurious sedans and spacious SUVs, find the perfect vehicle for every occasion and budget.</p>
            </div>
            
            <div className="text-center p-6 sm:p-4 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl hover:scale-105 transition-transform duration-300 border border-orange-100">
              <div className="bg-gradient-to-br from-orange-500 to-amber-500 p-3 sm:p-2 rounded-2xl w-fit mx-auto mb-4 sm:mb-3 shadow-lg">
                <CheckCircle className="lg:w-10 lg:h-10  w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl sm:text-lg font-heading font-bold text-gray-800 mb-3 sm:mb-2">Quality Assurance</h3>
              <p className="text-gray-600 font-body text-sm">Regular maintenance, thorough inspections, and GPS tracking ensure you receive vehicles in perfect condition every time.</p>
            </div>
            
            <div className="text-center p-6 sm:p-4 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl hover:scale-105 transition-transform duration-300 border border-orange-100">
              <div className="bg-gradient-to-br from-orange-500 to-amber-500 p-3 sm:p-2 rounded-2xl w-fit mx-auto mb-4 sm:mb-3 shadow-lg">
                <Star className="lg:w-10 lg:h-10  w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl sm:text-lg font-bold text-gray-800 mb-3 sm:mb-2">Premium Service</h3>
              <p className="text-gray-600 text-sm">Easy online booking, instant confirmations, and flexible rental periods from hourly to monthly packages to suit your schedule.</p>
            </div>
          </div>

          {/* Service Highlights */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-2 gap-6 sm:gap-4 mt-12 sm:mt-8">
            <div className="bg-gradient-to-br from-orange-100 to-amber-100 p-4 sm:p-3 rounded-xl text-center hover:scale-105 transition-transform duration-300 border border-orange-200">
              <div className="text-2xl sm:text-xl font-bold text-orange-600 mb-1">24/7</div>
              <div className="text-sm sm:text-xs text-gray-700">Customer Support</div>
            </div>
            
            <div className="bg-gradient-to-br from-orange-100 to-amber-100 p-4 sm:p-3 rounded-xl text-center hover:scale-105 transition-transform duration-300 border border-orange-200">
              <div className="text-2xl sm:text-xl font-bold text-orange-600 mb-1">100+</div>
              <div className="text-sm sm:text-xs text-gray-700">Vehicle Options</div>
            </div>
            
            <div className="bg-gradient-to-br from-orange-100 to-amber-100 p-4 sm:p-3 rounded-xl text-center hover:scale-105 transition-transform duration-300 border border-orange-200">
              <div className="text-2xl sm:text-xl font-bold text-orange-600 mb-1">50+</div>
              <div className="text-sm sm:text-xs text-gray-700">Pickup Locations</div>
            </div>
            
            <div className="bg-gradient-to-br from-orange-100 to-amber-100 p-4 sm:p-3 rounded-xl text-center hover:scale-105 transition-transform duration-300 border border-orange-200">
              <div className="text-2xl sm:text-xl font-bold text-orange-600 mb-1">15min</div>
              <div className="text-sm sm:text-xs text-gray-700">Average Response</div>
            </div>
          </div>
        </div>

        {/* Footer */}
       
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-40 sm:top-32 right-1/4 w-2 h-2 sm:w-1 sm:h-1 bg-orange-400 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-1 h-1 bg-amber-400 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/3 right-1/3 w-3 h-3 sm:w-2 sm:h-2 bg-yellow-400 rounded-full animate-bounce" style={{animationDelay: '1.5s'}}></div>
      </div>
    </div>
  );
}