import React from "react";

const Contact = () => {
  return (
    // <div className="container h-2/2">
    //   <h1>History Page</h1>
    // </div>

    <div className="bg-white min-h-screen">
      {/* Hero Header */}
      <div className="bg-[#0a0f1a] py-16 px-6 border-b border-gray-800">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Get In Touch</h1>
          <p className="text-orange-400 text-lg">We're ready to help you build your future in Ratnagiri.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-16 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Side: Contact Details & Map Placeholder */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Visit Our Office</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Whether you're looking for a new home or a commercial investment, our team at 
              ParthBuilders is here to provide expert guidance. Drop by our office for a coffee 
              and a chat about your vision.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-orange-100 p-3 rounded-lg text-orange-600 mr-4">
                  📍
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Headquarters</h4>
                  <p className="text-gray-600">Ratnagiri, Maharashtra, India</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-orange-100 p-3 rounded-lg text-orange-600 mr-4">
                  📞
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Call Us</h4>
                  <p className="text-gray-600">+91 8252926242</p>
                  <p className="text-sm text-gray-400">Mon-Fri: 9am - 6pm</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-orange-100 p-3 rounded-lg text-orange-600 mr-4">
                  ✉️
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Email Support</h4>
                  <p className="text-gray-600">parthbuilders01@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Decorative Visual / Small Map Placeholder */}
            <div className="mt-12 h-64 bg-gray-200 rounded-2xl overflow-hidden relative shadow-inner">
               <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium italic">
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
          <div className="bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100 shadow-xl">
            <h3 className="text-2xl font-bold text-[#0a0f1a] mb-2">Send us a message</h3>
            <p className="text-gray-500 mb-8">We usually respond within 24 hours.</p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="+91 00000 00000"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all bg-white">
                  <option>Inquiry about Residential Projects</option>
                  <option>Commercial Property Interest</option>
                  <option>Schedule a Site Visit</option>
                  <option>Others</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Your Message</label>
                <textarea 
                  rows="4" 
                  placeholder="Tell us about your requirements..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-200 transition-all transform hover:-translate-y-1 active:scale-95"
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
