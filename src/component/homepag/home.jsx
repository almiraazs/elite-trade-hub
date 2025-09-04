import React, { useState, useEffect } from "react";
import { FaCrown, FaShieldAlt, FaGamepad } from "react-icons/fa";

// Import gambar JPG
import cocBg from "../../assets/COC.jpg";
import pubgBg from "../../assets/PUBG.jpg";
import mlBg from "../../assets/ML.jpg";

const Home = () => {
  const backgrounds = [cocBg, pubgBg, mlBg];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Ganti gambar setiap 5 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center min-h-screen px-6 sm:px-8 lg:px-16 overflow-hidden text-white"
    >
      {/* Background slideshow pakai <img /> */}
      <img
        src={backgrounds[currentIndex]}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover object-center sm:object-top md:object-center transition-all duration-1000 brightness-50"
      />

      {/* Overlay gradasi */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 z-10"></div>

      {/* Konten utama */}
      <div className="relative z-20 text-center max-w-4xl space-y-6 py-16 px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-[0_0_15px_rgba(255,215,0,0.7)]">
          <span className="text-yellow-400">Elite Trade Hub</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-200">
          The Premier Marketplace for High-Value Mobile Game Accounts
        </p>

        <p className="text-base md:text-lg text-gray-300 leading-relaxed">
          Step into a world where digital assets are treated with the prestige
          they deserve. At Elite Trade Hub, we provide a seamless and secure
          environment for discerning gamers to buy, sell, or trade mobile
          accounts with confidence.
        </p>

        {/* Icon */}
        <div className="flex items-center justify-center space-x-8 text-yellow-400 text-4xl mt-6 drop-shadow-[0_0_10px_rgba(255,215,0,0.7)]">
          <FaShieldAlt title="Secure" />
          <FaGamepad title="Gaming" />
          <FaCrown title="Exclusive" />
        </div>

        <p className="text-sm uppercase tracking-widest text-yellow-400 mt-4 font-medium drop-shadow-[0_0_6px_rgba(255,215,0,1)]">
          Exclusivity. Security. Excellence.
        </p>

        <button className="mt-6 px-8 py-3 bg-yellow-400 text-black font-semibold rounded-full shadow-lg hover:shadow-[0_0_20px_rgba(255,215,0,0.8)] hover:bg-yellow-300 transition duration-300">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default Home;
