import React from "react";

const SalonHistory = () => {
  const historyItems = [
    {
      title: "Bridal Makeup Completed",
      service: "Premium Bridal Package",
      date: "15 Jan 2026",
      time: "10:00 AM",
      stylist: "Sarah Johnson",
      rating: 5,
      icon: "💄",
    },
    {
      title: "Hair Color Transformation",
      service: "Balayage & Highlights",
      date: "08 Jan 2026",
      time: "2:30 PM",
      stylist: "Emma Davis",
      rating: 5,
      icon: "✨",
    },
    {
      title: "Luxury Spa Session",
      service: "Full Body Massage & Facial",
      date: "28 Dec 2025",
      time: "4:00 PM",
      stylist: "Jessica Smith",
      rating: 5,
      icon: "💆",
    },
    {
      title: "Hair Styling & Cut",
      service: "Modern Layered Cut",
      date: "15 Dec 2025",
      time: "11:30 AM",
      stylist: "Emily Wilson",
      rating: 4,
      icon: "💇",
    },
    {
      title: "Nail Art & Manicure",
      service: "Gel Nails with Design",
      date: "05 Dec 2025",
      time: "3:00 PM",
      stylist: "Lisa Anderson",
      rating: 5,
      icon: "💅",
    },
    {
      title: "Consultation Session",
      service: "Skincare & Beauty Consultation",
      date: "20 Nov 2025",
      time: "1:00 PM",
      stylist: "Olivia Martinez",
      rating: 5,
      icon: "💬",
    },
  ];

  return (
    <div className="bg-white w-full overflow-x-hidden">
      
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
        
        <div className="relative max-w-7xl mx-auto text-center">
          <span className="inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 rounded-full bg-rose-500/20 border border-rose-300/30 text-rose-200 text-xs sm:text-sm font-medium backdrop-blur-sm">
            ✨ Your Beauty Timeline
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 leading-tight">
            Service <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-300">History</span>
          </h1>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg">
            Your journey to beauty and wellness
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-10 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        
        {/* Stats Summary */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-rose-100 hover:shadow-lg transition-all group text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-500 mb-1 sm:mb-2 group-hover:scale-110 transition-transform">
              6
            </div>
            <p className="text-xs sm:text-sm text-gray-600 font-semibold">Total Visits</p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-purple-100 hover:shadow-lg transition-all group text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-violet-500 mb-1 sm:mb-2 group-hover:scale-110 transition-transform">
              4.8
            </div>
            <p className="text-xs sm:text-sm text-gray-600 font-semibold">Avg Rating</p>
          </div>
          
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-amber-100 hover:shadow-lg transition-all group text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500 mb-1 sm:mb-2 group-hover:scale-110 transition-transform">
              12
            </div>
            <p className="text-xs sm:text-sm text-gray-600 font-semibold">Services Used</p>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-emerald-100 hover:shadow-lg transition-all group text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-500 mb-1 sm:mb-2 group-hover:scale-110 transition-transform">
              3
            </div>
            <p className="text-xs sm:text-sm text-gray-600 font-semibold">This Month</p>
          </div>
        </div>

        {/* History Timeline */}
        <div className="space-y-4 sm:space-y-6">
          {historyItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl sm:rounded-3xl border-l-4 border-rose-500 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="p-4 sm:p-6 md:p-8">
                <div className="flex flex-col lg:flex-row lg:items-center gap-4 sm:gap-6">
                  
                  {/* Icon */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center text-2xl sm:text-3xl md:text-4xl flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg shadow-rose-200">
                    {item.icon}
                  </div>

                  {/* Main Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-2 sm:mb-3">
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-gray-900 text-base sm:text-lg md:text-xl mb-1">
                          {item.title}
                        </h4>
                        <p className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-500 text-sm sm:text-base font-semibold">
                          {item.service}
                        </p>
                      </div>

                      {/* Rating */}
                      <div className="flex items-center gap-1 flex-shrink-0">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={`text-base sm:text-lg ${
                              i < item.rating ? "text-amber-400" : "text-gray-300"
                            }`}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm text-gray-500">
                      <div className="flex items-center gap-1.5">
                        <span className="text-rose-500 text-base">👤</span>
                        <span className="font-medium">{item.stylist}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-rose-500 text-base">📅</span>
                        <span>{item.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-rose-500 text-base">🕐</span>
                        <span>{item.time}</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-row lg:flex-col gap-2 sm:gap-3">
                    <button className="flex-1 lg:flex-none px-4 sm:px-6 py-2 sm:py-2.5 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white text-xs sm:text-sm font-bold rounded-lg transition-all shadow-md hover:shadow-lg whitespace-nowrap">
                      Rebook
                    </button>
                    <button className="flex-1 lg:flex-none px-4 sm:px-6 py-2 sm:py-2.5 border-2 border-rose-500 text-rose-500 hover:bg-rose-50 text-xs sm:text-sm font-bold rounded-lg transition-all whitespace-nowrap">
                      Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="mt-8 sm:mt-12 text-center">
          <button className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-rose-500 text-rose-500 hover:bg-rose-500 hover:text-white text-sm sm:text-base font-bold rounded-xl transition-all transform hover:scale-105">
            Load More History
          </button>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-16 sm:py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519415943484-9fa1873496d4?q=80&w=1740&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-rose-900/90 via-pink-900/85 to-rose-900/90"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 md:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Ready for Your Next Transformation?
          </h2>
          <p className="text-white/90 text-base sm:text-lg md:text-xl mb-8 sm:mb-10 max-w-2xl mx-auto">
            Continue your beauty journey with us. Book your next appointment and experience 
            the luxury treatment you deserve.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 sm:px-10 py-3 sm:py-4 bg-white hover:bg-gray-100 text-rose-600 text-sm sm:text-base font-bold rounded-xl shadow-xl transition-all transform hover:-translate-y-1">
              Book Appointment
            </button>
            <button className="px-8 sm:px-10 py-3 sm:py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 hover:bg-white/20 text-white text-sm sm:text-base font-bold rounded-xl transition-all">
              View Services
            </button>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gray-50 py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
            Member <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-500">Benefits</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all group">
              <div className="text-4xl sm:text-5xl mb-4 group-hover:scale-110 transition-transform">🎁</div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-900">Loyalty Points</h3>
              <p className="text-sm sm:text-base text-gray-600">Earn points with every visit and redeem for free services</p>
            </div>
            
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all group">
              <div className="text-4xl sm:text-5xl mb-4 group-hover:scale-110 transition-transform">💝</div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-900">Birthday Treats</h3>
              <p className="text-sm sm:text-base text-gray-600">Special discounts and complimentary services on your birthday</p>
            </div>
            
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all group">
              <div className="text-4xl sm:text-5xl mb-4 group-hover:scale-110 transition-transform">⭐</div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-900">VIP Access</h3>
              <p className="text-sm sm:text-base text-gray-600">Priority booking and exclusive access to new services</p>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-6 sm:py-8 overflow-hidden border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-center text-gray-400 text-xs sm:text-sm mb-4 sm:mb-6 uppercase tracking-wider">
            Certified & Trusted By
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-12">
            <div className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center">
                <span className="text-white font-bold text-xs sm:text-sm">✓</span>
              </div>
              <span className="text-white font-semibold text-sm sm:text-base md:text-lg tracking-wide">ISO Certified</span>
            </div>
            <div className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center">
                <span className="text-white font-bold text-xs sm:text-sm">★</span>
              </div>
              <span className="text-white font-semibold text-sm sm:text-base md:text-lg tracking-wide">Award Winning</span>
            </div>
            <div className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center">
                <span className="text-white font-bold text-xs sm:text-sm">♥</span>
              </div>
              <span className="text-white font-semibold text-sm sm:text-base md:text-lg tracking-wide">Expert Certified</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalonHistory;