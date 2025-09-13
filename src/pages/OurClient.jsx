import React, { useState, useEffect } from "react";
import { Star, Quote, ArrowLeft, ArrowRight } from "lucide-react";
import img from "../assets/our-clients.png";
const OurClient = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const clients = [
    { name: "TechCorp Solutions", logo: "🏢", industry: "Technology", years: "5+" },
    { name: "Global Industries", logo: "🏭", industry: "Manufacturing", years: "8+" },
    { name: "Metro Hospital", logo: "🏥", industry: "Healthcare", years: "6+" },
    { name: "City Bank", logo: "🏦", industry: "Banking", years: "10+" },
    { name: "Education Plus", logo: "🎓", industry: "Education", years: "4+" },
    { name: "Hotel Paradise", logo: "🏨", industry: "Hospitality", years: "7+" },
    { name: "Sports Arena", logo: "⚽", industry: "Sports", years: "3+" },
    { name: "Shopping Mall", logo: "🏪", industry: "Retail", years: "5+" },
    { name: "Green Energy Co", logo: "🌱", industry: "Energy", years: "4+" },
    { name: "Media House", logo: "📺", industry: "Media", years: "6+" },
    { name: "Construction Ltd", logo: "🏗️", industry: "Construction", years: "9+" },
    { name: "Food Chain", logo: "🍔", industry: "Food & Beverage", years: "5+" }
  ];

  const testimonials = [
    {
      name: "John Smith",
      company: "TechCorp Solutions",
      position: "CEO",
      rating: 5,
      text: "Eagle Cabs has been our go-to transportation partner for over 5 years. Their reliability and professionalism are unmatched.",
      image: "👨‍💼"
    },
    {
      name: "Sarah Johnson",
      company: "Metro Hospital",
      position: "Operations Manager",
      rating: 5,
      text: "In healthcare, timing is everything. Eagle Cabs never fails to deliver on time, every time. Exceptional service!",
      image: "👩‍⚕️"
    },
    {
      name: "Michael Brown",
      company: "City Bank",
      position: "Regional Manager",
      rating: 5,
      text: "Professional drivers, clean vehicles, and competitive rates. Eagle Cabs understands the corporate transportation needs perfectly.",
      image: "👨‍💼"
    },
    {
      name: "Emily Davis",
      company: "Hotel Paradise",
      position: "Guest Relations Manager",
      rating: 4,
      text: "Our guests consistently praise the quality of transportation provided by Eagle Cabs. They're an extension of our hospitality service.",
      image: "👩‍💼"
    }
  ];

  const industries = [
    { name: "Technology", count: 15, color: "bg-amber-600" },
    { name: "Healthcare", count: 12, color: "bg-emerald-600" },
    { name: "Banking & Finance", count: 18, color: "bg-amber-700" },
    { name: "Hospitality", count: 20, color: "bg-orange-600" },
    { name: "Education", count: 8, color: "bg-yellow-700" },
    { name: "Manufacturing", count: 10, color: "bg-amber-800" }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-100/30 via-orange-00/30 to-red-100/30 ">
      {/* Hero Section */}
      <section className="py-10 mb-10 bg-gradient-to-br from-amber-200/30 via-orange-300/30 to-red-300/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-amber-800 mt-10 mb-6">
            Our <span className="text-amber-300">Trusted Clients</span>
          </h1>
          <p className="text-xl text-amber-900 max-w-3xl mx-auto">
            We're proud to serve leading companies across various industries, building long-term partnerships based on trust and exceptional service.
          </p>
        </div>
      </section>

      {/* Client Statistics */}
      <section >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10 mt-10">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 text-center shadow-lg border border-amber-200">
              <h3 className="text-3xl font-bold text-amber-700 mb-2">100+</h3>
              <p className="text-amber-800">Happy Clients</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 text-center shadow-lg border border-amber-200">
              <h3 className="text-3xl font-bold text-orange-700 mb-2">15+</h3>
              <p className="text-amber-800">Industries Served</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 text-center shadow-lg border border-amber-200">
              <h3 className="text-3xl font-bold text-yellow-700 mb-2">95%</h3>
              <p className="text-amber-800">Client Retention</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 text-center shadow-lg border border-amber-200">
              <h3 className="text-3xl font-bold text-amber-600 mb-2">4.8★</h3>
              <p className="text-amber-800">Average Rating</p>
            </div>
          </div>



        </div>
      </section>

      {/* Client Grid */}
      <section className="py-16 bg-gradient-to-br from-amber-100 via-orange-100 to-yellow-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-amber-900 mb-12">
            Our <span className="text-orange-700">Client Partners</span>
          </h2>
<div className="flex justify-center ">
          <img src={img} alt="Client Partners" className="w-[550px] mb-12" /></div>

          {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {clients.map((client, index) => (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/95 transition-all duration-300 transform hover:scale-105 shadow-lg border border-amber-200"
              >
                <div className="text-4xl mb-4">{client.logo}</div>
                <h3 className="text-amber-900 font-semibold mb-2 text-sm">{client.name}</h3>
                <p className="text-amber-700 text-xs mb-1">{client.industry}</p>
                <span className="text-orange-600 text-xs font-medium">{client.years} partnership</span>
              </div>
            ))}
          </div> */}
        </div>
      </section>


      {/* Become a Client CTA */}
      <section className="py-16 bg-gradient-to-br from-amber-200/30 via-orange-200/30 to-red-300/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-amber-900 mb-4">
            Ready to Join Our Client Family?
          </h2>
          <p className="text-xl text-amber-900 mb-8">
            Experience the same exceptional service that has made our clients loyal partners for years
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Get Corporate Quote
            </button>
            <button className="border border-amber-400 text-amber-900 hover:bg-amber-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Schedule Meeting
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurClient;