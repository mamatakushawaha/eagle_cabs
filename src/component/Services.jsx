import React, { useEffect, useState } from "react";

import cars from '../assets/cars.jpg';
import bus from '../assets/bus.jpg';
import bts from '../assets/bts.jpg';
import taxi from '../assets/back.jpg';
import event from '../assets/event.png';

import { ArrowRight, Car, Bus, Train, Phone, Calendar, } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const services = [
    {
        title: "Car Rentals",
        description: "Premium vehicles for every journey with comfort and style",
        img: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=500&h=500&fit=crop",

        gradient: "from-blue-500 to-cyan-500",
        bgColor: "#E3F2FD",
        path: '/car-rental'
    },
    {
        title: "Bus Rentals",
        description: "Group travel made comfortable with spacious interiors",
        img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=500&h=500&fit=crop",

        gradient: "from-green-500 to-emerald-500",
        bgColor: "#E8F5E8",
        path: '/bus-rental'
    },
    {
        title: "BTS",
        description: "Swift transit solutions for efficient transportation",
        img: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&h=500&fit=crop",

        gradient: "from-purple-500 to-violet-500",
        bgColor: "#F3E5F5",
        path: '/bts'
    },
    {
        title: "On Call Taxi",
        description: "24/7 instant pickup service at your convenience",
        img: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500&h=500&fit=crop",

        gradient: "from-orange-500 to-red-500",
        bgColor: "#FFF3E0",
        path: '/on-call-taxi'
    },
    {
        title: "Event Organizer",
        description: "Memorable experiences crafted with attention to detail",
        img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=500&h=500&fit=crop",

        gradient: "from-pink-500 to-rose-500",
        bgColor: "#FCE4EC",
        path: '/event-organizer'
    },
];

