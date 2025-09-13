import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import enquiry from "../assets/enquiry.jpg";
export default function Contact() {
  return (
    <div className="px-6 relative py-12 max-w-4xl mx-auto">
      {/* Title */}
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Contact <span className="text-orange-600">Us</span>
      </h1>

      {/* Contact Card */}
      <div className="bg-white shadow-lg rounded-2xl p-8 space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">Corporate Office</h2>
        <p className="text-gray-700">
          Eagle Cabs India Pvt. Ltd. <br />
          Plot No 17, Opposite Gurudwara, <br />
          Opposite Maruti Despatch Gate No 2, <br />
          Old Delhi-Gurgaon Road, <br />
          Gurugram – 122015 (Haryana)
        </p>

        {/* Phone */}
        <div className="flex items-center space-x-3">
          <Phone className="text-blue-600 w-5 h-5" />
          <p className="text-gray-700">0124-4186371</p>
        </div>

        {/* Mobile */}
        <div className="flex items-center space-x-3">
          <Phone className="text-blue-600 w-5 h-5" />
          <p className="text-gray-700">+91 7836879797</p>
        </div>

        {/* Email */}
        <div className="flex items-center space-x-3">
          <Mail className="text-blue-600 w-5 h-5" />
          <a
            href="mailto:info@eaglecabs.in"
            className="text-blue-600 hover:underline"
          >
            info@eaglecabs.in
          </a>
        </div>
      </div>
      <div className=" top-40 right-15 absolute">
<img src={enquiry} className="w-[300px] h-[300px] rounded-full"/>
      </div>
    </div>
  );
}
