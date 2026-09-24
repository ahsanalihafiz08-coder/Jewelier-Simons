import React from 'react';
import { X, Phone, CheckCircle2, ArrowRight, Heart } from 'lucide-react';
import { CollectionItem, BUSINESS_INFO } from '../data/jewelleryData';
import { useWishlist } from '../context/WishlistContext';

interface DetailModalProps {
  item: CollectionItem | null;
  onClose: () => void;
}

export const DetailModal: React.FC<DetailModalProps> = ({ item, onClose }) => {
  const { isSaved, toggleSave } = useWishlist();

  if (!item) return null;

  const scrollToContact = () => {
    onClose();
    const el = document.querySelector('#contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSave = () => {
    toggleSave({
      id: item.id,
      title: item.title,
      category: item.category,
      price: 'Boutique Atelier',
      image: item.image,
      description: item.description,
    });
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#0B291F]/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      {/* Modal Dialog Card */}
      <div
        className="relative bg-[#FBFBF7] text-[#172B22] border border-[#D3DDD6] rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl animate-scaleUp p-0 flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Banner Image - FULL WIDTH/HEIGHT WITHOUT EXTRA PADDING */}
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] max-h-[40vh] bg-[#EBE5DC] overflow-hidden shrink-0">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 pointer-events-none" />

          {/* Heart/Save Button on Top Left */}
          <button
            type="button"
            onClick={handleSave}
            className={`absolute top-3.5 left-3.5 z-10 w-9 h-9 min-w-[36px] min-h-[36px] aspect-square rounded-full flex items-center justify-center transition-all cursor-pointer shadow-lg backdrop-blur-md ${
              isSaved(item.id)
                ? 'bg-[#0B291F] text-[#D4AF37] border border-[#D4AF37]'
                : 'bg-[#0B291F]/80 text-[#FBFBF7] hover:text-[#D4AF37] border border-white/20'
            }`}
            aria-label="Save to Wishlist"
            title={isSaved(item.id) ? 'Saved to Wishlist' : 'Save to Wishlist'}
          >
            <Heart
              className={`w-4 h-4 ${
                isSaved(item.id) ? 'fill-[#D4AF37] text-[#D4AF37]' : ''
              }`}
            />
          </button>

          {/* Close Button Floating on Top Right of Banner */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-3.5 right-3.5 z-10 w-9 h-9 min-w-[36px] min-h-[36px] aspect-square rounded-full bg-[#0B291F]/80 text-[#FBFBF7] hover:text-[#D4AF37] border border-white/20 flex items-center justify-center transition-colors cursor-pointer shadow-lg backdrop-blur-md"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Floating Category Pill on Banner */}
          <div className="absolute bottom-3 left-4">
            <span className="text-[10px] uppercase tracking-wider text-[#0B291F] font-semibold bg-[#D4AF37] px-3.5 py-1 rounded-full shadow">
              {item.category}
            </span>
          </div>
        </div>

        {/* Details Body */}
        <div className="p-6 sm:p-8 flex flex-col justify-between space-y-4 overflow-y-auto">
          <div className="space-y-2.5">
            <div className="flex items-center justify-between text-xs text-[#8FA395]">
              <span className="uppercase tracking-[0.2em] text-[#D4AF37] font-semibold">
                Juwelier Simons Boutique Curation
              </span>
              <span>Stationsstraat 24, Oosterwolde</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif text-[#0B291F]">
              {item.title}
            </h3>

            <p className="text-xs sm:text-sm text-[#4E6155] leading-relaxed font-light">
              {item.description}
            </p>

            <p className="text-xs text-[#526359] leading-relaxed font-light pt-2 border-t border-[#E5DDD0]">
              {item.details}
            </p>

            {/* Highlights */}
            <div className="pt-2">
              <p className="text-[11px] uppercase tracking-[0.16em] text-[#0B291F] font-semibold mb-2">
                Curation Highlights
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#2E4035]">
                {item.highlights.map((h: string, i: number) => (
                  <li key={i} className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Modal Action Buttons: Centered text horizontally and vertically with generous padding */}
          <div className="pt-4 border-t border-[#E5DDD0] flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="w-full sm:flex-1 inline-flex items-center justify-center text-center gap-2 py-3.5 px-6 text-xs uppercase tracking-[0.16em] font-semibold text-[#0B291F] bg-[#D4AF37] hover:bg-[#E8D6A4] rounded-full transition-colors shadow whitespace-nowrap leading-none"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Store</span>
            </a>

            <button
              type="button"
              onClick={handleSave}
              className={`w-full sm:w-auto inline-flex items-center justify-center text-center gap-2 py-3.5 px-6 text-xs uppercase tracking-[0.16em] font-semibold rounded-full border transition-colors cursor-pointer shadow whitespace-nowrap leading-none ${
                isSaved(item.id)
                  ? 'bg-[#0B291F] text-[#D4AF37] border-[#0B291F]'
                  : 'bg-[#F4EFE6] text-[#0B291F] border-[#D3DDD6] hover:border-[#0B291F]'
              }`}
            >
              <Heart className={`w-3.5 h-3.5 ${isSaved(item.id) ? 'fill-[#D4AF37]' : ''}`} />
              <span>{isSaved(item.id) ? 'Saved' : 'Save'}</span>
            </button>

            <button
              type="button"
              onClick={scrollToContact}
              className="w-full sm:flex-1 inline-flex items-center justify-center text-center gap-2 py-3.5 px-6 text-xs uppercase tracking-[0.16em] font-medium text-[#0B291F] border border-[#0B291F]/30 hover:border-[#0B291F] rounded-full transition-colors cursor-pointer shadow-xs whitespace-nowrap leading-none"
            >
              <span>Inquire in Boutique</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
