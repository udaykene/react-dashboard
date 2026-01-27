import React from 'react'

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="bg-[#0a0f1a] h-32 relative">
          <div className="absolute -bottom-12 left-8 w-24 h-24 bg-orange-500 rounded-2xl border-4 border-white flex items-center justify-center text-3xl text-white font-bold">
            JD
          </div>
        </div>
        <div className="pt-16 pb-12 px-8">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Uday Kene</h2>
              <p className="text-gray-500">Premium Member since 2022</p>
            </div>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-bold transition">
              Edit Profile
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-gray-100 pt-8">
            <div>
              <label className="text-xs font-bold text-gray-400 uppercase">Email Address</label>
              <p className="text-gray-900 font-medium">uday.kene@example.com</p>
            </div>
            <div>
              <label className="text-xs font-bold text-gray-400 uppercase">Phone Number</label>
              <p className="text-gray-900 font-medium">+91 98765 43210</p>
            </div>
            <div>
              <label className="text-xs font-bold text-gray-400 uppercase">Preferred Location</label>
              <p className="text-gray-900 font-medium">Ratnagiri, Maharashtra</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
