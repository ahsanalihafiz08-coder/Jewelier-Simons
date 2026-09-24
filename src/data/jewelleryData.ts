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
  name: "Juwelier Simons",
  tagline: "Timeless jewellery for meaningful moments.",
  phone: "+31 516 513 035",
  phoneRaw: "+31516513035",
  address: "Stationsstraat 24",
  postalCode: "8431 EV",
  city: "Oosterwolde",
  country: "Netherlands",
  fullAddress: "Stationsstraat 24, 8431 EV Oosterwolde, Netherlands",
  rating: "4.7",
  reviewsCount: "87",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Juwelier+Simons+Stationsstraat+24+8431+EV+Oosterwolde+Netherlands",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2402.775878489814!2d6.29524317711462!3d52.99342790148783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c8172ce3a4e9b9%3A0xe9f7c0a9693be7bf!2sStationsstraat%2024%2C%208431%20EV%20Oosterwolde!5e0!3m2!1sen!2snl!4v1700000000000!5m2!1sen!2snl",
  socials: {
    instagram: "https://www.instagram.com/juweliersimons?stkn=MThueHFyNHQwZ3UxYQ==",
    facebook: "https://www.facebook.com/juweliersimons",
    whatsapp: "https://wa.me/31516513035"
  }
};

// 22-card floating/popup animation section items
export const FLOATING_22_ITEMS = [
  { id: "fl-1", title: "Earrings Resting on Silk", category: "Earrings", image: "https://i.ibb.co/r2rVHqbX/Earrings-resting-on-silk-cloth-20260924060552.jpg" },
  { id: "fl-2", title: "Silk Draped Pearl Earrings", category: "Earrings", image: "https://i.ibb.co/h1V0jgLP/Earrings-resting-on-silk-cloth-20260924060555.jpg" },
  { id: "fl-3", title: "Gold Loop Earrings on Limestone", category: "Earrings", image: "https://i.ibb.co/JWRCpMsj/Gold-loop-earrings-on-limestone-20260924060601.jpg" },
  { id: "fl-4", title: "Diamond Drop Earrings on Velvet", category: "Earrings", image: "https://i.ibb.co/2YHXrc3f/Diamond-drop-earrings-on-velvet-20260924060606.jpg" },
  { id: "fl-5", title: "Velvet Diamond Solitaire Drops", category: "Earrings", image: "https://i.ibb.co/d4vpvcCt/Diamond-drop-earrings-on-velvet-20260924060609.jpg" },
  { id: "fl-6", title: "Rose Gold Floral Studs", category: "Earrings", image: "https://i.ibb.co/fGdYNMkZ/Rose-gold-floral-stud-earrings-20260924060615.jpg" },
  { id: "fl-7", title: "Gold Tassel Cascade Earrings", category: "Earrings", image: "https://i.ibb.co/svV2Gp90/Gold-tassel-earrings-on-fabric-20260924060618.jpg" },
  { id: "fl-8", title: "Gold Stacking Rings on Marble", category: "Rings", image: "https://i.ibb.co/7JQms11D/Gold-stacking-rings-on-marble-20260924060241.jpg" },
  { id: "fl-9", title: "Gold Stacking Rings Curation", category: "Rings", image: "https://i.ibb.co/bM74Jx1z/Gold-stacking-rings-displayed-20260924060244.jpg" },
  { id: "fl-10", title: "Two Interlocking Gold Rings", category: "Rings", image: "https://i.ibb.co/ks8cj2Mb/Two-gold-rings-interlocking-20260924060255.jpg" },
  { id: "fl-11", title: "Diamond Ring on Travertine", category: "Rings", image: "https://i.ibb.co/8DfN4fLX/Diamond-ring-on-travertine-stone-20260924060257.jpg" },
  { id: "fl-12", title: "Artisan Gold Band on Surface", category: "Rings", image: "https://i.ibb.co/jvfwRJjM/Gold-ring-on-surface-20260924060301.jpg" },
  { id: "fl-13", title: "Gold Statement Signet Ring", category: "Rings", image: "https://i.ibb.co/XkyrXx68/Gold-statement-ring-on-surface-20260924060303.jpg" },
  { id: "fl-14", title: "Trio Gold Bands Aligned", category: "Rings", image: "https://i.ibb.co/B2jqqX5p/Three-gold-rings-lined-up-20260924060306.jpg" },
  { id: "fl-15", title: "Gold Chain with Solitaire Pendant", category: "Necklaces", image: "https://i.ibb.co/C3Tg0zhs/Gold-chain-necklace-with-pendant-20260924060335.jpg" },
  { id: "fl-16", title: "Gold Necklace with Diamond Drop", category: "Necklaces", image: "https://i.ibb.co/gZ75tsjk/Gold-necklace-with-diamond-pendant-20260924060338.jpg" },
  { id: "fl-17", title: "Gold Pendant Necklace on Slab", category: "Necklaces", image: "https://i.ibb.co/Lh9Pp68z/Gold-pendant-necklace-on-slab-20260924060341.jpg" },
  { id: "fl-18", title: "Gold Necklaces on Linen Backdrop", category: "Necklaces", image: "https://i.ibb.co/jks8bH9V/Gold-necklaces-on-linen-backdrop-20260924060345.jpg" },
  { id: "fl-19", title: "Diamond Necklace on Plaster Block", category: "Necklaces", image: "https://i.ibb.co/N6ZcBD9z/Diamond-necklace-on-plaster-block-20260924060350.jpg" },
  { id: "fl-20", title: "Pearl Necklace on Velvet Surface", category: "Necklaces", image: "https://i.ibb.co/5h8fbn6d/Pearl-necklace-on-velvet-surface-20260924060354.jpg" },
  { id: "fl-21", title: "Gold Star Pendant on Stone", category: "Necklaces", image: "https://i.ibb.co/b5XhkwS4/Gold-star-pendant-on-stone-20260924060357.jpg" },
  { id: "fl-22", title: "Gold Hoop Earrings on Stone", category: "Earrings", image: "https://i.ibb.co/pvHcjGJD/Gold-hoop-earrings-on-stone-20260924060549.jpg" }
];

