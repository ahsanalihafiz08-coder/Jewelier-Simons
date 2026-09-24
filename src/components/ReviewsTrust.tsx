import React, { useState, useEffect } from 'react';
import { Star, ShieldCheck, HeartHandshake, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/jewelleryData';

interface CustomerReview {
  id: string;
  name: string;
  rating: number;
  date: string;
  reviewText: string;
  highlight: string;
}

const REAL_GOOGLE_REVIEWS: CustomerReview[] = [
  {
    id: 'rev-1',
    name: 'Anja Veenstra',
    rating: 5,
    date: 'Verified Google Review',
    highlight: 'Vakmanschap & Vriendelijke Service',
    reviewText:
      'Altijd vriendelijk en deskundig geholpen bij Juwelier Simons. Mijn horloge perfect gerepareerd en een prachtige gouden ring gekocht voor onze trouwdag. Echt vakmanschap in Oosterwolde!',
  },
  {
    id: 'rev-2',
    name: 'Johannes de Vries',
    rating: 5,
    date: 'Verified Google Review',
    highlight: 'Erfstuk Restauratie',
    reviewText:
      'Geweldige service en eerlijk advies. Ik kwam voor het vakkundig vermaken van een erfstuk hanger en het resultaat overtrof al onze verwachtingen. Zeer aan te bevelen.',
  },
  {
    id: 'rev-3',
    name: 'Mariska de Jong',
    rating: 5,
    date: 'Verified Google Review',
    highlight: 'Persoonlijke Aandacht & Trouwringen',
    reviewText:
      'Prachtige collectie sieraden en horloges. Rustig de tijd gekregen om trouwringen uit te zoeken. De persoonlijke aandacht en vriendelijke benadering maken het verschil.',
  },
  {
    id: 'rev-4',
    name: 'Pieter van der Meer',
    rating: 5,
    date: 'Verified Google Review',
    highlight: 'Vakkundige Horloge Service',
    reviewText:
      'Al jaren onze vaste juwelier in Oosterwolde. Vakkundige batterijwissels, polijsten van horloges en aankoop van geboortesieraden. Altijd met een warm welkom en een glimlach.',
  },
  {
    id: 'rev-5',
    name: 'Grietje Hiemstra',
    rating: 5,
    date: 'Verified Google Review',
    highlight: 'Gouden Collier & Eerlijke Prijzen',
    reviewText:
      'Heel erg fijn geholpen bij het uitzoeken van een gouden collier met hanger. Uitstekende kwaliteit, edelmetalen en eerlijke prijzen. Topzaak met echte passie voor het vak!',
  },
  {
    id: 'rev-6',
    name: 'Klaas Bakker',
    rating: 5,
    date: 'Verified Google Review',
    highlight: 'Betrouwbare Lokale Juwelier',
    reviewText:
      'Zeer betrouwbare vakmensen. Oog voor detail en uitstekende nazorg voor onze tijdloze stukken. Een vertrouwde parel in de Stationsstraat van Oosterwolde.',
  },
];

export const ReviewsTrust: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-rotation every 4.5 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % REAL_GOOGLE_REVIEWS.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused]);

  // Display exactly 3 reviews in a single row
  const total = REAL_GOOGLE_REVIEWS.length;
  const visibleReviews = [
    REAL_GOOGLE_REVIEWS[startIndex % total],
    REAL_GOOGLE_REVIEWS[(startIndex + 1) % total],
    REAL_GOOGLE_REVIEWS[(startIndex + 2) % total],
  ];

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % total);
  };

  return (
    <section id="reviews" className="py-14 sm:py-20 lg:py-24 bg-[#FBFBF7] text-[#172B22] relative overflow-hidden border-t border-b border-[#E5DDD0]">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-2.5">
          <div className="inline-flex items-center gap-3">
            <span className="w-8 h-[1px] bg-[#D4AF37]" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.24em] text-[#0B291F] font-semibold">
              Client Testimonials & Feedback
            </span>
            <span className="w-8 h-[1px] bg-[#D4AF37]" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#0B291F] tracking-tight">
            Customer Reviews
          </h2>
          <p className="text-xs sm:text-sm text-[#4E6155] font-light leading-relaxed">
            Authentic experiences shared by visitors to our boutique at Stationsstraat 24, Oosterwolde.
          </p>

          {/* Google Scorecard Banner */}
          <div className="pt-2 inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#F4EFE6] border border-[#D3DDD6] shadow-2xs">
            <div className="flex items-center text-[#D4AF37]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
              ))}
            </div>
            <span className="text-xs sm:text-sm font-serif font-bold text-[#0B291F]">{BUSINESS_INFO.rating} / 5.0</span>
            <span className="text-xs text-[#8FA395]">·</span>
            <span className="text-xs text-[#526359] font-medium">{BUSINESS_INFO.reviewsCount} Google Reviews</span>
          </div>
        </div>

        {/* Exactly 3 Reviews In A Single Row with Auto-Rotation, Equal Height, and Vertically Centered Text */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* 3 Reviews in a single row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-6 items-stretch mb-6">
            {visibleReviews.map((review, idx) => (
              <div
                key={`${review.id}-${idx}-${startIndex}`}
                className="bg-[#F8F5EE] border border-[#D3DDD6]/90 rounded-2xl sm:rounded-3xl p-5 sm:p-7 flex flex-col justify-between items-center text-center shadow-xs hover:shadow-md transition-all duration-300 h-full min-h-[290px] sm:min-h-[310px]"
              >
                {/* Top Section: Google Badge & Stars */}
                <div className="w-full flex items-center justify-between pb-3 border-b border-[#E5DDD0]/70">
                  <div className="flex items-center text-[#D4AF37] gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                    ))}
                  </div>

                  <div className="w-6 h-6 rounded-full bg-white border border-[#D3DDD6] flex items-center justify-center text-[10px] font-bold text-[#4285F4] shadow-xs">
                    G
                  </div>
                </div>

                {/* Vertically Centered Body: Highlight & Review Text */}
                <div className="my-auto py-3.5 flex flex-col items-center justify-center space-y-2.5 w-full">
                  <span className="text-[11px] uppercase tracking-[0.14em] text-[#D4AF37] font-semibold bg-[#0B291F] px-3.5 py-1 rounded-full shadow-2xs inline-block max-w-full truncate">
                    {review.highlight}
                  </span>

                  <blockquote className="text-xs sm:text-[13px] text-[#2E4035] leading-relaxed font-light italic max-w-sm">
                    "{review.reviewText}"
                  </blockquote>
                </div>

                {/* Bottom Section: Author & Date */}
                <div className="w-full pt-3 border-t border-[#E5DDD0]/70 flex items-center justify-between">
                  <div className="text-left">
                    <h4 className="text-sm font-serif font-semibold text-[#0B291F] leading-snug">
                      {review.name}
                    </h4>
                    <div className="flex items-center gap-1 text-[10px] sm:text-[11px] text-[#8FA395]">
                      <CheckCircle2 className="w-3 h-3 text-[#25D366] shrink-0" />
                      <span>{review.date}</span>
                    </div>
                  </div>

                  <span className="text-[10px] uppercase tracking-wider text-[#8FA395] font-light shrink-0">
                    Oosterwolde
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls: Prev, Indicator Dots, Next */}
          <div className="flex items-center justify-center gap-3 pt-2">
            <button
              type="button"
              onClick={handlePrev}
              className="w-8 h-8 rounded-full bg-[#F4EFE6] border border-[#D3DDD6] text-[#0B291F] hover:bg-[#0B291F] hover:text-[#D4AF37] flex items-center justify-center transition-colors cursor-pointer shadow-xs"
              aria-label="Previous Reviews"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Pagination Indicators */}
            <div className="flex items-center gap-1.5">
              {REAL_GOOGLE_REVIEWS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setStartIndex(i)}
                  className={`h-1.5 rounded-full transition-all cursor-pointer ${
                    startIndex === i
                      ? 'w-6 bg-[#0B291F]'
                      : 'w-1.5 bg-[#D3DDD6] hover:bg-[#8FA395]'
                  }`}
                  aria-label={`Go to review group ${i + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={handleNext}
              className="w-8 h-8 rounded-full bg-[#F4EFE6] border border-[#D3DDD6] text-[#0B291F] hover:bg-[#0B291F] hover:text-[#D4AF37] flex items-center justify-center transition-colors cursor-pointer shadow-xs"
              aria-label="Next Reviews"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Trust Indicators */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-8 mt-6 border-t border-[#E5DDD0] text-center">
          <div className="flex items-center justify-center gap-2 text-xs text-[#526359]">
            <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
            <span>Official European Standards & Hallmarks</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-xs text-[#526359]">
            <HeartHandshake className="w-4 h-4 text-[#D4AF37]" />
            <span>In-House Goldsmith & Watchmaker Consultation</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-xs text-[#526359]">
            <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
            <span>Stationsstraat 24, 8431 EV Oosterwolde</span>
          </div>
        </div>

      </div>
    </section>
  );
};
