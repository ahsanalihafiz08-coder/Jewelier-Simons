import React, { useState } from 'react';
import { GALLERY_9_ITEMS, GalleryItem } from '../data/jewelleryData';
import { Eye, Calendar, X, Heart, Sparkles } from 'lucide-react';
import { BookingModal } from './BookingModal';
import { DetailModal } from './DetailModal';

interface GalleryProps {
  onOpenLightbox?: (item: GalleryItem) => void;
}

export const Gallery: React.FC<GalleryProps> = () => {
  const [activeModalItem, setActiveModalItem] = useState<GalleryItem | null>(null);
  const [savedIds, setSavedIds] = useState<string[]>([]);
  const [bookingItem, setBookingItem] = useState<GalleryItem | null>(null);
  const [detailItem, setDetailItem] = useState<GalleryItem | null>(null);

  const toggleSave = (id: string) => {
    setSavedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="gallery" className="py-10 sm:py-12 lg:py-16 bg-[#F4EFE6] text-[#172B22] relative overflow-hidden border-b border-[#E5DDD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Reduced vertical height and padding */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8 space-y-2">
          <div className="inline-flex items-center gap-2.5">
            <span className="w-6 sm:w-8 h-[1px] bg-[#0B291F]/40" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.24em] text-[#0B291F] font-semibold">
              The 9-Piece Visual Archive
            </span>
            <span className="w-6 sm:w-8 h-[1px] bg-[#0B291F]/40" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#0B291F] tracking-tight">
            The Gallery
          </h2>
          <p className="text-xs sm:text-sm text-[#4A5D51] font-light leading-relaxed">
            A portrait-format visual sanctuary capturing natural mineral textures, fine gold, and precision European craftsmanship.
          </p>
        </div>

        {/* 9-Card Gallery Grid: Exactly 3 cards per row, Compact Balanced Dimensions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {GALLERY_9_ITEMS.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setActiveModalItem(item)}
              className="group bg-[#FBFBF7] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 border border-[#D3DDD6]/80 flex flex-col cursor-pointer"
            >
              {/* Balanced Image Container (aspect-square sm:aspect-[4/3]) - Reduced vertical height */}
              <div className="relative aspect-square sm:aspect-[4/3] overflow-hidden bg-[#EBE5DC]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center transform group-hover:scale-106 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0B291F]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Floating Index Tag */}
                <div className="absolute top-3.5 left-3.5 z-10 bg-[#0B291F]/90 backdrop-blur-sm px-2.5 py-0.5 rounded-full text-[10px] text-[#FBFBF7] font-semibold border border-white/10">
                  Exhibit #{String(index + 1).padStart(2, '0')}
                </div>

                {/* Category Pill */}
                <div className="absolute top-3.5 right-3.5 z-10 bg-[#FBFBF7]/90 backdrop-blur-sm px-2.5 py-0.5 rounded-full text-[10px] uppercase tracking-wider text-[#0B291F] font-semibold border border-[#D3DDD6]">
                  {item.category}
                </div>
              </div>

              {/* Clean Text Descriptions & Item Details Directly Beneath Each Vertical Card */}
              <div className="p-4 sm:p-5 flex flex-col justify-between flex-grow space-y-2.5 bg-[#FBFBF7]">
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] font-semibold">
                      Juwelier Simons
                    </span>
                    <span className="text-[10px] text-[#8FA395] font-light">
                      Oosterwolde
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-serif text-[#0B291F] group-hover:text-[#123C2D] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#526359] font-light leading-relaxed line-clamp-2">
                    Hand-finished setting showcasing balanced luster and European hallmark certification.
                  </p>
                </div>

                {/* Bottom hint */}
                <div className="pt-2 border-t border-[#E5DDD0] flex items-center justify-between text-xs text-[#0B291F] font-medium">
                  <span className="inline-flex items-center gap-1.5 group-hover:text-[#D4AF37] transition-colors">
                    <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>View Atelier Exhibit</span>
                  </span>
                  <span className="text-[11px] text-[#8FA395]">Click for details</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Pop-up Modal: Top Banner Image Scales to Full Width/Height Without Extra Padding */}
      {activeModalItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#0B291F]/85 backdrop-blur-md animate-fadeIn"
          onClick={() => setActiveModalItem(null)}
        >
          <div
            className="relative max-w-lg w-full bg-[#FBFBF7] text-[#172B22] rounded-3xl border border-[#D3DDD6] shadow-2xl overflow-hidden p-0 animate-scaleUp flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Banner Image - FULL WIDTH/HEIGHT WITHOUT EXTRA PADDING */}
            <div className="relative w-full aspect-[16/10] bg-[#EBE5DC] overflow-hidden shrink-0">
              <img
                src={activeModalItem.image}
                alt={activeModalItem.title}
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/30 pointer-events-none" />

              {/* Heart/Save Button on Top Left */}
              <button
                type="button"
                onClick={() => toggleSave(activeModalItem.id)}
                className={`absolute top-3.5 left-3.5 w-10 h-10 rounded-full flex items-center justify-center transition-all cursor-pointer shadow-lg backdrop-blur-md ${
                  savedIds.includes(activeModalItem.id)
                    ? 'bg-[#0B291F] text-[#D4AF37] border border-[#D4AF37]'
                    : 'bg-[#0B291F]/70 text-[#FBFBF7] hover:text-[#D4AF37] border border-white/20'
                }`}
                aria-label="Save to Wishlist"
              >
                <Heart
                  className={`w-4 h-4 ${
                    savedIds.includes(activeModalItem.id) ? 'fill-[#D4AF37] text-[#D4AF37]' : ''
                  }`}
                />
              </button>

              {/* Close Button on Top Right */}
              <button
                type="button"
                onClick={() => setActiveModalItem(null)}
                className="absolute top-3.5 right-3.5 w-9 h-9 min-w-[36px] min-h-[36px] aspect-square rounded-full bg-[#0B291F]/70 text-[#FBFBF7] hover:text-[#D4AF37] border border-white/20 flex items-center justify-center transition-colors cursor-pointer shadow-lg backdrop-blur-md"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Category Pill Floating on Banner */}
              <div className="absolute bottom-3 left-4">
                <span className="text-[10px] uppercase tracking-wider text-[#0B291F] font-semibold bg-[#D4AF37] px-3 py-1 rounded-full shadow">
                  {activeModalItem.category}
                </span>
              </div>
            </div>

            {/* Info Body Area */}
            <div className="p-5 sm:p-7 text-center space-y-3 overflow-y-auto">
              <h3 className="text-xl sm:text-2xl font-serif text-[#0B291F]">
                {activeModalItem.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#526359] font-light max-w-sm mx-auto leading-relaxed">
                Prepared with meticulous devotion in our Oosterwolde workshop. Available for private viewing, custom engraving, and personal sizing.
              </p>

              {/* Modal Action Buttons: Perfectly Centered Horizontally & Vertically */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 pt-4 border-t border-[#E5DDD0]">
                <button
                  type="button"
                  onClick={() => {
                    const target = activeModalItem;
                    setActiveModalItem(null);
                    setDetailItem(target);
                  }}
                  className="w-full sm:flex-1 inline-flex items-center justify-center text-center gap-1.5 py-3 px-3 text-xs uppercase tracking-wider font-semibold rounded-full bg-[#D4AF37] text-[#0B291F] hover:bg-[#E8D6A4] transition-colors cursor-pointer shadow whitespace-nowrap leading-none"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>View Details</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    const target = activeModalItem;
                    setActiveModalItem(null);
                    setBookingItem(target);
                  }}
                  className="w-full sm:flex-1 inline-flex items-center justify-center text-center gap-1.5 py-3 px-3 text-xs uppercase tracking-wider font-semibold rounded-full bg-[#0B291F] text-[#FBFBF7] hover:bg-[#123C2D] transition-colors cursor-pointer shadow whitespace-nowrap leading-none"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Booking View</span>
                </button>

                <button
                  type="button"
                  onClick={() => toggleSave(activeModalItem.id)}
                  className={`w-full sm:w-auto inline-flex items-center justify-center text-center gap-1.5 py-3 px-4 text-xs uppercase tracking-wider font-semibold rounded-full border transition-colors cursor-pointer shadow whitespace-nowrap leading-none ${
                    savedIds.includes(activeModalItem.id)
                      ? 'bg-[#0B291F] text-[#D4AF37] border-[#0B291F]'
                      : 'bg-[#F4EFE6] text-[#0B291F] border-[#D3DDD6]'
                  }`}
                >
                  <Heart className={`w-3.5 h-3.5 ${savedIds.includes(activeModalItem.id) ? 'fill-[#D4AF37]' : ''}`} />
                  <span>{savedIds.includes(activeModalItem.id) ? 'Saved' : 'Save'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Dedicated Booking Modal triggered by Booking View */}
      {bookingItem && (
        <BookingModal
          isOpen={true}
          onClose={() => setBookingItem(null)}
          targetItem={{
            title: bookingItem.title,
            category: bookingItem.category,
            image: bookingItem.image,
          }}
        />
      )}

      {/* Detailed Modal triggered by View Details */}
      {detailItem && (
        <DetailModal
          item={{
            id: detailItem.id,
            title: detailItem.title,
            category: detailItem.category,
            description: `Fine creation exhibited in our visual archive at Juwelier Simons in Oosterwolde.`,
            image: detailItem.image,
            details: 'Handcrafted according to European standards. Complimentary sizing, cleaning, and appraisal included.',
            highlights: ['Hallmarked Noble Metal', 'Certified Gemstone Accents', 'Complimentary Boutique Care', 'Secure Atelier Packaging'],
          }}
          onClose={() => setDetailItem(null)}
        />
      )}
    </section>
  );
};
