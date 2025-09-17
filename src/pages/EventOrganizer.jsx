import React from "react";
import { Calendar, Music, Users, Star, Sparkles, Camera, Heart, ArrowRight, CheckCircle } from "lucide-react";

export default function EventOrganizer() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-100 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-br from-orange-200 to-amber-200 rounded-full blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute bottom-32 left-16 w-32 h-32 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full blur-2xl opacity-60 animate-bounce"></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-gradient-to-br from-amber-300 to-orange-300 rounded-full blur-xl opacity-40 animate-pulse delay-1000"></div>
        <div className="absolute top-10 left-1/3 w-16 h-16 bg-gradient-to-br from-orange-300 to-yellow-300 rounded-full blur-xl opacity-30"></div>
      </div>

      <div className="relative px-4 sm:px-4 lg:px-8 py-8 sm:py-12 max-w-7xl mx-auto">
        {/* Modern Hero Section */}
        <div className="text-center mt-10 mb-10 sm:mb-14">
          {/* <div className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-orange-100 to-amber-100 rounded-full mb-6 border border-orange-200">
            <Sparkles className="w-5 h-5 text-orange-600 mr-2" />
            <span className="text-sm font-semibold text-orange-700 px-3">Premium Event Management</span>
          </div> */}

          <h1 className="text-4xl sm:text-4xl md:text-5xl font-heading font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 mb-6 leading-tight tracking-tight">
            Event Organizer</h1>
          {/* <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"></div> */}



          <p className="text-sm text-center sm:text-sm text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Creating magical moments and unforgettable experiences through exceptional event management and seamless execution.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-500">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              <span>Professional Team</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              <span>Budget-Friendly Solutions</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              <span>End-to-End Management</span>
            </div>
          </div>
        </div>

        {/* Main Content with Modern Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Main Description Card */}
          <div className="lg:col-span-2">
            <div className="bg-white/95 backdrop-blur-lg shadow-xl p-5 rounded-3xl  border border-orange-100/50 hover:shadow-2xl transition-all duration-500 hover:scale-[1.01] group">
              <div className="flex items-start mb-8 mt-4">
                <div className="bg-gradient-to-br from-orange-500 to-amber-500 p-3 rounded-2xl mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold lg:text-2xl text-gray-800 mb-2">About Our Services</h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"></div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="relative pl-6 border-l-2 border-orange-200">
                  <p className="text-gray-700 leading-relaxed">
                    We are an experienced & dynamic event management company dedicated to
                    delivering <span className="font-semibold text-orange-600">high-quality, creative, and professional services</span>.
                    Whether it's a wedding, cultural program, corporate gathering, or
                    entertainment show, our team ensures every event is handled with{" "}
                    <span className="font-semibold text-orange-600">perfection and style</span>.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-2xl border border-orange-100">
                  <p className="text-gray-700 leading-relaxed">
                    We recognize the <span className="font-semibold text-orange-600">budgetary concerns</span> of our clients and
                    design personalized event solutions without compromising on quality.
                    From venue selection to stage design, decoration, security, and guest
                    management, our experts meticulously plan and execute every detail to
                    create an <span className="font-semibold text-orange-600">unforgettable experience</span>.
                  </p>
                </div>

                <div className="relative pl-6 border-l-2 border-amber-200">
                  <p className="text-gray-700 leading-relaxed">
                    Our mission is to <span className="font-semibold text-orange-600">transform your vision into reality</span>,
                    offering seamless coordination, innovative concepts, and flawless
                    execution. With Eagle Cabs, you get not just an event, but a{" "}
                    <span className="font-semibold text-orange-600">
                      memorable journey filled with joy, celebration, and satisfaction
                    </span>.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-2xl border border-orange-100">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Our comprehensive approach includes end-to-end planning, vendor coordination, timeline management, and on-site supervision to ensure every moment runs smoothly.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    We pride ourselves on attention to detail, creative problem-solving, and the ability to handle events of any scale with professionalism and flair that exceeds expectations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Features Sidebar */}
          <div className="space-y-6">
            <div className="bg-white/95 backdrop-blur-lg shadow-xl rounded-2xl p-6 border border-orange-100/50">
              <div className="text-center mb-6">
                <Calendar className="w-12 h-12 text-orange-600 mx-auto mb-3" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Complete Planning</h3>
                <p className="text-gray-600 text-sm">From concept to execution, we handle every aspect with meticulous planning.</p>
              </div>
            </div>

            <div className="bg-white/95 backdrop-blur-lg shadow-xl rounded-2xl p-6 border border-orange-100/50">
              <div className="text-center mb-6">
                <Users className="w-12 h-12 text-orange-600 mx-auto mb-3" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Expert Team</h3>
                <p className="text-gray-600 text-sm">Experienced professionals bringing creativity and expertise to your events.</p>
              </div>
            </div>

            <div className="bg-white/95 backdrop-blur-lg shadow-xl rounded-2xl p-6 border border-orange-100/50">
              <div className="text-center mb-6">
                <Star className="w-12 h-12 text-orange-600 mx-auto mb-3" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Premium Quality</h3>
                <p className="text-gray-600 text-sm">Highest standards ensuring every detail reflects excellence.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Services Section */}
        <div className="bg-white/95 backdrop-blur-lg shadow-2xl rounded-3xl p-8 sm:p-12 border border-orange-100/50">
          <div className="text-center mb-8">
            {/* <div className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-orange-100 to-amber-100 rounded-full mb-6 border border-orange-200">
              <Sparkles className="w-5 h-5 text-orange-600 mr-2" />
              <span className="text-sm font-semibold text-orange-700 px-3">Our Expertise</span>
            </div> */}

            <h2 className="text-3xl p-2 sm:text-3xl md:text-4xl font-heading font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600 mb-6">
              Event Management Services
            </h2>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              From intimate gatherings to grand celebrations, we offer comprehensive event solutions tailored to your unique requirements and style preferences.
            </p>
          </div>

          {/* Modern Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { service: "Wedding Management", icon: Heart, desc: "Complete wedding planning and execution" },
              { service: "Parties & Celebrations", icon: Music, desc: "Birthday parties and special occasions" },
              { service: "Corporate Events", icon: Users, desc: "Professional business gatherings" },
              { service: "Fashion Events", icon: Camera, desc: "Fashion shows and modeling events" },
              { service: "Entertainment Shows", icon: Star, desc: "Concerts and live performances" },
              { service: "Celebrity Management", icon: Sparkles, desc: "Celebrity appearances and coordination" },
              { service: "Production Services", icon: Calendar, desc: "Complete event production support" },
              { service: "Decoration Management", icon: Star, desc: "Creative decoration and styling" },
              { service: "Cultural Shows", icon: Music, desc: "Traditional and cultural programs" },
            ].map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={idx}
                  className="group bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-2 border border-orange-100 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 hover:border-orange-200"
                >
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="bg-gradient-to-br from-orange-500 to-amber-500 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <IconComponent className="text-white w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-800 group-hover:text-orange-700 transition-colors duration-300 mb-1">
                        {item.service}
                      </h4>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>

                  {/* <div className="flex items-center text-orange-600 group-hover:text-orange-700 transition-colors duration-300">
                    <span className="text-sm font-semibold mr-2">Learn more</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div> */}
                </div>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-4 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Create Something Amazing?</h3>
            <p className="mb-6 opacity-90">Let's discuss your event vision and bring it to life with our expertise.</p>
            <button className="bg-white text-orange-600 px-8 py-3 rounded-xl font-semibold hover:bg-orange-50 transition-colors duration-300 shadow-lg">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}