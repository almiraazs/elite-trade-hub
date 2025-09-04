import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Link as ScrollLink, scroller } from "react-scroll";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { FaHome, FaInfoCircle, FaCog, FaCreditCard, FaShieldAlt, FaHandshake } from "react-icons/fa";
import logoImage from "../../assets/logo-removebg-preview.png";

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleServicesDropdown = () => setIsServicesDropdownOpen(!isServicesDropdownOpen);

  // Fungsi untuk handle scroll ke section, baik dari halaman / atau halaman lain
  const handleScroll = (section) => {
    if (location.pathname !== "/") {
      navigate("/"); // kembali dulu ke halaman home
      setTimeout(() => {
        scroller.scrollTo(section, {
          smooth: true,
          duration: 500,
          offset: -80, // biar tidak ketutup navbar
        });
      }, 100); // kasih delay biar halaman sempat render
    } else {
      scroller.scrollTo(section, {
        smooth: true,
        duration: 500,
        offset: -80,
      });
    }
    setIsMobileMenuOpen(false); // tutup menu mobile kalau terbuka
  };

  return (
    <div className="py-5 relative bg-gradient-to-b from-black via-gray-900 to-black sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logoImage} alt="Logo" className="w-14 h-14 object-contain" />
          <p className="text-2xl font-bold">
            ELITE <span className="text-yellow-500">TRADE HUB</span>
          </p>
        </Link>

        {/* Menu Desktop */}
        <div className="hidden md:block">
          <ul className="flex gap-8">
            <li
              className="cursor-pointer hover:border-b-2 border-yellow-500 uppercase flex items-center gap-2"
              onClick={() => handleScroll("home")}
            >
              <FaHome /> Home
            </li>
            <li
              className="cursor-pointer hover:border-b-2 border-yellow-500 uppercase flex items-center gap-2"
              onClick={() => handleScroll("about")}
            >
              <FaInfoCircle /> About
            </li>
            <li className="relative">
              <button
                onClick={toggleServicesDropdown}
                className="hover:border-b-2 border-yellow-500 uppercase cursor-pointer flex items-center gap-2"
              >
                <FaCog /> Services
              </button>
              {isServicesDropdownOpen && (
                <ul className="absolute top-full left-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg py-2 z-10">
                  <li className="p-2 hover:bg-yellow-500/20">
                    <Link to="/why-choose-us" className="flex items-center gap-2" onClick={toggleServicesDropdown}>
                      <FaShieldAlt /> Why Choose Us
                    </Link>
                  </li>
                  <li className="p-2 hover:bg-yellow-500/20">
                    <Link to="/services" className="flex items-center gap-2" onClick={toggleServicesDropdown}>
                      <FaHandshake /> Our Services
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li
              className="cursor-pointer hover:border-b-2 border-yellow-500 uppercase flex items-center gap-2"
              onClick={() => handleScroll("payment")}
            >
              <FaCreditCard /> Payment
            </li>
          </ul>
        </div>

        {/* Tombol Mobile */}
        <button onClick={toggleMobileMenu} className="cursor-pointer md:hidden text-yellow-500">
          {isMobileMenuOpen ? <HiOutlineX size={24} /> : <HiOutlineMenu size={24} />}
        </button>

        {/* Menu Mobile */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-gradient-to-t from-gray-900 to-black text-white z-50 flex flex-col items-center justify-center space-y-6">
            <button onClick={() => handleScroll("home")} className="text-xl flex items-center gap-2">
              <FaHome /> Home
            </button>
            <button onClick={() => handleScroll("about")} className="text-xl flex items-center gap-2">
              <FaInfoCircle /> About
            </button>
            <Link to="/why-choose-us" onClick={toggleMobileMenu} className="text-xl flex items-center gap-2">
              <FaShieldAlt /> Why Choose Us
            </Link>
            <Link to="/services" onClick={toggleMobileMenu} className="text-xl flex items-center gap-2">
              <FaHandshake /> Our Services
            </Link>
            <button onClick={() => handleScroll("payment")} className="text-xl flex items-center gap-2">
              <FaCreditCard /> Payment
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
