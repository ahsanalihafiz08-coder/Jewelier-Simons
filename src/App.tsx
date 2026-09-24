/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SliderShowcase } from './components/SliderShowcase';
import { ExploreCollections } from './components/ExploreCollections';
import { FeaturedProducts } from './components/FeaturedProducts';
import { FloatingShowcase } from './components/FloatingShowcase';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Gallery } from './components/Gallery';
import { ReviewsTrust } from './components/ReviewsTrust';
import { PremiumCTA } from './components/PremiumCTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ActionWidgets } from './components/ActionWidgets';
import { WishlistDrawer } from './components/WishlistDrawer';
import { ImageLightbox } from './components/ImageLightbox';
import { DetailModal } from './components/DetailModal';
import { ProductItem, CollectionCardItem, GalleryItem, SliderItem } from './data/jewelleryData';
import { useWishlist } from './context/WishlistContext';

export default function App() {
  // Global category state for site-wide filtering
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Unified Wishlist state
  const {
    savedItems,
    savedIds,
    toggleSave,
    removeSave,
    clearWishlist,
    wishlistOpen,
    setWishlistOpen,
  } = useWishlist();

  // Modals state
  const [selectedCollection, setSelectedCollection] = useState<CollectionCardItem | null>(null);
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  // Quick Inquire trigger
  const handleQuickInquire = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FBFBF7] text-[#172B22] flex flex-col font-sans selection:bg-[#D4AF37]/20 selection:text-[#0B291F]">
      {/* 1. Sticky Navigation Header (Transparent by default, solid on scroll down; no top info bar) */}
      <Header
        wishlistCount={savedItems.length}
        onOpenWishlist={() => setWishlistOpen(true)}
        onSelectCategory={(cat) => setSelectedCategory(cat)}
      />

      {/* Main Page Flow */}
      <main className="flex-grow">
        {/* 2. Hero Section (Mobile: Vertical 16:9; Desktop: 16:9 video frame) */}
        <Hero />

        {/* 3. 22-Piece Atelier Archive Section (Interactive continuous slider) */}
        <SliderShowcase
          onSelectItem={(item: SliderItem) =>
            setLightboxItem({ id: item.id, title: item.title, category: item.category, image: item.image })
          }
        />

        {/* 4. Explore Collections Section */}
        <ExploreCollections
          onSelectCollection={(item) => setSelectedCollection(item)}
        />

        {/* 5. Main Featured Products Section (Featured Creations & Timepieces) */}
        <FeaturedProducts
          selectedCategory={selectedCategory}
          onSelectCategory={(cat) => setSelectedCategory(cat)}
          wishlistIds={savedIds}
          onToggleWishlist={toggleSave}
          onQuickInquire={handleQuickInquire}
        />

        {/* 6. 48-Piece "Atelier Highlights in Motion" Section */}
        <FloatingShowcase />

        {/* 7. Why Choose Juwelier Simons (Boutique Values & Pillars) */}
        <WhyChooseUs />

        {/* 8. The Gallery Section (Reduced vertical height & padding) */}
        <Gallery onOpenLightbox={(item) => setLightboxItem(item)} />

        {/* 9. Customer Reviews (Exactly 3 reviews in a single row with auto-rotation, equal height, vertically centered text) */}
        <ReviewsTrust />

        {/* 10. "Get What You Deserve" Premium CTA */}
        <PremiumCTA />

        {/* 11. Contact & Location Integration (Embedded Google Maps, contact form, official channels) */}
        <Contact />
      </main>

      {/* Footer with official social links */}
      <Footer />

      {/* Floating Action Icons Dock (Shifted further right on mobile) & Auto-Scrolling AI Chatbot */}
      <ActionWidgets />

      {/* Wishlist Drawer */}
      <WishlistDrawer
        isOpen={wishlistOpen}
        onClose={() => setWishlistOpen(false)}
        items={savedItems as any}
        onRemoveItem={removeSave}
        onClearWishlist={clearWishlist}
      />

      {/* Lightbox Modal */}
      {lightboxItem && (
        <ImageLightbox
          item={lightboxItem}
          onClose={() => setLightboxItem(null)}
        />
      )}

      {/* Collection Details Modal */}
      {selectedCollection && (
        <DetailModal
          item={{
            id: selectedCollection.id,
            title: selectedCollection.title,
            category: selectedCollection.category,
            description: selectedCollection.description,
            image: selectedCollection.image,
            details: 'Masterfully curated at Juwelier Simons. Handcrafted according to traditional European goldsmithing methods.',
            highlights: ['Certified European Hallmarking', 'Noble Gold Alloys', 'In-Store Care & Cleaning', 'Heritage Quality'],
          }}
          onClose={() => setSelectedCollection(null)}
        />
      )}
    </div>
  );
}
