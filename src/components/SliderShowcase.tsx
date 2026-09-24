import React, { useState } from 'react';
import { SLIDER_48_ITEMS, SliderItem } from '../data/jewelleryData';
import { Eye, Calendar, X, Heart } from 'lucide-react';
import { BookingModal } from './BookingModal';
import { DetailModal } from './DetailModal';
import { useWishlist } from '../context/WishlistContext';

interface SliderShowcaseProps {
  onSelectItem?: (item: SliderItem) => void;
}

export const SliderShowcase: React.FC<SliderShowcaseProps> = () => {
  const [activeItem, setActiveItem] = useState<SliderItem | null>(null);
  const { isSaved, toggleSave } = useWishlist();
  const [bookingTarget, setBookingTarget] = useState<SliderItem | null>(null);
  const [detailTarget, setDetailTarget] = useState<SliderItem | null>(null);

  // Exactly 22 pieces from the archive
  const items22 = SLIDER_48_ITEMS.slice(0, 22);

  // Helper description generator based on category/title
  const getArchiveDescription = (item: SliderItem) => {
    if (item.category === 'Bracelets') return 'Hand-finished solid gold contour with certified master hallmarking.';
    if (item.category === 'Earrings') return 'Articulated European drop design with brilliant light reflection.';
    if (item.category === 'Rings') return 'Precision-set noble metal band with signature Simons polish.';
    if (item.category === 'Parures' || item.category === 'Sets') return 'Curated matching bridal parure in harmonized goldwork.';
    return 'Exquisite European boutique archive piece crafted to heritage standards.';
  };

  return (
    <section id="slider-showcase" className="py-14 lg:py-18 bg-[#FBFBF7] text-[#172B22] relative overflow-hidden border-b border-[#E5DDD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center space-y-2.5">
        <div className="inline-flex items-center gap-3">
          <span className="w-8 h-[1px] bg-[#0B291F]/40" />
          <span className="text-xs uppercase tracking-[0.24em] text-[#0B291F] font-semibold">
            22-Piece Atelier Archive
          </span>
          <span className="w-8 h-[1px] bg-[#0B291F]/40" />
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#0B291F] tracking-tight">
          22-Piece Atelier Archive
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-[#526359] max-w-2xl mx-auto font-light leading-relaxed">
          A seamless continuous archive of 22 fine jewellery pieces across Rings, Necklaces, Earrings, Bracelets, Parures, & Curations. Click any piece for private viewing.
        </p>
      </div>

      {/* 22-Card Continuous Stream - Full-bleed edge-to-edge alignment, NO white side margins or border padding */}
      <div className="relative w-full overflow-hidden select-none p-0 m-0">
        <div className="flex gap-3.5 sm:gap-5 animate-marquee hover:[animation-play-state:paused] w-max py-2 will-change-transform">
          {[...items22, ...items22].map((item, index) => {
            const itemNumber = (index % items22.length) + 1;
            const formattedNumber = String(itemNumber).padStart(2, '0');
            const description = getArchiveDescription(item);

            return (
              <div
                key={`${item.id}-${index}`}
                onClick={() => setActiveItem(item)}
                className="relative w-48 sm:w-56 md:w-60 shrink-0 bg-[#F4EFE6] rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 cursor-pointer group flex flex-col border-0 p-0 ring-0 m-0"
              >
                {/* Card Image Area - Category badge repositioned strictly top-left with centered typography */}
                <div className="relative aspect-[4/3] sm:aspect-[4/3.5] overflow-hidden bg-[#EBE5DC]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-500 ease-out"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                  />
                  
                  {/* Category Badge Tag: Top-Left Corner, Centered Typography Perfectly Fitting Container */}
                  <div className="absolute top-2.5 left-2.5 z-10 bg-[#0B291F]/90 backdrop-blur-sm px-3 py-1 rounded-full border border-[#D4AF37]/35 shadow-xs flex items-center justify-center">
                    <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#D4AF37] leading-none text-center">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Details Beneath Card: Subtle item index counter (e.g. 01/22), title, and clean description */}
                <div className="p-3.5 bg-[#F4EFE6] space-y-1.5 flex flex-col flex-grow justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h4 className="text-xs sm:text-sm font-serif text-[#0B291F] group-hover:text-[#123C2D] transition-colors line-clamp-1 font-semibold flex-1">
                        {item.title}
                      </h4>
                      {/* Subtle item index counter (e.g., 01/22) */}
                      <span className="text-[10px] sm:text-[11px] font-mono font-medium text-[#7A8C81] bg-[#E5DDD0] px-2 py-0.5 rounded-full shrink-0 tracking-wider">
                        {formattedNumber}/22
                      </span>
                    </div>

                    {/* Small clean description text underneath the card visual element */}
                    <p className="text-[11px] sm:text-xs text-[#526359] font-light leading-snug line-clamp-2">
                      {description}
                    </p>
                  </div>

                  <div className="pt-2 flex items-center justify-between text-[10px] sm:text-[11px] text-[#0B291F] font-medium border-t border-[#E5DDD0]/70">
                    <span className="text-[#8FA395]">Boutique Archive</span>
                    <span className="text-[#0B291F] group-hover:text-[#D4AF37] flex items-center gap-1 transition-colors font-semibold">
                      View Details &rarr;
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Detail Modal on Click: Top Banner Image Scales to Full Width/Height Without Extra Padding */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#0B291F]/85 backdrop-blur-md animate-fadeIn"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="relative max-w-lg w-full bg-[#FBFBF7] text-[#172B22] rounded-3xl border border-[#D4AF37]/50 shadow-2xl overflow-hidden p-0 animate-scaleUp flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Banner Image - FULL WIDTH/HEIGHT WITHOUT EXTRA PADDING */}
            <div className="relative w-full aspect-[16/10] bg-[#EBE5DC] overflow-hidden shrink-0">
              <img
                src={activeItem.image}
                alt={activeItem.title}
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
                    id: activeItem.id,
                    title: activeItem.title,
                    category: activeItem.category,
                    price: 'Boutique Atelier',
                    image: activeItem.image,
                  })
                }
                className={`absolute top-3.5 left-3.5 w-9 h-9 min-w-[36px] min-h-[36px] aspect-square rounded-full flex items-center justify-center transition-all cursor-pointer shadow-lg backdrop-blur-md ${
                  isSaved(activeItem.id)
                    ? 'bg-[#0B291F] text-[#D4AF37] border border-[#D4AF37]'
                    : 'bg-[#0B291F]/70 text-[#FBFBF7] hover:text-[#D4AF37] border border-white/20'
                }`}
                aria-label="Save to Wishlist"
                title={isSaved(activeItem.id) ? 'Saved to Wishlist' : 'Save to Wishlist'}
              >
                <Heart
                  className={`w-4 h-4 ${
                    isSaved(activeItem.id) ? 'fill-[#D4AF37] text-[#D4AF37]' : ''
                  }`}
                />
              </button>

              {/* Close Button on Top Right */}
              <button
                type="button"
                onClick={() => setActiveItem(null)}
                className="absolute top-3.5 right-3.5 w-9 h-9 min-w-[36px] min-h-[36px] aspect-square rounded-full bg-[#0B291F]/70 text-[#FBFBF7] hover:text-[#D4AF37] border border-white/20 flex items-center justify-center transition-colors cursor-pointer shadow-lg backdrop-blur-md"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Category & Number badge floating on image bottom */}
              <div className="absolute bottom-3 left-4 inline-flex items-center gap-2">
                <span className="text-[10px] uppercase tracking-wider text-[#0B291F] font-semibold bg-[#D4AF37] px-3 py-1 rounded-full shadow">
                  {activeItem.category}
                </span>
                <span className="text-[10px] uppercase tracking-wider text-[#FBFBF7] bg-[#0B291F]/80 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/20">
                  Piece {((items22.findIndex(i => i.id === activeItem.id) + 1) || 1)} of 22
                </span>
              </div>
            </div>

            {/* Info Body Area */}
            <div className="p-5 sm:p-7 text-center space-y-3 overflow-y-auto">
              <h3 className="text-xl sm:text-2xl font-serif text-[#0B291F]">
                {activeItem.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#526359] font-light leading-relaxed max-w-md mx-auto">
                {getArchiveDescription(activeItem)} Available for bespoke viewing and private sizing at our Oosterwolde boutique.
              </p>

              {/* Bottom Action Buttons: Centered text horizontally and vertically */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4 border-t border-[#E5DDD0]">
                <button
                  type="button"
                  onClick={() => {
                    const target = activeItem;
                    setActiveItem(null);
                    setBookingTarget(target);
                  }}
                  className="w-full sm:flex-1 inline-flex items-center justify-center text-center gap-2 py-3 px-4 text-xs uppercase tracking-wider font-semibold rounded-full bg-[#0B291F] text-[#FBFBF7] hover:bg-[#123C2D] transition-colors cursor-pointer shadow whitespace-nowrap leading-none"
                >
                  <Calendar className="w-4 h-4 text-[#D4AF37]" />
                  <span>Booking View</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    const target = activeItem;
                    setActiveItem(null);
                    setDetailTarget(target);
                  }}
                  className="w-full sm:flex-1 inline-flex items-center justify-center text-center gap-2 py-3 px-4 text-xs uppercase tracking-wider font-semibold rounded-full bg-[#D4AF37] text-[#0B291F] hover:bg-[#E8D6A4] transition-colors cursor-pointer shadow whitespace-nowrap leading-none"
                >
                  <Eye className="w-4 h-4 text-[#0B291F]" />
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

      {/* Detailed Item Modal */}
      {detailTarget && (
        <DetailModal
          item={{
            id: detailTarget.id,
            title: detailTarget.title,
            category: detailTarget.category,
            description: `Exhibited piece from the 22-Piece Atelier Archive at Juwelier Simons.`,
            image: detailTarget.image,
            details: 'Masterfully forged and finished to exacting standards. Includes warranty and complimentary boutique maintenance.',
            highlights: ['Noble Gold or Platinum', 'Certified Gemstones', 'Master Atelier Inspection', 'Complimentary Ring Sizing'],
          }}
          onClose={() => setDetailTarget(null)}
        />
      )}
    </section>
  );
};
