import React from "react";
import Certifications from "../components/Certifications";

const SalonContact = () => {
  return (
    <div className="bg-white min-h-screen w-full overflow-x-hidden">
      {/* Hero Header */}
      <div className="relative bg-gray-900 py-12 sm:py-14 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1740&auto=format&fit=crop"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>
        
        <div className="relative max-w-7xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 leading-tight">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-300">Touch</span>
          </h1>
          <p className="text-rose-300 text-base sm:text-lg md:text-xl leading-relaxed">
            We're ready to help you look and feel your absolute best.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-10 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20">
          
          {/* Left Side: Contact Details & Map */}
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Visit Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-500">Salon</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              Whether you're looking for a fresh new look or a relaxing spa day, our team of 
              expert stylists is here to provide personalized care. Drop by for a consultation 
              and discover your perfect style.
            </p>

            <div className="space-y-5 sm:space-y-6 md:space-y-8">
              {/* Location */}
              <div className="flex items-start group">
                <div className="bg-gradient-to-br from-rose-100 to-pink-100 p-2.5 sm:p-3 rounded-lg text-rose-600 mr-3 sm:mr-4 shrink-0 text-xl sm:text-2xl group-hover:bg-gradient-to-br group-hover:from-rose-500 group-hover:to-pink-500 group-hover:text-white transition-all duration-300">
                  📍
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-base sm:text-lg text-gray-900 mb-1">
                    Our Location
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600">
                    123 Beauty Avenue, Downtown District
                  </p>
                  <p className="text-sm sm:text-base text-gray-600">
                    City Center, State 12345
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start group">
                <div className="bg-gradient-to-br from-rose-100 to-pink-100 p-2.5 sm:p-3 rounded-lg text-rose-600 mr-3 sm:mr-4 shrink-0 text-xl sm:text-2xl group-hover:bg-gradient-to-br group-hover:from-rose-500 group-hover:to-pink-500 group-hover:text-white transition-all duration-300">
                  📞
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-base sm:text-lg text-gray-900 mb-1">
                    Call Us
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600 font-medium">
                    +1 (555) 123-4567
                  </p>
                  <p className="text-xs sm:text-sm text-gray-400 mt-0.5">
                    Mon-Sat: 9am - 8pm | Sun: 10am - 6pm
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start group">
                <div className="bg-gradient-to-br from-rose-100 to-pink-100 p-2.5 sm:p-3 rounded-lg text-rose-600 mr-3 sm:mr-4 shrink-0 text-xl sm:text-2xl group-hover:bg-gradient-to-br group-hover:from-rose-500 group-hover:to-pink-500 group-hover:text-white transition-all duration-300">
                  ✉️
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-base sm:text-lg text-gray-900 mb-1">
                    Email Support
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600 break-all sm:break-normal">
                    hello@beautysalon.com
                  </p>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-start group">
                <div className="bg-gradient-to-br from-rose-100 to-pink-100 p-2.5 sm:p-3 rounded-lg text-rose-600 mr-3 sm:mr-4 shrink-0 text-xl sm:text-2xl group-hover:bg-gradient-to-br group-hover:from-rose-500 group-hover:to-pink-500 group-hover:text-white transition-all duration-300">
                  📸
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-base sm:text-lg text-gray-900 mb-1">
                    Follow Us
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600">
                    @beautysalon
                  </p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 sm:mt-10 md:mt-12 h-48 sm:h-56 md:h-64 lg:h-72 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl sm:rounded-2xl overflow-hidden relative shadow-lg border border-gray-200">
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
          <div className="bg-gradient-to-br from-gray-50 to-white p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl sm:rounded-3xl border border-gray-200 shadow-lg sm:shadow-xl order-1 lg:order-2">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1 sm:mb-2 leading-tight">
              Book Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-500">Appointment</span>
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
                    placeholder="Jane Doe"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                    Phone Number
                  </label>
                  <input 
                    type="tel" 
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all"
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
                  placeholder="jane@example.com"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all"
                />
              </div>

              {/* Service */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                  Service Type
                </label>
                <select className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all bg-white cursor-pointer">
                  <option>Hair Styling & Cut</option>
                  <option>Hair Color & Highlights</option>
                  <option>Makeup Services</option>
                  <option>Spa & Massage</option>
                  <option>Bridal Package</option>
                  <option>Nail Services</option>
                  <option>Other Services</option>
                </select>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                    Preferred Date
                  </label>
                  <input 
                    type="date" 
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                    Preferred Time
                  </label>
                  <input 
                    type="time" 
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                  Special Requests (Optional)
                </label>
                <textarea 
                  rows="4" 
                  placeholder="Tell us about your preferences or any specific requirements..."
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-bold py-3 sm:py-4 text-sm sm:text-base rounded-lg sm:rounded-xl shadow-lg shadow-rose-500/30 transition-all duration-300 transform hover:-translate-y-1 active:scale-95 focus:outline-none focus:ring-4 focus:ring-rose-300"
              >
                Book Appointment
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* Additional Info Section */}
      <div className="relative py-12 sm:py-16 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519415943484-9fa1873496d4?q=80&w=1740&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-rose-900/90 via-pink-900/85 to-rose-900/90"></div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-white text-center">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all">
              <div className="text-4xl mb-3">⏰</div>
              <h3 className="text-lg font-bold mb-2">Flexible Hours</h3>
              <p className="text-sm text-white/80">Open 7 days a week to accommodate your busy schedule</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all">
              <div className="text-4xl mb-3">🎁</div>
              <h3 className="text-lg font-bold mb-2">Special Offers</h3>
              <p className="text-sm text-white/80">Ask about our loyalty program and seasonal packages</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all">
              <div className="text-4xl mb-3">🚗</div>
              <h3 className="text-lg font-bold mb-2">Free Parking</h3>
              <p className="text-sm text-white/80">Ample parking space available for all our guests</p>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <Certifications/>
    </div>
  );
};

export default SalonContact;