import React from 'react'

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-700 via-gray-900 to-black flex items-center justify-center p-6">
      <div className="flex flex-wrap bg-white shadow-2xl rounded-lg overflow-hidden max-w-5xl">
        {/* Left Section - Contact Details */}
        <div className="bg-gradient-to-b from-cyan-500 to-blue-500 p-6 grid grid-cols-2 gap-4 w-full md:w-1/2 text-white">
          {/* Address */}
          <div className="flex flex-col items-center text-center p-4 border border-white rounded-lg">
            <div className="text-4xl">📍</div>
            <h3 className="font-bold mt-2 text-lg">OUR MAIN OFFICE</h3>
            <p className="text-sm">SoHo 94 Broadway St<br />New York, NY 1001</p>
          </div>

          {/* Phone Number */}
          <div className="flex flex-col items-center text-center p-4 border border-white rounded-lg">
            <div className="text-4xl">📞</div>
            <h3 className="font-bold mt-2 text-lg">PHONE NUMBER</h3>
            <p className="text-sm">234-9876-5400<br />888-0123-4567 (Toll Free)</p>
          </div>

          {/* Fax */}
          <div className="flex flex-col items-center text-center p-4 border border-white rounded-lg">
            <div className="text-4xl">📠</div>
            <h3 className="font-bold mt-2 text-lg">FAX</h3>
            <p className="text-sm">1-234-567-8900</p>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center text-center p-4 border border-white rounded-lg">
            <div className="text-4xl">✉️</div>
            <h3 className="font-bold mt-2 text-lg">EMAIL</h3>
            <a href="mailto:hello@theme.com" className="text-yellow-300 underline">
              hello@theme.com
            </a>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="bg-gray-50 p-8 w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Contact Us</h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Enter your Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-cyan-400"
            />
            <input
              type="email"
              placeholder="Enter a valid email address"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-cyan-400"
            />
            <textarea
              placeholder="Enter your message"
              className="w-full p-3 h-28 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-cyan-400"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-3 font-bold rounded-lg hover:from-indigo-500 hover:to-purple-500 transition-transform transform hover:scale-105"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
