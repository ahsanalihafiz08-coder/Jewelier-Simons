export interface ProductItem {
  id: string;
  title: string;
  category: 'Rings' | 'Necklaces' | 'Earrings' | 'Bracelets' | 'Watches';
  price: string;
  image: string;
  description?: string;
}

export interface CollectionCardItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
}

export interface CollectionItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  details: string;
  highlights: string[];
}

export interface SliderItem {
  id: string;
  title: string;
  category: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
}

export const BUSINESS_INFO = {
  name: "RichieGold&Diamonds",
  tagline: "Timeless jewellery for meaningful moments.",
  phone: "+971 50 109 3943",
  phoneRaw: "+971501093943",
  email: "edwin@richie.ae",
  address: "Old Baladiya Street 3a, Sector",
  postalCode: "",
  city: "Dubai",
  country: "United Arab Emirates",
  fullAddress: "Old Baladiya Street 3a, Sector, Dubai, United Arab Emirates",
  rating: "4.7",
  reviewsCount: "87",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Old+Baladiya+Street+3a+Sector+Dubai+United+Arab+Emirates",
  googleMapsEmbed: "https://maps.google.com/maps?q=Old%20Baladiya%20Street%203a%2C%20Sector%2C%20Dubai%2C%20United%20Arab%20Emirates&t=&z=16&ie=UTF8&iwloc=&output=embed",
  socials: {
    instagram: "https://www.instagram.com/richiegolddiamonds?jplx=MXIxa3dweWVneTIzYw==",
    facebook: "https://www.facebook.com/profile.php?id=61572747314354",
    whatsapp: "https://wa.me/971501093943"
  }
};

// 22-card floating/popup animation section items
export const FLOATING_22_ITEMS = [
  { id: "fl-1", title: "Earrings Resting on Silk", category: "Earrings", image: "/images/products/Earrings-resting-on-silk-cloth-20260924060552.jpg" },
  { id: "fl-2", title: "Silk Draped Pearl Earrings", category: "Earrings", image: "/images/products/Earrings-resting-on-silk-cloth-20260924060555.jpg" },
  { id: "fl-3", title: "Gold Loop Earrings on Limestone", category: "Earrings", image: "/images/products/Gold-loop-earrings-on-limestone-20260924060601.jpg" },
  { id: "fl-4", title: "Diamond Drop Earrings on Velvet", category: "Earrings", image: "/images/products/Diamond-drop-earrings-on-velvet-20260924060606.jpg" },
  { id: "fl-5", title: "Velvet Diamond Solitaire Drops", category: "Earrings", image: "/images/products/Diamond-drop-earrings-on-velvet-20260924060609.jpg" },
  { id: "fl-6", title: "Rose Gold Floral Studs", category: "Earrings", image: "/images/products/Rose-gold-floral-stud-earrings-20260924060615.jpg" },
  { id: "fl-7", title: "Gold Tassel Cascade Earrings", category: "Earrings", image: "/images/products/Gold-tassel-earrings-on-fabric-20260924060618.jpg" },
  { id: "fl-8", title: "Gold Stacking Rings on Marble", category: "Rings", image: "/images/products/Gold-stacking-rings-on-marble-20260924060241.jpg" },
  { id: "fl-9", title: "Gold Stacking Rings Curation", category: "Rings", image: "/images/products/Gold-stacking-rings-displayed-20260924060244.jpg" },
  { id: "fl-10", title: "Two Interlocking Gold Rings", category: "Rings", image: "/images/products/Two-gold-rings-interlocking-20260924060255.jpg" },
  { id: "fl-11", title: "Diamond Ring on Travertine", category: "Rings", image: "/images/products/Diamond-ring-on-travertine-stone-20260924060257.jpg" },
  { id: "fl-12", title: "Artisan Gold Band on Surface", category: "Rings", image: "/images/products/Gold-ring-on-surface-20260924060301.jpg" },
  { id: "fl-13", title: "Gold Statement Signet Ring", category: "Rings", image: "/images/products/Gold-statement-ring-on-surface-20260924060303.jpg" },
  { id: "fl-14", title: "Trio Gold Bands Aligned", category: "Rings", image: "/images/products/Three-gold-rings-lined-up-20260924060306.jpg" },
  { id: "fl-15", title: "Gold Chain with Solitaire Pendant", category: "Necklaces", image: "/images/products/Gold-chain-necklace-with-pendant-20260924060335.jpg" },
  { id: "fl-16", title: "Gold Necklace with Diamond Drop", category: "Necklaces", image: "/images/products/Gold-necklace-with-diamond-pendant-20260924060338.jpg" },
  { id: "fl-17", title: "Gold Pendant Necklace on Slab", category: "Necklaces", image: "/images/products/Gold-pendant-necklace-on-slab-20260924060341.jpg" },
  { id: "fl-18", title: "Gold Necklaces on Linen Backdrop", category: "Necklaces", image: "/images/products/Gold-necklaces-on-linen-backdrop-20260924060345.jpg" },
  { id: "fl-19", title: "Diamond Necklace on Plaster Block", category: "Necklaces", image: "/images/products/Diamond-necklace-on-plaster-block-20260924060350.jpg" },
  { id: "fl-20", title: "Pearl Necklace on Velvet Surface", category: "Necklaces", image: "/images/products/Pearl-necklace-on-velvet-surface-20260924060354.jpg" },
  { id: "fl-21", title: "Gold Star Pendant on Stone", category: "Necklaces", image: "/images/products/Gold-star-pendant-on-stone-20260924060357.jpg" },
  { id: "fl-22", title: "Gold Hoop Earrings on Stone", category: "Earrings", image: "/images/products/Gold-hoop-earrings-on-stone-20260924060549.jpg" }
];

