import React, { useState } from 'react';
import { X, Heart, MessageCircle, Calendar, Eye } from 'lucide-react';
import { SLIDER_48_ITEMS, SliderItem } from '../data/jewelleryData';
import { BookingModal } from './BookingModal';
import { DetailModal } from './DetailModal';
import { useWishlist } from '../context/WishlistContext';

export const FloatingShowcase: React.FC = () => {
  const [activePopup, setActivePopup] = useState<SliderItem | null>(null);
  const { isSaved, toggleSave } = useWishlist();
  const [bookingTarget, setBookingTarget] = useState<SliderItem | null>(null);
  const [detailTarget, setDetailTarget] = useState<SliderItem | null>(null);

  // Exactly 48 cards divided into 2 smooth tracks of 24 items each
  const row1 = SLIDER_48_ITEMS.slice(0, 24);
  const row2 = SLIDER_48_ITEMS.slice(24, 48);

  return (
    <section id="floating-showcase" className="py-14 sm:py-18 bg-[#FBFBF7] text-[#172B22] overflow-hidden relative border-b border-[#E5DDD0]">
      {/* Clean Header - 48-Piece Curated Showcase */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center space-y-2.5">
        <div className="inline-flex items-center gap-3">
          <span className="w-8 h-[1px] bg-[#D4AF37]" />
          <span className="text-xs uppercase tracking-[0.24em] text-[#0B291F] font-semibold">
            Atelier Highlights In Motion
          </span>
          <span className="w-8 h-[1px] bg-[#D4AF37]" />
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#0B291F] tracking-tight">
          48-Piece Curated Showcase
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-[#526359] max-w-2xl mx-auto font-light">
          A continuous stream of 48 fine European creations across bespoke jewellery suites. Click any piece to view details.
        </p>
      </div>

      {/* Row 1: Floating Track Right to Left - Full bleed edge-to-edge alignment without white side margins */}
      <div className="relative w-full mb-4 sm:mb-6 overflow-hidden p-0 m-0">
        <div className="flex gap-3 sm:gap-6 animate-marquee hover:[animation-play-state:paused] w-max py-2 will-change-transform">
          {[...row1, ...row1].map((item, idx) => (
            <div
              key={`${item.id}-r1-${idx}`}
              onClick={() => setActivePopup(item)}
              className="relative w-40 sm:w-52 aspect-[4/4.4] sm:aspect-[4/5] rounded-2xl sm:rounded-[2rem] bg-[#EBE5DC] shadow-xs hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 hover:scale-105 cursor-pointer shrink-0 overflow-hidden group border-0 p-0 ring-0 m-0"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500 ease-out"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />
              
              {/* Category badge repositioned strictly to top-left corner with centered typography */}
              <div className="absolute top-2.5 left-2.5 z-10 bg-[#0B291F]/90 backdrop-blur-xs px-2.5 py-1 rounded-full border border-[#D4AF37]/35 shadow-xs flex items-center justify-center">
                <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-[#D4AF37] font-semibold leading-none text-center">
                  {item.category}
                </span>
              </div>

              {/* Item Caption / Sub-text Light Overlay: Permanent elegant context banner giving title and atelier details */}
              <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-[#0B291F]/95 via-[#0B291F]/65 to-transparent p-2.5 sm:p-3.5 pt-7 flex flex-col justify-end pointer-events-none transition-opacity duration-300">
                <p className="text-[11px] sm:text-xs font-serif text-[#FBFBF7] line-clamp-1 font-medium tracking-wide drop-shadow-xs">
                  {item.title}
                </p>
                <span className="text-[9px] sm:text-[10px] text-[#D4AF37] tracking-wider uppercase font-light line-clamp-1 mt-0.5">
                  {item.category} • Atelier Creation
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Floating Track Left to Right (Reverse marquee) - Full bleed edge-to-edge alignment without white side margins */}
      <div className="relative w-full overflow-hidden p-0 m-0">
        <div className="flex gap-3 sm:gap-6 animate-marquee-reverse hover:[animation-play-state:paused] w-max py-2 will-change-transform">
          {[...row2, ...row2].map((item, idx) => (
            <div
              key={`${item.id}-r2-${idx}`}
              onClick={() => setActivePopup(item)}
              className="relative w-40 sm:w-52 aspect-[4/4.4] sm:aspect-[4/5] rounded-2xl sm:rounded-[2rem] bg-[#EBE5DC] shadow-xs hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 hover:scale-105 cursor-pointer shrink-0 overflow-hidden group border-0 p-0 ring-0 m-0"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500 ease-out"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />
              
              {/* Category badge repositioned strictly to top-left corner with centered typography */}
              <div className="absolute top-2.5 left-2.5 z-10 bg-[#0B291F]/90 backdrop-blur-xs px-2.5 py-1 rounded-full border border-[#D4AF37]/35 shadow-xs flex items-center justify-center">
                <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-[#D4AF37] font-semibold leading-none text-center">
                  {item.category}
                </span>
              </div>

              {/* Item Caption / Sub-text Light Overlay: Permanent elegant context banner giving title and atelier details */}
              <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-[#0B291F]/95 via-[#0B291F]/65 to-transparent p-2.5 sm:p-3.5 pt-7 flex flex-col justify-end pointer-events-none transition-opacity duration-300">
                <p className="text-[11px] sm:text-xs font-serif text-[#FBFBF7] line-clamp-1 font-medium tracking-wide drop-shadow-xs">
                  {item.title}
                </p>
                <span className="text-[9px] sm:text-[10px] text-[#D4AF37] tracking-wider uppercase font-light line-clamp-1 mt-0.5">
                  {item.category} • Atelier Creation
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Selected Piece Modal - Full width/height top banner image without padding and centered buttons */}
      {activePopup && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#0B291F]/85 backdrop-blur-md animate-fadeIn"
          onClick={() => setActivePopup(null)}
        >
          <div
            className="relative max-w-lg w-full bg-[#FBFBF7] text-[#172B22] rounded-3xl border border-[#D4AF37]/50 shadow-2xl overflow-hidden p-0 animate-scaleUp flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Banner Image - FULL WIDTH/HEIGHT WITHOUT EXTRA PADDING */}
            <div className="relative w-full aspect-[16/10] bg-[#EBE5DC] overflow-hidden shrink-0">
              <img
                src={activePopup.image}
                alt={activePopup.title}
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/30 pointer-events-none" />

              {/* Heart/Save Button on Top Left: Synced with WishlistContext */}
              <button
                type="button"
                onClick={() =>
                  toggleSave({
                    id: activePopup.id,
                    title: activePopup.title,
                    category: activePopup.category,
                    price: 'Boutique Atelier',
                    image: activePopup.image,
                  })
                }
                className={`absolute top-3.5 left-3.5 w-9 h-9 min-w-[36px] min-h-[36px] aspect-square rounded-full flex items-center justify-center transition-all cursor-pointer shadow-lg backdrop-blur-md ${
                  isSaved(activePopup.id)
                    ? 'bg-[#0B291F] text-[#D4AF37] border border-[#D4AF37]'
                    : 'bg-[#0B291F]/70 text-[#FBFBF7] hover:text-[#D4AF37] border border-white/20'
                }`}
                aria-label="Save to Wishlist"
                title={isSaved(activePopup.id) ? 'Saved to Wishlist' : 'Save to Wishlist'}
              >
                <Heart
                  className={`w-4 h-4 ${
                    isSaved(activePopup.id) ? 'fill-[#D4AF37] text-[#D4AF37]' : ''
                  }`}
                />
              </button>

              {/* Close Button on Top Right */}
              <button
                type="button"
                onClick={() => setActivePopup(null)}
                className="absolute top-3.5 right-3.5 w-9 h-9 min-w-[36px] min-h-[36px] aspect-square rounded-full bg-[#0B291F]/70 text-[#FBFBF7] hover:text-[#D4AF37] border border-white/20 flex items-center justify-center transition-colors cursor-pointer shadow-lg backdrop-blur-md"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Category pill floating on banner */}
              <div className="absolute bottom-3 left-4">
                <span className="text-[10px] uppercase tracking-wider text-[#0B291F] font-semibold bg-[#D4AF37] px-3 py-1 rounded-full shadow">
                  {activePopup.category}
                </span>
              </div>
            </div>

            {/* Essential Info Only in Body */}
            <div className="p-5 sm:p-7 text-center space-y-3 overflow-y-auto">
              <h3 className="text-xl sm:text-2xl font-serif text-[#0B291F]">
                {activePopup.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#526359] font-light leading-relaxed max-w-md mx-auto">
                Part of our 48-piece curated showcase at Juwelier Simons. Available for private viewing and boutique consultation in Oosterwolde.
              </p>

              {/* ONLY 3 Bottom Buttons: 'WhatsApp', 'Booking View', 'View Details' - Vertically and horizontally centered */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 pt-4 border-t border-[#E5DDD0]">
                <a
                  href={`https://wa.me/31516513035?text=Hello%20Juwelier%20Simons,%20I%20am%20interested%20in%20${encodeURIComponent(
                    activePopup.title
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 inline-flex items-center justify-center text-center gap-1.5 py-3 px-3 text-[11px] sm:text-xs uppercase tracking-wider font-semibold rounded-full bg-[#25D366] text-white hover:bg-[#20ba59] transition-colors cursor-pointer shadow whitespace-nowrap leading-none"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={() => {
                    const target = activePopup;
                    setActivePopup(null);
                    setBookingTarget(target);
                  }}
                  className="w-full sm:flex-1 inline-flex items-center justify-center text-center gap-1.5 py-3 px-3 text-[11px] sm:text-xs uppercase tracking-wider font-semibold rounded-full bg-[#0B291F] text-[#FBFBF7] hover:bg-[#123C2D] transition-colors cursor-pointer shadow whitespace-nowrap leading-none"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Booking View</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    const target = activePopup;
                    setActivePopup(null);
                    setDetailTarget(target);
                  }}
                  className="w-full sm:flex-1 inline-flex items-center justify-center text-center gap-1.5 py-3 px-3 text-[11px] sm:text-xs uppercase tracking-wider font-semibold rounded-full bg-[#D4AF37] text-[#0B291F] hover:bg-[#E8D6A4] transition-colors cursor-pointer shadow whitespace-nowrap leading-none"
                >
                  <Eye className="w-3.5 h-3.5 text-[#0B291F]" />
                  <span>View Details</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Dedicated Booking Modal */}
      {bookingTarget && (
        <BookingModal
          isOpen={true}
          onClose={() => setBookingTarget(null)}
          targetItem={{
            title: bookingTarget.title,
            category: bookingTarget.category,
            image: bookingTarget.image,
          }}
        />
      )}

      {/* Dedicated Details Modal */}
      {detailTarget && (
        <DetailModal
          item={{
            id: detailTarget.id,
            title: detailTarget.title,
            category: detailTarget.category,
            description: `Curated showcase piece from our lustrous motion collection.`,
            image: detailTarget.image,
            details: 'Handcrafted in Europe using certified precious metals. Available for boutique fitting in Oosterwolde.',
            highlights: ['Certified European Quality', 'Noble Metal Finishing', 'Complimentary Sizing & Polish', 'Boutique Guarantee'],
          }}
          onClose={() => setDetailTarget(null)}
        />
      )}
    </section>
  );
};
