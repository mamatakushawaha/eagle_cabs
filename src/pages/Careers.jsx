import React, { useState } from "react";
import { MapPin, Clock, DollarSign, Users, Star, Send, CheckCircle, Mail, User, Calendar, Phone, MapPinIcon } from "lucide-react";

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    contact: '',
    address: '',
    gender: '',
    experience: '',
    applyposition:  ''
  });

  const jobOpenings = [
    {
      id: 1,
      title: "Professional Driver",
      department: "Operations",
      location: "Multiple Locations",
      type: "Full-time",
      salary: "₹25,000 - ₹35,000",
      experience: "2-5 years",
      description: "We are looking for experienced and reliable drivers to join our fleet. Must have excellent driving record and customer service skills.",
      requirements: [
        "Valid commercial driving license",
        "Clean driving record (minimum 3 years)",
        "Good knowledge of city roads",
        "Professional appearance and attitude",
        "Ability to work flexible hours"
      ],
      benefits: [
        "Competitive salary with incentives",
        "Medical insurance",
        "Paid time off",
        "Vehicle maintenance support",
        "Performance bonuses"
      ]
    },
    {
      id: 2,
      title: "Fleet Manager",
      department: "Operations",
      location: "Head Office",
      type: "Full-time",
      salary: "₹50,000 - ₹70,000",
      experience: "5-8 years",
      description: "Manage and oversee our fleet operations, ensuring optimal performance and maintenance of vehicles.",
      requirements: [
        "Bachelor's degree in relevant field",
        "Experience in fleet management",
        "Strong leadership skills",
        "Knowledge of vehicle maintenance",
        "Excellent organizational abilities"
      ],
      benefits: [
        "Competitive salary package",
        "Health and life insurance",
        "Performance incentives",
        "Career growth opportunities",
        "Professional development support"
      ]
    },
    {
      id: 3,
      title: "Customer Service Executive",
      department: "Customer Relations",
      location: "Call Center",
      type: "Full-time",
      salary: "₹20,000 - ₹30,000",
      experience: "1-3 years",
      description: "Handle customer inquiries, bookings, and provide excellent customer service through phone and online channels.",
      requirements: [
        "Excellent communication skills",
        "Customer service experience",
        "Computer literacy",
        "Problem-solving abilities",
        "Patience and professionalism"
      ],
      benefits: [
        "Fixed working hours",
        "Medical benefits",
        "Skill development programs",
        "Employee recognition rewards",
        "Friendly work environment"
      ]
    },
    {
      id: 4,
      title: "Maintenance Technician",
      department: "Technical",
      location: "Service Center",
      type: "Full-time",
      salary: "₹30,000 - ₹45,000",
      experience: "3-6 years",
      description: "Responsible for vehicle maintenance, repairs, and ensuring all fleet vehicles are in optimal condition.",
      requirements: [
        "Technical certification in automotive",
        "Experience in vehicle maintenance",
        "Knowledge of diagnostic tools",
        "Attention to detail",
        "Safety compliance awareness"
      ],
      benefits: [
        "Competitive wages",
        "Tool allowance",
        "Training opportunities",
        "Insurance coverage",
        "Overtime compensation"
      ]
    },
    {
      id: 5,
      title: "Sales Executive",
      department: "Sales & Marketing",
      location: "Field/Office",
      type: "Full-time",
      salary: "₹25,000 - ₹40,000 + Commission",
      experience: "2-4 years",
      description: "Develop new business opportunities, maintain client relationships, and achieve sales targets.",
      requirements: [
        "Sales experience preferred",
        "Excellent communication skills",
        "Target-oriented mindset",
        "Networking abilities",
        "Willingness to travel"
      ],
      benefits: [
        "Base salary plus commission",
        "Medical insurance",
        "Travel allowances",
        "Performance bonuses",
        "Career advancement opportunities"
      ]
    }
  ];

  // Additional job openings from the document
  const additionalJobOpenings = [
    { title: "Drivers", description: "Only Experienced Candidates should apply", code: "DR" },
    { title: "Supervisors", description: "Only Experienced Candidates should apply", code: "SUP" },
    { title: "Asst Manager Operations", description: "Only Experienced Candidates should apply", code: "AMOPS" },
    { title: "Manager Operations", description: "Only Experienced Candidates should apply", code: "MOPS" },
    { title: "Sales Manager", description: "Only Experienced Candidates should apply", code: "SMNGR" },
    { title: "Account Manager", description: "Only Experienced Candidates should apply", code: "ACMNGR" },
    { title: "HR and Admin Manager", description: "Only Experienced Candidates should apply", code: "HRMNGR" },
    { title: "Senior Manager Operations", description: "Only Experienced Candidates should apply", code: "SRMOPS" }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: "Competitive Salary",
      description: "We offer market-competitive salaries with regular reviews"
    },
    {
      icon: Star,
      title: "Performance Incentives",
      description: "Bonus and incentive programs based on performance"
    },
    {
      icon: Users,
      title: "Team Environment",
      description: "Work with a supportive and professional team"
    },
    {
      icon: CheckCircle,
      title: "Growth Opportunities",
      description: "Clear career progression paths and skill development"
    }
  ];

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
    alert('Application submitted successfully! We will contact you soon.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-amber-400/30 via-orange-400/30 to-red-400/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-amber-700 mt-10 mb-6">
            Join Our <span className="text-amber-900">Team</span>
          </h1>
          <p className="text-xl text-amber-900 max-w-3xl mx-auto">
            Build your career with Eagle Cabs. We're always looking for passionate individuals who want to make a difference in the transportation industry.
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-amber-900 mb-12">
            Why Work <span className="text-orange-700">With Us?</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/95 transition-colors duration-200 shadow-lg border border-amber-200">
                  <IconComponent className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-amber-900 mb-3">{benefit.title}</h3>
                  <p className="text-amber-800 text-sm">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Openings at Eagle Cabs Table */}
      <section className="py-16 bg-gradient-to-br from-amber-100 via-orange-100 to-yellow-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-amber-900 mb-4">
            Openings at <span className="text-orange-700">Eagle Cabs Pvt.Ltd</span>
          </h2>
          
          <div className="bg-white/90 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg border border-amber-200 mb-8">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-amber-700 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Job Title</th>
                    <th className="px-6 py-4 text-left font-semibold">Job Description</th>
                    <th className="px-6 py-4 text-left font-semibold">Job Code</th>
                  </tr>
                </thead>
                <tbody>
                  {additionalJobOpenings.map((job, index) => (
                    <tr key={index} className={`${index % 2 === 0 ? 'bg-amber-50' : 'bg-white'} hover:bg-amber-100 transition-colors duration-200`}>
                      <td className="px-6 py-4 font-medium text-amber-900">{job.title}</td>
                      <td className="px-6 py-4 text-amber-800">{job.description}</td>
                      <td className="px-6 py-4 font-medium text-amber-700">{job.code}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-amber-600 text-white p-4 rounded-lg mb-8">
            <p className="text-lg font-semibold mb-2">
              To apply for the above mentioned positions, send your resume to info@eaglecabs.in
            </p>
            <p className="text-amber-100">
              Also fill the form below:
            </p>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-8 shadow-lg border border-amber-200">
            <h3 className="text-2xl font-bold text-amber-900 mb-6 text-center">Application Form</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-amber-900 font-semibold mb-2">
                  <User className="h-4 w-4 inline mr-2" />
                  Your Complete Name (required)
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white/80"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-amber-900 font-semibold mb-2">
                  <Calendar className="h-4 w-4 inline mr-2" />
                  Your DOB (required)
                </label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white/80"
                />
              </div>

              <div>
                <label className="block text-amber-900 font-semibold mb-2">
                  <Phone className="h-4 w-4 inline mr-2" />
                  Your Contact Number (required)
                </label>
                <input
                  type="tel"
                  name="contact"
                  value={formData.contact}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white/80"
                  placeholder="Enter your contact number"
                />
              </div>

              <div>
                <label className="block text-amber-900 font-semibold mb-2">
                  <MapPinIcon className="h-4 w-4 inline mr-2" />
                  Your Address (required)
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  rows="3"
                  className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white/80"
                  placeholder="Enter your complete address"
                />
              </div>

              <div>
                <label className="block text-amber-900 font-semibold mb-2">
                  Your Gender (required)
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white/80"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-amber-900 font-semibold mb-2">
                  Your Experience (in years) (required)
                </label>
                <input
                  type="number"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white/80"
                  placeholder="Enter your experience in years"
                  min="0"
                  step="0.1"
                />
              </div>
              <div>
                <label className="block text-amber-900 font-semibold mb-2">
                  Position You Are Applying For (required)
                </label>
                <select
                  name="applyposition"
                  value={formData.applyposition}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white/80"
                >
                  <option value="">Select Position</option>
                  {jobOpenings.map((job) => (
                    <option key={job.id} value={job.title}>{job.title}</option>
                  ))}
                </select>
              </div>


              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200 shadow-lg"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-16 bg-gradient-to-br from-amber-100 via-orange-100 to-yellow-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-amber-900 mb-12">
            Detailed Job <span className="text-orange-700">Descriptions</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {jobOpenings.map((job) => (
              <div
                key={job.id}
                className="bg-white/80 backdrop-blur-sm rounded-lg p-6 hover:bg-white/95 transition-colors duration-200 cursor-pointer shadow-lg border border-amber-200"
                onClick={() => setSelectedJob(job)}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-amber-900 mb-2">{job.title}</h3>
                    <p className="text-amber-700 text-sm font-medium">{job.department}</p>
                  </div>
                  <span className="bg-amber-600 text-white text-xs px-2 py-1 rounded-full">
                    {job.type}
                  </span>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-amber-800">
                    <MapPin className="h-4 w-4 mr-2 text-amber-600" />
                    {job.location}
                  </div>
                  <div className="flex items-center text-sm text-amber-800">
                    <DollarSign className="h-4 w-4 mr-2 text-amber-600" />
                    {job.salary}
                  </div>
                  <div className="flex items-center text-sm text-amber-800">
                    <Clock className="h-4 w-4 mr-2 text-amber-600" />
                    {job.experience} experience
                  </div>
                </div>
                
                <p className="text-amber-800 text-sm mb-4 line-clamp-2">{job.description}</p>
                
                <button className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-200 shadow-lg">
                  View Details & Apply
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Detail Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white/95 backdrop-blur-sm rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-amber-200">
            <div className="p-6 border-b border-amber-200">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold text-amber-900 mb-2">{selectedJob.title}</h2>
                  <p className="text-amber-700 font-medium">{selectedJob.department}</p>
                </div>
                <button
                  onClick={() => setSelectedJob(null)}
                  className="text-amber-700 hover:text-amber-900 text-2xl font-bold"
                >
                  ×
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center text-sm text-amber-800">
                  <MapPin className="h-4 w-4 mr-2 text-amber-600" />
                  {selectedJob.location}
                </div>
                <div className="flex items-center text-sm text-amber-800">
                  <DollarSign className="h-4 w-4 mr-2 text-amber-600" />
                  {selectedJob.salary}
                </div>
                <div className="flex items-center text-sm text-amber-800">
                  <Clock className="h-4 w-4 mr-2 text-amber-600" />
                  {selectedJob.experience}
                </div>
                <div className="flex items-center text-sm">
                  <span className="bg-amber-600 text-white text-xs px-2 py-1 rounded-full">
                    {selectedJob.type}
                  </span>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">Job Description</h3>
                <p className="text-amber-800">{selectedJob.description}</p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">Requirements</h3>
                <ul className="space-y-2">
                  {selectedJob.requirements.map((req, index) => (
                    <li key={index} className="flex items-start text-amber-800">
                      <CheckCircle className="h-4 w-4 mr-2 text-amber-600 mt-1 flex-shrink-0" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">Benefits</h3>
                <ul className="space-y-2">
                  {selectedJob.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start text-amber-800">
                      <Star className="h-4 w-4 mr-2 text-amber-600 mt-1 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex space-x-4">
                <button className="flex-1 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center shadow-lg">
                  <Send className="h-4 w-4 mr-2" />
                  Apply Now
                </button>
                <button
                  onClick={() => setSelectedJob(null)}
                  className="px-6 py-3 border border-amber-300 text-amber-800 rounded-lg hover:bg-amber-50 transition-colors duration-200"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Application Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-amber-900 mb-12">
            Application <span className="text-orange-700">Process</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-amber-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl shadow-lg">
                1
              </div>
              <h3 className="text-lg font-semibold text-amber-900 mb-2">Apply Online</h3>
              <p className="text-amber-800 text-sm">Submit your application through our online portal</p>
            </div>
            
            <div className="text-center">
              <div className="bg-amber-700 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl shadow-lg">
                2
              </div>
              <h3 className="text-lg font-semibold text-amber-900 mb-2">Initial Review</h3>
              <p className="text-amber-800 text-sm">Our HR team reviews your application and qualifications</p>
            </div>
            
            <div className="text-center">
              <div className="bg-amber-800 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl shadow-lg">
                3
              </div>
              <h3 className="text-lg font-semibold text-amber-900 mb-2">Interview</h3>
              <p className="text-amber-800 text-sm">Face-to-face or virtual interview with our team</p>
            </div>
            
            <div className="text-center">
              <div className="bg-amber-900 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl shadow-lg">
                4
              </div>
              <h3 className="text-lg font-semibold text-amber-900 mb-2">Welcome Aboard</h3>
              <p className="text-amber-800 text-sm">Join our team and start your career journey</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact HR */}
      <section className="py-16 bg-gradient-to-br from-amber-800 via-orange-800 to-yellow-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Don't See the Right Role?
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            Send us your resume and we'll keep you in mind for future opportunities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:info@eaglecabs.in"
              className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg inline-flex items-center justify-center"
            >
              <Mail className="h-4 w-4 mr-2" />
              Send Resume
            </a>
            <button className="border border-amber-300 text-amber-100 hover:bg-amber-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Contact HR
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;