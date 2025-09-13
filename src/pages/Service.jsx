import React from "react";
import { Bus, Users, Car, Shield, MapPin, Clock, CheckCircle, Phone, Navigation, FileText } from "lucide-react";

const services = [
  {
    title: "Employee Transportation Services",
    description:
      "We provide complete employee transportation solutions prioritizing safety, cost, and reliability. Designed to improve productivity and employee satisfaction, with data-driven route planning and transparent dashboards.",
    features: [
      "Wide range of inventory",
      "Online Client Interface to manage bookings",
      "Live Tracking available for clients",
      "24 X 7 support services",
      "Dedicated implants",
      "Strict statutory compliance",
      "SOS Feature",
      "GPS with panic button",
      "Billing & MIS reports",
    ],
    icon: Users,
    gradient: "from-blue-500 to-purple-600",
    bgGradient: "from-blue-50 to-purple-50",
  },
  {
    title: "Shuttle Services",
    description:
      "Our shuttle services enable clients to operate on fixed routes, ensuring cost savings, employee safety, and punctuality. Ideal for corporate campuses and industrial hubs, while promoting eco-friendly practices.",
    features: [
      "12 & 18 seater Tempo Traveler",
      "Bus Facility",
      "Point-to-point service",
      "Dedicated implants",
      "Strict statutory compliance",
      "GPS with panic button",
      "Live Tracking available",
      "Driver training",
      "Safety & Security",
      "Billing & MIS reports",
    ],
    icon: Bus,
    gradient: "from-green-500 to-teal-600",
    bgGradient: "from-green-50 to-teal-50",
  },
  {
    title: "Spot Rentals",
    description:
      "Enjoy on-demand flexibility for personal and corporate travel. Whether it's a quick ride, luxury vehicle for meetings, or family getaway, we ensure comfort, safety, and affordability.",
    features: [
      "Online booking & billing",
      "Wide range of vehicles (Economy, Luxury, SUV)",
      "Strict statutory compliance",
      "Airport transfers",
      "Outstation & Local trips",
    ],
    icon: Car,
    gradient: "from-orange-500 to-red-600",
    bgGradient: "from-orange-50 to-red-50",
  },
];

const getFeatureIcon = (feature) => {
  if (feature.includes("Tracking") || feature.includes("GPS")) return Navigation;
  if (feature.includes("24 X 7") || feature.includes("support")) return Phone;
  if (feature.includes("Safety") || feature.includes("Security") || feature.includes("SOS")) return Shield;
  if (feature.includes("Billing") || feature.includes("MIS") || feature.includes("reports")) return FileText;
  if (feature.includes("Point-to-point") || feature.includes("Airport")) return MapPin;
  if (feature.includes("training") || feature.includes("compliance")) return CheckCircle;
  return CheckCircle;
};

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50">
      {/* Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-200/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-yellow-200/25 rounded-full animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-orange-300/15 rounded-full animate-ping"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-yellow-300/20 rounded-full animate-pulse"></div>
      </div>

      <div className="relative py-16 px-6 lg:px-20">
        <div className="max-w-5xl mx-auto">
          {/* Enhanced Header */}
          <div className="text-center mt-10 mb-16">
            {/* <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full text-orange-600 font-medium mb-6 shadow-lg">
              <Car className="w-5 h-5" />
              Our Premium Services
            </div> */}
            <h2 className="text-4xl lg:text-5xl  font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent mb-4">
              Transportation Solutions
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive mobility services designed to meet all your transportation needs
            </p>
          </div>

          <div className="space-y-12">
            {services.map((service, idx) => {
              const IconComponent = service.icon;
              
              return (
                <div
                  key={idx}
                  className={`group relative bg-gradient-to-br ${service.bgGradient} rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/50`}
                >
                  {/* Background decorative elements */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20 group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/15 rounded-full translate-y-16 -translate-x-16 group-hover:scale-125 transition-transform duration-700"></div>
                  
                  <div className="relative z-10 p-8">
                    {/* Service Header */}
                    <div className="flex items-start gap-6 mb-6">
                      <div className={`bg-gradient-to-r ${service.gradient} p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-yellow-600 mb-3 group-hover:text-yellow-700 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-gray-700 leading-relaxed">{service.description}</p>
                      </div>
                    </div>

                    {/* Enhanced Features Grid */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-inner">
                      <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        Key Features
                      </h4>
                      <ul className="grid sm:grid-cols-2 gap-4 text-gray-600">
                        {service.features.map((feature, i) => {
                          const FeatureIcon = getFeatureIcon(feature);
                          return (
                            <li
                              key={i}
                              className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/70 transition-all duration-300 group/item"
                            >
                              <div className="bg-green-100 p-1.5 rounded-lg group-hover/item:scale-110 transition-transform duration-200">
                                <FeatureIcon className="w-4 h-4 text-green-600" />
                              </div>
                              <span className="group-hover/item:text-gray-800 transition-colors">
                                {feature}
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>

                    {/* Service Action Button */}
                    {/* <div className="mt-6 flex justify-end">
                      <button className={`bg-gradient-to-r ${service.gradient} text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}>
                        Learn More
                      </button>
                    </div> */}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Enhanced CTA Section */}
          <div className="mt-20 bg-gradient-to-r from-orange-500 to-yellow-600 rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-white/10 backdrop-blur-sm"></div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full"></div>
            
            <div className="relative z-10">
              <Phone className="w-16 h-16 mx-auto mb-6 text-white animate-pulse" />
              <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                Ready to Get Started?
              </h3>
              <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                Contact us today to discuss your transportation needs and get a customized solution
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                  Get Quote Now
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Call Us: +91-XXXXXXXXX
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}