// Explore Collection: 9 cards in 3x3 layout
export const EXPLORE_COLLECTION_9_ITEMS: CollectionCardItem[] = [
  {
    id: "col-1",
    title: "Bridal Gold Heritage Set",
    category: "Bridal & Ceremonial",
    description: "Handcrafted bridal jewellery parure featuring intricate gold scrollwork and matching ear drops.",
    image: "https://i.ibb.co/nF98zwf/Bridal-gold-jewelry-set-20260924060805.jpg"
  },
  {
    id: "col-2",
    title: "Grand Royal Bridal Parure",
    category: "Bridal & Ceremonial",
    description: "Opulent traditional ceremonial suite designed to grace milestone vows with timeless majesty.",
    image: "https://i.ibb.co/kgKcBfS3/Bridal-gold-jewelry-set-20260924060803.jpg"
  },
  {
    id: "col-3",
    title: "Sculpted Bangles & Drops",
    category: "Bangles & Earrings",
    description: "Solid textured gold bangles paired with hand-finished cascading statement earrings.",
    image: "https://i.ibb.co/1GLJGxpR/Gold-bangles-and-drop-earrings-20260924060815.jpg"
  },
  {
    id: "col-4",
    title: "Bangles & Chandelier Ensemble",
    category: "Bangles & Earrings",
    description: "Fluid gold wrist contours balanced with articulated diamond-accented earrings.",
    image: "https://i.ibb.co/Mxf8VJMd/Gold-bangles-and-drop-earrings-20260924060817.jpg"
  },
  {
    id: "col-5",
    title: "Curated Golden Atelier Flat Lay",
    category: "Signature Curation",
    description: "A harmonious ensemble of chains, rings, and earrings chosen for seamless layering.",
    image: "https://i.ibb.co/N2kWtGZ3/Gold-jewelry-collection-flat-lay-20260924060820.jpg"
  },
  {
    id: "col-6",
    title: "Sovereign Gold Showcase",
    category: "Signature Curation",
    description: "Editorial composition of precious yellow gold pieces reflecting European goldsmith refinement.",
    image: "https://i.ibb.co/bM9vzpdk/Gold-jewelry-collection-flat-lay-20260924060828.jpg"
  },
  {
    id: "col-7",
    title: "Heritage Gold Timepiece",
    category: "Timepieces",
    description: "Classic gold dial watch on stone slab, exhibiting timeless symmetry and Swiss-standard poise.",
    image: "https://i.ibb.co/wNMyhjvv/Gold-watch-on-stone-slab-20260924060835.jpg"
  },
  {
    id: "col-8",
    title: "Linen Horizon Luxury Watch",
    category: "Timepieces",
    description: "Refined dress watch resting on textured linen, embodying restrained European luxury.",
    image: "https://i.ibb.co/ksWfgLn6/Luxury-watch-on-linen-fabric-20260924060843.jpg"
  },
  {
    id: "col-9",
    title: "Dual-Tone Architectural Watch",
    category: "Timepieces",
    description: "Two-tone bezel with steel and champagne gold accents for day-to-evening versatility.",
    image: "https://i.ibb.co/27xt1vVy/Two-tone-watch-displayed-on-block-20260924060846.jpg"
  }
];

