import React, { useState } from 'react';
import { X, Heart, Eye, Calendar, ArrowRight } from 'lucide-react';
import { EXPLORE_COLLECTION_9_ITEMS, CollectionCardItem } from '../data/jewelleryData';
import { BookingModal } from './BookingModal';
import { DetailModal } from './DetailModal';
import { useWishlist } from '../context/WishlistContext';

interface ExploreCollectionsProps {
  onSelectCollection?: (item: CollectionCardItem) => void;
}

export const ExploreCollections: React.FC<ExploreCollectionsProps> = () => {
  const [activeItem, setActiveItem] = useState<CollectionCardItem | null>(null);
  const { isSaved, toggleSave } = useWishlist();
  const [bookingTarget, setBookingTarget] = useState<CollectionCardItem | null>(null);
  const [detailTarget, setDetailTarget] = useState<CollectionCardItem | null>(null);

  return (
    <section id="explore-collections" className="py-20 lg:py-28 bg-[#F4EFE6] text-[#172B22] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 lg:mb-18 space-y-3">
          <div className="inline-flex items-center gap-3">
            <span className="w-8 h-[1px] bg-[#D4AF37]" />
            <span className="text-xs uppercase tracking-[0.24em] text-[#0B291F] font-semibold">
              Curated Suites & Timepieces
            </span>
            <span className="w-8 h-[1px] bg-[#D4AF37]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0B291F] tracking-tight">
            Explore Collections
          </h2>
          <p className="text-sm sm:text-base text-[#4E6155] font-light leading-relaxed">
            Distinguished parures, bridal treasures, and fine European timepieces selected for their harmony of weight, luster, and craftsmanship.
          </p>
        </div>

        {/* 9-Card Collection Grid: STRICTLY forced to 3 cards per row on md/lg desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 [grid-template-columns:repeat(1,minmax(0,1fr))] md:[grid-template-columns:repeat(3,minmax(0,1fr))]">
          {EXPLORE_COLLECTION_9_ITEMS.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="bg-[#FBFBF7] border border-[#D3DDD6]/80 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer"
            >
              {/* Card Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#EBE5DC]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center transform group-hover:scale-106 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B291F]/50 via-transparent to-transparent opacity-40 group-hover:opacity-10 transition-opacity duration-300" />
                
                {/* Floating Category Tag */}
                <div className="absolute top-4 left-4 bg-[#0B291F]/90 backdrop-blur-sm px-3.5 py-1 rounded-full text-[#D4AF37] border border-[#D4AF37]/30">
                  <span className="text-[10px] uppercase tracking-[0.16em] font-medium">
                    {item.category}
                  </span>
                </div>

                {/* Heart/Save Button on Card Top Right: Synchronized with global wishlist state */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleSave({
                      id: item.id,
                      title: item.title,
                      category: item.category,
                      price: 'Boutique Atelier',
                      image: item.image,
                      description: item.description,
                    });
                  }}
                  className={`absolute top-4 right-4 w-9 h-9 min-w-[36px] aspect-square rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer shadow-md z-10 ${
                    isSaved(item.id)
                      ? 'bg-[#0B291F] text-[#D4AF37] border border-[#D4AF37]'
                      : 'bg-[#FBFBF7]/90 text-[#526359] hover:text-[#0B291F] hover:bg-white border border-[#D3DDD6]'
                  }`}
                  aria-label={isSaved(item.id) ? 'Remove from saved' : 'Save to boutique wishlist'}
                  title={isSaved(item.id) ? 'Saved to Wishlist' : 'Save to Wishlist'}
                >
                  <Heart
                    className={`w-4 h-4 ${
                      isSaved(item.id) ? 'fill-[#D4AF37] text-[#D4AF37]' : ''
                    }`}
                  />
                </button>
              </div>

              {/* Card Text Content */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow space-y-3">
                <div className="space-y-2">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#8FA395] font-semibold block">
                    Collection 0{index + 1}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif text-[#0B291F] group-hover:text-[#123C2D] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#526359] font-light leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>

                {/* Subtitle / Click hint */}
                <div className="pt-3 border-t border-[#E5DDD0] flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.14em] font-semibold text-[#0B291F] group-hover:text-[#D4AF37] transition-colors">
                    <span>Explore Suite</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="text-[11px] text-[#8FA395] font-light">
                    Oosterwolde
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Card Click Modal: Full-width top banner image without padding and centered buttons */}
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
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/30 pointer-events-none" />

              {/* Heart/Save Button on Top Left */}
              <button
                type="button"
                onClick={() =>
                  toggleSave({
                    id: activeItem.id,
                    title: activeItem.title,
                    category: activeItem.category,
                    price: 'Boutique Atelier',
                    image: activeItem.image,
                    description: activeItem.description,
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

              {/* Category Pill Floating on Banner */}
              <div className="absolute bottom-3 left-4">
                <span className="text-[10px] uppercase tracking-wider text-[#0B291F] font-semibold bg-[#D4AF37] px-3 py-1 rounded-full shadow">
                  {activeItem.category}
                </span>
              </div>
            </div>

            {/* Clean Formatted Text Body */}
            <div className="p-5 sm:p-7 text-center space-y-3 overflow-y-auto">
              <h3 className="text-xl sm:text-2xl font-serif text-[#0B291F]">
                {activeItem.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#4E6155] leading-relaxed font-light max-w-md mx-auto">
                {activeItem.description}
              </p>

              {/* 3 Action Buttons: Perfectly Centered Horizontally & Vertically */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 pt-4 border-t border-[#E5DDD0]">
                <button
                  type="button"
                  onClick={() => {
                    const target = activeItem;
                    setActiveItem(null);
                    setDetailTarget(target);
                  }}
                  className="w-full sm:flex-1 inline-flex items-center justify-center text-center gap-1.5 py-3 px-3 text-xs uppercase tracking-wider font-semibold rounded-full bg-[#D4AF37] text-[#0B291F] hover:bg-[#E8D6A4] transition-colors cursor-pointer shadow whitespace-nowrap leading-none"
                >
                  <Eye className="w-3.5 h-3.5 text-[#0B291F]" />
                  <span>View Details</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    const target = activeItem;
                    setActiveItem(null);
                    setBookingTarget(target);
                  }}
                  className="w-full sm:flex-1 inline-flex items-center justify-center text-center gap-1.5 py-3 px-3 text-xs uppercase tracking-wider font-semibold rounded-full bg-[#0B291F] text-[#FBFBF7] hover:bg-[#123C2D] transition-colors cursor-pointer shadow whitespace-nowrap leading-none"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Booking View</span>
                </button>

                <button
                  type="button"
                  onClick={() =>
                    toggleSave({
                      id: activeItem.id,
                      title: activeItem.title,
                      category: activeItem.category,
                      price: 'Boutique Atelier',
                      image: activeItem.image,
                      description: activeItem.description,
                    })
                  }
                  className={`w-full sm:w-auto inline-flex items-center justify-center text-center gap-1.5 py-3 px-4 text-xs uppercase tracking-wider font-semibold rounded-full border transition-colors cursor-pointer shadow whitespace-nowrap leading-none ${
                    isSaved(activeItem.id)
                      ? 'bg-[#0B291F] text-[#D4AF37] border-[#0B291F]'
                      : 'bg-[#F4EFE6] text-[#0B291F] border-[#D3DDD6] hover:border-[#0B291F]'
                  }`}
                >
                  <Heart className={`w-3.5 h-3.5 ${isSaved(activeItem.id) ? 'fill-[#D4AF37]' : ''}`} />
                  <span>{isSaved(activeItem.id) ? 'Saved' : 'Save'}</span>
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
            description: detailTarget.description,
            image: detailTarget.image,
            details: 'Curated suite available exclusively at Juwelier Simons. Prepared with meticulous reverence for your milestone.',
            highlights: ['Noble Metal Settings', 'Certified European Standards', 'Complimentary Sizing & Care', 'Authenticity Certificate'],
          }}
          onClose={() => setDetailTarget(null)}
        />
      )}
    </section>
  );
};
