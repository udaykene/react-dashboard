import React from 'react'
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Linkedin,
  Facebook,
  Twitter,
} from "lucide-react";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="bg-[#0b1120] text-gray-400 py-12 px-6 md:px-16 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Company Info */}
        <div className="space-y-6">
          <div className="flex items-center space-x-2">
            <div className=" bg-white px-2 py-1 rounded-full flex items-center justify-center">
              {/* Replace with your actual logo img tag */}
              <div className="text-4xl text-black">
                <i class="ri-building-2-fill"></i>
              </div>
            </div>
            <h2 className="text-white text-xl font-bold">ParthBuilders</h2>
          </div>
          <p className="text-sm leading-relaxed">
            Helping you find the perfect place to call home. We specialize in
            premium residential and commercial real estate across the region.
          </p>
          <div className="flex space-x-3">
            {[Instagram, Linkedin, Twitter, Facebook].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
              >
                <Icon size={18} className="text-white" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-6">Quick Links</h3>
          <ul className="space-y-4 text-sm">
            <li>
              <Link to="/about" className="hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-white">
                Services
              </Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-white">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-white">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/team" className="hover:text-white">
                Team
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold mb-6">Services</h3>
          <ul className="space-y-4 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Residential Sales
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Commercial Leasing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Property Management
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Investment Consulting
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Luxury Estates
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Home Staging
              </a>
            </li>
          </ul>
        </div>

        {/* Get In Touch */}
        <div>
          <h3 className="text-white font-semibold mb-6">Get In Touch</h3>
          <div className="space-y-6 text-sm">
            <div className="flex items-start space-x-3">
              <Phone size={20} className="text-blue-500 mt-1" />
              <div>
                <p className="text-white font-medium">+91 8252926242</p>
                <p className="text-xs text-gray-500">Mon-Fri 9am-6pm</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Mail size={20} className="text-blue-500 mt-1" />
              <div>
                <p className="text-white font-medium">
                  partbuilders01@gmail.com
                </p>
                <p className="text-xs text-gray-500">
                  We'll respond within 24hrs
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <MapPin size={20} className="text-blue-500 mt-1" />
              <div>
                <p className="text-white font-medium">Ratnagiri, Maharashtra</p>
                <p className="text-xs text-gray-500">India</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs space-y-4 md:space-y-0">
        <p>© 2025 ParthBuilders. All rights reserved.</p>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white">
            Terms of Service
          </a>
          <a href="#" className="hover:text-white">
            Cookie Policy
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
