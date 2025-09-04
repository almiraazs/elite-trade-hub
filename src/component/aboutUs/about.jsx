import React from "react";
import logo from "../../assets/logo-removebg-preview.png";

const About = () => {
  return (
    <div className="relative flex items-center justify-start min-h-screen px-6 sm:px-8 lg:px-16 overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
      
      {/* Background transparan logo */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${logo})`,
          backgroundSize: "45%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          opacity: 0.12,
          filter: "blur(1px)",
        }}
      ></div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">

          {/* Kolom Teks */}
          <div className="space-y-5 xl:pr-36 p-6 border-l-4 border-b-4 border-yellow-500 rounded-lg backdrop-blur-sm relative z-20">
            <p
              data-aos="fade-up"
              className="text-yellow-400 uppercase tracking-widest font-semibold"
            >
              Our Mission
            </p>
            <h1
              data-aos="fade-up"
              data-aos-delay="300"
              className="uppercase text-4xl sm:text-4xl font-extrabold text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]"
            >
              ELITE TRADE HUB
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="500"
              className="text-gray-300 leading-relaxed"
            >
              At Elite Trade Hub we provide a refined and secure
              marketplace for elite players, collectors, and investors to buy,
              sell, or trade high-value mobile game accounts. Our platform is
              built on a foundation of integrity, trust, and privacy, ensuring a
              seamless and professional experience for our global clientele.
              Every service, from curated listings to secure intermediary
              support, is personalized and designed to uphold the highest
              standards of excellence.
            </p>
          </div>

          {/* Kolom Gambar dihapus karena sudah jadi background */}

        </div>
      </div>
    </div>
  );
};

export default About;
