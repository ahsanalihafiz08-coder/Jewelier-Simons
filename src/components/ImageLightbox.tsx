import React from 'react';
import { X } from 'lucide-react';
import { GalleryItem } from '../data/jewelleryData';

interface ImageLightboxProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0B291F]/90 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute -top-12 right-0 sm:right-2 text-[#FBFBF7] hover:text-[#D4AF37] p-2 transition-colors cursor-pointer"
          aria-label="Close Lightbox"
        >
          <X className="w-7 h-7" />
        </button>

        {/* Full Image */}
        <div className="overflow-hidden rounded-lg border border-[#D4AF37]/35 shadow-2xl bg-[#0B291F]">
          <img
            src={item.image}
            alt={item.title}
            className="max-h-[75vh] w-auto object-contain mx-auto"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Caption */}
        <div className="mt-4 text-center space-y-1">
          <p className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-semibold">
            {item.category}
          </p>
          <p className="text-lg font-serif text-[#FBFBF7]">
            {item.title}
          </p>
        </div>
      </div>
    </div>
  );
};