// Explore Collection: 9 cards in 3x3 layout
export const EXPLORE_COLLECTION_9_ITEMS: CollectionCardItem[] = [
  {
    id: "col-1",
    title: "Bridal Gold Heritage Set",
    category: "Bridal & Ceremonial",
    description: "Handcrafted bridal jewellery parure featuring intricate gold scrollwork and matching ear drops.",
    image: "/images/products/Bridal-gold-jewelry-set-20260924060805.jpg"
  },
  {
    id: "col-2",
    title: "Grand Royal Bridal Parure",
    category: "Bridal & Ceremonial",
    description: "Opulent traditional ceremonial suite designed to grace milestone vows with timeless majesty.",
    image: "/images/products/Bridal-gold-jewelry-set-20260924060803.jpg"
  },
  {
    id: "col-3",
    title: "Sculpted Bangles & Drops",
    category: "Bangles & Earrings",
    description: "Solid textured gold bangles paired with hand-finished cascading statement earrings.",
    image: "/images/products/Gold-bangles-and-drop-earrings-20260924060815.jpg"
  },
  {
    id: "col-4",
    title: "Bangles & Chandelier Ensemble",
    category: "Bangles & Earrings",
    description: "Fluid gold wrist contours balanced with articulated diamond-accented earrings.",
    image: "/images/products/Gold-bangles-and-drop-earrings-20260924060817.jpg"
  },
  {
    id: "col-5",
    title: "Curated Golden Atelier Flat Lay",
    category: "Signature Curation",
    description: "A harmonious ensemble of chains, rings, and earrings chosen for seamless layering.",
    image: "/images/products/Gold-jewelry-collection-flat-lay-20260924060820.jpg"
  },
  {
    id: "col-6",
    title: "Sovereign Gold Showcase",
    category: "Signature Curation",
    description: "Editorial composition of precious yellow gold pieces reflecting European goldsmith refinement.",
    image: "/images/products/Gold-jewelry-collection-flat-lay-20260924060828.jpg"
  },
  {
    id: "col-7",
    title: "Heritage Gold Timepiece",
    category: "Timepieces",
    description: "Classic gold dial watch on stone slab, exhibiting timeless symmetry and Swiss-standard poise.",
    image: "/images/products/Gold-watch-on-stone-slab-20260924060835.jpg"
  },
  {
    id: "col-8",
    title: "Linen Horizon Luxury Watch",
    category: "Timepieces",
    description: "Refined dress watch resting on textured linen, embodying restrained European luxury.",
    image: "/images/products/Luxury-watch-on-linen-fabric-20260924060843.jpg"
  },
  {
    id: "col-9",
    title: "Dual-Tone Architectural Watch",
    category: "Timepieces",
    description: "Two-tone bezel with steel and champagne gold accents for day-to-evening versatility.",
    image: "/images/products/Two-tone-watch-displayed-on-block-20260924060846.jpg"
  }
];

