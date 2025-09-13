import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';

export default function Enquiry() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
        date: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 3000);
        
        // Reset form
        setFormData({
            name: '',
            email: '',
            phone: '',
            service: '',
            message: '',
            date: ''
        });
    };

    const services = [
        'Car Rental',
        'Bus Rental',
        'BTS',
        'On Call Taxi',
        'Event Organizer'
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 py-16 px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mt-10 mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-amber-800 mb-4">
                        Make an Enquiry
                    </h2>
                    <p className="text-xl text-amber-700 max-w-2xl mx-auto">
                        Ready to book your next journey? Get in touch with us for personalized service and competitive rates.
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto mt-6 rounded-full"></div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl border border-amber-200 shadow-xl">
                            <h3 className="text-2xl font-bold text-amber-700 mb-6">Get in Touch</h3>
                            
                            <div className="space-y-6">
                                <div className="flex items-center space-x-4">
                                    <div className="bg-amber-500/10 p-3 rounded-full">
                                        <Phone className="w-6 h-6 text-amber-600" />
                                    </div>
                                    <div>
                                        <p className="text-amber-700 text-sm">Call Us</p>
                                        <p className="text-amber-900 font-semibold">+91 98765 43210</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="bg-orange-500/10 p-3 rounded-full">
                                        <Mail className="w-6 h-6 text-orange-600" />
                                    </div>
                                    <div>
                                        <p className="text-amber-700 text-sm">Email Us</p>
                                        <p className="text-amber-900 font-semibold">info@eaglecabs.com</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="bg-yellow-500/10 p-3 rounded-full">
                                        <MapPin className="w-6 h-6 text-yellow-600" />
                                    </div>
                                    <div>
                                        <p className="text-amber-700 text-sm">Visit Us</p>
                                        <p className="text-amber-900 font-semibold">123 Transport Street, Delhi</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="bg-amber-600/10 p-3 rounded-full">
                                        <Clock className="w-6 h-6 text-amber-700" />
                                    </div>
                                    <div>
                                        <p className="text-amber-700 text-sm">Working Hours</p>
                                        <p className="text-amber-900 font-semibold">24/7 Available</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Quick Stats */}
                        <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl border border-amber-200 shadow-xl">
                            <h3 className="text-2xl font-bold text-amber-700 mb-6">Why Choose Us</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-amber-600">500+</div>
                                    <div className="text-amber-700 text-sm">Happy Customers</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-amber-700">24/7</div>
                                    <div className="text-amber-700 text-sm">Support</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-amber-800">5★</div>
                                    <div className="text-amber-700 text-sm">Rating</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-amber-600">100%</div>
                                    <div className="text-amber-700 text-sm">Satisfaction</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Enquiry Form */}
                    <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl border border-amber-200 shadow-xl">
                        <h3 className="text-2xl font-bold text-amber-800 mb-6">Send us a Message</h3>
                        
                        {isSubmitted && (
                            <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 mb-6 flex items-center space-x-3">
                                <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
                                <p className="text-amber-700 font-medium">Thank you! Your enquiry has been submitted successfully.</p>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-amber-800 text-sm font-medium mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 bg-white/70 border border-amber-300 rounded-lg text-amber-900 placeholder-amber-600 focus:border-amber-600 focus:ring-1 focus:ring-amber-600 transition-colors"
                                        placeholder="Enter your name"
                                    />
                                </div>

                                <div>
                                    <label className="block text-amber-800 text-sm font-medium mb-2">
                                        Phone Number *
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 bg-white/70 border border-amber-300 rounded-lg text-amber-900 placeholder-amber-600 focus:border-amber-600 focus:ring-1 focus:ring-amber-600 transition-colors"
                                        placeholder="Enter your phone"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-amber-800 text-sm font-medium mb-2">
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 bg-white/70 border border-amber-300 rounded-lg text-amber-900 placeholder-amber-600 focus:border-amber-600 focus:ring-1 focus:ring-amber-600 transition-colors"
                                    placeholder="Enter your email"
                                />
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-amber-800 text-sm font-medium mb-2">
                                        Service Required
                                    </label>
                                    <select
                                        name="service"
                                        value={formData.service}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 bg-white/70 border border-amber-300 rounded-lg text-amber-900 focus:border-amber-600 focus:ring-1 focus:ring-amber-600 transition-colors"
                                    >
                                        <option value="">Select a service</option>
                                        {services.map((service) => (
                                            <option key={service} value={service}>{service}</option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-amber-800 text-sm font-medium mb-2">
                                        Preferred Date
                                    </label>
                                    <input
                                        type="date"
                                        name="date"
                                        value={formData.date}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 bg-white/70 border border-amber-300 rounded-lg text-amber-900 focus:border-amber-600 focus:ring-1 focus:ring-amber-600 transition-colors"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-amber-800 text-sm font-medium mb-2">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows={4}
                                    className="w-full px-4 py-3 bg-white/70 border border-amber-300 rounded-lg text-amber-900 placeholder-amber-600 focus:border-amber-600 focus:ring-1 focus:ring-amber-600 transition-colors resize-none"
                                    placeholder="Tell us about your requirements..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-amber-700 hover:to-orange-700 transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105 shadow-lg"
                            >
                                <Send className="w-5 h-5" />
                                <span>Send Enquiry</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}