// Main Featured Products: 36 cards, 3 per row, 18 per page
export const FEATURED_PRODUCTS_36: ProductItem[] = [
  { id: "p1", title: "Luxury Heritage Chronograph", category: "Watches", price: "€1,450", image: "https://i.ibb.co/hRMQn43J/Luxury-watch-on-fabric-20260924060841.jpg", description: "Gold case with champagne dial on brushed fabric." },
  { id: "p2", title: "Monarch Gold Dress Watch", category: "Watches", price: "€1,850", image: "https://i.ibb.co/kV3NqfgQ/Gold-dress-watch-on-stone-20260924060837.jpg", description: "Slim profile classic gold bezel on natural stone." },
  { id: "p3", title: "Velvet Cased Gold Watch", category: "Watches", price: "€2,100", image: "https://i.ibb.co/j93Yh3hL/Gold-watch-on-velvet-20260924060904.jpg", description: "Traditional gold link bracelet and Roman numeral dial." },
  { id: "p4", title: "Minimalist Marble Dial Watch", category: "Watches", price: "€980", image: "https://i.ibb.co/Rp3dfnqv/Minimalist-watch-on-marble-surface-20260924060856.jpg", description: "Subtle lines and pristine sapphire glass." },
  { id: "p5", title: "Gold Precision Chronograph", category: "Watches", price: "€1,620", image: "https://i.ibb.co/21c1vrmF/Gold-chronograph-watch-resting-20260924060853.jpg", description: "Triple sub-dial complication with brushed gold bezel." },
  { id: "p6", title: "Two-Tone Dual Timepiece", category: "Watches", price: "€1,340", image: "https://i.ibb.co/d4kHgxhx/Two-tone-watch-displayed-on-block-20260924060849.jpg", description: "Stainless steel and champagne gold contrast link band." },
  { id: "p7", title: "Solid Gold Bangle on Stone", category: "Bracelets", price: "€850", image: "https://i.ibb.co/6JGkFfW2/Gold-bangle-on-stone-slab-20260924060643.jpg", description: "Weighty 18k gold bangle with seamless hinge." },
  { id: "p8", title: "Diamond Tennis Bracelet", category: "Bracelets", price: "€1,480", image: "https://i.ibb.co/RkjB8nsn/Gold-tennis-bracelet-on-linen-20260924060638.jpg", description: "Brilliant cut round diamonds set in four-prong gold." },
  { id: "p9", title: "Sculpted Gold Cuff", category: "Bracelets", price: "€920", image: "https://i.ibb.co/TDrj9CVg/Gold-cuff-on-stone-20260924060721.jpg", description: "Architectural satin finish open cuff bracelet." },
  { id: "p10", title: "Silk Diamond Link Bracelet", category: "Bracelets", price: "€1,290", image: "https://i.ibb.co/mFyRb5vc/Gold-diamond-bracelet-on-silk-20260924060716.jpg", description: "Articulated chevron links with pavé diamond stations." },
  { id: "p11", title: "Artisan Rope Chain Bracelet", category: "Bracelets", price: "€640", image: "https://i.ibb.co/1f36rDjk/Gold-rope-chain-bracelet-on-20260924060713.jpg", description: "Intertwined double rope chain in rich yellow gold." },
  { id: "p12", title: "Pearl & Gold Bead Bracelet", category: "Bracelets", price: "€580", image: "https://i.ibb.co/HTmjVkD6/Pearl-and-gold-bead-bracelet-20260924060659.jpg", description: "Akoya pearls interspersed with fluted gold beads." },
  { id: "p13", title: "Polished Marble Gold Cuff", category: "Bracelets", price: "€780", image: "https://i.ibb.co/wrhL1qy7/Gold-cuff-bracelet-on-marble-20260924060656.jpg", description: "Mirror-polished wide gold wrist band." },
  { id: "p14", title: "Tapered Contour Gold Cuff", category: "Bracelets", price: "€820", image: "https://i.ibb.co/pvHc0WsY/Gold-cuff-bracelet-on-marble-20260924060654.jpg", description: "Ergonomic tapered profile for refined everyday wear." },
  { id: "p15", title: "Heart Charm Linked Bracelet", category: "Bracelets", price: "€520", image: "https://i.ibb.co/pBkn9LKw/Gold-chain-bracelet-with-heart-20260924060651.jpg", description: "Delicate paperclip link with engraved heart pendant." },
  { id: "p16", title: "Velvet Stack Gold Bangles", category: "Bracelets", price: "€1,150", image: "https://i.ibb.co/WNKmPt24/Gold-bangles-on-cushion-20260924060647.jpg", description: "Trio of slender textured bangles worn together or singly." },
  { id: "p17", title: "Linen Gold Chandelier Earrings", category: "Earrings", price: "€760", image: "https://i.ibb.co/V0xTTB8T/Gold-chandelier-earrings-on-linen-20260924060535.jpg", description: "Articulated filigree tiers that dance in evening light." },
  { id: "p18", title: "Baroque Chandelier Earrings", category: "Earrings", price: "€790", image: "https://i.ibb.co/kVVsf2h6/Gold-chandelier-earrings-on-linen-20260924060533.jpg", description: "Ornate European goldsmith openwork drop design." },
  { id: "p19", title: "Geometric Architectural Earrings", category: "Earrings", price: "€460", image: "https://i.ibb.co/bM6qj2dG/Gold-geometric-earrings-on-block-20260924060529.jpg", description: "Modern hexagonal facets in high-polish yellow gold." },
  { id: "p20", title: "Freshwater Pearl Drop Earrings", category: "Earrings", price: "€540", image: "https://i.ibb.co/TqJCCX7W/Gold-drop-earrings-with-pearls-20260924060526.jpg", description: "Lustrous white pearls suspended from diamond huggies." },
  { id: "p21", title: "Grace Pearl Cascade Earrings", category: "Earrings", price: "€590", image: "https://i.ibb.co/rV1H4Gq/Gold-drop-earrings-with-pearls-20260924060524.jpg", description: "Elongated ear wires with natural teardrop pearls." },
  { id: "p22", title: "Pavé Diamond Solitaire Earrings", category: "Earrings", price: "€980", image: "https://i.ibb.co/xqzv7QsR/Diamond-earrings-on-stone-block-20260924060521.jpg", description: "Round brilliant diamonds in four-prong basket settings." },
  { id: "p23", title: "Ribbed Gold Hoop Earrings", category: "Earrings", price: "€390", image: "https://i.ibb.co/sdskYf7X/Gold-hoop-earrings-on-cloth-20260924060519.jpg", description: "Chunky ribbed tube hoops with click-in clasp." },
  { id: "p24", title: "Classic Polished Hoop Earrings", category: "Earrings", price: "€370", image: "https://i.ibb.co/cKqyHzK3/Gold-hoop-earrings-on-cloth-20260924060516.jpg", description: "Medium-diameter seamless hoop earrings for daily poise." },
  { id: "p25", title: "Slate Teardrop Gold Earrings", category: "Earrings", price: "€480", image: "https://i.ibb.co/Q7VSs9pS/Gold-teardrop-earrings-on-slate-20260924060513.jpg", description: "Sculpted hollow teardrop silhouettes with mirror sheen." },
  { id: "p26", title: "Fluid Teardrop Drop Earrings", category: "Earrings", price: "€510", image: "https://i.ibb.co/xR3FYts/Gold-teardrop-earrings-on-slate-20260924060511.jpg", description: "Elongated droplets catching the softest ambient light." },
  { id: "p27", title: "Solitaire Engagement Ring", category: "Rings", price: "€2,450", image: "https://i.ibb.co/G3xzfyfr/Diamond-engagement-ring-on-stone-20260924060206.jpg", description: "1.02 ct round diamond on a knife-edge gold shank." },
  { id: "p28", title: "Gold Wedding Bands Duo", category: "Rings", price: "€880", image: "https://i.ibb.co/7tGY065P/Gold-wedding-bands-on-linen-20260924060211.jpg", description: "Matching comfort-fit wedding rings in warm yellow gold." },
  { id: "p29", title: "Brilliant Diamond Solitaire Ring", category: "Rings", price: "€2,850", image: "https://i.ibb.co/gbrTVtzn/Solitaire-diamond-ring-on-dish-20260924060214.jpg", description: "Six-prong platinum head on rich 18k yellow gold band." },
  { id: "p30", title: "Limestone Dual Gold Band Ring", category: "Rings", price: "€690", image: "https://i.ibb.co/zh1wtxP5/Gold-rings-on-limestone-20260924060219.jpg", description: "Contemporary split shank band with subtle brushed finish." },
  { id: "p31", title: "Textured Artisan Gold Band", category: "Rings", price: "€720", image: "https://i.ibb.co/Lz76rB8b/Gold-rings-on-limestone-20260924060221.jpg", description: "Hand-hammered faceted surface catching organic light." },
  { id: "p32", title: "Rose Gold Gemstone Ring", category: "Rings", price: "€1,120", image: "https://i.ibb.co/PGnzyWkr/Rose-gold-gemstone-ring-resting-20260924060225.jpg", description: "Cushion cut morganite gemstone flanked by diamond accents." },
  { id: "p33", title: "Concrete Diamond Band Ring", category: "Rings", price: "€1,580", image: "https://i.ibb.co/xS7VTQhR/Diamond-band-on-concrete-block-20260924060230.jpg", description: "Channel set princess-cut diamonds in continuous eternity." },
  { id: "p34", title: "Verdant Emerald Solitaire Ring", category: "Rings", price: "€2,250", image: "https://i.ibb.co/d408jBKC/Emerald-ring-on-beige-suede-20260924060236.jpg", description: "Natural Colombian emerald with trapezoid diamond sides." },
  { id: "p35", title: "Emerald Cut Halo Cocktail Ring", category: "Rings", price: "€2,600", image: "https://i.ibb.co/PsKMKmmh/Emerald-ring-on-beige-suede-20260924060238.jpg", description: "Deep emerald gemstone surrounded by pavé diamond halo." },
  { id: "p36", title: "Royal Sapphire Velvet Ring", category: "Rings", price: "€1,950", image: "https://i.ibb.co/RT6M2mLr/Sapphire-ring-on-velvet-cloth-20260924060247.jpg", description: "Oval Ceylon blue sapphire mounted in yellow gold." }
];

