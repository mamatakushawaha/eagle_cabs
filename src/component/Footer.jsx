import { Mail, Phone } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="bg-white relative text-black py-12">
            <div className="absolute top-20 right-20 w-32 h-32 bg-orange-500 rounded-full opacity-10"></div>
            <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-orange-400 rounded-full opacity-20"></div>
            <div className="absolute top-1/3 left-10 w-16 h-16 bg-orange-300 rounded-full opacity-30 animate-pulse"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h4 className="text-xl font-bold font-heading lg:text-4xl mb-4">Eagle <span className="text-orange-500">Cabs</span></h4>
                        <p className="text-gray-500 mb-4">Providing complete travel solutions with commitment to client satisfaction for over 20 years.</p>
                        <div className="flex space-x-4">
                            <Phone className="h-5 w-5" />
                            <Mail className="h-5 w-5" />
                        </div>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Services</h4>
                        <ul className="space-y-2 text-gray-500">
                            <li><NavLink to='/car-rental'>Car Rentals</NavLink></li>
                            <li><NavLink to='/bus-rental'>Bus Rentals</NavLink> </li>
                            <li><NavLink to='/bts'> Business Transportation</NavLink></li>
                            <li><NavLink to='/event-organizer'>Event Organizer</NavLink></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact</h4>
                        <ul className="space-y-2 text-gray-500 text-sm">
                            <li>Gurugram: 0124-4186371</li>
                            <li>Delhi (NCR): 0120-4237272</li>
                            <li>Hyderabad: 040-60507272</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-gray-500">
                            <li><NavLink to='/about'>About Us</NavLink></li>
                            <li><NavLink to='/fleet'>Our Fleet</NavLink></li>
                            <li><NavLink to='/careers'>Careers</NavLink></li>
                            <li><NavLink to='/contact'>Contact</NavLink></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; 2024 Eagle Cabs India Pvt. Ltd. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer