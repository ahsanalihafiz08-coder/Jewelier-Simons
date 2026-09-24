import React, { useState, useEffect } from 'react';
import { Menu, X, Heart, Phone, MapPin, Clock, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../data/jewelleryData';
import { WhatsAppLogo, InstagramLogo, FacebookLogo } from './SocialLogos';
import { BookingModal } from './BookingModal';

interface HeaderProps {
  wishlistCount: number;
  onOpenWishlist: () => void;
  onSelectCategory?: (category: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  wishlistCount,
  onOpenWishlist,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 320);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when slide-out menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Interactive Archive', href: '#slider-showcase' },
    { label: 'Explore Collections', href: '#explore-collections' },
    { label: 'Atelier Catalog', href: '#featured-products' },
    { label: 'Curated Showcase', href: '#floating-showcase' },
    { label: 'The Gallery', href: '#gallery' },
    { label: 'Customer Reviews', href: '#reviews' },
    { label: 'Boutique Location', href: '#location-map' },
    { label: 'Contact Juwelier Simons', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top navigation bar: visible immediately on load (transparent), transitions to solid container on scroll down */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out ${
          isScrolled
            ? 'bg-[#0B291F]/95 backdrop-blur-md border-b border-[#D4AF37]/25 shadow-lg py-2.5 sm:py-3'
            : 'bg-transparent border-b border-transparent shadow-none py-3 sm:py-4.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-9 sm:h-10">
            {/* Clean, Transparent Logo - No white rectangular patches */}
            <a
              href="#home"
              className="inline-flex items-center gap-2 group cursor-pointer bg-transparent"
              aria-label="Juwelier Simons Home"
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#D4AF37]/70 flex items-center justify-center text-[#D4AF37] bg-transparent group-hover:border-[#D4AF37] transition-colors shrink-0">
                <span className="font-serif text-[11px] sm:text-xs font-semibold tracking-tighter">JS</span>
              </div>
              <span className="text-xs sm:text-base lg:text-lg font-serif tracking-[0.16em] sm:tracking-[0.22em] text-[#FBFBF7] uppercase group-hover:text-[#D4AF37] transition-colors shrink-0 font-medium text-left drop-shadow-[0_1px_3px_rgba(0,0,0,0.7)]">
                Juwelier Simons
              </span>
            </a>

            {/* Icons aligned neatly on the right */}
            <div className="flex items-center space-x-1 sm:space-x-3 ml-auto">
              {/* Wishlist Heart Icon */}
              <button
                type="button"
                onClick={onOpenWishlist}
                className="relative p-1.5 sm:p-2 text-[#FBFBF7] hover:text-[#D4AF37] transition-colors cursor-pointer group"
                aria-label={`Wishlist (${wishlistCount} items)`}
                title="Curated Wishlist"
              >
                <Heart
                  className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:scale-110 drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)] ${
                    wishlistCount > 0 ? 'fill-[#D4AF37] text-[#D4AF37]' : ''
                  }`}
                />
                {wishlistCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 min-w-[15px] sm:min-w-[17px] h-[15px] sm:h-[17px] px-1 bg-[#D4AF37] text-[#0B291F] text-[9px] sm:text-[10px] font-bold rounded-full flex items-center justify-center shadow">
                    {wishlistCount}
                  </span>
                )}
              </button>

              {/* Direct Phone Call */}
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="p-1.5 sm:p-2 text-[#FBFBF7] hover:text-[#D4AF37] transition-colors group"
                aria-label={`Call Juwelier Simons at ${BUSINESS_INFO.phone}`}
                title={`Call ${BUSINESS_INFO.phone}`}
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:scale-110 drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]" />
              </a>

              {/* Clean 3-Line (Hamburger) Menu Button */}
              <button
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-1.5 sm:p-2 text-[#FBFBF7] hover:text-[#D4AF37] focus:outline-none transition-colors cursor-pointer flex items-center justify-center"
                aria-label={menuOpen ? 'Close Menu' : 'Open Navigation Menu'}
                aria-expanded={menuOpen}
              >
                {menuOpen ? (
                  <X className="w-5 h-5 text-[#D4AF37]" />
                ) : (
                  <Menu className="w-5 h-5 text-[#FBFBF7] hover:text-[#D4AF37] drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Multi-Column Slide-Out Drawer Menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#0B291F]/85 backdrop-blur-md flex justify-end animate-fadeIn"
          onClick={() => setMenuOpen(false)}
        >
          <div
            className="w-full max-w-4xl bg-[#0B291F] border-l border-[#D4AF37]/30 text-[#FBFBF7] h-full overflow-y-auto flex flex-col justify-between p-6 sm:p-10 shadow-2xl animate-slideLeft"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar inside Drawer */}
            <div className="flex items-center justify-between pb-6 border-b border-[#1A4D3B]/80 shrink-0">
              <div>
                <span className="text-xl sm:text-2xl font-serif tracking-[0.25em] uppercase text-[#FBFBF7]">
                  Juwelier Simons
                </span>
                <p className="text-xs text-[#8FA395] font-light mt-0.5">
                  Stationsstraat 24, 8431 ET Oosterwolde
                </p>
              </div>

              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="w-10 h-10 rounded-full bg-[#123C2D] border border-[#D4AF37]/30 text-[#FBFBF7] hover:text-[#D4AF37] hover:border-[#D4AF37] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main Center Content: Clean Multi-Column Layout */}
            <div className="py-8 grid grid-cols-1 md:grid-cols-3 gap-8 flex-grow">
              {/* Column 1: Quick Jump Navigation Links */}
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-[0.22em] text-[#D4AF37] font-semibold block">
                  Quick Jump Links
                </span>
                <nav className="flex flex-col space-y-2.5">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-base sm:text-lg font-serif text-[#FBFBF7]/90 hover:text-[#D4AF37] transition-colors flex items-center justify-between group py-0.5"
                    >
                      <span>{link.label}</span>
                      <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity text-[#D4AF37]">→</span>
                    </a>
                  ))}
                </nav>
              </div>

              {/* Column 2: Store Details & Interactive Official Channels */}
              <div className="space-y-4 md:border-l md:border-r md:border-[#1A4D3B]/60 md:px-6">
                <span className="text-xs uppercase tracking-[0.22em] text-[#D4AF37] font-semibold block">
                  Store Details
                </span>
                
                <div className="space-y-4 text-xs text-[#FBFBF7]/85 font-light">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[#FBFBF7] font-medium">Boutique Showroom</strong>
                      <span>Stationsstraat 24<br />8431 EV Oosterwolde, Netherlands</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Phone className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[#FBFBF7] font-medium">Direct Telephone</strong>
                      <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="hover:text-[#D4AF37] transition-colors">
                        {BUSINESS_INFO.phone}
                      </a>
                    </div>
                  </div>

                  {/* Interactive Styled Buttons for Official Channels */}
                  <div className="pt-2">
                    <span className="text-[11px] uppercase tracking-[0.16em] text-[#8FA395] font-semibold block mb-2.5">
                      Official Channels
                    </span>
                    <div className="flex items-center gap-2.5">
                      <a
                        href={BUSINESS_INFO.socials.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-[#25D366] text-white shadow hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center justify-center"
                        title="Chat on WhatsApp"
                        aria-label="WhatsApp"
                      >
                        <WhatsAppLogo size={18} />
                      </a>

                      <a
                        href={BUSINESS_INFO.socials.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white shadow hover:scale-105 active:scale-95 transition-all cursor-pointer"
                        title="Follow on Instagram"
                      >
                        <InstagramLogo size={18} />
                      </a>

                      <a
                        href={BUSINESS_INFO.socials.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-[#1877F2] text-white shadow hover:scale-105 active:scale-95 transition-all cursor-pointer"
                        title="Follow on Facebook"
                      >
                        <FacebookLogo size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Column 3: Operating Hours & Private Appointments */}
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-[0.22em] text-[#D4AF37] font-semibold block">
                  Operating Hours
                </span>

                <div className="space-y-2.5 text-xs text-[#FBFBF7]/85">
                  <div className="flex items-center justify-between pb-1.5 border-b border-[#1A4D3B]/40">
                    <span className="text-[#8FA395]">Tuesday – Friday</span>
                    <span className="font-medium">09:30 – 18:00</span>
                  </div>
                  <div className="flex items-center justify-between pb-1.5 border-b border-[#1A4D3B]/40">
                    <span className="text-[#8FA395]">Saturday</span>
                    <span className="font-medium">09:30 – 17:00</span>
                  </div>
                  <div className="flex items-center justify-between pb-1.5 border-b border-[#1A4D3B]/40">
                    <span className="text-[#8FA395]">Sunday – Monday</span>
                    <span className="text-[#8FA395] italic">Closed</span>
                  </div>
                </div>

                <div className="p-3.5 bg-[#123C2D]/70 rounded-2xl border border-[#D4AF37]/30 space-y-1 mt-4">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#D4AF37]">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Private Viewings</span>
                  </div>
                  <p className="text-[11px] text-[#FBFBF7]/80 font-light leading-relaxed">
                    Personal bridal suite consultations, custom goldsmithing, and watchmaker services available by appointment.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Bar: Action Buttons */}
            <div className="pt-6 border-t border-[#1A4D3B]/80 flex flex-wrap items-center justify-between gap-3 shrink-0">
              <div className="flex flex-wrap items-center gap-2.5">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="inline-flex items-center justify-center text-center gap-2 px-5 py-2.5 bg-[#D4AF37] text-[#0B291F] font-semibold uppercase tracking-wider rounded-full text-xs hover:bg-[#E8D6A4] transition-colors shadow"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Store</span>
                </a>

                <button
                  type="button"
                  onClick={() => {
                    setMenuOpen(false);
                    setBookingOpen(true);
                  }}
                  className="inline-flex items-center justify-center text-center gap-2 px-5 py-2.5 bg-[#123C2D] text-[#FBFBF7] border border-[#D4AF37]/40 hover:border-[#D4AF37] font-semibold uppercase tracking-wider rounded-full text-xs transition-colors cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Reserve Appointment</span>
                </button>
              </div>

              <button
                type="button"
                onClick={() => {
                  setMenuOpen(false);
                  onOpenWishlist();
                }}
                className="inline-flex items-center justify-center text-center gap-2 px-5 py-2.5 bg-[#0B291F] text-[#FBFBF7] border border-white/20 hover:border-[#D4AF37] font-medium uppercase tracking-wider rounded-full text-xs transition-colors cursor-pointer"
              >
                <Heart className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Wishlist ({wishlistCount})</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Global Booking Modal from Drawer */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />
    </>
  );
};