// 48 items for slider animation section
export const SLIDER_48_ITEMS: SliderItem[] = [
  { id: "sl-1", title: "Gold Serpent Cuff Bracelet", category: "Bracelets", image: "https://i.ibb.co/vCLrHZ05/Gold-serpent-cuff-bracelet-on-20260924060737.jpg" },
  { id: "sl-2", title: "Sculpted Serpent Wrist Band", category: "Bracelets", image: "https://i.ibb.co/SDw3z7c4/Gold-serpent-cuff-bracelet-on-20260924060735.jpg" },
  { id: "sl-3", title: "Curated Showcase Collection", category: "Curations", image: "https://i.ibb.co/Ld25xY0j/Jewelry-collection-displayed-on-20260924060743.jpg" },
  { id: "sl-4", title: "Gold Necklace & Earrings Set", category: "Parures", image: "https://i.ibb.co/1Jrms4Cz/Gold-necklace-and-earrings-set-20260924060752.jpg" },
  { id: "sl-5", title: "Jewelry Collection on Stone", category: "Curations", image: "https://i.ibb.co/tP3g8GZh/Jewelry-collection-on-stone-20260924060758.jpg" },
  { id: "sl-6", title: "Gold Bridal Suite & Drop Earrings", category: "Parures", image: "https://i.ibb.co/wq37TY5/Gold-necklace-and-earrings-set-20260924060801.jpg" },
  { id: "sl-7", title: "Gold Diamond Bracelet & Ring Set", category: "Sets", image: "https://i.ibb.co/rf0cQXqB/Gold-diamond-bracelet-and-ring-20260924060811.jpg" },
  { id: "sl-8", title: "Gold Cuff Bracelet on Stone", category: "Bracelets", image: "https://i.ibb.co/RGCjpvWL/Gold-cuff-bracelet-on-stone-20260924061641.jpg" },
  { id: "sl-9", title: "Gold Vintage Rings on Limestone", category: "Rings", image: "https://i.ibb.co/W4rpbNgd/Gold-vintage-rings-on-limestone-20260924062114.jpg" },
  { id: "sl-10", title: "Gold Wedding Bands on Linen", category: "Rings", image: "https://i.ibb.co/d4VwHzJb/Gold-wedding-bands-on-linen-20260924062122.jpg" },
  { id: "sl-11", title: "Gold Drop Earrings with Pearls", category: "Earrings", image: "https://i.ibb.co/q35PH9Lc/Gold-drop-earrings-with-pearls-20260924062126.jpg" },
  { id: "sl-12", title: "Grace Pearl Drop Earrings", category: "Earrings", image: "https://i.ibb.co/zVgRCKm5/Gold-drop-earrings-with-pearls-20260924062128.jpg" },
  { id: "sl-13", title: "Gold Drop Earrings on Silk", category: "Earrings", image: "https://i.ibb.co/1hmm0pq/Gold-drop-earrings-on-silk-20260924062225.jpg" },
  { id: "sl-14", title: "Rose Gold Necklace on Fabric", category: "Necklaces", image: "https://i.ibb.co/Zp1Vqj5V/Rose-gold-necklace-on-fabric-20260924060502.jpg" },
  { id: "sl-15", title: "Pearl Drop Earrings on Slate", category: "Earrings", image: "https://i.ibb.co/hJKX9c8T/Pearl-drop-earrings-on-slate-20260924060538.jpg" },
  { id: "sl-16", title: "Emerald Stud Earrings on Surface", category: "Earrings", image: "https://i.ibb.co/21RwwHf8/Emerald-stud-earrings-on-surface-20260924060542.jpg" },
  { id: "sl-17", title: "Gold Bar Studs on Fine Paper", category: "Earrings", image: "https://i.ibb.co/Rk0dQH15/Gold-bar-studs-on-paper-20260924060545.jpg" },
  { id: "sl-18", title: "Gold Tassel Earrings on Fabric", category: "Earrings", image: "https://i.ibb.co/93bm5GLr/Gold-tassel-earrings-on-fabric-20260924060620.jpg" },
  { id: "sl-19", title: "Diamond Halo Studs on Stone", category: "Earrings", image: "https://i.ibb.co/ymFGmqKD/Diamond-halo-studs-on-stone-20260924060623.jpg" },
  { id: "sl-20", title: "Pavé Diamond Halo Ear Studs", category: "Earrings", image: "https://i.ibb.co/RGP2cRHh/Diamond-halo-studs-on-stone-20260924060625.jpg" },
  { id: "sl-21", title: "Gold Threader Earrings on Canvas", category: "Earrings", image: "https://i.ibb.co/3VwpLFK/Gold-threader-earrings-on-canvas-20260924060630.jpg" },
  { id: "sl-22", title: "Vintage Gold Filigree Earrings", category: "Earrings", image: "https://i.ibb.co/Cpjkn4Yk/Gold-vintage-earrings-on-stone-20260924060633.jpg" },
  { id: "sl-23", title: "Gold Vintage Earrings on Stone", category: "Earrings", image: "https://i.ibb.co/W4VsCjwL/Gold-vintage-earrings-on-stone-20260924060636.jpg" },
  { id: "sl-24", title: "Gold Bangles on Cushion", category: "Bracelets", image: "https://i.ibb.co/h1Vv23Lq/Gold-bangles-on-cushion-20260924060649.jpg" },
  { id: "sl-25", title: "Gold Thread Bracelet on Stone", category: "Bracelets", image: "https://i.ibb.co/MDL06PwZ/Gold-thread-bracelet-on-stone-20260924060705.jpg" },
  { id: "sl-26", title: "Gold Cuff Bracelet on Granite", category: "Bracelets", image: "https://i.ibb.co/HTV3LbPD/Gold-cuff-bracelet-on-stone-20260924060724.jpg" },
  { id: "sl-27", title: "Gold Charm Bracelet on Suede", category: "Bracelets", image: "https://i.ibb.co/HTBCYYL5/Gold-charm-bracelet-on-suede-20260924060729.jpg" },
  { id: "sl-28", title: "Charm Bracelet with Crystals", category: "Bracelets", image: "https://i.ibb.co/2YnGZnhc/Gold-charm-bracelet-with-crystals-20260924060731.jpg" },
  { id: "sl-29", title: "Ruby Ring on Slate Bed", category: "Rings", image: "https://i.ibb.co/gLYfqggk/Ruby-ring-on-slate-20260924060317.jpg" },
  { id: "sl-30", title: "Marquise Diamond Ring on Napkin", category: "Rings", image: "https://i.ibb.co/wrxRXj4b/Marquise-diamond-ring-on-napkin-20260924060322.jpg" },
  { id: "sl-31", title: "Twisted Gold Band Ring", category: "Rings", image: "https://i.ibb.co/XZpzWvGB/Twisted-gold-band-ring-20260924060326.jpg" },
  { id: "sl-32", title: "Diamond Solitaire on Cushion", category: "Rings", image: "https://i.ibb.co/Y7JRCGJX/Diamond-ring-on-cushion-20260924060329.jpg" },
  { id: "sl-33", title: "Gold Locket Necklace on Fabric", category: "Necklaces", image: "https://i.ibb.co/PKq6jRQ/Gold-locket-necklace-on-fabric-20260924060402.jpg" },
  { id: "sl-34", title: "Gold Pendant on Ceramic Tray", category: "Necklaces", image: "https://i.ibb.co/KpfrqLW6/Gold-pendant-on-ceramic-tray-20260924060407.jpg" },
  { id: "sl-35", title: "Gold Bar Necklace on Paper", category: "Necklaces", image: "https://i.ibb.co/k6SCQJsf/Gold-bar-necklace-on-paper-20260924060412.jpg" },
  { id: "sl-36", title: "Multi-Strand Gold Necklace Set", category: "Necklaces", image: "https://i.ibb.co/Xf4zJrSf/Multi-strand-gold-necklace-set-20260924060418.jpg" },
  { id: "sl-37", title: "Layered Multi-Strand Gold Collier", category: "Necklaces", image: "https://i.ibb.co/spnL62WG/Multi-strand-gold-necklace-set-20260924060418-1.jpg" },
  { id: "sl-38", title: "Diamond Horseshoe Pendant", category: "Necklaces", image: "https://i.ibb.co/gsnw3tT/Diamond-horseshoe-pendant-on-chain-20260924060423.jpg" },
  { id: "sl-39", title: "Oval Gemstone Pendant Necklace", category: "Necklaces", image: "https://i.ibb.co/mCy4XpV8/Oval-gemstone-pendant-necklace-r-20260924060433.jpg" },
  { id: "sl-40", title: "Gold Chain with Heart Charm", category: "Necklaces", image: "https://i.ibb.co/8nQK56pN/Gold-chain-with-heart-charm-20260924060436.jpg" },
  { id: "sl-41", title: "Sapphire Pendant on Gold Chain", category: "Necklaces", image: "https://i.ibb.co/1tpf1D4S/Sapphire-pendant-on-gold-chain-20260924060443.jpg" },
  { id: "sl-42", title: "Gold Chain with Medallion", category: "Necklaces", image: "https://i.ibb.co/4nfcmKp3/Gold-chain-with-medallion-pendant-20260924060446.jpg" },
  { id: "sl-43", title: "Gold Necklace with Diamond Studs", category: "Necklaces", image: "https://i.ibb.co/r2X3mkQY/Gold-necklace-with-diamond-studs-20260924060454.jpg" },
  { id: "sl-44", title: "Fine Gold Link Necklace", category: "Necklaces", image: "https://i.ibb.co/4wSD9hMN/Gold-chain-necklace-on-surface-20260924060456.jpg" },
  { id: "sl-45", title: "Rose Gold Delicate Necklace", category: "Necklaces", image: "https://i.ibb.co/bg7bg0Sr/Rose-gold-necklace-on-fabric-20260924060500.jpg" },
  { id: "sl-46", title: "Three Gold Rings on Cloth", category: "Rings", image: "https://i.ibb.co/gFd5L4Vs/Three-gold-rings-on-cloth-20260924060310.jpg" },
  { id: "sl-47", title: "Gold Ring with Pavé Diamonds", category: "Rings", image: "https://i.ibb.co/TxwcVRgR/Gold-ring-with-diamonds-20260924060313.jpg" },
  { id: "sl-48", title: "Polished Gold Band on Tile", category: "Rings", image: "https://i.ibb.co/wZsLvHzb/Gold-ring-on-tile-20260924060315.jpg" }
];

