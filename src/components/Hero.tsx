import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/jewelleryData';
import heroPoster from '../assets/images/hero_jewellery_boutique_1790208798730.jpg';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative w-full bg-[#0B291F] pt-0 overflow-hidden">
      {/* Increased container height on mobile to comfortably fit all elements without clipping */}
      <div className="relative w-full min-h-[92vh] sm:min-h-0 sm:aspect-video sm:max-h-[86vh] overflow-hidden flex items-center justify-center">
        {/* Background Video - Crystal clear, sharp, and unobstructed */}
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={heroPoster}
          className="absolute inset-0 w-full h-full object-cover object-center"
        >
          <source
            src="https://res.cloudinary.com/nwocvpjo/video/upload/v1790215413/Jewelry_and_watches_floating_fro__20260924070151.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Minimal edge treatment - video remains crystal clear and unobstructed */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B291F]/75 via-black/20 to-black/35 pointer-events-none" />

        {/* Background Title - Positioned strictly behind without overlapping overlay text or CTA buttons */}
        <div className="absolute inset-x-0 top-8 sm:top-12 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
          <span className="text-[12vw] sm:text-[9vw] font-serif uppercase tracking-[0.22em] text-[#D4AF37]/[0.08] whitespace-nowrap leading-none font-normal">
            JUWELIER SIMONS
          </span>
        </div>

        {/* Foreground Content with generous top/bottom spacing, refined line-height, and zero overlap */}
        <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 text-center my-auto py-12 sm:py-12 md:py-16 space-y-5 sm:space-y-6">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2.5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">
            <span className="w-6 sm:w-10 h-[1px] bg-[#D4AF37]" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.24em] text-[#D4AF37] font-semibold">
              European Fine Jewellery & Timepieces
            </span>
            <span className="w-6 sm:w-10 h-[1px] bg-[#D4AF37]" />
          </div>

          {/* Headline - Increased font sizes and line-height for mobile legibility */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-[#FBFBF7] tracking-tight leading-[1.28] sm:leading-[1.2] text-balance drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] font-normal">
            Timeless Elegance, Beautifully Chosen
          </h1>

          {/* Supporting Text with comfortable line-height and max-width */}
          <p className="text-sm sm:text-base md:text-lg text-[#FBFBF7]/95 max-w-xl mx-auto font-light leading-relaxed sm:leading-loose drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)]">
            Discover refined jewellery and timeless creations designed to make every meaningful moment shine at Juwelier Simons.
          </p>

          {/* CTAs: Repositioned lower with comfortable padding and slightly larger on mobile */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 pt-6 sm:pt-4">
            <button
              type="button"
              onClick={() => scrollTo('#explore-collections')}
              className="w-full sm:w-auto inline-flex items-center justify-center text-center gap-2.5 px-7 py-3.5 sm:px-6 sm:py-3 text-xs uppercase tracking-[0.15em] font-semibold text-[#0B291F] bg-[#D4AF37] hover:bg-[#E8D6A4] transition-all duration-200 shadow-lg rounded-full cursor-pointer group min-h-[46px]"
            >
              <span>Explore Collection</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </button>

            <button
              type="button"
              onClick={() => scrollTo('#contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center text-center gap-2.5 px-7 py-3.5 sm:px-6 sm:py-3 text-xs uppercase tracking-[0.15em] font-medium text-[#FBFBF7] bg-[#0B291F]/70 border border-[#D4AF37]/50 hover:border-[#D4AF37] hover:bg-[#0B291F]/90 transition-all duration-200 rounded-full cursor-pointer backdrop-blur-md shadow-md min-h-[46px]"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Contact Juwelier Simons</span>
            </button>
          </div>

          {/* Rating Badge: Hidden on mobile for clean focus */}
          <div className="pt-2 hidden sm:inline-flex items-center gap-2 text-[11px] text-[#FBFBF7]/90 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            <span className="text-[#D4AF37] font-semibold">{BUSINESS_INFO.rating} ★</span>
            <span className="text-[#D4AF37]/60">·</span>
            <span>{BUSINESS_INFO.reviewsCount} Boutique Reviews</span>
            <span className="text-[#D4AF37]/60">·</span>
            <span>Stationsstraat 24, Oosterwolde</span>
          </div>
        </div>

        {/* Elegant Bottom Border Line */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
      </div>
    </section>
  );
};