// Main Featured Products: 36 cards, 3 per row, 18 per page
export const FEATURED_PRODUCTS_36: ProductItem[] = [
  { id: "p1", title: "Luxury Heritage Chronograph", category: "Watches", price: "€1,450", image: "/images/products/Luxury-watch-on-fabric-20260924060841.jpg", description: "Gold case with champagne dial on brushed fabric." },
  { id: "p2", title: "Monarch Gold Dress Watch", category: "Watches", price: "€1,850", image: "/images/products/Gold-dress-watch-on-stone-20260924060837.jpg", description: "Slim profile classic gold bezel on natural stone." },
  { id: "p3", title: "Velvet Cased Gold Watch", category: "Watches", price: "€2,100", image: "/images/products/Gold-watch-on-velvet-20260924060904.jpg", description: "Traditional gold link bracelet and Roman numeral dial." },
  { id: "p4", title: "Minimalist Marble Dial Watch", category: "Watches", price: "€980", image: "/images/products/Minimalist-watch-on-marble-surface-20260924060856.jpg", description: "Subtle lines and pristine sapphire glass." },
  { id: "p5", title: "Gold Precision Chronograph", category: "Watches", price: "€1,620", image: "/images/products/Gold-chronograph-watch-resting-20260924060853.jpg", description: "Triple sub-dial complication with brushed gold bezel." },
  { id: "p6", title: "Two-Tone Dual Timepiece", category: "Watches", price: "€1,340", image: "/images/products/Two-tone-watch-displayed-on-block-20260924060849.jpg", description: "Stainless steel and champagne gold contrast link band." },
  { id: "p7", title: "Solid Gold Bangle on Stone", category: "Bracelets", price: "€850", image: "/images/products/Gold-bangle-on-stone-slab-20260924060643.jpg", description: "Weighty 18k gold bangle with seamless hinge." },
  { id: "p8", title: "Diamond Tennis Bracelet", category: "Bracelets", price: "€1,480", image: "/images/products/Gold-tennis-bracelet-on-linen-20260924060638.jpg", description: "Brilliant cut round diamonds set in four-prong gold." },
  { id: "p9", title: "Sculpted Gold Cuff", category: "Bracelets", price: "€920", image: "/images/products/Gold-cuff-on-stone-20260924060721.jpg", description: "Architectural satin finish open cuff bracelet." },
  { id: "p10", title: "Silk Diamond Link Bracelet", category: "Bracelets", price: "€1,290", image: "/images/products/Gold-diamond-bracelet-on-silk-20260924060716.jpg", description: "Articulated chevron links with pavé diamond stations." },
  { id: "p11", title: "Artisan Rope Chain Bracelet", category: "Bracelets", price: "€640", image: "/images/products/Gold-rope-chain-bracelet-on-20260924060713.jpg", description: "Intertwined double rope chain in rich yellow gold." },
  { id: "p12", title: "Pearl & Gold Bead Bracelet", category: "Bracelets", price: "€580", image: "/images/products/Pearl-and-gold-bead-bracelet-20260924060659.jpg", description: "Akoya pearls interspersed with fluted gold beads." },
  { id: "p13", title: "Polished Marble Gold Cuff", category: "Bracelets", price: "€780", image: "/images/products/Gold-cuff-bracelet-on-marble-20260924060656.jpg", description: "Mirror-polished wide gold wrist band." },
  { id: "p14", title: "Tapered Contour Gold Cuff", category: "Bracelets", price: "€820", image: "/images/products/Gold-cuff-bracelet-on-marble-20260924060654.jpg", description: "Ergonomic tapered profile for refined everyday wear." },
  { id: "p15", title: "Heart Charm Linked Bracelet", category: "Bracelets", price: "€520", image: "/images/products/Gold-chain-bracelet-with-heart-20260924060651.jpg", description: "Delicate paperclip link with engraved heart pendant." },
  { id: "p16", title: "Velvet Stack Gold Bangles", category: "Bracelets", price: "€1,150", image: "/images/products/Gold-bangles-on-cushion-20260924060647.jpg", description: "Trio of slender textured bangles worn together or singly." },
  { id: "p17", title: "Linen Gold Chandelier Earrings", category: "Earrings", price: "€760", image: "/images/products/Gold-chandelier-earrings-on-linen-20260924060535.jpg", description: "Articulated filigree tiers that dance in evening light." },
  { id: "p18", title: "Baroque Chandelier Earrings", category: "Earrings", price: "€790", image: "/images/products/Gold-chandelier-earrings-on-linen-20260924060533.jpg", description: "Ornate European goldsmith openwork drop design." },
  { id: "p19", title: "Geometric Architectural Earrings", category: "Earrings", price: "€460", image: "/images/products/Gold-geometric-earrings-on-block-20260924060529.jpg", description: "Modern hexagonal facets in high-polish yellow gold." },
  { id: "p20", title: "Freshwater Pearl Drop Earrings", category: "Earrings", price: "€540", image: "/images/products/Gold-drop-earrings-with-pearls-20260924060526.jpg", description: "Lustrous white pearls suspended from diamond huggies." },
  { id: "p21", title: "Grace Pearl Cascade Earrings", category: "Earrings", price: "€590", image: "/images/products/Gold-drop-earrings-with-pearls-20260924060524.jpg", description: "Elongated ear wires with natural teardrop pearls." },
  { id: "p22", title: "Pavé Diamond Solitaire Earrings", category: "Earrings", price: "€980", image: "/images/products/Diamond-earrings-on-stone-block-20260924060521.jpg", description: "Round brilliant diamonds in four-prong basket settings." },
  { id: "p23", title: "Ribbed Gold Hoop Earrings", category: "Earrings", price: "€390", image: "/images/products/Gold-hoop-earrings-on-cloth-20260924060519.jpg", description: "Chunky ribbed tube hoops with click-in clasp." },
  { id: "p24", title: "Classic Polished Hoop Earrings", category: "Earrings", price: "€370", image: "/images/products/Gold-hoop-earrings-on-cloth-20260924060516.jpg", description: "Medium-diameter seamless hoop earrings for daily poise." },
  { id: "p25", title: "Slate Teardrop Gold Earrings", category: "Earrings", price: "€480", image: "/images/products/Gold-teardrop-earrings-on-slate-20260924060513.jpg", description: "Sculpted hollow teardrop silhouettes with mirror sheen." },
  { id: "p26", title: "Fluid Teardrop Drop Earrings", category: "Earrings", price: "€510", image: "/images/products/Gold-teardrop-earrings-on-slate-20260924060511.jpg", description: "Elongated droplets catching the softest ambient light." },
  { id: "p27", title: "Solitaire Engagement Ring", category: "Rings", price: "€2,450", image: "/images/products/Diamond-engagement-ring-on-stone-20260924060206.jpg", description: "1.02 ct round diamond on a knife-edge gold shank." },
  { id: "p28", title: "Gold Wedding Bands Duo", category: "Rings", price: "€880", image: "/images/products/Gold-wedding-bands-on-linen-20260924060211.jpg", description: "Matching comfort-fit wedding rings in warm yellow gold." },
  { id: "p29", title: "Brilliant Diamond Solitaire Ring", category: "Rings", price: "€2,850", image: "/images/products/Solitaire-diamond-ring-on-dish-20260924060214.jpg", description: "Six-prong platinum head on rich 18k yellow gold band." },
  { id: "p30", title: "Limestone Dual Gold Band Ring", category: "Rings", price: "€690", image: "/images/products/Gold-rings-on-limestone-20260924060219.jpg", description: "Contemporary split shank band with subtle brushed finish." },
  { id: "p31", title: "Textured Artisan Gold Band", category: "Rings", price: "€720", image: "/images/products/Gold-rings-on-limestone-20260924060221.jpg", description: "Hand-hammered faceted surface catching organic light." },
  { id: "p32", title: "Rose Gold Gemstone Ring", category: "Rings", price: "€1,120", image: "/images/products/Rose-gold-gemstone-ring-resting-20260924060225.jpg", description: "Cushion cut morganite gemstone flanked by diamond accents." },
  { id: "p33", title: "Concrete Diamond Band Ring", category: "Rings", price: "€1,580", image: "/images/products/Diamond-band-on-concrete-block-20260924060230.jpg", description: "Channel set princess-cut diamonds in continuous eternity." },
  { id: "p34", title: "Verdant Emerald Solitaire Ring", category: "Rings", price: "€2,250", image: "/images/products/Emerald-ring-on-beige-suede-20260924060236.jpg", description: "Natural Colombian emerald with trapezoid diamond sides." },
  { id: "p35", title: "Emerald Cut Halo Cocktail Ring", category: "Rings", price: "€2,600", image: "/images/products/Emerald-ring-on-beige-suede-20260924060238.jpg", description: "Deep emerald gemstone surrounded by pavé diamond halo." },
  { id: "p36", title: "Royal Sapphire Velvet Ring", category: "Rings", price: "€1,950", image: "/images/products/Sapphire-ring-on-velvet-cloth-20260924060247.jpg", description: "Oval Ceylon blue sapphire mounted in yellow gold." }
];

