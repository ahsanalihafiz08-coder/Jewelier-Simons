import React from 'react';
import { X, Heart, Trash2, Phone, ArrowRight } from 'lucide-react';
import { ProductItem, BUSINESS_INFO } from '../data/jewelleryData';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: ProductItem[];
  onRemoveItem: (id: string) => void;
  onClearWishlist: () => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onRemoveItem,
  onClearWishlist,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-[#0B291F]/60 backdrop-blur-sm transition-opacity">
      <div
        className="w-full max-w-md bg-[#FBFBF7] text-[#172B22] h-full shadow-2xl flex flex-col justify-between border-l border-[#D4AF37]/30 animate-slideInRight"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-5 sm:p-6 bg-[#0B291F] text-[#FBFBF7] flex items-center justify-between border-b border-[#D4AF37]/30">
          <div className="flex items-center gap-2.5">
            <Heart className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />
            <h3 className="text-lg font-serif tracking-wider uppercase text-[#FBFBF7]">
              Curated Wishlist
            </h3>
            <span className="text-xs bg-[#D4AF37] text-[#0B291F] px-2 py-0.5 rounded-full font-semibold">
              {items.length}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-[#FBFBF7]/80 hover:text-[#D4AF37] transition-colors"
            aria-label="Close Wishlist"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Wishlist Items List */}
        <div className="p-5 sm:p-6 flex-grow overflow-y-auto space-y-4">
          {items.length === 0 ? (
            <div className="py-16 text-center space-y-3">
              <div className="w-12 h-12 mx-auto rounded-full bg-[#EBE5DC] text-[#8FA395] flex items-center justify-center">
                <Heart className="w-6 h-6 text-[#8FA395]" />
              </div>
              <p className="text-base font-serif text-[#0B291F]">Your wishlist is currently empty</p>
              <p className="text-xs text-[#526359] max-w-xs mx-auto font-light">
                Click the heart icon on any jewellery piece or timepiece to save it to your boutique consultation list.
              </p>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between pb-2 border-b border-[#E5DDD0] text-xs text-[#526359]">
                <span>{items.length} Saved {items.length === 1 ? 'Piece' : 'Pieces'}</span>
                <button
                  type="button"
                  onClick={onClearWishlist}
                  className="text-red-700 hover:underline flex items-center gap-1 text-[11px]"
                >
                  <Trash2 className="w-3 h-3" />
                  <span>Clear All</span>
                </button>
              </div>

              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-3 bg-[#F8F5EE] border border-[#D3DDD6]/60 rounded-2xl relative group"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded-xl bg-[#EBE5DC] shrink-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="flex-grow space-y-1">
                    <span className="text-[10px] uppercase tracking-wider text-[#8FA395] font-semibold">
                      {item.category}
                    </span>
                    <h4 className="text-sm font-serif text-[#0B291F] line-clamp-1">
                      {item.title}
                    </h4>
                    <p className="text-xs font-semibold text-[#0B291F]">
                      {item.price}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => onRemoveItem(item.id)}
                    className="text-[#8FA395] hover:text-red-700 p-1 self-start cursor-pointer"
                    aria-label={`Remove ${item.title}`}
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </>
          )}
        </div>

        {/* Drawer Footer */}
        {items.length > 0 && (
          <div className="p-5 sm:p-6 bg-[#F8F5EE] border-t border-[#D3DDD6] space-y-3">
            <p className="text-xs text-[#526359] text-center font-light">
              Inquire about your saved pieces directly with our Oosterwolde boutique.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-[#D4AF37] text-[#0B291F] rounded-full text-xs uppercase tracking-wider font-semibold hover:bg-[#E8D6A4] transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Store</span>
              </a>
              <a
                href={`https://wa.me/31516513035?text=Hello%20Juwelier%20Simons,%20I%20am%20interested%20in%20these%20items%20from%20my%20wishlist:%20${encodeURIComponent(items.map(i => i.title).join(', '))}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-[#0B291F] text-[#FBFBF7] rounded-full text-xs uppercase tracking-wider font-medium border border-[#D4AF37]/40 hover:bg-[#123C2D] transition-colors"
              >
                <span>WhatsApp List</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37]" />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
