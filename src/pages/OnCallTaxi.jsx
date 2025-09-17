import React, { useState } from "react";
import { PhoneCall, ShieldCheck, Car, Clock, Star, Users, Menu, X, ChevronDown } from "lucide-react";
import car from '../assets/taxi.jpg';  
export default function OnCallTaxi() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedFleet, setSelectedFleet] = useState(null);
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const fleet = [
    {
      category: "Economy Segment",
      vehicles:
        "Tata Indica, Hyundai Santro, Maruti Alto, Tata Indigo, Mahindra Logan/Verito, and many more",
      description: "Perfect for daily commuting and budget-friendly travel with essential comfort features.",
      price: "₹8-12/km",
      color: "from-green-500 to-emerald-500"
    },
    {
      category: "Corporate Segment",
      vehicles:
        "Skoda Superb, Toyota Camry, Honda Accord, Hyundai Sonata, Volkswagen, Honda Civic, Toyota Corolla, Toyota Altis, Skoda Octavia, Ford Fiesta, Hyundai Verna, Maruti SX4, Honda City, Hyundai Accent, Toyota Etios, and many more",
      description: "Premium sedans designed for business professionals who value style, comfort, and reliability.",
      price: "₹15-20/km",
      color: "from-blue-500 to-indigo-500"
    },
    {
      category: "SUV / MUV",
      vehicles:
        "Land Rover, Toyota Fortuner, Toyota Innova, Tata Sumo, Mahindra Xylo, Mahindra Scorpio, and many more",
      description: "Spacious vehicles ideal for family trips, group travel, and long-distance journeys with extra luggage space.",
      price: "₹18-25/km",
      color: "from-purple-500 to-violet-500"
    },
    {
      category: "Luxury Segment",
      vehicles:
        "Mercedes Benz C Class / E Class, BMW 3 Series / 5 Series / 7 Series, and many more",
      description: "Experience ultimate luxury with premium interiors, advanced technology, and world-class comfort.",
      price: "₹25-40/km",
      color: "from-amber-600 to-orange-600"
    },
  ];

  const features = [
    {
      icon: Users,
      title: "Experienced Drivers",
      description: "Professional, courteous drivers with extensive knowledge of Delhi/NCR routes.",
      stats: "500+ Drivers"
    },
    {
      icon: ShieldCheck,
      title: "Safety First",
      description: "Regular vehicle maintenance, GPS tracking, and comprehensive insurance coverage.",
      stats: "100% Insured"
    },
    {
      icon: Clock,
      title: "Quick Response",
      description: "Average pickup time of under 15 minutes with real-time tracking and updates.",
      stats: "<15 min Pickup"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-100 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-br from-orange-200 to-amber-200 rounded-full blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute bottom-32 left-16 w-32 h-32 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full blur-2xl opacity-60"></div>
        <div className="absolute top-2/3 right-1/4 w-24 h-24 bg-gradient-to-br from-amber-300 to-orange-300 rounded-full blur-xl opacity-40"></div>
      </div>

      <div className="relative px-4 sm:px-6 py-8 sm:py-16 max-w-6xl mx-auto">
        {/* Mobile Menu Button */}
        {/* <div className="lg:hidden fixed top-4 right-4 z-50">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-orange-100 hover:scale-105 transition-transform duration-300"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-orange-600" />
            ) : (
              <Menu className="w-6 h-6 text-orange-600" />
            )}
          </button>
        </div> */}

        {/* Mobile Menu Overlay */}
        {/* {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="absolute top-0 right-0 w-80 h-full bg-white shadow-2xl p-6" onClick={e => e.stopPropagation()}>
              <div className="pt-16 space-y-4">
                <div className="text-orange-600 font-semibold text-lg">Quick Actions</div>
                <button className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white p-3 rounded-xl hover:shadow-lg transition-all duration-300">
                  Book Now
                </button>
                <button className="w-full border-2 border-orange-500 text-orange-600 p-3 rounded-xl hover:bg-orange-50 transition-all duration-300">
                  Get Quote
                </button>
                <div className="pt-4 border-t border-gray-200">
                  <div className="text-gray-700 font-medium mb-2">Contact Us</div>
                  <div className="text-sm text-gray-600">📞 +91-9999-888-777</div>
                  <div className="text-sm text-gray-600">📧 info@eaglecabs.com</div>
                </div>
              </div>
            </div>
          </div>
        )} */}

        {/* Hero Title Section */}
        <div className="text-center mt-6 sm:mt-10 mb-12 sm:mb-20">
          <div className="inline-block">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 mb-2 leading-tight">
              On Call <span className="text-orange-500">Taxi</span>
            </h1>
            <div className="w-20 sm:w-32 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto rounded-full mb-4"></div>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Your trusted transportation partner for over two decades, delivering excellence one ride at a time.
            </p>
          </div>
        </div>

        {/* Intro Section */}
        <div className="grid lg:grid-rows-2 gap-8 lg:gap-0 items-center mb-10">
          {/* Left: Content Card */}
          <div className="relative order-2 lg:order-1">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-2xl border border-orange-100 hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
              {/* Content */}
              <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                  Eagle Cabs is a trusted name in providing{" "}
                  <strong className="text-orange-600">On Call Taxi Services</strong> within Delhi/NCR for the last
                  20 years, offering world-class comfort and luxury for our valued
                  customers.
                </p>
                <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                  With our wide range of vehicles, we ensure{" "}
                  <strong className="text-orange-600">comfortable, safe, and economical</strong> travel experiences
                  every time you ride with us.
                </p>
                <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-4 sm:p-6 rounded-xl sm:rounded-2xl border-l-4 border-orange-500">
                  <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                    Our commitment to punctuality and customer satisfaction has made us the preferred choice for thousands of regular customers across the region.
                  </p>
                </div>
              </div>

              {/* Highlights Grid */}
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {[
                    { icon: ShieldCheck, text: "Safe & Reliable" },
                    { icon: Car, text: "Wide Fleet Range" },
                    { icon: PhoneCall, text: "On-Call Availability" },
                    { icon: Star, text: "Luxury & Comfort" }
                  ].map((item, index) => (
                    <div key={index} className="group hover:scale-105 transition-transform duration-300">
                      <div className="flex items-center space-x-3 p-3 rounded-xl hover:bg-white/50 transition-all duration-300">
                        <div className="bg-gradient-to-br from-orange-500 to-amber-500 p-2 rounded-full group-hover:scale-110 transition-transform duration-300">
                          <item.icon className="text-white w-4 h-4 sm:w-5 sm:h-5" />
                        </div>
                        <span className="text-gray-700 font-medium group-hover:text-gray-800 text-sm sm:text-base">{item.text}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Image Section */}
          <div className="relative order-1 lg:order-2">
            <div className="relative group">
              {/* Main Image Container */}
              <div className="bg-gradient-to-br from-orange-100 to-amber-100 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500">
                <div className="relative">
                  {/* Taxi image placeholder */}
                  <div className="w-full h-48 sm:h-64 lg:h-96 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl sm:rounded-2xl flex items-center justify-center relative overflow-hidden">
                    <div className="relative w-full h-full text-center">
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 to-amber-600/10 flex items-center justify-center">
                        <img src={car} alt="Taxi" className="w-full h-full object-cover rounded-xl sm:rounded-2xl" />
                        <Car className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-gray-400" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating Badge */}
                  <div className="absolute top-3 sm:top-6 left-3 sm:left-6 bg-gradient-to-r from-orange-600 to-amber-600 text-white px-3 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl flex items-center space-x-2 sm:space-x-3 shadow-xl backdrop-blur-sm border border-white/20 group-hover:scale-105 transition-transform duration-300">
                    <PhoneCall className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="font-semibold text-xs sm:text-base">20+ Years Service</span>
                  </div>
                </div>
              </div>

              {/* Floating Stats Cards - Hidden on mobile to prevent overcrowding */}
              <div className="hidden sm:block absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-orange-100 hover:scale-105 transition-transform duration-300">
                <div className="text-center">
                  <Clock className="w-6 h-6 text-orange-600 mx-auto mb-1" />
                  <div className="text-sm font-semibold text-orange-600">24/7</div>
                  <div className="text-xs text-gray-600">Available</div>
                </div>
              </div>

              <div className="hidden sm:block absolute -top-6 -right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-orange-100 hover:scale-105 transition-transform duration-300">
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
        <div className="bg-white/90 backdrop-blur-sm shadow-2xl rounded-2xl sm:rounded-3xl p-6 sm:p-10 border border-orange-100">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600 mb-4">
              Glance at Our Fleet
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
              Choose from our extensive range of vehicles, each maintained to the highest standards and equipped with modern amenities for your comfort.
            </p>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto rounded-full mt-4"></div>
          </div>
          
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {fleet.map((item, index) => (
              <div
                key={index}
                className={`group bg-gradient-to-br from-orange-50 to-amber-50 p-4 sm:p-6 border border-orange-100 rounded-xl sm:rounded-2xl hover:shadow-xl hover:scale-[1.02] transition-all duration-500 cursor-pointer ${
                  selectedFleet === index ? 'ring-2 ring-orange-500' : ''
                }`}
                onClick={() => setSelectedFleet(selectedFleet === index ? null : index)}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`bg-gradient-to-br ${item.color} p-2 rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                      <Car className="text-white w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-orange-600 group-hover:text-orange-700 transition-colors duration-300">
                      {item.category}
                    </h3>
                  </div>
                  {/* <div className="flex items-center space-x-2">
                    <span className="text-sm font-semibold text-green-600 bg-green-100 px-2 py-1 rounded-lg">
                      {item.price}
                    </span>
                    <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                      selectedFleet === index ? 'rotate-180' : ''
                    }`} />
                  </div> */}
                </div>
                
                <div className={`transition-all duration-500 overflow-hidden ${
                  selectedFleet === index ? 'max-h-96 opacity-100' : 'max-h-16 sm:max-h-20'
                }`}>
                  <p className="text-gray-700 text-xs sm:text-sm mb-3 leading-relaxed">{item.vehicles}</p>
                  <p className="text-gray-600 text-xs sm:text-sm italic border-l-3 border-orange-300 pl-3">
                    {item.description}
                  </p>
                  {selectedFleet === index && (
                    <div className="mt-4 pt-4 border-t border-orange-200">
                      <button className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white p-2 sm:p-3 rounded-lg hover:shadow-lg transition-all duration-300 text-sm sm:text-base">
                        Book {item.category}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          {/* Additional Features Section */}
          <div className="mt-8 sm:mt-12 grid sm:grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-4 sm:p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl sm:rounded-2xl hover:scale-105 transition-transform duration-300 cursor-pointer"
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <feature.icon className={`w-8 h-8 sm:w-10 sm:h-10 text-orange-600 mx-auto mb-3 transition-all duration-300 ${
                  hoveredFeature === index ? 'scale-125' : ''
                }`} />
                <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">{feature.title}</h4>
                <p className="text-gray-600 text-xs sm:text-sm mb-2">{feature.description}</p>
                <div className={`text-orange-600 font-bold text-sm transition-all duration-300 ${
                  hoveredFeature === index ? 'scale-110' : ''
                }`}>
                  {feature.stats}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Action Button - Mobile */}
      {/* <div className="lg:hidden fixed bottom-6 right-6 z-40">
        <button className="bg-gradient-to-r from-orange-500 to-amber-500 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 animate-pulse">
          <PhoneCall className="w-6 h-6" />
        </button>
      </div> */}

      {/* Floating Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-32 right-1/4 w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-amber-400 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-yellow-400 rounded-full animate-bounce" style={{animationDelay: '1.5s'}}></div>
      </div>
    </div>
  );
}