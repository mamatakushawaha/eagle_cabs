import { Mail, Phone } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'  
const Footer = () => {
    return (
        <footer className="bg-white relative text-black py-8 sm:py-10 lg:py-12">
            {/* Decorative Elements - Responsive */}
            <div className="absolute top-10 right-10 w-16 h-16 sm:top-15 sm:right-15 sm:w-20 sm:h-20 lg:top-20 lg:right-20 lg:w-32 lg:h-32 bg-orange-500 rounded-full opacity-10"></div>
            <div className="absolute bottom-20 left-1/4 w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 bg-orange-400 rounded-full opacity-20"></div>
            <div className="absolute top-1/3 left-5 w-8 h-8 sm:left-7 sm:w-12 sm:h-12 lg:left-10 lg:w-16 lg:h-16 bg-orange-300 rounded-full opacity-30 animate-pulse"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    {/* Company Info */}
                    <div className="text-center sm:text-left">
                        {/* <div className='flex gap-5 items-center sm:items-start'> */}
                        <div className='pl-10'><img src={logo} alt="logo" className="w-16 h-16  lg:w-24 lg:h-24 mx-auto sm:mx-0 mb-3 sm:mb-4" /></div>
                        {/* <h4 className="text-lg sm:text-xl  font-bold font-heading lg:text-4xl mb-3 sm:mb-4">
                            Eagle <span className="text-orange-500">Cabs</span>
                        </h4></div> */}
                        <p className="text-gray-500 mb-3 sm:mb-4 text-sm sm:text-base">
                            Providing complete travel solutions with commitment to client satisfaction for over 20 years.
                        </p>
                        <div className="flex justify-center sm:justify-start space-x-4">
                            <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                            <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                        </div>
                    </div>

                    {/* Services */}
                    <div className="text-center sm:text-left">
                        <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Services</h4>
                        <ul className="space-y-1 sm:space-y-2 text-gray-500 text-sm sm:text-base">
                            <li><NavLink to='/car-rental' className="hover:text-orange-500 transition-colors">Car Rentals</NavLink></li>
                            <li><NavLink to='/bus-rental' className="hover:text-orange-500 transition-colors">Bus Rentals</NavLink></li>
                            <li><NavLink to='/bts' className="hover:text-orange-500 transition-colors">Business Transportation</NavLink></li>
                            <li><NavLink to='/event-organizer' className="hover:text-orange-500 transition-colors">Event Organizer</NavLink></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="text-center sm:text-left">
                        <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Contact</h4>
                        <ul className="space-y-1 sm:space-y-2 text-gray-500 text-xs sm:text-sm">
                            <li>Gurugram: 0124-4186371</li>
                            <li>Delhi (NCR): 0120-4237272</li>
                            <li>Hyderabad: 040-60507272</li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div className="text-center sm:text-left">
                        <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h4>
                        <ul className="space-y-1 sm:space-y-2 text-gray-500 text-sm sm:text-base">
                            <li><NavLink to='/about' className="hover:text-orange-500 transition-colors">About Us</NavLink></li>
                            <li><NavLink to='/fleet' className="hover:text-orange-500 transition-colors">Our Fleet</NavLink></li>
                            <li><NavLink to='/careers' className="hover:text-orange-500 transition-colors">Careers</NavLink></li>
                            <li><NavLink to='/contact' className="hover:text-orange-500 transition-colors">Contact</NavLink></li>
                        </ul>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="border-t border-gray-700 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-400">
                    <p className="text-xs sm:text-sm">&copy; 2024 Eagle Cabs India Pvt. Ltd. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer