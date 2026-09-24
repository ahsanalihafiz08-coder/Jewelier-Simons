import React from 'react';
import { Phone, MapPin, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO } from '../data/jewelleryData';
import { WhatsAppLogo, InstagramLogo, FacebookLogo } from './SocialLogos';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Showcase', href: '#floating-showcase' },
    { label: 'Collections', href: '#explore-collections' },
    { label: 'Catalog', href: '#featured-products' },
    { label: 'Slider Archive', href: '#slider-showcase' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Location Map', href: '#location-map' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0B291F] text-[#FBFBF7] border-t border-[#D4AF37]/30 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 pb-12 border-b border-[#1A4D3B]/70">
          
          {/* Brand & Tagline */}
          <div className="md:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2.5 bg-transparent">
              <div className="w-8 h-8 rounded-full border border-[#D4AF37]/60 flex items-center justify-center text-[#D4AF37] bg-transparent shrink-0">
                <span className="font-serif text-xs font-semibold tracking-tighter">JS</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-serif tracking-[0.2em] uppercase text-[#FBFBF7]">
                Juwelier Simons
              </h3>
            </div>
            <p className="text-sm font-serif italic text-[#D4AF37] max-w-sm">
              "{BUSINESS_INFO.tagline}"
            </p>
            <p className="text-xs text-[#FBFBF7]/75 font-light leading-relaxed max-w-md">
              A refined European jewellery destination in Oosterwolde, dedicated to timeless craftsmanship, delicate aesthetic balance, and attentive in-person consultation.
            </p>

            {/* Clean, Transparent Brand Icons for WhatsApp, Instagram, and Facebook */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={BUSINESS_INFO.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 bg-transparent border-0 hover:scale-110 active:scale-95 transition-transform flex items-center justify-center cursor-pointer"
                aria-label="Message Juwelier Simons on WhatsApp"
                title="WhatsApp (+31 516 513 035)"
              >
                <WhatsAppLogo size={24} />
              </a>

              <a
                href={BUSINESS_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 bg-transparent border-0 hover:scale-110 active:scale-95 transition-transform flex items-center justify-center cursor-pointer"
                aria-label="Follow Juwelier Simons on Instagram"
                title="Instagram"
              >
                <InstagramLogo size={24} />
              </a>

              <a
                href={BUSINESS_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 bg-transparent border-0 hover:scale-110 active:scale-95 transition-transform flex items-center justify-center cursor-pointer"
                aria-label="Visit Juwelier Simons on Facebook"
                title="Facebook"
              >
                <FacebookLogo size={24} />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-semibold">
              Navigation
            </p>
            <ul className="space-y-2 text-xs uppercase tracking-[0.14em] font-medium text-[#FBFBF7]/80">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="hover:text-[#D4AF37] transition-colors py-0.5 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Location & Telephone */}
          <div className="md:col-span-4 space-y-3">
            <p className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-semibold">
              Boutique Information
            </p>
            
            <div className="space-y-3 text-xs text-[#FBFBF7]/80 font-light">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <p>
                  {BUSINESS_INFO.name}<br />
                  {BUSINESS_INFO.fullAddress}
                </p>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="hover:text-[#D4AF37] transition-colors font-sans text-xs sm:text-sm font-medium tracking-wide"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              <div className="pt-2 text-[11px] text-[#FBFBF7]/60">
                Customer Rating: <span className="text-[#D4AF37] font-medium">{BUSINESS_INFO.rating} ★</span> ({BUSINESS_INFO.reviewsCount} verified reviews)
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FBFBF7]/60">
          <p>
            © {new Date().getFullYear()} Juwelier Simons · Stationsstraat 24, Oosterwolde. All rights reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#123C2D] border border-white/10 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors cursor-pointer text-xs uppercase tracking-[0.14em]"
          >
            <span>Return to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