// 48 items for slider animation section
export const SLIDER_48_ITEMS: SliderItem[] = [
  { id: "sl-1", title: "Gold Serpent Cuff Bracelet", category: "Bracelets", image: "/images/products/Gold-serpent-cuff-bracelet-on-20260924060737.jpg" },
  { id: "sl-2", title: "Sculpted Serpent Wrist Band", category: "Bracelets", image: "/images/products/Gold-serpent-cuff-bracelet-on-20260924060735.jpg" },
  { id: "sl-3", title: "Curated Showcase Collection", category: "Curations", image: "/images/products/Jewelry-collection-displayed-on-20260924060743.jpg" },
  { id: "sl-4", title: "Gold Necklace & Earrings Set", category: "Parures", image: "/images/products/Gold-necklace-and-earrings-set-20260924060752.jpg" },
  { id: "sl-5", title: "Jewelry Collection on Stone", category: "Curations", image: "/images/products/Jewelry-collection-on-stone-20260924060758.jpg" },
  { id: "sl-6", title: "Gold Bridal Suite & Drop Earrings", category: "Parures", image: "/images/products/Gold-necklace-and-earrings-set-20260924060801.jpg" },
  { id: "sl-7", title: "Gold Diamond Bracelet & Ring Set", category: "Sets", image: "/images/products/Gold-diamond-bracelet-and-ring-20260924060811.jpg" },
  { id: "sl-8", title: "Gold Cuff Bracelet on Stone", category: "Bracelets", image: "/images/products/Gold-cuff-bracelet-on-stone-20260924061641.jpg" },
  { id: "sl-9", title: "Gold Vintage Rings on Limestone", category: "Rings", image: "/images/products/Gold-vintage-rings-on-limestone-20260924062114.jpg" },
  { id: "sl-10", title: "Gold Wedding Bands on Linen", category: "Rings", image: "/images/products/Gold-wedding-bands-on-linen-20260924062122.jpg" },
  { id: "sl-11", title: "Gold Drop Earrings with Pearls", category: "Earrings", image: "/images/products/Gold-drop-earrings-with-pearls-20260924062126.jpg" },
  { id: "sl-12", title: "Grace Pearl Drop Earrings", category: "Earrings", image: "/images/products/Gold-drop-earrings-with-pearls-20260924062128.jpg" },
  { id: "sl-13", title: "Gold Drop Earrings on Silk", category: "Earrings", image: "/images/products/Gold-drop-earrings-on-silk-20260924062225.jpg" },
  { id: "sl-14", title: "Rose Gold Necklace on Fabric", category: "Necklaces", image: "/images/products/Rose-gold-necklace-on-fabric-20260924060502.jpg" },
  { id: "sl-15", title: "Pearl Drop Earrings on Slate", category: "Earrings", image: "/images/products/Pearl-drop-earrings-on-slate-20260924060538.jpg" },
  { id: "sl-16", title: "Emerald Stud Earrings on Surface", category: "Earrings", image: "/images/products/Emerald-stud-earrings-on-surface-20260924060542.jpg" },
  { id: "sl-17", title: "Gold Bar Studs on Fine Paper", category: "Earrings", image: "/images/products/Gold-bar-studs-on-paper-20260924060545.jpg" },
  { id: "sl-18", title: "Gold Tassel Earrings on Fabric", category: "Earrings", image: "/images/products/Gold-tassel-earrings-on-fabric-20260924060620.jpg" },
  { id: "sl-19", title: "Diamond Halo Studs on Stone", category: "Earrings", image: "/images/products/Diamond-halo-studs-on-stone-20260924060623.jpg" },
  { id: "sl-20", title: "Pavé Diamond Halo Ear Studs", category: "Earrings", image: "/images/products/Diamond-halo-studs-on-stone-20260924060625.jpg" },
  { id: "sl-21", title: "Gold Threader Earrings on Canvas", category: "Earrings", image: "/images/products/Gold-threader-earrings-on-canvas-20260924060630.jpg" },
  { id: "sl-22", title: "Vintage Gold Filigree Earrings", category: "Earrings", image: "/images/products/Gold-vintage-earrings-on-stone-20260924060633.jpg" },
  { id: "sl-23", title: "Gold Vintage Earrings on Stone", category: "Earrings", image: "/images/products/Gold-vintage-earrings-on-stone-20260924060636.jpg" },
  { id: "sl-24", title: "Gold Bangles on Cushion", category: "Bracelets", image: "/images/products/Gold-bangles-on-cushion-20260924060649.jpg" },
  { id: "sl-25", title: "Gold Thread Bracelet on Stone", category: "Bracelets", image: "/images/products/Gold-thread-bracelet-on-stone-20260924060705.jpg" },
  { id: "sl-26", title: "Gold Cuff Bracelet on Granite", category: "Bracelets", image: "/images/products/Gold-cuff-bracelet-on-stone-20260924060724.jpg" },
  { id: "sl-27", title: "Gold Charm Bracelet on Suede", category: "Bracelets", image: "/images/products/Gold-charm-bracelet-on-suede-20260924060729.jpg" },
  { id: "sl-28", title: "Charm Bracelet with Crystals", category: "Bracelets", image: "/images/products/Gold-charm-bracelet-with-crystals-20260924060731.jpg" },
  { id: "sl-29", title: "Ruby Ring on Slate Bed", category: "Rings", image: "/images/products/Ruby-ring-on-slate-20260924060317.jpg" },
  { id: "sl-30", title: "Marquise Diamond Ring on Napkin", category: "Rings", image: "/images/products/Marquise-diamond-ring-on-napkin-20260924060322.jpg" },
  { id: "sl-31", title: "Twisted Gold Band Ring", category: "Rings", image: "/images/products/Twisted-gold-band-ring-20260924060326.jpg" },
  { id: "sl-32", title: "Diamond Solitaire on Cushion", category: "Rings", image: "/images/products/Diamond-ring-on-cushion-20260924060329.jpg" },
  { id: "sl-33", title: "Gold Locket Necklace on Fabric", category: "Necklaces", image: "/images/products/Gold-locket-necklace-on-fabric-20260924060402.jpg" },
  { id: "sl-34", title: "Gold Pendant on Ceramic Tray", category: "Necklaces", image: "/images/products/Gold-pendant-on-ceramic-tray-20260924060407.jpg" },
  { id: "sl-35", title: "Gold Bar Necklace on Paper", category: "Necklaces", image: "/images/products/Gold-bar-necklace-on-paper-20260924060412.jpg" },
  { id: "sl-36", title: "Multi-Strand Gold Necklace Set", category: "Necklaces", image: "/images/products/Multi-strand-gold-necklace-set-20260924060418.jpg" },
  { id: "sl-37", title: "Layered Multi-Strand Gold Collier", category: "Necklaces", image: "/images/products/Multi-strand-gold-necklace-set-20260924060418-1.jpg" },
  { id: "sl-38", title: "Diamond Horseshoe Pendant", category: "Necklaces", image: "/images/products/Diamond-horseshoe-pendant-on-chain-20260924060423.jpg" },
  { id: "sl-39", title: "Oval Gemstone Pendant Necklace", category: "Necklaces", image: "/images/products/Oval-gemstone-pendant-necklace-r-20260924060433.jpg" },
  { id: "sl-40", title: "Gold Chain with Heart Charm", category: "Necklaces", image: "/images/products/Gold-chain-with-heart-charm-20260924060436.jpg" },
  { id: "sl-41", title: "Sapphire Pendant on Gold Chain", category: "Necklaces", image: "/images/products/Sapphire-pendant-on-gold-chain-20260924060443.jpg" },
  { id: "sl-42", title: "Gold Chain with Medallion", category: "Necklaces", image: "/images/products/Gold-chain-with-medallion-pendant-20260924060446.jpg" },
  { id: "sl-43", title: "Gold Necklace with Diamond Studs", category: "Necklaces", image: "/images/products/Gold-necklace-with-diamond-studs-20260924060454.jpg" },
  { id: "sl-44", title: "Fine Gold Link Necklace", category: "Necklaces", image: "/images/products/Gold-chain-necklace-on-surface-20260924060456.jpg" },
  { id: "sl-45", title: "Rose Gold Delicate Necklace", category: "Necklaces", image: "/images/products/Rose-gold-necklace-on-fabric-20260924060500.jpg" },
  { id: "sl-46", title: "Three Gold Rings on Cloth", category: "Rings", image: "/images/products/Three-gold-rings-on-cloth-20260924060310.jpg" },
  { id: "sl-47", title: "Gold Ring with Pavé Diamonds", category: "Rings", image: "/images/products/Gold-ring-with-diamonds-20260924060313.jpg" },
  { id: "sl-48", title: "Polished Gold Band on Tile", category: "Rings", image: "/images/products/Gold-ring-on-tile-20260924060315.jpg" }
];

