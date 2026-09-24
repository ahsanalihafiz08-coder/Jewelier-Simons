import React, { useState } from 'react';
import { Phone, MapPin, Send, CheckCircle2, Navigation } from 'lucide-react';
import { BUSINESS_INFO } from '../data/jewelleryData';
import { WhatsAppLogo, InstagramLogo, FacebookLogo } from './SocialLogos';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'General Inquiry',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || (!formData.email.trim() && !formData.phone.trim())) {
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-12 sm:py-20 lg:py-28 bg-[#FBFBF7] text-[#172B22] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-14 lg:mb-16 space-y-2 sm:space-y-3">
          <div className="inline-flex items-center gap-3">
            <span className="w-8 h-[1px] bg-[#D4AF37]" />
            <span className="text-xs uppercase tracking-[0.24em] text-[#0B291F] font-semibold">
              Boutique & Showroom
            </span>
            <span className="w-8 h-[1px] bg-[#D4AF37]" />
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif text-[#0B291F] tracking-tight">
            Visit Juwelier Simons
          </h2>
          <p className="text-xs sm:text-base text-[#4C5E53] font-light leading-relaxed">
            We welcome your inquiries, bespoke requests, or in-person visit to our showroom at Stationsstraat 24 in Oosterwolde.
          </p>
        </div>

        {/* Embedded Google Maps Location Block - Neat, compact, and rounded */}
        <div id="location-map" className="mb-8 sm:mb-12 rounded-2xl sm:rounded-3xl overflow-hidden border border-[#D3DDD6] shadow-sm bg-[#0B291F]">
          <div className="p-3 sm:p-4 bg-[#0B291F] text-[#FBFBF7] flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#123C2D] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] shrink-0">
                <MapPin className="w-3.5 h-3.5" />
              </div>
              <div className="min-w-0">
                <h4 className="text-xs sm:text-sm font-serif uppercase tracking-wider text-[#FBFBF7] truncate">
                  Juwelier Simons · Oosterwolde
                </h4>
                <p className="text-[11px] text-[#D4AF37] truncate">
                  {BUSINESS_INFO.fullAddress}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 bg-[#D4AF37] text-[#0B291F] rounded-full text-xs uppercase tracking-wider font-semibold hover:bg-[#E8D6A4] transition-colors"
              >
                <Navigation className="w-3 h-3" />
                <span>Open Map</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 bg-[#123C2D] border border-white/20 text-[#FBFBF7] rounded-full text-xs uppercase tracking-wider font-medium hover:border-[#D4AF37] transition-colors"
              >
                <Phone className="w-3 h-3 text-[#D4AF37]" />
                <span>Call Store</span>
              </a>
            </div>
          </div>

          {/* Clean Google Maps iframe fitting without extra scroll gaps */}
          <div className="w-full h-44 sm:h-56 relative bg-[#EBE5DC] overflow-hidden">
            <iframe
              title="Juwelier Simons Location Map"
              src="https://maps.google.com/maps?q=Stationsstraat%2024%2C%208431%20EV%20Oosterwolde%2C%20Netherlands&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full filter saturate-90 contrast-105 block"
            />
          </div>
        </div>

        {/* Contact Cards & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Contact Cards & Social Links */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Phone Card with Sleek, Neat Typography */}
            <div className="p-5 bg-[#F8F5EE] border border-[#D3DDD6] rounded-2xl space-y-2.5 shadow-xs hover:border-[#0B291F] transition-colors">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-full bg-[#0B291F] text-[#FBFBF7] flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] uppercase tracking-[0.18em] text-[#8FA395] font-semibold">
                    Telephone Assistance
                  </span>
                  <p className="text-sm sm:text-base font-sans font-semibold text-[#0B291F]">
                    <a
                      href={`tel:${BUSINESS_INFO.phoneRaw}`}
                      className="hover:underline transition-colors"
                    >
                      {BUSINESS_INFO.phone}
                    </a>
                  </p>
                  <p className="text-xs text-[#526359] font-light leading-relaxed">
                    Direct inquiries, appointment scheduling, and collection advice.
                  </p>
                </div>
              </div>
            </div>

            {/* Address Card */}
            <div className="p-5 bg-[#F8F5EE] border border-[#D3DDD6] rounded-2xl space-y-2.5 shadow-xs hover:border-[#0B291F] transition-colors">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-full bg-[#0B291F] text-[#FBFBF7] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] uppercase tracking-[0.18em] text-[#8FA395] font-semibold">
                    Boutique Address
                  </span>
                  <p className="text-sm font-sans font-medium text-[#0B291F] leading-snug">
                    {BUSINESS_INFO.name}<br />
                    {BUSINESS_INFO.address}<br />
                    {BUSINESS_INFO.postalCode} {BUSINESS_INFO.city}, {BUSINESS_INFO.country}
                  </p>
                  <p className="text-xs text-[#526359] font-light leading-relaxed">
                    Convenient boutique parking available nearby in central Oosterwolde.
                  </p>
                </div>
              </div>
            </div>

            {/* Official Social Media Brand Channels: Interactive Styled Buttons with Official Vibrant Colors */}
            <div className="p-5 bg-[#0B291F] text-[#FBFBF7] border border-[#1C5440] rounded-2xl space-y-3.5 shadow-md">
              <div className="space-y-0.5">
                <span className="text-[10px] uppercase tracking-[0.24em] text-[#D4AF37] font-semibold">
                  Official Channels
                </span>
                <h4 className="text-sm font-serif text-[#FBFBF7]">
                  Connect With Juwelier Simons
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
                {/* WhatsApp Interactive Button */}
                <a
                  href={BUSINESS_INFO.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-full bg-[#25D366] text-white hover:bg-[#20ba59] active:scale-95 transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 text-xs font-semibold uppercase tracking-wider group cursor-pointer"
                  aria-label="Contact Juwelier Simons on WhatsApp"
                  title="WhatsApp (+31 516 513 035)"
                >
                  <WhatsAppLogo size={18} />
                  <span>WhatsApp</span>
                </a>

                {/* Instagram Interactive Button */}
                <a
                  href={BUSINESS_INFO.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-full bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888] text-white hover:opacity-95 active:scale-95 transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 text-xs font-semibold uppercase tracking-wider group cursor-pointer"
                  aria-label="Follow Juwelier Simons on Instagram"
                  title="Instagram"
                >
                  <InstagramLogo size={18} />
                  <span>Instagram</span>
                </a>

                {/* Facebook Interactive Button */}
                <a
                  href={BUSINESS_INFO.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-full bg-[#1877F2] text-white hover:bg-[#166fe5] active:scale-95 transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 text-xs font-semibold uppercase tracking-wider group cursor-pointer"
                  aria-label="Visit Juwelier Simons on Facebook"
                  title="Facebook"
                >
                  <FacebookLogo size={18} />
                  <span>Facebook</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Boutique Consultation Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#F8F5EE] border border-[#D3DDD6] rounded-3xl p-6 sm:p-8 shadow-xs relative">
              
              <div className="mb-5 space-y-1">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#8FA395] font-semibold">
                  Personal Consultation
                </span>
                <h3 className="text-xl sm:text-2xl font-serif text-[#0B291F]">
                  Send a Message or Consultation Request
                </h3>
                <p className="text-xs sm:text-sm text-[#526359] font-light">
                  Leave your details and enquiry below. We look forward to connecting with you personally.
                </p>
              </div>

              {submitted ? (
                <div className="py-10 text-center space-y-4 animate-fadeIn">
                  <div className="w-12 h-12 mx-auto rounded-full bg-[#0B291F] text-[#FBFBF7] flex items-center justify-center">
                    <CheckCircle2 className="w-7 h-7 text-[#D4AF37]" />
                  </div>
                  <h4 className="text-xl font-serif text-[#0B291F]">
                    Thank You, We Have Received Your Message
                  </h4>
                  <p className="text-xs sm:text-sm text-[#4E6155] max-w-md mx-auto font-light leading-relaxed">
                    A representative from <span className="font-medium text-[#0B291F]">Juwelier Simons</span> will review your inquiry and contact you promptly. For urgent assistance, please phone us directly at {BUSINESS_INFO.phone}.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', interest: 'General Inquiry', message: '' });
                    }}
                    className="inline-flex items-center gap-2 px-6 py-2.5 text-xs uppercase tracking-[0.14em] font-medium text-[#0B291F] border border-[#0B291F] rounded-full hover:bg-[#0B291F] hover:text-[#FBFBF7] transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs uppercase tracking-[0.14em] text-[#0B291F] font-semibold mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Maria de Vries"
                        className="w-full px-4 py-2 bg-[#FBFBF7] border border-[#D3DDD6] rounded-xl text-xs sm:text-sm text-[#172B22] focus:outline-none focus:border-[#0B291F] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-[0.14em] text-[#0B291F] font-semibold mb-1">
                        Telephone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+31 ..."
                        className="w-full px-4 py-2 bg-[#FBFBF7] border border-[#D3DDD6] rounded-xl text-xs sm:text-sm text-[#172B22] focus:outline-none focus:border-[#0B291F] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs uppercase tracking-[0.14em] text-[#0B291F] font-semibold mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@example.com"
                        className="w-full px-4 py-2 bg-[#FBFBF7] border border-[#D3DDD6] rounded-xl text-xs sm:text-sm text-[#172B22] focus:outline-none focus:border-[#0B291F] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-[0.14em] text-[#0B291F] font-semibold mb-1">
                        Area of Interest
                      </label>
                      <select
                        value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        className="w-full px-4 py-2 bg-[#FBFBF7] border border-[#D3DDD6] rounded-xl text-xs sm:text-sm text-[#172B22] focus:outline-none focus:border-[#0B291F] transition-colors"
                      >
                        <option value="General Inquiry">General Boutique Inquiry</option>
                        <option value="Rings & Solitaires">Rings & Solitaires</option>
                        <option value="Watches & Chronographs">Watches & Chronographs</option>
                        <option value="Necklaces & Pendants">Necklaces & Pendants</option>
                        <option value="Earrings">Earrings</option>
                        <option value="Bracelets">Bracelets</option>
                        <option value="Private Consultation">Private Consultation Booking</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-[0.14em] text-[#0B291F] font-semibold mb-1">
                      Your Message or Consultation Preference
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please let us know how we can assist you..."
                      className="w-full px-4 py-2 bg-[#FBFBF7] border border-[#D3DDD6] rounded-xl text-xs sm:text-sm text-[#172B22] focus:outline-none focus:border-[#0B291F] transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-8 text-xs uppercase tracking-[0.16em] font-semibold text-[#FBFBF7] bg-[#0B291F] hover:bg-[#123C2D] rounded-full transition-all duration-200 cursor-pointer disabled:opacity-50 shadow-sm text-center leading-normal min-h-[46px]"
                    >
                      <Send className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                      <span className="truncate">{submitting ? 'Transmitting...' : 'Submit Boutique Message'}</span>
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
