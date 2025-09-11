import React from "react";

// Import semua logo lama
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

// Import logo tambahan
import Mercado from "../../assets/Mercado.png";
import Muscat from "../../assets/muscat.png";
import MUFG from "../../assets/MUFG.png";
import Nbk from "../../assets/nbk.png";
import Nhbank from "../../assets/nhbank.jpg";
import Pay from "../../assets/pay.png";
import Pko from "../../assets/PKO.jpg";
import Privat from "../../assets/privat.png";
import QNB from "../../assets/QNB.png";
import Saudi from "../../assets/saudi.png";
import Sberbank from "../../assets/Sberbank.jpg";
import Scotia from "../../assets/Scotia.png";
import Skrill from "../../assets/skril.jpg";
import Taiwan from "../../assets/taiwan.jpg";
import Uni from "../../assets/Uni.png";
import Union from "../../assets/Union.jpg";
import Venmo from "../../assets/venmo.png";
import Vodafone from "../../assets/vodafone.jpg";
import Western from "../../assets/Western.png";
import Wise from "../../assets/wise.png";
import Yapi from "../../assets/yapi.png";
import Zelle from "../../assets/Zelle.png";

// Semua logo jadi satu array
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
  Mercado,
  Muscat,
  MUFG,
  Nbk,
  Nhbank,
  Pay,
  Pko,
  Privat,
  QNB,
  Saudi,
  Sberbank,
  Scotia,
  Skrill,
  Taiwan,
  Uni,
  Union,
  Venmo,
  Vodafone,
  Western,
  Wise,
  Yapi,
  Zelle,
];

// Bagi jadi 2 baris
const half = Math.ceil(logos.length / 2);
const logosTop = logos.slice(0, half);
const logosBottom = logos.slice(half);

const Payment = () => {
  return (
    <div className="min-h-screen relative flex items-center justify-start px-6 sm:px-8 lg:px-16 overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black text-white flex-col p-8">
      {/* Judul */}
      <section className="text-center max-w-4xl mb-16 mt-12 md:mt-24">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-yellow-500 animate-pulse">
          Payment
        </h1>
      </section>

      {/* Slider 2 baris */}
      <section className="w-full max-w-7xl overflow-hidden relative space-y-8">
        <style>
          {`
            @keyframes scroll-left {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            @keyframes scroll-right {
              0% { transform: translateX(-50%); }
              100% { transform: translateX(0); }
            }
            .slider-track-left {
              display: flex;
              width: max-content;
              animation: scroll-left 30s linear infinite;
            }
            .slider-track-right {
              display: flex;
              width: max-content;
              animation: scroll-right 30s linear infinite;
            }
            .slider-container:hover .slider-track-left,
            .slider-container:hover .slider-track-right {
              animation-play-state: paused;
            }
          `}
        </style>

        {/* Baris pertama (kiri) */}
        <div className="slider-container">
          <div className="slider-track-left">
            {logosTop.concat(logosTop).map((logo, index) => (
              <div
                key={`top-${index}`}
                className="flex items-center justify-center min-w-[100px] sm:min-w-[140px] md:min-w-[180px] mx-2 sm:mx-4"
              >
                <img
                  src={logo}
                  alt={`bank logo top ${index}`}
                  className="h-10 sm:h-14 md:h-20 object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Baris kedua (kanan) */}
        <div className="slider-container">
          <div className="slider-track-right">
            {logosBottom.concat(logosBottom).map((logo, index) => (
              <div
                key={`bottom-${index}`}
                className="flex items-center justify-center min-w-[100px] sm:min-w-[140px] md:min-w-[180px] mx-2 sm:mx-4"
              >
                <img
                  src={logo}
                  alt={`bank logo bottom ${index}`}
                  className="h-10 sm:h-14 md:h-20 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notice tambahan */}
      <section className="text-center max-w-3xl mt-12 px-4">
        <p className="text-lg text-gray-200 leading-relaxed">
          💬{" "}
          <span className="font-semibold text-white">
            Didn’t see your payment method?
          </span>
        </p>
        <p className="text-base text-gray-300 mt-3 leading-relaxed">
          No worries! If your preferred bank or payment option isn’t listed,
          please{" "}
          <span className="text-yellow-400 font-medium">
            contact us directly
          </span>
          . <br />
          We’ll be happy to arrange an alternative payment method that works
          best for you.
        </p>
      </section>
    </div>
  );
};

export default Payment;
