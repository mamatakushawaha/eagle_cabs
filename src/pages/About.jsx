import React from "react";
import { Sparkles, Target, Users, Award, Heart, Zap, CheckCircle } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen w-8xl bg-gradient-to-br from-orange-50 via-white to-yellow-50">
      {/* Hero Section with Background Pattern */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-yellow-500/10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-orange-200/30 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-yellow-200/40 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-orange-300/25 rounded-full animate-ping"></div>
        </div>
        
        <div className="relative w-5xl mx-auto py-15 px-6">
          {/* Intro Section - All Original Content Preserved */}
          <div className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-orange-600 font-medium mb-6 shadow-lg">
              <Sparkles className="w-4 h-4" />
              About Our Journey
            </div>
            
            <h3 className="text-2xl lg:text-4xl font-bold text-gray-700 mb-4">
              Power to <span className="text-yellow-600 relative">
                Spread Optimism
                <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full"></div>
              </span>
            </h3>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg mb-8">
              <p className="text-gray-600 leading-relaxed mb-4">
                We strive to bring customer delight and satisfaction through our
                comfortable and vast range of fleet. With so many options, we are
                sure to spoil you for choice. With our motto being to provide
                customer satisfaction with utmost attention to customer safety, we
                also aim to provide comfortable rides at minimum cost.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                We cater to a plethora of services like{" "}
                <span className="font-semibold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
                  Employee Transportation, Event Management, Picnics, Wedding Events,
                  Outstation Trips
                </span>{" "}
                and more. We even assist our clients in planning their travel
                itinerary. Headquartered in Delhi/NCR, we have our presence in
                numerous cities across India and are gradually expanding further.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Vision Section - Original Content */}
      <div className="w-5xl mx-auto px-6 mb-12">
        <div className="relative bg-gradient-to-r from-yellow-600 to-orange-400 text-center rounded-2xl shadow-2xl p-8 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-white/10 backdrop-blur-sm"></div>
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full"></div>
          
          <div className="relative z-10">
            <Target className="w-12 h-12 mx-auto mb-4 text-white" />
            <h3 className="text-2xl font-bold text-white mb-3">
              Our Vision
            </h3>
            <p className="text-white/95 leading-relaxed">
              To become India's most trusted and favourite brand in Passenger
              Transportation Segment.
            </p>
          </div>
        </div>
      </div>

      {/* Core Values Grid - All Original Content */}
      <div className="w-5xl mx-auto px-6 mb-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Customer Commitment
            </h3>
            <p className="text-gray-600">
              Our commitment towards our esteemed customers is one of our core
              values and we ensure it is met at all levels.
            </p>
          </div>

          <div className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
            <div className="bg-gradient-to-r from-green-500 to-teal-500 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Award className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Quality</h3>
            <p className="text-gray-600">
              Meeting our commitment through quality services defines our path.
              Our leadership drives the focus on quality at all levels.
            </p>
          </div>

          <div className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Our Values
            </h3>
            <p className="text-gray-600">
              Beyond core values, our team embraces principles that define who
              we are and how we deliver.
            </p>
          </div>
        </div>
      </div>

      {/* Values List - All Original Content with Enhanced Design */}
      <div className="w-5xl mx-auto px-6 pb-16">
        <div className="space-y-6 grid md:grid-cols-3 gap-8">
          <div className="group relative overflow-hidden bg-gradient-to-r h-[170px] from-yellow-100 to-yellow-50 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-yellow-200">
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full -translate-y-8 translate-x-8 group-hover:scale-125 transition-transform duration-700"></div>
            <div className="relative z-10">
              <CheckCircle className="w-8 h-8 text-yellow-600 mb-3 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Integrity</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                We ensure the highest standards of integrity are displayed at all
                levels.
              </p>
            </div>
          </div>

          <div className="group relative overflow-hidden h-[170px] bg-gradient-to-r from-yellow-100 to-yellow-50 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-yellow-200">
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full -translate-y-8 translate-x-8 group-hover:scale-125 transition-transform duration-700"></div>
            <div className="relative z-10">
              <Users className="w-8 h-8 text-blue-600 mb-3 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Team Work</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                We work together across boundaries to meet the needs of our
                customers.
              </p>
            </div>
          </div>

          <div className="group relative overflow-hidden h-[170px] bg-gradient-to-r from-yellow-100 to-yellow-50 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-yellow-200">
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-green-200 to-teal-200 rounded-full -translate-y-8 translate-x-8 group-hover:scale-125 transition-transform duration-700"></div>
            <div className="relative z-10">
              <Zap className="w-8 h-8 text-green-600 mb-3 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="text-lg font-semibold text-gray-800 mb-2">A Will to Win</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                We exhibit a strong will to win in the marketplace and in every
                aspect of our business.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Enhancement - Stats Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 py-16">
        <div className="w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Journey in Numbers</h2>
            <p className="text-gray-300">Trusted by thousands across India</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="text-white">
              <div className="text-3xl lg:text-4xl font-bold text-orange-400 mb-2">100+</div>
              <div className="text-gray-300">Cities Covered</div>
            </div>
            <div className="text-white">
              <div className="text-3xl lg:text-4xl font-bold text-yellow-400 mb-2">5000+</div>
              <div className="text-gray-300">Happy Customers</div>
            </div>
            <div className="text-white">
              <div className="text-3xl lg:text-4xl font-bold text-green-400 mb-2">500+</div>
              <div className="text-gray-300">Fleet Size</div>
            </div>
            <div className="text-white">
              <div className="text-3xl lg:text-4xl font-bold text-blue-400 mb-2">24/7</div>
              <div className="text-gray-300">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}