import React from "react";
import { Building2, ShieldCheck, Clock, ThumbsUp, Users, MapPin, Star, Phone, Mail, Award, TrendingUp, Target } from "lucide-react";

export default function BusinessTransport() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-100 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-br from-orange-200 to-amber-200 rounded-full blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute bottom-32 left-16 w-32 h-32 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full blur-2xl opacity-60"></div>
        <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-gradient-to-br from-amber-300 to-orange-300 rounded-full blur-xl opacity-40"></div>
      </div>

      <div className="relative px-6 py-16 max-w-5xl mx-auto">
        {/* Hero Title Section */}
        <div className="text-center mt-10 mb-20">
          <div className="inline-block">
            <h1 className="text-3xl md:text-4xl font-heading font-bold  text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 mb-6 leading-tight">
              Business <span className="text-orange-500">Transport Solutions</span>
            </h1>
            <div className="w-40 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto rounded-full mb-4"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Elevating corporate mobility with premium transportation services tailored for modern businesses
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-rows-2 gap-10 items-center mb-20">
          {/* Left: Content Card */}
          <div className="relative">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-orange-100 hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
              {/* Content */}
              <div className="space-y-6 mb-8">
                <p className="text-gray-700 leading-relaxed text-lg">
                  Eagle Cabs has been a specialist in providing Business Transport
                  Solutions to various corporates. We offer our customers a{" "}
                  <strong className="text-orange-600">cost-effective solution</strong> for their transportation
                  needs by delivering safe, economical and transparent service with
                  the highest standards of quality in the industry.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Through our advanced technology we ensure that all requirements are
                  met timely and with full transparency. Every aspect of our pickups
                  and deliveries is technology-enabled, backed by our strong
                  commitment to <strong className="text-orange-600">long-term business relationships</strong> and
                  <strong className="text-orange-600"> complete customer satisfaction</strong>.
                </p>
              </div>

              {/* Highlights Grid */}
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="group hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center space-x-3 p-3 rounded-xl hover:bg-white/50 transition-all duration-300">
                      <div className="bg-gradient-to-br from-orange-500 to-amber-500 p-2 rounded-full group-hover:scale-110 transition-transform duration-300">
                        <ShieldCheck className="text-white w-5 h-5" />
                      </div>
                      <span className="text-gray-700 font-medium group-hover:text-gray-800">Safe & Reliable</span>
                    </div>
                  </div>
                  
                  <div className="group hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center space-x-3 p-3 rounded-xl hover:bg-white/50 transition-all duration-300">
                      <div className="bg-gradient-to-br from-orange-500 to-amber-500 p-2 rounded-full group-hover:scale-110 transition-transform duration-300">
                        <Clock className="text-white w-5 h-5" />
                      </div>
                      <span className="text-gray-700 font-medium group-hover:text-gray-800">On-Time Service</span>
                    </div>
                  </div>
                  
                  <div className="group hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center space-x-3 p-3 rounded-xl hover:bg-white/50 transition-all duration-300">
                      <div className="bg-gradient-to-br from-orange-500 to-amber-500 p-2 rounded-full group-hover:scale-110 transition-transform duration-300">
                        <Building2 className="text-white w-5 h-5" />
                      </div>
                      <span className="text-gray-700 font-medium group-hover:text-gray-800">Corporate Focused</span>
                    </div>
                  </div>
                  
                  <div className="group hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center space-x-3 p-3 rounded-xl hover:bg-white/50 transition-all duration-300">
                      <div className="bg-gradient-to-br from-orange-500 to-amber-500 p-2 rounded-full group-hover:scale-110 transition-transform duration-300">
                        <ThumbsUp className="text-white w-5 h-5" />
                      </div>
                      <span className="text-gray-700 font-medium group-hover:text-gray-800">Customer Satisfaction</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Image Section */}
          <div className="relative">
            <div className="relative group">
              {/* Main Image Container */}
              <div className="bg-gradient-to-br from-orange-100 to-amber-100 rounded-3xl p-6 shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500">
                <div className="relative">
                  {/* Placeholder for business image */}
                  <div className="w-full h-96 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-amber-600/20"></div>
                    <div className="relative h-full w-full text-center">
                      {/* <Building2 className="w-24 h-24 text-gray-400 mx-auto mb-4" /> */}
                     <img className="w-full h-full object-cover" src= "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&h=500&fit=crop"/>

                    </div>
                  </div>
                  
                  {/* Floating Badge */}
                  <div className="absolute top-6 left-6 bg-gradient-to-r from-orange-600 to-amber-600 text-white px-6 py-3 rounded-2xl flex items-center space-x-3 shadow-xl backdrop-blur-sm border border-white/20 group-hover:scale-105 transition-transform duration-300">
                    <Building2 className="w-5 h-5" />
                    <span className="font-semibold">Trusted by Corporates</span>
                  </div>
                </div>
              </div>

              {/* Floating Stats Cards */}
              <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-orange-100 hover:scale-105 transition-transform duration-300">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">24/7</div>
                  <div className="text-sm text-gray-600">Available</div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-orange-100 hover:scale-105 transition-transform duration-300">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">100%</div>
                  <div className="text-sm text-gray-600">Reliable</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Features Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600 mb-4">
              Why Choose Eagle Cabs?
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Experience the difference with our comprehensive business transport solutions designed to exceed your expectations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Card 1 */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-orange-100 hover:shadow-2xl hover:scale-105 transition-all duration-500">
              <div className="bg-gradient-to-br from-orange-500 to-amber-500 p-4 rounded-2xl w-fit mb-6">
                <Users className="text-white w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Experienced Drivers</h3>
              <p className="text-gray-600 leading-relaxed">
                Our professional chauffeurs are thoroughly trained, background-checked, and committed to providing exceptional service with local expertise.
              </p>
            </div>

            {/* Feature Card 2 */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-orange-100 hover:shadow-2xl hover:scale-105 transition-all duration-500">
              <div className="bg-gradient-to-br from-orange-500 to-amber-500 p-4 rounded-2xl w-fit mb-6">
                <MapPin className="text-white w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Real-time Tracking</h3>
              <p className="text-gray-600 leading-relaxed">
                Stay informed with GPS tracking, live updates, and complete transparency throughout your journey for peace of mind.
              </p>
            </div>

            {/* Feature Card 3 */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-orange-100 hover:shadow-2xl hover:scale-105 transition-all duration-500">
              <div className="bg-gradient-to-br from-orange-500 to-amber-500 p-4 rounded-2xl w-fit mb-6">
                <Award className="text-white w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Premium Fleet</h3>
              <p className="text-gray-600 leading-relaxed">
                Travel in comfort with our well-maintained, modern fleet of vehicles equipped with the latest amenities and safety features.
              </p>
            </div>

            {/* Feature Card 4 */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-orange-100 hover:shadow-2xl hover:scale-105 transition-all duration-500">
              <div className="bg-gradient-to-br from-orange-500 to-amber-500 p-4 rounded-2xl w-fit mb-6">
                <TrendingUp className="text-white w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Scalable Solutions</h3>
              <p className="text-gray-600 leading-relaxed">
                From individual executives to large corporate events, our flexible services adapt to your organization's unique requirements.
              </p>
            </div>

            {/* Feature Card 5 */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-orange-100 hover:shadow-2xl hover:scale-105 transition-all duration-500">
              <div className="bg-gradient-to-br from-orange-500 to-amber-500 p-4 rounded-2xl w-fit mb-6">
                <Target className="text-white w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Cost Management</h3>
              <p className="text-gray-600 leading-relaxed">
                Optimize your transportation budget with transparent pricing, detailed reporting, and efficient route planning.
              </p>
            </div>

            {/* Feature Card 6 */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-orange-100 hover:shadow-2xl hover:scale-105 transition-all duration-500">
              <div className="bg-gradient-to-br from-orange-500 to-amber-500 p-4 rounded-2xl w-fit mb-6">
                <Phone className="text-white w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">24/7 Support</h3>
              <p className="text-gray-600 leading-relaxed">
                Round-the-clock customer support ensures immediate assistance whenever you need it, keeping your business moving.
              </p>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="mb-20">
          <div className="bg-gradient-to-br from-orange-600 to-amber-600 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">Our Track Record</h2>
                <p className="text-orange-100 text-lg">
                  Numbers that speak for our commitment to excellence
                </p>
              </div>
              
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="text-4xl font-bold mb-2">500+</div>
                  <div className="text-orange-100">Corporate Clients</div>
                </div>
                <div className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="text-4xl font-bold mb-2">1M+</div>
                  <div className="text-orange-100">Safe Rides</div>
                </div>
                <div className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="text-4xl font-bold mb-2">99.5%</div>
                  <div className="text-orange-100">On-Time Rate</div>
                </div>
                <div className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="text-4xl font-bold mb-2">15+</div>
                  <div className="text-orange-100">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Types Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600 mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Comprehensive transportation solutions tailored for every business need
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-orange-100 hover:shadow-2xl transition-all duration-500">
              <h3 className="text-2xl font-bold text-orange-600 mb-4">Executive Transportation</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Premium chauffeur services for executives, VIPs, and special guests with luxury vehicles and professional drivers.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  Airport transfers and pickups
                </div>
                <div className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  Business meeting transportation
                </div>
                <div className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  Hotel and venue transfers
                </div>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-orange-100 hover:shadow-2xl transition-all duration-500">
              <h3 className="text-2xl font-bold text-orange-600 mb-4">Employee Shuttle Services</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Efficient and reliable shuttle services for your workforce with flexible scheduling and route optimization.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  Daily commute solutions
                </div>
                <div className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  Customized route planning
                </div>
                <div className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  Multi-location pickups
                </div>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-orange-100 hover:shadow-2xl transition-all duration-500">
              <h3 className="text-2xl font-bold text-orange-600 mb-4">Corporate Events</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Comprehensive transportation management for conferences, meetings, and corporate events of any scale.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  Conference transportation
                </div>
                <div className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  Group logistics management
                </div>
                <div className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  Event coordination support
                </div>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-orange-100 hover:shadow-2xl transition-all duration-500">
              <h3 className="text-2xl font-bold text-orange-600 mb-4">Long-term Contracts</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Flexible long-term partnership agreements with dedicated support and customized service packages.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  Monthly service packages
                </div>
                <div className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  Dedicated account management
                </div>
                <div className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  Volume-based pricing
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-orange-100 hover:shadow-3xl transition-all duration-500">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600 mb-6">
              Ready to Transform Your Business Transportation?
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied corporate clients who trust Eagle Cabs for their transportation needs. Let's discuss how we can serve your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <div className="flex items-center space-x-3 text-gray-600">
                <div className="bg-gradient-to-br from-orange-500 to-amber-500 p-3 rounded-full">
                  <Phone className="text-white w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold text-gray-800">Call Us Now</div>
                  <div className="text-orange-600 font-bold">+91 9876543210</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 text-gray-600">
                <div className="bg-gradient-to-br from-orange-500 to-amber-500 p-3 rounded-full">
                  <Mail className="text-white w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold text-gray-800">Email Us</div>
                  <div className="text-orange-600 font-bold">business@eaglecabs.com</div>
                </div>
              </div>
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