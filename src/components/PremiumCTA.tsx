import React from 'react';
import { Phone, Mail, ArrowRight, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/jewelleryData';

export const PremiumCTA: React.FC = () => {
  const scrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-18 lg:py-22 bg-[#0B291F] text-[#FBFBF7] relative overflow-hidden border-b border-[#D4AF37]/20">
      {/* Decorative Golden Ambient Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[34rem] h-[34rem] bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#1C5440]/30 rounded-full blur-2xl pointer-events-none" />

      {/* Content Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-5">
        
        <div className="inline-flex items-center gap-3">
          <span className="w-8 h-[1px] bg-[#D4AF37]" />
          <span className="text-xs uppercase tracking-[0.26em] text-[#D4AF37] font-semibold flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>An Uncompromising Standard</span>
          </span>
          <span className="w-8 h-[1px] bg-[#D4AF37]" />
        </div>

        {/* Refined Section Headline */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif tracking-tight leading-[1.18] text-[#FBFBF7] text-balance font-normal">
          Get What You Deserve
        </h2>

        <p className="text-xs sm:text-sm md:text-base text-[#FBFBF7]/85 max-w-xl mx-auto font-light leading-relaxed">
          Discover something truly special. Explore the world of Juwelier Simons and find jewellery and timepieces that feel uniquely yours.
        </p>

        {/* Action Buttons: Well proportioned rounded pill shapes with generous width and padding */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-5 pt-3">
          {/* Functional Call Us Button */}
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="w-full sm:w-auto min-w-[220px] sm:min-w-[260px] inline-flex items-center justify-center gap-2.5 px-8 sm:px-10 py-3.5 sm:py-4 text-xs uppercase tracking-[0.16em] font-semibold text-[#0B291F] bg-[#D4AF37] hover:bg-[#E8D6A4] transition-all duration-200 rounded-full shadow-lg hover:shadow-xl active:scale-98 cursor-pointer text-center leading-normal"
          >
            <Phone className="w-3.5 h-3.5 shrink-0" />
            <span>Call Us: {BUSINESS_INFO.phone}</span>
          </a>

          {/* Inquire in Boutique Button */}
          <button
            type="button"
            onClick={scrollToContact}
            className="w-full sm:w-auto min-w-[220px] sm:min-w-[260px] inline-flex items-center justify-center gap-2.5 px-8 sm:px-10 py-3.5 sm:py-4 text-xs uppercase tracking-[0.16em] font-medium text-[#FBFBF7] border border-[#D4AF37]/60 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all duration-200 rounded-full cursor-pointer shadow-md text-center leading-normal"
          >
            <Mail className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
            <span>Inquire in Boutique</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
          </button>
        </div>

        {/* Address Callout */}
        <p className="text-[11px] text-[#FBFBF7]/60 pt-2 font-light">
          Visit us at {BUSINESS_INFO.fullAddress} · Oosterwolde
        </p>

      </div>
    </section>
  );
};