export default function Services() {
    const [visibleItems, setVisibleItems] = useState(new Set());
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisibleItems(prev => new Set([...prev, parseInt(entry.target.dataset.index)]));
                    }
                });
            },
            { threshold: 0.2 }
        );

        const elements = document.querySelectorAll('[data-index]');
        elements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="w-full max-w-6xl min-h-screen mx-auto bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">

            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-20 -right-20 sm:-top-40 sm:-right-40 w-40 h-40 sm:w-80 sm:h-80 bg-gradient-to-br from-orange-300/10 to-pink-300/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-20 -left-20 sm:-bottom-40 sm:-left-40 w-40 h-40 sm:w-80 sm:h-80 bg-gradient-to-tr from-blue-300/10 to-purple-300/10 rounded-full blur-3xl"></div>
            </div>

            <div className="absolute top-10 right-10 sm:top-20 sm:right-20 w-16 h-16 sm:w-32 sm:h-32 bg-orange-500 rounded-full opacity-10"></div>
            <div className="absolute bottom-20 left-1/4 w-12 h-12 sm:w-24 sm:h-24 bg-orange-400 rounded-full opacity-20"></div>
            <div className="absolute top-1/3 left-5 sm:left-10 w-8 h-8 sm:w-16 sm:h-16 bg-orange-300 rounded-full opacity-30 animate-pulse"></div>

            {/* Header Section */}
            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-600 mb-3 sm:mb-4">
                    Our Services
                </h2>

                <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
                    Experience excellence with our comprehensive range of transportation and event solutions
                </p>

                {/* Decorative line */}
                <div className="flex items-center justify-center mt-3 sm:mt-4">
                    <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent rounded-full"></div>
                </div>
            </div>

            {/* Services Layout */}
            <div className="max-w-6xl mx-auto relative">
                <div className="space-y-16 sm:space-y-20 lg:space-y-32">
                    {services.map((service, index) => {
                        const isLeft = index % 2 === 0;
                        const isVisible = visibleItems.has(index);

                        return (
                            <div
                                key={index}
                                data-index={index}
                                className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                {/* Mobile/Tablet Layout (Below lg) */}
                                <div className="lg:hidden flex flex-col items-center text-center space-y-6">
                                    {/* Background Circle for Mobile */}
                                    <div
                                        className={`absolute inset-0 w-full max-w-sm mx-auto h-80 sm:h-96 rounded-full transition-all duration-700 ${hoveredIndex === index ? 'scale-105' : 'scale-100'}`}
                                        style={{
                                            backgroundColor: service.bgColor,
                                            left: '50%',
                                            transform: 'translateX(-50%)'
                                        }}
                                    />

                                    {/* Image Circle */}
                                    <div className="relative z-10 group">
                                        <div className={`w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 rounded-full overflow-hidden shadow-2xl transition-all duration-500 ${hoveredIndex === index ? 'scale-105 shadow-3xl' : ''}`}>
                                            <img
                                                src={service.img}
                                                alt={service.title}
                                                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        </div>

                                        {/* Glow Effect */}
                                        {hoveredIndex === index && (
                                            <div className={`absolute inset-0 w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 rounded-full bg-gradient-to-r ${service.gradient} opacity-20 blur-xl animate-pulse`} />
                                        )}
                                    </div>

                                    {/* Text Content */}
                                    <div className={`relative z-10 px-4 sm:px-6 transition-all duration-700 ${hoveredIndex === index ? 'transform scale-105' : ''}`}>
                                        <h3 className={`text-xl sm:text-2xl md:text-3xl font-heading font-semibold mb-4 sm:mb-6 transition-all duration-500 ${hoveredIndex === index
                                            ? 'text-transparent bg-gradient-to-r from-gray-500 via-gray-400 to-slate-400 bg-clip-text'
                                            : 'text-gray-500'}`}>
                                            {service.title}
                                        </h3>

                                        <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed mb-6 sm:mb-8 max-w-sm mx-auto">
                                            {service.description}
                                        </p>

                                        {/* CTA Button */}
                                        <Link to={service.path}
                                            className={`group inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r ${service.gradient} text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-sm sm:text-base ${hoveredIndex === index ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-80'}`}>
                                            Learn More
                                            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                                        </Link>

                                        {/* Features List */}
                                        <div className={`mt-4 sm:mt-6 space-y-2 transition-all duration-500 ${hoveredIndex === index ? 'opacity-100 translate-y-0' : 'opacity-70 translate-y-2'}`}>
                                            <div className="flex items-center  justify-center text-xs sm:text-sm text-slate-500">
                                                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient} mr-3`}></div>
                                                Premium Quality Service
                                            </div>
                                            <div className="flex items-center justify-center text-xs sm:text-sm text-slate-500">
                                                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient} mr-3`}></div>
                                                24/7 Customer Support
                                            </div>
                                            {/* <div className="flex items-center justify-center text-xs sm:text-sm text-slate-500">
                                                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient} mr-3`}></div>
                                                Professional Staff
                                            </div> */}
                                        </div>
                                    </div>
                                </div>

                                {/* Desktop Layout (lg and above) - Your Original Design */}
                                <div className={`hidden lg:flex gap-5 items-center ${isLeft ? 'justify-start' : 'justify-end'}`}>
                                    {/* Background Circle */}
                                    <div
                                        className={`absolute w-96 h-96 rounded-full transition-all duration-700 ${hoveredIndex === index ? 'scale-110' : 'scale-100'}`}
                                        style={{
                                            backgroundColor: service.bgColor,
                                            [isLeft ? 'left' : 'right']: '0',
                                            top: '50%',
                                            transform: 'translateY(-50%)'
                                        }}
                                    />

                                    {/* Content Container */}
                                    <div className={`relative z-10 flex items-center gap-18 w-full max-w-4xl ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
                                        {/* Image Circle */}
                                        <div className="relative group">
                                            <div className={`w-80 h-80 rounded-full overflow-hidden shadow-2xl transition-all duration-500 ${hoveredIndex === index ? 'scale-105 shadow-3xl' : ''}`}>
                                                <img
                                                    src={service.img}
                                                    alt={service.title}
                                                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                            </div>

                                            {/* Glow Effect */}
                                            {hoveredIndex === index && (
                                                <div className={`absolute inset-0 w-80 h-80 rounded-full bg-gradient-to-r ${service.gradient} opacity-20 blur-xl animate-pulse`} />
                                            )}
                                        </div>

                                        {/* Text Content */}
                                        <div className={`flex-1 ${isLeft ? 'text-left' : 'text-right'} transition-all duration-700 ${hoveredIndex === index ? 'transform scale-105' : ''}`}>
                                            <h3 className={`text-3xl md:text-4xl font-heading font-semibold mb-6 transition-all duration-500 ${hoveredIndex === index
                                                ? 'text-transparent bg-gradient-to-r from-gray-500 via-gray-400 to-slate-400 bg-clip-text'
                                                : 'text-gray-500'}`}>
                                                {service.title}
                                            </h3>

                                            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8 max-w-md">
                                                {service.description}
                                            </p>

                                            {/* CTA Button */}
                                            <Link to={service.path}
                                                className={`group inline-flex items-center px-8 py-4 bg-gradient-to-r ${service.gradient} text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${hoveredIndex === index ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-80'}`}>
                                                Learn More
                                                <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                                            </Link>

                                            {/* Features List */}
                                            {/* <div className={`mt-6 space-y-2 transition-all duration-500 ${hoveredIndex === index ? 'opacity-100 translate-y-0' : 'opacity-70 translate-y-2'}`}>
                                                <div className="flex items-center text-sm text-slate-500">
                                                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient} mr-3`}></div>
                                                    Premium Quality Service
                                                </div>
                                                <div className="flex items-center text-sm text-slate-500">
                                                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient} mr-3`}></div>
                                                    24/7 Customer Support
                                                </div>
                                                <div className="flex items-center text-sm text-slate-500">
                                                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient} mr-3`}></div>
                                                    Professional Staff
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>

                                    {/* Decorative Elements */}
                                    <div className={`absolute top-0 ${isLeft ? 'left-96' : 'right-96'} w-32 h-32 rounded-full bg-gradient-to-r ${service.gradient} opacity-5 blur-2xl`} />
                                    <div className={`absolute bottom-0 ${isLeft ? 'left-80' : 'right-80'} w-24 h-24 rounded-full bg-gradient-to-r ${service.gradient} opacity-10 blur-xl animate-pulse`} />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}