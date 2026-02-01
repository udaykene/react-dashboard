import React from 'react'

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-12 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden">
        <div className="bg-[#0a0f1a] h-24 sm:h-32 relative">
          <div className="absolute -bottom-10 sm:-bottom-12 left-4 sm:left-8 w-20 h-20 sm:w-24 sm:h-24 bg-orange-500 rounded-xl sm:rounded-2xl border-4 border-white flex items-center justify-center text-2xl sm:text-3xl text-white font-bold">
            UK
          </div>
        </div>
        <div className="pt-14 sm:pt-16 pb-8 sm:pb-12 px-4 sm:px-8">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-6 sm:mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Uday Kene</h2>
              <p className="text-sm sm:text-base text-gray-500">Premium Member since 2022</p>
            </div>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-bold transition w-full sm:w-auto">
              Edit Profile
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 border-t border-gray-100 pt-6 sm:pt-8">
            <div>
              <label className="text-xs font-bold text-gray-400 uppercase">Email Address</label>
              <p className="text-gray-900 font-medium break-words">uday.kene@example.com</p>
            </div>
            <div>
              <label className="text-xs font-bold text-gray-400 uppercase">Phone Number</label>
              <p className="text-gray-900 font-medium">+91 98765 43210</p>
            </div>
            <div className="sm:col-span-2">
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