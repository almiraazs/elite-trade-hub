import React from "react";
import {
  GiShieldBash,
  GiTrade,
  GiWorld,
  GiTreasureMap,
  GiSecretBook,
  GiTrophy,
  GiSwordClash,
  GiGoldBar,
  GiCrystalWand,
  GiJoystick,
} from "react-icons/gi";

const WhyChooseUs = () => {
  const reasons = [
    {
      number: "01",
      title: "Premium Security",
      desc: "Every transaction is safeguarded with industry-leading protocols to protect your assets, information, and peace of mind.",
      icon: <GiShieldBash className="text-yellow-400 text-5xl mb-4 animate-pulse" />,
    },
    {
      number: "02",
      title: "Trusted Intermediary",
      desc: "We act as a neutral, professional third party — ensuring fairness, transparency, and trust for both buyers and sellers.",
      icon: <GiTrade className="text-yellow-400 text-5xl mb-4 animate-pulse" />,
    },
    {
      number: "03",
      title: "Global Reach",
      desc: "Serving clients worldwide with personalized care, multilingual support, and an unwavering commitment to excellence.",
      icon: <GiWorld className="text-yellow-400 text-5xl mb-4 animate-pulse" />,
    },
    {
      number: "04",
      title: "Curated Listings",
      desc: "We showcase only high-quality, verified accounts — no clutter, no scams, just premium digital assets.",
      icon: <GiTreasureMap className="text-yellow-400 text-5xl mb-4 animate-pulse" />,
    },
    {
      number: "05",
      title: "Exclusive & Rare",
      desc: "Access rare opportunities like legendary accounts, premium skins, and high-value trades.",
      icon: <GiCrystalWand className="text-yellow-400 text-5xl mb-4 animate-pulse" />,
    },
    {
      number: "06",
      title: "Reputation & Glory",
      desc: "With countless successful trades and loyal community support, we’ve earned our reputation — and we live up to it.",
      icon: <GiTrophy className="text-yellow-400 text-5xl mb-4 animate-pulse" />,
    },
    {
      number: "07",
      title: "Battle Ready",
      desc: "Our system is built like a fortress — always ready, always resilient, and unshakable in performance.",
      icon: <GiSwordClash className="text-yellow-400 text-5xl mb-4 animate-pulse" />,
    },
    {
      number: "08",
      title: "Wealth & Rewards",
      desc: "Get maximum value for your assets — our trusted system ensures fair pricing and smooth trades.",
      icon: <GiGoldBar className="text-yellow-400 text-5xl mb-4 animate-pulse" />,
    },
    {
      number: "09",
      title: "For Gamers, By Gamers",
      desc: "Built by passionate players who understand the grind, thrill, and value of every in-game asset.",
      icon: <GiJoystick className="text-yellow-400 text-5xl mb-4 animate-pulse" />,
    },
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-black via-[#0a0a0f] to-black text-white relative overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute inset-0">
        <div className="absolute w-72 h-72 bg-yellow-400/20 rounded-full blur-3xl top-10 left-10 animate-pulse" />
        <div className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl bottom-20 right-20 animate-ping" />
      </div>

      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12 relative z-10">
        <h2 className="text-4xl font-extrabold text-yellow-400 drop-shadow-[0_0_15px_rgba(255,215,0,0.8)]">
          Why Choose Us
        </h2>
        <p className="italic text-gray-300 mt-2">
          Where Confidence Meets Class
        </p>
        <p className="mt-4 text-gray-400">
          At <span className="font-bold text-yellow-400">Elite Trade Hub</span>, we’re more than a marketplace — 
          we’re a trusted partner in your digital trading journey. Here’s why gamers and traders worldwide choose us:
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
        {reasons.map((item) => (
          <div
            key={item.number}
            className="relative rounded-2xl overflow-hidden group cursor-pointer 
                       bg-gradient-to-b from-gray-900/80 to-black p-6 
                       border border-yellow-400/20 transform transition 
                       duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,215,0,0.9)]"
          >
            <div className="flex flex-col h-full justify-between">
              <div>
                {item.icon}
                <h3 className="text-xl font-bold text-yellow-400 drop-shadow-[0_0_8px_rgba(255,215,0,0.7)]">
                  {item.title}
                </h3>
                <p className="text-gray-300 mt-3">{item.desc}</p>
              </div>
              <span className="text-4xl font-extrabold text-gray-500/50 mt-6 self-end">
                {item.number}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
