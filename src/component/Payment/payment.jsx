import React from "react";

// Import semua logo
import KB from "../../assets/KB.jpg";
import Kakaobank from "../../assets/kakaobank.png";
import KEB from "../../assets/keb.png";
import Bankasi from "../../assets/bankasi.jpg";
import Shinhan from "../../assets/Shinhan.png";
import Vakif from "../../assets/Vakif.png";
import Woori from "../../assets/woori.png";
import Ziraat from "../../assets/Ziraat.jpg";
import AllyBank from "../../assets/AllyBank.png";
import America from "../../assets/America.png";
import BBVA from "../../assets/bbva.jpg";
import Bankin from "../../assets/bankinter.png";
import Bradesco from "../../assets/bradesco.jpg";
import Brasil from "../../assets/brasil.png";
import Caixa from "../../assets/CaixaBank.png";
import Citi from "../../assets/Citi.jpg";
import Discover from "../../assets/Discover.png";
import Sabadel from "../../assets/sabadel.jpg";
import Santander from "../../assets/santander.png";
import Wells from "../../assets/Wells.jpg";

const logos = [
  KB,
  Kakaobank,
  KEB,
  Bankasi,
  Shinhan,
  Vakif,
  Woori,
  Ziraat,
  AllyBank,
  America,
  BBVA,
  Bankin,
  Bradesco,
  Brasil,
  Caixa,
  Citi,
  Discover,
  Sabadel,
  Santander,
  Wells,
];

const Payment = () => {
  return (
    <div className="min-h-screen relative flex items-center justify-start px-6 sm:px-8 lg:px-16 overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black text-white flex-col p-8">
      {/* Judul */}
      <section className="text-center max-w-4xl mb-16 mt-12 md:mt-24">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-yellow-500 animate-pulse">
          Payment
        </h1>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          We provide a variety of secure and convenient payment methods for all
          your needs.
        </p>
      </section>

      {/* Slider untuk logo bank */}
      <section className="w-full max-w-7xl overflow-hidden relative">
        <style>
          {`
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .slider-track {
              display: flex;
              width: max-content;
              animation: scroll 30s linear infinite; 
            }
            .slider-container:hover .slider-track {
              animation-play-state: paused;
            }
          `}
        </style>

        <div className="slider-container">
          <div className="slider-track">
            {logos.concat(logos).map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center min-w-[100px] sm:min-w-[140px] md:min-w-[180px] mx-2 sm:mx-4"
              >
                <img
                  src={logo}
                  alt={`bank logo ${index}`}
                  className="h-10 sm:h-14 md:h-20 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Payment;
