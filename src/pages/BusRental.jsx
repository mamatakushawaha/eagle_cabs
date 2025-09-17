import React from "react";
import { Bus, CheckCircle, MapPin, Calendar, Users, Shield, Star, Phone, Mail, Clock, Route, Award } from "lucide-react";

export default function BusRental() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 to-amber-400/10"></div>
        <div className="relative px-4 sm:px-6 pt-12 sm:pt-16 lg:pt-20  max-w-7xl mx-auto">
          {/* Floating Elements */}
          <div className="absolute top-6 sm:top-10 right-6 sm:right-10 w-20 sm:w-24 lg:w-32 h-20 sm:h-24 lg:h-32 bg-gradient-to-br from-orange-200 to-amber-200 rounded-full blur-3xl opacity-60 animate-pulse"></div>
          <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full blur-2xl opacity-50"></div>

          {/* Title with Modern Typography */}
          <div className="text-center mb-8 sm:mb-10 lg:mb-14">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 mb-2 leading-tight">
              Bus <span className="text-orange-500">Rental</span>
            </h1>
            <div className="w-24 sm:w-28 lg:w-32 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto rounded-full mb-3 sm:mb-4"></div>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
              Experience luxury travel across India with our premium bus rental services - AC & Non-AC buses for every journey
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2  lg:gap-4 gap-4 ">
            {/* Left: Content Card */}
            <div className="relative grid grid-rows-2  mb-5 h-[860px] lg:gap-3 gap-4">
              <div className="bg-white/80 backdrop-blur-sm h-[550px]  rounded-2xl sm:rounded-3xl p-4 sm:p-2 shadow-2xl border border-orange-100 hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg">
                    We offer AC and Non-AC buses of different seating configurations for
                    multiple uses – long distance travel, corporate hire for staff
                    transportation, conferences, and special events.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg">
                    Our Deluxe/Volvo Coaches operate frequently with daily departures to
                    wonderful destinations across India. Regular Deluxe and Volvo
                    coaches are offered to provide comfort and luxury for guests seeking
                    to explore India thoroughly. Our specially designed and modified
                    luxury Tempo Traveller ensures a smooth and comfortable ride.
                  </p>
                  <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-3 sm:p-4  lg:p-6 rounded-xl sm:rounded-2xl border-l-2 sm:border-l-4 border-orange-500">
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg">
                      These vehicles are designed with customer comfort in mind, making us
                      the <strong className="text-orange-600">first Bus Rental Company in India</strong> to offer{" "}
                      <strong className="text-orange-600">One Way Bus Rental</strong> services.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bus Image Section */}
              <div className="  mt-35 h-[300px] ">
                <div className="bg-gradient-to-br from-orange-100 h-full to-amber-100 rounded-2xl sm:rounded-3xl p-3  lg:p-6 shadow-2xl overflow-hidden">
                  
                    {/* Placeholder for bus image */}
                    <div className="w-full h-full  lg:h-90 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl sm:rounded-2xl flex items-center justify-center relative overflow-hidden">
                      <div className=" w-full h-[250px] text-center">
                        <img className="w-full h-full object-cover rounded-xl sm:rounded-2xl" src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=500&h=500&fit=crop" />
                      </div>
                    </div>
                 
                </div>
              </div>
            </div>

            {/* Right: Features Card */}
            <div className="relative mb-8 ">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl border border-orange-100 hover:shadow-3xl transition-all duration-500">
                <div className="flex items-center space-x-3 mb-6 sm:mb-8">
                  <div className="bg-gradient-to-br from-orange-500 to-amber-500 p-2 sm:p-3 rounded-xl sm:rounded-2xl">
                    <Bus className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <h2 className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                    Features of Our Buses & Tempo Travellers:
                  </h2>
                </div>

                <div className="grid gap-3 sm:gap-4">
                  {[
                    "Roof Mounted A/C",
                    "8 Pushback Maharaja Seats",
                    "4 Seater Sofa Seats",
                    "1 Helper Seat",
                    "Dinner Trays",
                    "Wooden Flooring",
                    "LCD Screen & Entertainment",
                    "24x7 Bus Rental Services across major cities",
                    "SMS & Email booking confirmation",
                    "Immediate response to guest feedback",
                    "First Aid kits & Umbrellas in all buses",
                    "Automated SMS service with cab allotment details",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 rounded-lg sm:rounded-xl hover:bg-gradient-to-r hover:from-orange-50 hover:to-amber-50 transition-all duration-300 group"
                    >
                      <div className="bg-gradient-to-br from-orange-500 to-amber-500 p-1 sm:p-1.5 rounded-full group-hover:scale-110 transition-transform duration-300">
                        <CheckCircle className="text-white w-3 h-3 sm:w-4 sm:h-4" />
                      </div>
                      <span className="text-gray-700 group-hover:text-gray-800 transition-colors duration-300 text-sm sm:text-base">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bus Types Section */}
      <div className="px-4 sm:px-6 pb-16 sm:pb-20 max-w-6xl mx-auto">
        <div className="text-center mt-3 sm:mt-5 mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600 mb-3 sm:mb-4">
            Our Fleet Options
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto px-4 sm:px-0">
            Choose from our diverse range of buses and tempo travellers designed for every travel need and group size
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Volvo Coaches */}
          <div className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-orange-100 hover:shadow-2xl hover:scale-105 transition-all duration-500">
            <div className="bg-gradient-to-br from-orange-500 to-amber-500 p-3 sm:p-4 rounded-xl sm:rounded-2xl w-fit mb-4 sm:mb-6">
              <Bus className="text-white w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">Volvo Coaches</h3>
            <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
              <div className="flex justify-between text-gray-600 text-sm sm:text-base">
                <span>Seating:</span>
                <span className="font-semibold">40-49 seats</span>
              </div>
              <div className="flex justify-between text-gray-600 text-sm sm:text-base">
                <span>Type:</span>
                <span className="font-semibold">AC Deluxe</span>
              </div>
              <div className="flex justify-between text-gray-600 text-sm sm:text-base">
                <span>Best for:</span>
                <span className="font-semibold">Long Distance</span>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              Premium comfort with advanced suspension, entertainment systems, and spacious interiors for long journeys across India.
            </p>
          </div>

          {/* Tempo Travellers */}
          <div className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-orange-100 hover:shadow-2xl hover:scale-105 transition-all duration-500">
            <div className="bg-gradient-to-br from-orange-500 to-amber-500 p-3 sm:p-4 rounded-xl sm:rounded-2xl w-fit mb-4 sm:mb-6">
              <Users className="text-white w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">Tempo Travellers</h3>
            <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
              <div className="flex justify-between text-gray-600 text-sm sm:text-base">
                <span>Seating:</span>
                <span className="font-semibold">9-17 seats</span>
              </div>
              <div className="flex justify-between text-gray-600 text-sm sm:text-base">
                <span>Type:</span>
                <span className="font-semibold">AC/Non-AC</span>
              </div>
              <div className="flex justify-between text-gray-600 text-sm sm:text-base">
                <span>Best for:</span>
                <span className="font-semibold">Group Travel</span>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              Perfect for small groups and families, featuring comfortable seating, ample luggage space, and flexible configurations.
            </p>
          </div>

          {/* Regular Buses */}
          <div className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-orange-100 hover:shadow-2xl hover:scale-105 transition-all duration-500 sm:col-span-2 lg:col-span-1">
            <div className="bg-gradient-to-br from-orange-500 to-amber-500 p-3 sm:p-4 rounded-xl sm:rounded-2xl w-fit mb-4 sm:mb-6">
              <Route className="text-white w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">Regular Buses</h3>
            <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
              <div className="flex justify-between text-gray-600 text-sm sm:text-base">
                <span>Seating:</span>
                <span className="font-semibold">35-45 seats</span>
              </div>
              <div className="flex justify-between text-gray-600 text-sm sm:text-base">
                <span>Type:</span>
                <span className="font-semibold">AC/Non-AC</span>
              </div>
              <div className="flex justify-between text-gray-600 text-sm sm:text-base">
                <span>Best for:</span>
                <span className="font-semibold">Budget Travel</span>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              Economical option for larger groups, corporate events, and budget-conscious travelers without compromising on safety.
            </p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="px-4 sm:px-6 pb-16 sm:pb-20 max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600 mb-3 sm:mb-4">
            Our Rental Services
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto px-4 sm:px-0">
            Comprehensive bus rental solutions for every occasion and requirement
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          <div className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-orange-100 hover:shadow-2xl transition-all duration-500">
            <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
              <div className="bg-gradient-to-br from-orange-500 to-amber-500 p-2.5 sm:p-3 rounded-xl sm:rounded-2xl">
                <Calendar className="text-white w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-orange-600">Corporate Events</h3>
            </div>
            <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              Professional transportation solutions for corporate meetings, conferences, team outings, and employee shuttles with dedicated support.
            </p>
            <div className="space-y-1.5 sm:space-y-2">
              <div className="flex items-center text-gray-600 text-sm sm:text-base">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-500 rounded-full mr-2 sm:mr-3"></div>
                Conference transportation
              </div>
              <div className="flex items-center text-gray-600 text-sm sm:text-base">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-500 rounded-full mr-2 sm:mr-3"></div>
                Employee shuttle services
              </div>
              <div className="flex items-center text-gray-600 text-sm sm:text-base">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-500 rounded-full mr-2 sm:mr-3"></div>
                Team building trips
              </div>
              <div className="flex items-center text-gray-600 text-sm sm:text-base">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-500 rounded-full mr-2 sm:mr-3"></div>
                Airport group transfers
              </div>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-orange-100 hover:shadow-2xl transition-all duration-500">
            <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
              <div className="bg-gradient-to-br from-orange-500 to-amber-500 p-2.5 sm:p-3 rounded-xl sm:rounded-2xl">
                <MapPin className="text-white w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-orange-600">Tourism & Pilgrimage</h3>
            </div>
            <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              Comfortable and reliable transportation for tourist groups, pilgrimage tours, and sightseeing trips across India's diverse destinations.
            </p>
            <div className="space-y-1.5 sm:space-y-2">
              <div className="flex items-center text-gray-600 text-sm sm:text-base">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-500 rounded-full mr-2 sm:mr-3"></div>
                Multi-city tour packages
              </div>
              <div className="flex items-center text-gray-600 text-sm sm:text-base">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-500 rounded-full mr-2 sm:mr-3"></div>
                Religious pilgrimage tours
              </div>
              <div className="flex items-center text-gray-600 text-sm sm:text-base">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-500 rounded-full mr-2 sm:mr-3"></div>
                Adventure & hill station trips
              </div>
              <div className="flex items-center text-gray-600 text-sm sm:text-base">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-500 rounded-full mr-2 sm:mr-3"></div>
                Cultural heritage tours
              </div>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-orange-100 hover:shadow-2xl transition-all duration-500">
            <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
              <div className="bg-gradient-to-br from-orange-500 to-amber-500 p-2.5 sm:p-3 rounded-xl sm:rounded-2xl">
                <Users className="text-white w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-orange-600">Wedding & Events</h3>
            </div>
            <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              Special occasion transportation for weddings, celebrations, and family events with decorated vehicles and professional service.
            </p>
            <div className="space-y-1.5 sm:space-y-2">
              <div className="flex items-center text-gray-600 text-sm sm:text-base">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-500 rounded-full mr-2 sm:mr-3"></div>
                Wedding guest transportation
              </div>
              <div className="flex items-center text-gray-600 text-sm sm:text-base">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-500 rounded-full mr-2 sm:mr-3"></div>
                Baraat & ceremony buses
              </div>
              <div className="flex items-center text-gray-600 text-sm sm:text-base">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-500 rounded-full mr-2 sm:mr-3"></div>
                Family function shuttles
              </div>
              <div className="flex items-center text-gray-600 text-sm sm:text-base">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-500 rounded-full mr-2 sm:mr-3"></div>
                Destination wedding transfers
              </div>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-orange-100 hover:shadow-2xl transition-all duration-500">
            <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
              <div className="bg-gradient-to-br from-orange-500 to-amber-500 p-2.5 sm:p-3 rounded-xl sm:rounded-2xl">
                <Clock className="text-white w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-orange-600">One Way Rentals</h3>
            </div>
            <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              India's first one-way bus rental service, eliminating return journey charges and providing cost-effective long-distance travel solutions.
            </p>
            <div className="space-y-1.5 sm:space-y-2">
              <div className="flex items-center text-gray-600 text-sm sm:text-base">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-500 rounded-full mr-2 sm:mr-3"></div>
                No return journey charges
              </div>
              <div className="flex items-center text-gray-600 text-sm sm:text-base">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-500 rounded-full mr-2 sm:mr-3"></div>
                Inter-city transfers
              </div>
              <div className="flex items-center text-gray-600 text-sm sm:text-base">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-500 rounded-full mr-2 sm:mr-3"></div>
                Airport to city drops
              </div>
              <div className="flex items-center text-gray-600 text-sm sm:text-base">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-500 rounded-full mr-2 sm:mr-3"></div>
                Point-to-point travel
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="px-4 sm:px-6 pb-16 sm:pb-20 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-orange-600 to-amber-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <div className="text-center mb-8 sm:mb-10 lg:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">Why Choose Our Bus Rental Services?</h2>
              <p className="text-orange-100 text-base sm:text-lg">
                Experience the difference with India's premier bus rental company
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="bg-white/20 backdrop-blur-sm p-3 sm:p-4 rounded-xl sm:rounded-2xl mb-3 sm:mb-4 w-fit mx-auto">
                  <Shield className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">Safety First</h3>
                <p className="text-orange-100 text-sm sm:text-base">GPS tracking, verified drivers, and regular vehicle maintenance</p>
              </div>

              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="bg-white/20 backdrop-blur-sm p-3 sm:p-4 rounded-xl sm:rounded-2xl mb-3 sm:mb-4 w-fit mx-auto">
                  <Star className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">Premium Comfort</h3>
                <p className="text-orange-100 text-sm sm:text-base">Luxury interiors, entertainment systems, and comfortable seating</p>
              </div>

              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="bg-white/20 backdrop-blur-sm p-3 sm:p-4 rounded-xl sm:rounded-2xl mb-3 sm:mb-4 w-fit mx-auto">
                  <Award className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">Proven Excellence</h3>
                <p className="text-orange-100 text-sm sm:text-base">India's first one-way rental service with 15+ years experience</p>
              </div>

              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="bg-white/20 backdrop-blur-sm p-3 sm:p-4 rounded-xl sm:rounded-2xl mb-3 sm:mb-4 w-fit mx-auto">
                  <Phone className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">24/7 Support</h3>
                <p className="text-orange-100 text-sm sm:text-base">Round-the-clock assistance and instant booking confirmations</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Section */}
      <div className="px-4 sm:px-6 pb-16 sm:pb-20 max-w-7xl mx-auto">
        <div className="text-center">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl border border-orange-100 hover:shadow-3xl transition-all duration-500">

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600 mb-4 sm:mb-6">
              Book Your Bus Rental Today
            </h2>
            <p className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-8 max-w-3xl mx-auto">
              Ready to travel in comfort and style? Get instant quotes and book your bus rental with just a few clicks.
              Our team is available 24/7 to assist you with your booking and travel requirements.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-10">
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-orange-100">
                <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-orange-600 mx-auto mb-3 sm:mb-4" />
                <h3 className="font-bold text-gray-800 mb-2 text-sm sm:text-base">Call Us</h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-2">Speak to our travel experts</p>
                <a href="tel:+911234567890" className="text-orange-600 font-semibold hover:text-orange-700 transition-colors text-sm sm:text-base">
                  +91 123-456-7890
                </a>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-orange-100">
                <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-orange-600 mx-auto mb-3 sm:mb-4" />
                <h3 className="font-bold text-gray-800 mb-2 text-sm sm:text-base">Email Us</h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-2">Get detailed quotations</p>
                <a href="mailto:bookings@busrental.com" className="text-orange-600 font-semibold hover:text-orange-700 transition-colors text-sm sm:text-base">
                  bookings@busrental.com
                </a>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-orange-100">
                <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-orange-600 mx-auto mb-3 sm:mb-4" />
                <h3 className="font-bold text-gray-800 mb-2 text-sm sm:text-base">Quick Response</h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-2">Instant booking confirmation</p>
                <span className="text-orange-600 font-semibold text-sm sm:text-base">
                  Within 15 minutes
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg hover:from-orange-600 hover:to-amber-600 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl w-full sm:w-auto">
                Get Instant Quote
              </button>
              <button className="bg-white text-orange-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg border-2 border-orange-500 hover:bg-orange-50 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl w-full sm:w-auto">
                View All Services
              </button>
            </div>

            <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-orange-100">
              <p className="text-gray-500 text-xs sm:text-sm">
                ✓ Free cancellation up to 24 hours before travel ✓ GPS tracking on all vehicles ✓ Professional drivers ✓ 24/7 roadside assistance
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}