// The Gallery Section: 9 cards in 3x3 layout
export const GALLERY_9_ITEMS: GalleryItem[] = [
  { id: "gal-1", title: "Gold Bangles & Articulated Drops", category: "Bangles & Earrings", image: "/images/products/Gold-bangles-and-drop-earrings-20260924061401.jpg" },
  { id: "gal-2", title: "Luxury Timepiece on Slate Tile", category: "Watches", image: "/images/products/Luxury-watch-on-slate-tile-20260924060917.jpg" },
  { id: "gal-3", title: "Textured Bangles & Fine Drops", category: "Bangles & Earrings", image: "/images/products/Gold-bangles-and-drop-earrings-20260924061402.jpg" },
  { id: "gal-4", title: "Minimalist Gold Atelier Flat Lay", category: "Curations", image: "/images/products/Minimalist-gold-jewelry-flat-lay-20260924061406.jpg" },
  { id: "gal-5", title: "Sculpted Gold Ensemble Composition", category: "Curations", image: "/images/products/Minimalist-gold-jewelry-flat-lay-20260924061407.jpg" },
  { id: "gal-6", title: "Gold Rings & Matching Studs", category: "Sets", image: "/images/products/Gold-rings-and-matching-earrings-20260924061459.jpg" },
  { id: "gal-7", title: "Solitaire Band & Earring Pairing", category: "Sets", image: "/images/products/Gold-rings-and-matching-earrings-20260924061502.jpg" },
  { id: "gal-8", title: "Steel Watch with Water Droplets", category: "Watches", image: "/images/products/Steel-watch-with-water-droplets-20260924060901.jpg" },
  { id: "gal-9", title: "Chronograph on Textured Slate", category: "Watches", image: "/images/products/Luxury-watch-on-slate-tile-20260924060912.jpg" }
];

// Compatibility exports
export const COLLECTIONS = EXPLORE_COLLECTION_9_ITEMS;
export const FEATURED_CATEGORIES = EXPLORE_COLLECTION_9_ITEMS;
export const GALLERY_ITEMS = GALLERY_9_ITEMS;
