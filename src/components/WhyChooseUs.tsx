import React from 'react';
import { Gem, ShieldCheck, UserCheck, Gift } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: Gem,
      title: "Timeless Elegance",
      description: "Enduring designs crafted to transcend passing trends, retaining their grace and beauty through every stage of life."
    },
    {
      icon: ShieldCheck,
      title: "Refined Selection",
      description: "A discerning curation of precious metals and radiant gemstones, chosen with high standards for balance and craftsmanship."
    },
    {
      icon: UserCheck,
      title: "Personal Attention",
      description: "Warm, unhurried guidance in our Oosterwolde boutique, dedicated to understanding your distinct vision and wishes."
    },
    {
      icon: Gift,
      title: "Beautifully Presented",
      description: "Every acquisition is enclosed in signature packaging, prepared with meticulous reverence for your special occasion."
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#0B291F] text-[#FBFBF7] relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#1C5440]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20 space-y-3">
          <div className="inline-flex items-center gap-3">
            <span className="w-8 h-[1px] bg-[#D4AF37]" />
            <span className="text-xs uppercase tracking-[0.24em] text-[#D4AF37] font-semibold">
              The Boutique Standard
            </span>
            <span className="w-8 h-[1px] bg-[#D4AF37]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#FBFBF7] tracking-tight">
            Why Choose Juwelier Simons
          </h2>
          <p className="text-sm sm:text-base text-[#FBFBF7]/80 font-light leading-relaxed">
            Our values are anchored in discretion, aesthetic integrity, and genuine personal devotion to every guest who walks through our doors.
          </p>
        </div>

        {/* 4 Premium Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-[#123C2D]/60 border border-[#D4AF37]/25 hover:border-[#D4AF37]/50 rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 group"
              >
                <div>
                  {/* Icon Box */}
                  <div className="w-12 h-12 rounded-full bg-[#0B291F] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] mb-6 group-hover:scale-105 group-hover:border-[#D4AF37] transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>

                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37]/80 font-semibold block mb-1">
                    Pillar 0{index + 1}
                  </span>
                  <h3 className="text-xl font-serif text-[#FBFBF7] mb-3 group-hover:text-[#D4AF37] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#FBFBF7]/75 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#1C5440]/60 flex items-center justify-between">
                  <span className="w-5 h-[1px] bg-[#D4AF37]/40 group-hover:w-8 group-hover:bg-[#D4AF37] transition-all duration-300" />
                  <span className="text-[11px] text-[#FBFBF7]/40 font-light">Juwelier Simons</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
