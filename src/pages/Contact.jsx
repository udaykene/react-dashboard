import React from "react";

const Contact = () => {
  return (
    <div className="bg-white min-h-screen w-full overflow-x-hidden">
      {/* Hero Header */}
      <div className="bg-[#0a0f1a] py-12 sm:py-14 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-800">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 leading-tight">
            Get In Touch
          </h1>
          <p className="text-orange-400 text-base sm:text-lg md:text-xl leading-relaxed">
            We're ready to help you build your future in Ratnagiri.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-10 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20">
          
          {/* Left Side: Contact Details & Map */}
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Visit Our Office
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              Whether you're looking for a new home or a commercial investment, our team at 
              ParthBuilders is here to provide expert guidance. Drop by our office for a coffee 
              and a chat about your vision.
            </p>

            <div className="space-y-5 sm:space-y-6 md:space-y-8">
              {/* Location */}
              <div className="flex items-start group">
                <div className="bg-orange-100 p-2.5 sm:p-3 rounded-lg text-orange-600 mr-3 sm:mr-4 shrink-0 text-xl sm:text-2xl group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                  📍
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-base sm:text-lg text-gray-900 mb-1">
                    Headquarters
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600">
                    Ratnagiri, Maharashtra, India
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start group">
                <div className="bg-orange-100 p-2.5 sm:p-3 rounded-lg text-orange-600 mr-3 sm:mr-4 shrink-0 text-xl sm:text-2xl group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                  📞
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-base sm:text-lg text-gray-900 mb-1">
                    Call Us
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600 font-medium">
                    +91 8252926242
                  </p>
                  <p className="text-xs sm:text-sm text-gray-400 mt-0.5">
                    Mon-Fri: 9am - 6pm
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start group">
                <div className="bg-orange-100 p-2.5 sm:p-3 rounded-lg text-orange-600 mr-3 sm:mr-4 shrink-0 text-xl sm:text-2xl group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                  ✉️
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-base sm:text-lg text-gray-900 mb-1">
                    Email Support
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600 break-all sm:break-normal">
                    parthbuilders01@gmail.com
                  </p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 sm:mt-10 md:mt-12 h-48 sm:h-56 md:h-64 lg:h-72 bg-gray-200 rounded-xl sm:rounded-2xl overflow-hidden relative shadow-inner">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium italic text-sm sm:text-base px-4 text-center z-10">
                [ Interactive Map Loading... ]
              </div>
              <img 
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80" 
                alt="Map background" 
                className="w-full h-full object-cover opacity-30 grayscale"
              />
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="bg-gray-50 p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl sm:rounded-3xl border border-gray-100 shadow-lg sm:shadow-xl order-1 lg:order-2">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0a0f1a] mb-1 sm:mb-2 leading-tight">
              Send us a message
            </h3>
            <p className="text-sm sm:text-base text-gray-500 mb-6 sm:mb-8">
              We usually respond within 24 hours.
            </p>

            <form className="space-y-5 sm:space-y-6">
              {/* Name and Phone Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                    Full Name
                  </label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                    Phone Number
                  </label>
                  <input 
                    type="tel" 
                    placeholder="+91 00000 00000"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                  Email Address
                </label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                  Subject
                </label>
                <select className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all bg-white cursor-pointer">
                  <option>Inquiry about Residential Projects</option>
                  <option>Commercial Property Interest</option>
                  <option>Schedule a Site Visit</option>
                  <option>Others</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                  Your Message
                </label>
                <textarea 
                  rows="4" 
                  placeholder="Tell us about your requirements..."
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 sm:py-4 text-sm sm:text-base rounded-lg sm:rounded-xl shadow-lg shadow-orange-200 transition-all duration-300 transform hover:-translate-y-1 active:scale-95 focus:outline-none focus:ring-4 focus:ring-orange-300"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
