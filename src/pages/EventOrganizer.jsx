import React from "react";
import { Calendar, Music, Users, Star, Sparkles, Camera, Heart } from "lucide-react";

export default function EventOrganizer() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-100 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-br from-orange-200 to-amber-200 rounded-full blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute bottom-32 left-16 w-32 h-32 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full blur-2xl opacity-60"></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-gradient-to-br from-amber-300 to-orange-300 rounded-full blur-xl opacity-40"></div>
      </div>

      <div className="relative px-6 py-16 max-w-6xl mx-auto">
        {/* Hero Title Section */}
        <div className="text-center mt-10 mb-20">
          <div className="inline-block">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 mb-6 leading-tight">
              Event <span className="text-orange-500">Organizer</span>
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto rounded-full mb-4"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Creating magical moments and unforgettable experiences through exceptional event management and seamless execution.
            </p>
          </div>
        </div>

        {/* Main Content Card */}
        <div className="bg-white/90  backdrop-blur-sm shadow-2xl rounded-3xl p-15 border border-orange-100 hover:shadow-3xl transition-all duration-500 mb-16">
          <div className="space-y-8">
            <div className="relative">
              <p className="text-gray-700 leading-relaxed text-lg">
                We are an experienced & dynamic event management company dedicated to
                delivering <span className="font-semibold text-orange-600">high-quality, creative, and professional services</span>.
                Whether it's a wedding, cultural program, corporate gathering, or
                entertainment show, our team ensures every event is handled with{" "}
                <span className="font-semibold text-orange-600">perfection and style</span>.
              </p>
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-orange-400 to-amber-400 rounded-full"></div>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-2xl border-l-4 border-orange-500">
              <p className="text-gray-700 leading-relaxed text-lg">
                We recognize the <span className="font-semibold text-orange-600">budgetary concerns</span> of our clients and
                design personalized event solutions without compromising on quality.
                From venue selection to stage design, decoration, security, and guest
                management, our experts meticulously plan and execute every detail to
                create an <span className="font-semibold text-orange-600">unforgettable experience</span>.
              </p>
            </div>

            <div className="relative">
              <p className="text-gray-700 leading-relaxed text-lg">
                Our mission is to <span className="font-semibold text-orange-600">transform your vision into reality</span>,
                offering seamless coordination, innovative concepts, and flawless
                execution. With Eagle Cabs, you get not just an event, but a{" "}
                <span className="font-semibold text-orange-600">
                  memorable journey filled with joy, celebration, and satisfaction
                </span>
                .
              </p>
              <div className="absolute -right-4 top-0 w-1 h-full bg-gradient-to-b from-amber-400 to-orange-400 rounded-full"></div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-2xl">
              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                Our comprehensive approach includes end-to-end planning, vendor coordination, timeline management, and on-site supervision to ensure every moment runs smoothly.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                We pride ourselves on attention to detail, creative problem-solving, and the ability to handle events of any scale with professionalism and flair that exceeds expectations.
              </p>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="bg-white/90 backdrop-blur-sm shadow-2xl rounded-3xl p-12 border border-orange-100">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Sparkles className="w-8 h-8 text-orange-600" />
              <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">
                Event Management Services
              </h2>
              <Sparkles className="w-8 h-8 text-orange-600" />
            </div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-6">
              From intimate gatherings to grand celebrations, we offer comprehensive event solutions tailored to your unique requirements and style preferences.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { service: "Wedding Management", icon: Heart },
              { service: "Parties & Celebrations", icon: Music },
              { service: "Corporate Events", icon: Users },
              { service: "Fashion Events", icon: Camera },
              { service: "Entertainment Shows", icon: Star },
              { service: "Celebrity Management", icon: Sparkles },
              { service: "Production Services", icon: Calendar },
              { service: "Decoration Management", icon: Star },
              { service: "Cultural Shows", icon: Music },
            ].map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={idx}
                  className="group flex items-center space-x-4 p-5 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300 border border-orange-100"
                >
                  <div className="bg-gradient-to-br from-orange-500 to-amber-500 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="text-white w-5 h-5" />
                  </div>
                  <span className="text-gray-700 font-semibold group-hover:text-gray-800 transition-colors duration-300">
                    {item.service}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Additional Service Features */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl hover:scale-105 transition-transform duration-300">
              <Calendar className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Complete Planning</h3>
              <p className="text-gray-600">From concept to execution, we handle every aspect of your event with meticulous planning and professional coordination.</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl hover:scale-105 transition-transform duration-300">
              <Users className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Expert Team</h3>
              <p className="text-gray-600">Our experienced professionals bring creativity, expertise, and dedication to make your special occasions truly memorable.</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl hover:scale-105 transition-transform duration-300">
              <Star className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Premium Quality</h3>
              <p className="text-gray-600">We maintain the highest standards of service delivery, ensuring every detail reflects excellence and sophistication.</p>
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