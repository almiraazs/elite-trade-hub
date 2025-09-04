import React from "react";
import { FaWhatsapp, FaInstagram, FaDiscord } from "react-icons/fa";
import logoImage from "../../assets/logo-removebg-preview.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-12 mt-10">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Logo & Brand */}
        <div className="flex flex-col items-center md:items-start">
          <img src={logoImage} alt="Logo" className="w-20 h-20 mb-4" />
          <h2 className="text-2xl font-bold tracking-wide">
            ELITE <span className="text-yellow-500">TRADE HUB</span>
          </h2>
          <p className="text-gray-400 text-sm mt-3">
            It’s time for your account to shine without the tryhard!
          </p>
        </div>

        {/* Contact & Social Media */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-2xl font-bold mb-5 text-yellow-500 uppercase tracking-wide">
            Contact Us
          </h3>
          <div className="flex justify-center md:justify-start gap-8 text-4xl mb-4">
            <a
              href="https://www.instagram.com/elitetrade_hub?igsh=MWJieThzbGQxd3draA=="
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition-transform transform hover:scale-125"
            >
              <FaInstagram />
            </a>
          </div>
          <p className="text-gray-300 text-lg font-medium">
            elite.tradehub@gmail.com
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-12 pt-5 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Elite Trade Hub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
