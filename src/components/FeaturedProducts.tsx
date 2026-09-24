import React, { useState, useEffect } from 'react';
import { Heart, ChevronLeft, ChevronRight, Eye, Calendar, X } from 'lucide-react';
import { FEATURED_PRODUCTS_36, ProductItem } from '../data/jewelleryData';
import { BookingModal } from './BookingModal';

interface FeaturedProductsProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  wishlistIds: string[];
  onToggleWishlist: (item: ProductItem) => void;
  onQuickInquire?: (item: ProductItem) => void;
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  selectedCategory,
  onSelectCategory,
  wishlistIds,
  onToggleWishlist,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [detailProduct, setDetailProduct] = useState<ProductItem | null>(null);
  const [bookingProduct, setBookingProduct] = useState<ProductItem | null>(null);
  const itemsPerPage = 18;

  const categories = ['All', 'Watches', 'Bracelets', 'Earrings', 'Rings'];

  // Filter products by selected category
  const filteredProducts = selectedCategory === 'All'
    ? FEATURED_PRODUCTS_36
    : FEATURED_PRODUCTS_36.filter((p) => p.category.toLowerCase() === selectedCategory.toLowerCase());

  // Total pages
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage) || 1;

  // Reset to page 1 if category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  // Paginated items
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    const el = document.querySelector('#featured-products');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="featured-products" className="py-20 lg:py-28 bg-[#FBFBF7] text-[#172B22] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 lg:mb-12 space-y-3">
          <div className="inline-flex items-center gap-3">
            <span className="w-8 h-[1px] bg-[#0B291F]/40" />
            <span className="text-xs uppercase tracking-[0.24em] text-[#0B291F] font-semibold">
              Atelier Catalog
            </span>
            <span className="w-8 h-[1px] bg-[#0B291F]/40" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0B291F] tracking-tight">
            Featured Creations & Timepieces
          </h2>
          <p className="text-sm sm:text-base text-[#4E6155] font-light leading-relaxed">
            Browse our 36-piece signature catalog. Each creation is handcrafted from noble metals and certified stones, available at our boutique in Oosterwolde.
          </p>
        </div>

        {/* Category Tabs: Rounded Shapes & Clean Legible Typography */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {categories.map((cat) => {
            const isActive = selectedCategory.toLowerCase() === cat.toLowerCase();
            const count = cat === 'All'
              ? FEATURED_PRODUCTS_36.length
              : FEATURED_PRODUCTS_36.filter((p) => p.category.toLowerCase() === cat.toLowerCase()).length;

            return (
              <button
                key={cat}
                type="button"
                onClick={() => onSelectCategory(cat)}
                className={`px-5 py-2.5 text-xs uppercase tracking-[0.16em] font-medium transition-all duration-200 rounded-full cursor-pointer whitespace-nowrap flex items-center gap-2 shadow-sm ${
                  isActive
                    ? 'bg-[#0B291F] text-[#FBFBF7] border border-[#0B291F]'
                    : 'bg-[#F4EFE6] text-[#2E4035] hover:text-[#0B291F] hover:bg-[#EBE5DC] border border-[#D3DDD6]'
                }`}
              >
                <span>{cat}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                  isActive ? 'bg-[#1C5440] text-[#FBFBF7]' : 'bg-[#E5DDD0] text-[#2E4035]'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* 36-Item Catalog Grid: Strictly 1 Full-Width Card Per Row on Mobile, 3 Cards Per Row on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-14 [grid-template-columns:repeat(1,minmax(0,1fr))] md:[grid-template-columns:repeat(3,minmax(0,1fr))]">
          {currentProducts.map((product) => {
            const isWishlisted = wishlistIds.includes(product.id);

            return (
              <div
                key={product.id}
                className="bg-[#F8F5EE] border border-[#D3DDD6]/80 rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                {/* Product Image Area */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#EBE5DC]">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover object-center transform group-hover:scale-106 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B291F]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Clean Category Badge */}
                  <div className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 bg-[#0B291F]/90 backdrop-blur-sm px-3 sm:px-3.5 py-1 rounded-full text-[#FBFBF7] border border-white/20 text-[10px] uppercase tracking-[0.14em] font-medium leading-none flex items-center justify-center">
                    {product.category}
                  </div>

                  {/* Wishlist Heart Icon Toggle */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleWishlist(product);
                    }}
                    className={`absolute top-3.5 right-3.5 sm:top-4 sm:right-4 w-8 h-8 sm:w-9 sm:h-9 min-w-[32px] sm:min-w-[36px] aspect-square rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer shadow-md ${
                      isWishlisted
                        ? 'bg-[#0B291F] text-[#D4AF37] border border-[#D4AF37]'
                        : 'bg-[#FBFBF7]/90 text-[#526359] hover:text-[#0B291F] hover:bg-white border border-[#D3DDD6]'
                    }`}
                    aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
                    title={isWishlisted ? 'Saved in Wishlist' : 'Add to Wishlist'}
                  >
                    <Heart className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isWishlisted ? 'fill-[#D4AF37] text-[#D4AF37]' : ''}`} />
                  </button>
                </div>

                {/* Card Information */}
                <div className="p-4 sm:p-6 flex flex-col justify-between flex-grow space-y-3 sm:space-y-4">
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase tracking-[0.18em] text-[#8FA395] font-semibold">
                        Juwelier Simons
                      </span>
                      {/* Exact Euro Price Clearly Visible */}
                      <span className="text-base sm:text-lg font-serif font-bold text-[#0B291F] tracking-tight">
                        {product.price}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-xl font-serif text-[#0B291F] group-hover:text-[#123C2D] transition-colors leading-snug line-clamp-1 font-medium">
                      {product.title}
                    </h3>

                    {product.description && (
                      <p className="text-xs text-[#526359] font-light line-clamp-2 leading-relaxed">
                        {product.description}
                      </p>
                    )}
                  </div>

                  {/* Outer Card Buttons: Placed side-by-side in a single row across all screens */}
                  <div className="pt-3 sm:pt-4 border-t border-[#E5DDD0] flex flex-row items-center gap-2 sm:gap-2.5 w-full">
                    <button
                      type="button"
                      onClick={() => setDetailProduct(product)}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 text-[11px] sm:text-xs uppercase tracking-wider font-semibold text-[#FBFBF7] bg-[#0B291F] hover:bg-[#123C2D] rounded-full transition-colors cursor-pointer shadow-sm text-center shrink-0 min-w-0"
                    >
                      <Eye className="w-3.5 h-3.5 text-[#FBFBF7] shrink-0" />
                      <span className="truncate">View Details</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setBookingProduct(product)}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 text-[11px] sm:text-xs uppercase tracking-wider font-semibold text-[#0B291F] bg-[#F4EFE6] border border-[#0B291F]/30 hover:border-[#0B291F] hover:bg-[#EBE5DC] rounded-full transition-colors cursor-pointer shadow-sm text-center shrink-0 min-w-0"
                    >
                      <Calendar className="w-3.5 h-3.5 text-[#0B291F] shrink-0" />
                      <span className="truncate">Booking View</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Clear Pagination Controls (1, 2) with Rounded Shapes */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 pt-6">
            <button
              type="button"
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
              className="w-10 h-10 rounded-full border border-[#D3DDD6] bg-[#F8F5EE] text-[#0B291F] hover:bg-[#EBE5DC] disabled:opacity-30 disabled:pointer-events-none transition-colors flex items-center justify-center cursor-pointer shadow-sm"
              aria-label="Previous Page"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                type="button"
                onClick={() => handlePageChange(page)}
                className={`w-10 h-10 rounded-full text-xs uppercase tracking-wider font-semibold transition-all duration-200 cursor-pointer flex items-center justify-center shadow-sm ${
                  currentPage === page
                    ? 'bg-[#0B291F] text-[#FBFBF7] border border-[#0B291F]'
                    : 'bg-[#F8F5EE] text-[#526359] border border-[#D3DDD6] hover:text-[#0B291F] hover:bg-[#EBE5DC]'
                }`}
              >
                {page}
              </button>
            ))}

            <button
              type="button"
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
              className="w-10 h-10 rounded-full border border-[#D3DDD6] bg-[#F8F5EE] text-[#0B291F] hover:bg-[#EBE5DC] disabled:opacity-30 disabled:pointer-events-none transition-colors flex items-center justify-center cursor-pointer shadow-sm"
              aria-label="Next Page"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>

      {/* Product Detail Modal */}
      {detailProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#0B291F]/85 backdrop-blur-md animate-fadeIn"
          onClick={() => setDetailProduct(null)}
        >
          <div
            className="relative max-w-lg w-full bg-[#FBFBF7] text-[#172B22] rounded-3xl border border-[#D3DDD6] shadow-2xl overflow-hidden p-0 animate-scaleUp flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Banner Image - FULL WIDTH/HEIGHT WITHOUT EXTRA PADDING */}
            <div className="relative w-full aspect-[16/10] bg-[#EBE5DC] overflow-hidden shrink-0">
              <img
                src={detailProduct.image}
                alt={detailProduct.title}
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/30 pointer-events-none" />

              {/* Heart/Save Button on Top Left */}
              <button
                type="button"
                onClick={() => onToggleWishlist(detailProduct)}
                className={`absolute top-3.5 left-3.5 w-9 h-9 min-w-[36px] min-h-[36px] aspect-square rounded-full flex items-center justify-center transition-all cursor-pointer shadow-lg backdrop-blur-md z-10 ${
                  wishlistIds.includes(detailProduct.id)
                    ? 'bg-[#0B291F] text-[#D4AF37] border border-[#D4AF37]'
                    : 'bg-[#0B291F]/70 text-[#FBFBF7] hover:text-[#D4AF37] border border-white/20'
                }`}
                aria-label={wishlistIds.includes(detailProduct.id) ? 'Remove from wishlist' : 'Save to wishlist'}
                title={wishlistIds.includes(detailProduct.id) ? 'Saved in Wishlist' : 'Save to Wishlist'}
              >
                <Heart
                  className={`w-4 h-4 ${
                    wishlistIds.includes(detailProduct.id) ? 'fill-[#D4AF37] text-[#D4AF37]' : ''
                  }`}
                />
              </button>

              {/* Close Button on Top Right */}
              <button
                type="button"
                onClick={() => setDetailProduct(null)}
                className="absolute top-3.5 right-3.5 w-9 h-9 min-w-[36px] min-h-[36px] aspect-square rounded-full bg-[#0B291F]/70 text-[#FBFBF7] hover:text-[#D4AF37] border border-white/20 flex items-center justify-center transition-colors cursor-pointer shadow-lg backdrop-blur-md z-10"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Category Pill & Price Tag Floating on Banner */}
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between pointer-events-none">
                <span className="text-[10px] uppercase tracking-wider text-[#0B291F] font-semibold bg-[#D4AF37] px-3 py-1 rounded-full shadow pointer-events-auto">
                  {detailProduct.category}
                </span>
                <span className="text-xs uppercase tracking-wider font-serif font-bold text-[#FBFBF7] bg-[#0B291F]/90 backdrop-blur-md px-3.5 py-1 rounded-full border border-[#D4AF37]/50 shadow-md pointer-events-auto">
                  {detailProduct.price}
                </span>
              </div>
            </div>

            {/* Info Body Area */}
            <div className="p-5 sm:p-7 text-center space-y-3 overflow-y-auto">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#E5DDD0]/70 pb-3 text-left">
                <h3 className="text-xl sm:text-2xl font-serif text-[#0B291F]">
                  {detailProduct.title}
                </h3>
                <div className="inline-flex items-center self-start sm:self-auto px-3.5 py-1 rounded-full bg-[#123C2D] text-[#EEDB9A] font-serif font-bold text-base sm:text-lg border border-[#D4AF37]/40 shadow-xs">
                  {detailProduct.price}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#4E6155] leading-relaxed font-light text-left">
                {detailProduct.description || "Exclusively curated creation at Juwelier Simons in Oosterwolde. Crafted with certified European standards."}
              </p>

              {/* Modal Action Buttons: Centered text horizontally and vertically */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 pt-4 border-t border-[#E5DDD0]">
                <button
                  type="button"
                  onClick={() => {
                    const target = detailProduct;
                    setDetailProduct(null);
                    setBookingProduct(target);
                  }}
                  className="w-full sm:flex-1 inline-flex items-center justify-center text-center gap-1.5 py-3 px-3 text-xs uppercase tracking-wider font-semibold rounded-full bg-[#0B291F] text-[#FBFBF7] hover:bg-[#123C2D] transition-colors cursor-pointer shadow whitespace-nowrap leading-none"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Booking View</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    onToggleWishlist(detailProduct);
                  }}
                  className={`w-full sm:w-auto inline-flex items-center justify-center text-center gap-1.5 py-3 px-4 text-xs uppercase tracking-wider font-semibold rounded-full border transition-colors cursor-pointer shadow whitespace-nowrap leading-none ${
                    wishlistIds.includes(detailProduct.id)
                      ? 'bg-[#0B291F] text-[#D4AF37] border-[#0B291F]'
                      : 'bg-[#F4EFE6] text-[#0B291F] border-[#D3DDD6]'
                  }`}
                >
                  <Heart className={`w-3.5 h-3.5 ${wishlistIds.includes(detailProduct.id) ? 'fill-[#D4AF37] text-[#D4AF37]' : ''}`} />
                  <span>{wishlistIds.includes(detailProduct.id) ? 'Saved' : 'Save'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Dedicated Booking Modal */}
      {bookingProduct && (
        <BookingModal
          isOpen={true}
          onClose={() => setBookingProduct(null)}
          targetItem={{
            id: bookingProduct.id,
            title: bookingProduct.title,
            category: productCategoryLabel(bookingProduct.category),
            image: bookingProduct.image,
          }}
        />
      )}
    </section>
  );
};

function productCategoryLabel(cat: string) {
  return cat.charAt(0).toUpperCase() + cat.slice(1);
}
