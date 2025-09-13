import React from "react";
import { Bus, CheckCircle, MapPin, Calendar, Users, Shield, Star, Phone, Mail, Clock, Route, Award } from "lucide-react";

export default function BusRental() {
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 to-amber-400/10"></div>
        <div className="relative px-6 pt-20 pb-10 max-w-7xl mx-auto">
          {/* Floating Elements */}
          <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-orange-200 to-amber-200 rounded-full blur-3xl opacity-60 animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-24 h-24 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full blur-2xl opacity-50"></div>

          {/* Title with Modern Typography */}
          <div className="text-center mb-14">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 mb-2 leading-tight">
              Bus <span className="text-orange-500">Rental</span>
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto rounded-full mb-4"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience luxury travel across India with our premium bus rental services - AC & Non-AC buses for every journey
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: Content Card */}
            <div className="relative grid grid-rows-2 gap-4">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-orange-100 hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
                <div className="space-y-6">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    We offer AC and Non-AC buses of different seating configurations for
                    multiple uses – long distance travel, corporate hire for staff
                    transportation, conferences, and special events.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Our Deluxe/Volvo Coaches operate frequently with daily departures to
                    wonderful destinations across India. Regular Deluxe and Volvo
                    coaches are offered to provide comfort and luxury for guests seeking
                    to explore India thoroughly. Our specially designed and modified
                    luxury Tempo Traveller ensures a smooth and comfortable ride.
                  </p>
                  <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-2xl border-l-4 border-orange-500">
                    <p className="text-gray-700 leading-relaxed text-lg">
                      These vehicles are designed with customer comfort in mind, making us
                      the <strong className="text-orange-600">first Bus Rental Company in India</strong> to offer{" "}
                      <strong className="text-orange-600">One Way Bus Rental</strong> services.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bus Image Section */}
              <div >
                <div className="relative group">
                  <div className="bg-gradient-to-br from-orange-100 to-amber-100 rounded-3xl p-8 shadow-2xl overflow-hidden">
                    <div className="relative">
                      {/* Placeholder for bus image */}
                      <div className="w-full h-80 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl flex items-center justify-center relative overflow-hidden">
                        {/* <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-amber-600/20"></div> */}
                        <div className="relative w-full h-full text-center">
                        < img className="w-full h-full object-cover rounded-2xl" src= "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=500&h=500&fit=crop"/>
                        </div>
                      </div>

                      

                      

                     
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Features Card */}
            <div className="relative">
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-orange-100 hover:shadow-3xl transition-all duration-500">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="bg-gradient-to-br from-orange-500 to-amber-500 p-3 rounded-2xl">
                    <Bus className="text-white w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                    Features of Our Buses & Tempo Travellers:
                  </h2>
                </div>

                <div className="grid gap-4">
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
                      className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gradient-to-r hover:from-orange-50 hover:to-amber-50 transition-all duration-300 group"
                    >
                      <div className="bg-gradient-to-br from-orange-500 to-amber-500 p-1.5 rounded-full group-hover:scale-110 transition-transform duration-300">
                        <CheckCircle className="text-white w-4 h-4" />
                      </div>
                      <span className="text-gray-700 group-hover:text-gray-800 transition-colors duration-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* Bus Types Section */}
      <div className="px-6 pb-20 max-w-6xl mx-auto">
        <div className="text-center mt-10 mb-12">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600 mb-4">
            Our Fleet Options
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Choose from our diverse range of buses and tempo travellers designed for every travel need and group size
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Volvo Coaches */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-orange-100 hover:shadow-2xl hover:scale-105 transition-all duration-500">
            <div className="bg-gradient-to-br from-orange-500 to-amber-500 p-4 rounded-2xl w-fit mb-6">
              <Bus className="text-white w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Volvo Coaches</h3>
            <div className="space-y-2 mb-6">
              <div className="flex justify-between text-gray-600">
                <span>Seating:</span>
                <span className="font-semibold">40-49 seats</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Type:</span>
                <span className="font-semibold">AC Deluxe</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Best for:</span>
                <span className="font-semibold">Long Distance</span>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Premium comfort with advanced suspension, entertainment systems, and spacious interiors for long journeys across India.
            </p>
          </div>

          {/* Tempo Travellers */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-orange-100 hover:shadow-2xl hover:scale-105 transition-all duration-500">
            <div className="bg-gradient-to-br from-orange-500 to-amber-500 p-4 rounded-2xl w-fit mb-6">
              <Users className="text-white w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Tempo Travellers</h3>
            <div className="space-y-2 mb-6">
              <div className="flex justify-between text-gray-600">
                <span>Seating:</span>
                <span className="font-semibold">9-17 seats</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Type:</span>
                <span className="font-semibold">AC/Non-AC</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Best for:</span>
                <span className="font-semibold">Group Travel</span>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Perfect for small groups and families, featuring comfortable seating, ample luggage space, and flexible configurations.
            </p>
          </div>

          {/* Regular Buses */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-orange-100 hover:shadow-2xl hover:scale-105 transition-all duration-500">
            <div className="bg-gradient-to-br from-orange-500 to-amber-500 p-4 rounded-2xl w-fit mb-6">
              <Route className="text-white w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Regular Buses</h3>
            <div className="space-y-2 mb-6">
              <div className="flex justify-between text-gray-600">
                <span>Seating:</span>
                <span className="font-semibold">35-45 seats</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Type:</span>
                <span className="font-semibold">AC/Non-AC</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Best for:</span>
                <span className="font-semibold">Budget Travel</span>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Economical option for larger groups, corporate events, and budget-conscious travelers without compromising on safety.
            </p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="px-6 pb-20 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600 mb-4">
            Our Rental Services
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Comprehensive bus rental solutions for every occasion and requirement
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-orange-100 hover:shadow-2xl transition-all duration-500">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-gradient-to-br from-orange-500 to-amber-500 p-3 rounded-2xl">
                <Calendar className="text-white w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-orange-600">Corporate Events</h3>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Professional transportation solutions for corporate meetings, conferences, team outings, and employee shuttles with dedicated support.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                Conference transportation
              </div>
              <div className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                Employee shuttle services
              </div>
              <div className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                Team building trips
              </div>
              <div className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                Airport group transfers
              </div>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-orange-100 hover:shadow-2xl transition-all duration-500">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-gradient-to-br from-orange-500 to-amber-500 p-3 rounded-2xl">
                <MapPin className="text-white w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-orange-600">Tourism & Pilgrimage</h3>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Comfortable and reliable transportation for tourist groups, pilgrimage tours, and sightseeing trips across India's diverse destinations.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                Multi-city tour packages
              </div>
              <div className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                Religious pilgrimage tours
              </div>
              <div className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                Adventure & hill station trips
              </div>
              <div className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                Cultural heritage tours
              </div>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-orange-100 hover:shadow-2xl transition-all duration-500">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-gradient-to-br from-orange-500 to-amber-500 p-3 rounded-2xl">
                <Users className="text-white w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-orange-600">Wedding & Events</h3>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Special occasion transportation for weddings, celebrations, and family events with decorated vehicles and professional service.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                Wedding guest transportation
              </div>
              <div className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                Baraat & ceremony buses
              </div>
              <div className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                Family function shuttles
              </div>
              <div className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                Destination wedding transfers
              </div>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-orange-100 hover:shadow-2xl transition-all duration-500">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-gradient-to-br from-orange-500 to-amber-500 p-3 rounded-2xl">
                <Clock className="text-white w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-orange-600">One Way Rentals</h3>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              India's first one-way bus rental service, eliminating return journey charges and providing cost-effective long-distance travel solutions.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                No return journey charges
              </div>
              <div className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                Inter-city transfers
              </div>
              <div className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                Airport to city drops
              </div>
              <div className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                Point-to-point travel
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="px-6 pb-20 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-orange-600 to-amber-600 rounded-3xl p-12 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Why Choose Our Bus Rental Services?</h2>
              <p className="text-orange-100 text-lg">
                Experience the difference with India's premier bus rental company
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl mb-4 w-fit mx-auto">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Safety First</h3>
                <p className="text-orange-100">GPS tracking, verified drivers, and regular vehicle maintenance</p>
              </div>

              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl mb-4 w-fit mx-auto">
                  <Star className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Premium Comfort</h3>
                <p className="text-orange-100">Luxury interiors, entertainment systems, and comfortable seating</p>
              </div>

              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl mb-4 w-fit mx-auto">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Proven Excellence</h3>
                <p className="text-orange-100">India's first one-way rental service with 15+ years experience</p>
              </div>

              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl mb-4 w-fit mx-auto">
                  <Phone className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
                <p className="text-orange-100">Round-the-clock assistance and instant booking confirmations</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Section */}
      <div className="px-6 pb-20 max-w-7xl mx-auto">
        <div className="text-center">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-orange-100 hover:shadow-3xl transition-all duration-500">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600 mb-6">
              Book Your Journey Today
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Experience luxury travel across India with our premium bus rental services. Get instant quotes and immediate booking confirmation.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <div className="flex items-center space-x-3 text-gray-600">
                <div className="bg-gradient-to-br from-orange-500 to-amber-500 p-3 rounded-full">
                  <Phone className="text-white w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold text-gray-800">Call for Instant Booking</div>
                  <div className="text-orange-600 font-bold">+91 9876543210</div>
                </div>
              </div>

              <div className="flex items-center space-x-3 text-gray-600">
                <div className="bg-gradient-to-br from-orange-500 to-amber-500 p-3 rounded-full">
                  <Mail className="text-white w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold text-gray-800">Email Your Requirements</div>
                  <div className="text-orange-600 font-bold">bookings@eaglecabs.com</div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl border border-orange-100">
              <p className="text-gray-700 font-medium">
                ✨ Special Features: SMS & Email confirmations • Real-time tracking • Immediate feedback response • First aid equipped buses
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-1/4 w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-40 left-1/3 w-1 h-1 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 right-1/3 w-3 h-3 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
      </div>
    </div>
  );
}