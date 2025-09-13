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
    <div className="relative w-6xl mx-auto bg-[#FFF3E0] overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-orange-300/20 to-pink-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-300/20 to-purple-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-orange-400/10 rounded-full blur-2xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-1/3 left-1/3 w-24 h-24 bg-purple-400/15 rounded-full blur-xl animate-pulse delay-3000"></div>
        
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

      <div className="relative   py-20 px-6 lg:px-8">
        {/* Hero Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          
          <h1 className="text-3xl text-orange-500 md:text-4xl lg:text-5xl font-heading font-semibold mb-8 leading-tight">
            Eagle Cabs{" "}
            <span className="bg-gradient-to-r from-amber-700 via-amber-800 to-amber-900 bg-clip-text text-transparent">
              India Pvt. Ltd.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Eagle Cabs India Pvt. Ltd. is providing complete travel solutions through its team of highly experienced people who are best in the industry. Like a soaring EAGLE in the sky is able to zero on its prey, we ensure that the minutest of details are looked into and set as per customer's requirement.
          </p>
          
          <div className="flex items-center justify-center mb-12">
            <div className="w-32 h-1 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full"></div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 bg-orange-400 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Book Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="inline-flex items-center px-8 py-4 bg-white/80 text-slate-700 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-slate-200 backdrop-blur-sm">
              <Phone className="w-5 h-5 mr-2" />
              Call Us
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="group relative bg-white/60 backdrop-blur-xl rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-white/30"
                onMouseEnter={() => setHoveredStat(index)}
                onMouseLeave={() => setHoveredStat(null)}
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${stat.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-slate-800 mb-2">{stat.number}</h3>
                <p className="text-slate-600 font-medium">{stat.label}</p>
                
                {hoveredStat === index && (
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-10 rounded-2xl -z-10 animate-pulse`}></div>
                )}
              </div>
            );
          })}
        </div>

        {/* Main Content Section */}
        <div className={`grid md:grid-cols-2 gap-16 items-center mb-20 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Left Side - Image */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&h=400&fit=crop"
                alt="Eagle Cabs Premium Fleet"
                className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              
              {/* Floating Badge */}
              {/* <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold px-6 py-3 rounded-xl shadow-2xl transform group-hover:scale-110 transition-transform duration-500">
                <div className="flex items-center">
                  <Award className="w-5 h-5 mr-2" />
                  20+ Years of Excellence
                </div>
              </div> */}

              {/* Overlay Icons */}
              <div className="absolute top-4 right-4 flex space-x-2">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                </div>
              </div>
            </div>

            {/* Background decoration */}
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-orange-200 to-pink-200 rounded-3xl -z-10 opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full text-orange-600 text-sm font-semibold">
              {/* <Award className="w-4 h-4 mr-2" /> */}
              Our Journey
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibolad text-slate-800 leading-tight">
              Journey of Building{" "}
              <span className=" text-orange-600">
                Eagle Cabs
              </span>
            </h2>
            
            <p className="text-lg text-slate-600 leading-relaxed">
              Eagle Cabs has been in the service of providing transport solutions for more than 20 years now. Since its inception, Eagle Cabs has withstood the test of time and has been highly receptive to the ever changing environment.
            </p>
            
            <p className="text-lg text-slate-600 leading-relaxed">
              With the advent of technology, Eagle Cabs has paved the way for a carefully blended tech and human-based business process. We believe in offering{" "}
              <span className="font-semibold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                safe, reliable, and technology-driven travel solutions
              </span>{" "}
              that make journeys seamless.
            </p>

            <div className="pt-4">
              <button className="inline-flex items-center px-6 py-3 bg-orange-400 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Why Choose Eagle Cabs?
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="group bg-white/60 backdrop-blur-xl rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-white/30"
                >
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.gradient} mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-slate-800 group-hover:to-slate-600 group-hover:bg-clip-text transition-all duration-300">
                    {feature.title}
                  </h4>
                  <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Contact CTA */}
        <div className={`mt-20 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-amber-50 rounded-3xl p-12 text-center  shadow-2xl">
            <div className="absolute top-20 right-20 w-32 h-32 bg-orange-500 rounded-full opacity-10"></div>
            <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-orange-400 rounded-full opacity-20"></div>
            <div className="absolute top-1/3 left-10 w-16 h-16 bg-orange-300 rounded-full opacity-30 animate-pulse"></div>
           
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Journey?
            </h3>
            <p className="text-xl mb-8 max-w-2xl text-orange-400 mx-auto opacity-90">
              Experience the difference with Eagle Cabs - where every mile matters and every journey is crafted with care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 bg-white text-slate-800 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Phone className="w-5 h-5 mr-2" />
                Call Now: +91-9999-EAGLE
              </button>
              <button className="inline-flex items-center px-8 py-4 bg-white/20 text-orange-600 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-white/30 backdrop-blur-sm">
                <Mail className="w-5 h-5 mr-2" />
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