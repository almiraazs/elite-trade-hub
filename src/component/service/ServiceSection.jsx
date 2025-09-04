import {
  Shield,
  MessageSquare,
  CreditCard,
  UserCheck,
  HandCoins,
  Gamepad2,
} from "lucide-react";

export default function ServiceSection() {
  const steps = [
    {
      id: 1,
      title: "Initiate the Group Chat",
      desc: "A private Instagram group message is created between the buyer, seller, and Elite Trade Hub to begin the transaction.",
      icon: MessageSquare,
    },
    {
      id: 2,
      title: "Buyer Sends Payment",
      desc: "The buyer transfers the full payment, including a small service fee, to Elite Trade Hub, where it is securely held.",
      icon: CreditCard,
    },
    {
      id: 3,
      title: "Seller Transfers the Account",
      desc: "The seller delivers the full game account (including login credentials and recovery access) to Elite Trade Hub for secure verification.",
      icon: UserCheck,
    },
    {
      id: 4,
      title: "Seller is Paid",
      desc: "Once the account is confirmed to be complete and functional, Elite Trade Hub releases the payment to the seller.",
      icon: HandCoins,
    },
    {
      id: 5,
      title: "Buyer Receives the Account",
      desc: "Finally, the verified game account is safely transferred to the buyer, completing the transaction.",
      icon: Shield,
    },
  ];

  return (
    <section
      className="relative py-20 px-6 md:px-16 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images2.alphacoders.com/132/1320656.jpeg')", // bisa ganti background sesuai game
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/95"></div>

      <div className="relative max-w-6xl mx-auto text-center text-white">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg text-yellow-400">
          How Our Intermediary Service Works
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-12">
          Secure • Professional • Transparent — Exclusively on{" "}
          <span className="text-yellow-400 font-semibold">@elitetradehub</span>
        </p>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.id}
                className="relative group bg-black/40 backdrop-blur-md border border-yellow-500/30 rounded-3xl p-6 shadow-2xl hover:scale-105 transition-transform duration-300 overflow-hidden"
              >
                {/* Glow border on hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-yellow-500/20 to-yellow-300/20 opacity-0 group-hover:opacity-100 blur-xl transition duration-500"></div>

                <div className="relative flex items-start gap-4">
                  {/* Icon Bubble (ganti angka jadi icon) */}
                  <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-full bg-yellow-500 text-black shadow-lg shadow-yellow-500/40">
                    <Icon size={24} className="text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-yellow-400">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Why it's fair */}
        <div className="mt-20 bg-black/50 backdrop-blur-md border border-yellow-500/30 rounded-3xl shadow-2xl p-10 max-w-3xl mx-auto text-left">
          <h3 className="text-2xl font-bold mb-6 text-yellow-400">
            Why It’s Fair for Everyone
          </h3>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-start gap-2">
              <span className="text-yellow-400">✔</span>
              Buyers enjoy peace of mind knowing the account is verified before
              receiving it.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-400">✔</span>
              Sellers are paid immediately after delivering the account.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-400">✔</span>
              Elite Trade Hub ensures neutrality, transparency, and professional
              handling at every step.
            </li>
          </ul>
        </div>
      </div>

      {/* Decorative icons */}
      <div className="absolute top-5 right-10 opacity-80 animate-bounce">
        <Gamepad2
          size={70}
          className="text-yellow-500 drop-shadow-[0_0_15px_rgba(255,215,0,0.7)]"
        />
      </div>
      <div className="absolute bottom-10 left-10 opacity-80 animate-bounce">
        <Gamepad2
          size={70}
          className="text-yellow-500 drop-shadow-[0_0_15px_rgba(0,0,0,0.7)]"
        />
      </div>
    </section>
  );
}