// The Gallery Section: 9 cards in 3x3 layout
export const GALLERY_9_ITEMS: GalleryItem[] = [
  { id: "gal-1", title: "Gold Bangles & Articulated Drops", category: "Bangles & Earrings", image: "https://i.ibb.co/4gpVVwJp/Gold-bangles-and-drop-earrings-20260924061401.jpg" },
  { id: "gal-2", title: "Luxury Timepiece on Slate Tile", category: "Watches", image: "https://i.ibb.co/CkvmWNb/Luxury-watch-on-slate-tile-20260924060917.jpg" },
  { id: "gal-3", title: "Textured Bangles & Fine Drops", category: "Bangles & Earrings", image: "https://i.ibb.co/pCNn5r0/Gold-bangles-and-drop-earrings-20260924061402.jpg" },
  { id: "gal-4", title: "Minimalist Gold Atelier Flat Lay", category: "Curations", image: "https://i.ibb.co/4ZQfM9xf/Minimalist-gold-jewelry-flat-lay-20260924061406.jpg" },
  { id: "gal-5", title: "Sculpted Gold Ensemble Composition", category: "Curations", image: "https://i.ibb.co/cdxrw4k/Minimalist-gold-jewelry-flat-lay-20260924061407.jpg" },
  { id: "gal-6", title: "Gold Rings & Matching Studs", category: "Sets", image: "https://i.ibb.co/Y48SkxcJ/Gold-rings-and-matching-earrings-20260924061459.jpg" },
  { id: "gal-7", title: "Solitaire Band & Earring Pairing", category: "Sets", image: "https://i.ibb.co/n8rVvdqR/Gold-rings-and-matching-earrings-20260924061502.jpg" },
  { id: "gal-8", title: "Steel Watch with Water Droplets", category: "Watches", image: "https://i.ibb.co/zWdPv9b3/Steel-watch-with-water-droplets-20260924060901.jpg" },
  { id: "gal-9", title: "Chronograph on Textured Slate", category: "Watches", image: "https://i.ibb.co/jv27NCdg/Luxury-watch-on-slate-tile-20260924060912.jpg" }
];

// Compatibility exports
export const COLLECTIONS = EXPLORE_COLLECTION_9_ITEMS;
export const FEATURED_CATEGORIES = EXPLORE_COLLECTION_9_ITEMS;
export const GALLERY_ITEMS = GALLERY_9_ITEMS;
