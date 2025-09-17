import React, { useState, useEffect } from 'react';
import { Award, Users, Shield, MapPin, Clock, Star, ArrowRight, Phone, Mail } from 'lucide-react';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredStat, setHoveredStat] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { number: "20+", label: "Years Experience", icon: Award, gradient: "from-blue-500 to-cyan-500" },
    { number: "10K+", label: "Happy Customers", icon: Users, gradient: "from-green-500 to-emerald-500" },
    { number: "50+", label: "Cities Covered", icon: MapPin, gradient: "from-purple-500 to-violet-500" },
    { number: "24/7", label: "Support", icon: Clock, gradient: "from-orange-500 to-red-500" }
  ];

  const features = [
    {
      title: "Safe & Reliable",
      description: "Professional drivers with verified licenses and insurance coverage",
      icon: Shield,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Real-time Tracking",
      description: "GPS tracking system for transparent and secure journeys",
      icon: MapPin,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock customer support for all your travel needs",
      icon: Clock,
      gradient: "from-purple-500 to-violet-500"
    }
  ];

  return (
    <div className="relative w-full max-w-6xl mx-auto bg-[#FFF3E0] overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-48 h-48 sm:-top-32 sm:-right-32 sm:w-64 sm:h-64 lg:-top-40 lg:-right-40 lg:w-96 lg:h-96 bg-gradient-to-br from-orange-300/20 to-pink-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 sm:-bottom-32 sm:-left-32 sm:w-56 sm:h-56 lg:-bottom-40 lg:-left-40 lg:w-80 lg:h-80 bg-gradient-to-tr from-blue-300/20 to-purple-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/4 right-1/4 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-orange-400/10 rounded-full blur-2xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-1/3 left-1/3 w-12 h-12 sm:w-18 sm:h-18 lg:w-24 lg:h-24 bg-purple-400/15 rounded-full blur-xl animate-pulse delay-3000"></div>
        
        {/* Floating particles */}
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-orange-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        {/* Hero Header */}
        <div className={`text-center mb-12 sm:mb-16 lg:mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          
          <h1 className="text-2xl sm:text-3xl text-orange-500 md:text-4xl lg:text-5xl font-heading font-semibold mb-6 sm:mb-8 leading-tight px-2 sm:px-0">
            Eagle Cabs{" "}
            <span className="bg-gradient-to-r from-amber-700 via-amber-800 to-amber-900 bg-clip-text text-transparent">
              India Pvt. Ltd.
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-6 sm:mb-8 px-2 sm:px-0">
            Eagle Cabs India Pvt. Ltd. is providing complete travel solutions through its team of highly experienced people who are best in the industry. Like a soaring EAGLE in the sky is able to zero on its prey, we ensure that the minutest of details are looked into and set as per customer's requirement.
          </p>
          
          <div className="flex items-center justify-center mb-8 sm:mb-12">
            <div className="w-20 sm:w-32 h-1 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full"></div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 sm:px-0">
            <button className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 bg-orange-400 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-sm sm:text-base">
              Book Now
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
            </button>
            <button className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 bg-white/80 text-slate-700 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-slate-200 backdrop-blur-sm text-sm sm:text-base">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Call Us
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16 lg:mb-20 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="group relative bg-white/60 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-white/30"
                onMouseEnter={() => setHoveredStat(index)}
                onMouseLeave={() => setHoveredStat(null)}
              >
                <div className={`inline-flex p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-r ${stat.gradient} mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-xl sm:text-3xl font-bold text-slate-800 mb-1 sm:mb-2">{stat.number}</h3>
                <p className="text-xs sm:text-base text-slate-600 font-medium">{stat.label}</p>
                
                {hoveredStat === index && (
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-10 rounded-xl sm:rounded-2xl -z-10 animate-pulse`}></div>
                )}
              </div>
            );
          })}
        </div>

        {/* Main Content Section */}
        <div className={`grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-12 sm:mb-16 lg:mb-20 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Left Side - Image */}
          <div className="relative group order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&h=400&fit=crop"
                alt="Eagle Cabs Premium Fleet"
                className="w-full h-64 sm:h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

              {/* Overlay Icons */}
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 flex space-x-2">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                </div>
              </div>
            </div>

            {/* Background decoration */}
            <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-full h-full bg-gradient-to-br from-orange-200 to-pink-200 rounded-2xl sm:rounded-3xl -z-10 opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-4 sm:space-y-6 order-1 lg:order-2 px-2 sm:px-0">
            <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-orange-100 rounded-full text-orange-600 text-xs sm:text-sm font-semibold">
              Our Journey
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-slate-800 leading-tight">
              Journey of Building{" "}
              <span className="text-orange-600">
                Eagle Cabs
              </span>
            </h2>
            
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed">
              Eagle Cabs has been in the service of providing transport solutions for more than 20 years now. Since its inception, Eagle Cabs has withstood the test of time and has been highly receptive to the ever changing environment.
            </p>
            
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed">
              With the advent of technology, Eagle Cabs has paved the way for a carefully blended tech and human-based business process. We believe in offering{" "}
              <span className="font-semibold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                safe, reliable, and technology-driven travel solutions
              </span>{" "}
              that make journeys seamless.
            </p>

            <div className="pt-2 sm:pt-4">
              <button className="inline-flex items-center px-5 py-2.5 sm:px-6 sm:py-3 bg-orange-400 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-sm sm:text-base">
                Learn More
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-10 sm:mb-16">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-3 sm:mb-4 px-2 sm:px-0">
              Why Choose Eagle Cabs?
            </h3>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full mx-auto"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="group bg-white/60 backdrop-blur-xl rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-white/30"
                >
                  <div className={`inline-flex p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-r ${feature.gradient} mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-slate-800 mb-3 sm:mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-slate-800 group-hover:to-slate-600 group-hover:bg-clip-text transition-all duration-300">
                    {feature.title}
                  </h4>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Contact CTA */}
        <div className={`mt-12 sm:mt-16 lg:mt-20 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-amber-50 rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-center shadow-2xl relative overflow-hidden">
            {/* Responsive decorative elements */}
            <div className="absolute top-8 right-8 w-16 h-16 sm:top-12 sm:right-12 sm:w-20 sm:h-20 lg:top-20 lg:right-20 lg:w-32 lg:h-32 bg-orange-500 rounded-full opacity-10"></div>
            <div className="absolute bottom-16 left-1/4 w-12 h-12 sm:w-16 sm:h-16 lg:bottom-40 lg:w-24 lg:h-24 bg-orange-400 rounded-full opacity-20"></div>
            <div className="absolute top-1/3 left-4 w-8 h-8 sm:left-6 sm:w-12 sm:h-12 lg:left-10 lg:w-16 lg:h-16 bg-orange-300 rounded-full opacity-30 animate-pulse"></div>
           
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 relative z-10">
              Ready to Start Your Journey?
            </h3>
            <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 max-w-2xl text-orange-400 mx-auto opacity-90 relative z-10 px-2 sm:px-0">
              Experience the difference with Eagle Cabs - where every mile matters and every journey is crafted with care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10 px-2 sm:px-0">
              <button className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 bg-white text-slate-800 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-sm sm:text-base">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Call Now: +91-9999-EAGLE
              </button>
              <button className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 bg-white/20 text-orange-600 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-white/30 backdrop-blur-sm text-sm sm:text-base">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Email Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;