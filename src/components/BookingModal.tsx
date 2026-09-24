import React, { useState } from 'react';
import { X, Calendar, Clock, Phone, CheckCircle2, User, Mail, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data/jewelleryData';
import { WhatsAppLogo } from './SocialLogos';

export interface BookingTargetItem {
  id?: string;
  title: string;
  category?: string;
  image?: string;
}

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  targetItem?: BookingTargetItem | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  targetItem,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    timeSlot: 'Morning (10:00 - 12:30)',
    serviceType: 'Boutique Viewing & Consultation',
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const refCode = `JS-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(refCode);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0B291F]/75 backdrop-blur-md animate-fadeIn"
      onClick={handleReset}
    >
      <div
        className="relative max-w-xl w-full bg-[#FBFBF7] text-[#172B22] rounded-3xl border border-[#D4AF37]/50 shadow-2xl overflow-hidden animate-scaleUp max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 bg-[#0B291F] text-[#FBFBF7] flex items-center justify-between border-b border-[#D4AF37]/30 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 min-w-[40px] min-h-[40px] aspect-square rounded-full bg-[#123C2D] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] shrink-0">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-[0.24em] text-[#D4AF37] font-semibold block">
                Boutique Appointment
              </span>
              <h3 className="text-base sm:text-xl font-serif text-[#FBFBF7]">
                Reserve Private Consultation
              </h3>
            </div>
          </div>

          <button
            type="button"
            onClick={handleReset}
            className="w-9 h-9 min-w-[36px] min-h-[36px] aspect-square rounded-full bg-[#123C2D] border border-white/10 text-[#FBFBF7] hover:text-[#D4AF37] hover:border-[#D4AF37] flex items-center justify-center transition-colors cursor-pointer shrink-0 shadow-sm"
            aria-label="Close booking modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-grow space-y-6">
          {isSubmitted ? (
            <div className="text-center py-6 space-y-5">
              <div className="w-16 h-16 rounded-full bg-[#123C2D] text-[#D4AF37] border border-[#D4AF37]/40 mx-auto flex items-center justify-center shadow-lg">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-[0.22em] text-[#8FA395] font-semibold">
                  Reservation Received
                </span>
                <h4 className="text-2xl font-serif text-[#0B291F]">
                  Thank You, {formData.name || 'Valued Client'}
                </h4>
                <p className="text-xs sm:text-sm text-[#526359] max-w-md mx-auto leading-relaxed">
                  Your appointment request for <strong>{formData.date || 'upcoming date'}</strong> ({formData.timeSlot}) has been registered at Juwelier Simons. Reference: <strong>{bookingRef}</strong>.
                </p>
              </div>

              {targetItem && (
                <div className="p-3 bg-[#F4EFE6] border border-[#D3DDD6] rounded-2xl max-w-sm mx-auto flex items-center gap-3 text-left">
                  {targetItem.image && (
                    <img
                      src={targetItem.image}
                      alt={targetItem.title}
                      className="w-12 h-12 rounded-xl object-cover shrink-0"
                    />
                  )}
                  <div className="overflow-hidden">
                    <span className="text-[10px] uppercase tracking-wider text-[#8FA395] block">
                      Requested Piece
                    </span>
                    <p className="text-xs font-serif text-[#0B291F] font-semibold truncate">
                      {targetItem.title}
                    </p>
                  </div>
                </div>
              )}

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`https://wa.me/31516513035?text=Hello%20Juwelier%20Simons,%20I%20have%20submitted%20booking%20request%20${bookingRef}%20for%20${encodeURIComponent(targetItem?.title || 'private viewing')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#25D366] text-white rounded-full text-xs uppercase tracking-wider font-semibold hover:bg-[#20ba59] transition-colors shadow"
                >
                  <WhatsAppLogo size={16} />
                  <span>Notify via WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-2.5 bg-[#0B291F] text-[#FBFBF7] rounded-full text-xs uppercase tracking-wider font-semibold hover:bg-[#123C2D] transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Target Item Pill if viewing specific item */}
              {targetItem && (
                <div className="p-3 bg-[#F4EFE6] border border-[#D3DDD6] rounded-2xl flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 overflow-hidden">
                    {targetItem.image && (
                      <img
                        src={targetItem.image}
                        alt={targetItem.title}
                        className="w-12 h-12 rounded-xl object-cover shrink-0"
                      />
                    )}
                    <div className="overflow-hidden">
                      <span className="text-[10px] uppercase tracking-wider text-[#8FA395] font-semibold block">
                        Viewing Piece
                      </span>
                      <h5 className="text-xs sm:text-sm font-serif text-[#0B291F] font-semibold truncate">
                        {targetItem.title}
                      </h5>
                    </div>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-[#0B291F] bg-white px-2.5 py-1 rounded-full border border-[#D3DDD6] shrink-0">
                    {targetItem.category || 'Atelier'}
                  </span>
                </div>
              )}

              {/* Consultation Type */}
              <div className="space-y-1">
                <label className="text-xs font-semibold uppercase tracking-wider text-[#0B291F] block">
                  Consultation Focus
                </label>
                <select
                  value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs bg-[#F4EFE6] border border-[#D3DDD6] rounded-xl focus:outline-none focus:border-[#0B291F] text-[#172B22]"
                >
                  <option value="Boutique Viewing & Consultation">Boutique Viewing & Private Consultation</option>
                  <option value="Engagement & Wedding Rings">Engagement & Wedding Ring Suite</option>
                  <option value="Fine Timepiece Consultation">Fine Timepieces & Chronographs</option>
                  <option value="Bespoke Goldsmithing">Custom Goldsmithing & Bespoke Design</option>
                  <option value="Jewellery Restoration & Sizing">Restoration, Cleaning & Ring Sizing</option>
                </select>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#0B291F] flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#8FA395]" />
                    <span>Full Name *</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Maria de Jong"
                    className="w-full px-3.5 py-2.5 text-xs bg-[#F4EFE6] border border-[#D3DDD6] rounded-xl focus:outline-none focus:border-[#0B291F] text-[#172B22]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#0B291F] flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#8FA395]" />
                    <span>Telephone / WhatsApp *</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +31 6 12345678"
                    className="w-full px-3.5 py-2.5 text-xs bg-[#F4EFE6] border border-[#D3DDD6] rounded-xl focus:outline-none focus:border-[#0B291F] text-[#172B22]"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-1">
                <label className="text-xs font-semibold uppercase tracking-wider text-[#0B291F] flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#8FA395]" />
                  <span>Email Address</span>
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@example.com"
                  className="w-full px-3.5 py-2.5 text-xs bg-[#F4EFE6] border border-[#D3DDD6] rounded-xl focus:outline-none focus:border-[#0B291F] text-[#172B22]"
                />
              </div>

              {/* Date & Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#0B291F] flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#8FA395]" />
                    <span>Preferred Date *</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-[#F4EFE6] border border-[#D3DDD6] rounded-xl focus:outline-none focus:border-[#0B291F] text-[#172B22]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#0B291F] flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#8FA395]" />
                    <span>Preferred Time Slot</span>
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-[#F4EFE6] border border-[#D3DDD6] rounded-xl focus:outline-none focus:border-[#0B291F] text-[#172B22]"
                  >
                    <option value="Morning (10:00 - 12:30)">Morning (10:00 - 12:30)</option>
                    <option value="Afternoon (13:00 - 15:30)">Afternoon (13:00 - 15:30)</option>
                    <option value="Late Afternoon (15:30 - 17:30)">Late Afternoon (15:30 - 17:30)</option>
                    <option value="Saturday Morning (09:30 - 12:00)">Saturday Morning (09:30 - 12:00)</option>
                  </select>
                </div>
              </div>

              {/* Notes */}
              <div className="space-y-1">
                <label className="text-xs font-semibold uppercase tracking-wider text-[#0B291F] flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-[#8FA395]" />
                  <span>Special Inquiries or Sizing Details</span>
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Share any special preferences, metal types, diamond carat requirements..."
                  className="w-full px-3.5 py-2 text-xs bg-[#F4EFE6] border border-[#D3DDD6] rounded-xl focus:outline-none focus:border-[#0B291F] text-[#172B22] resize-none"
                />
              </div>

              {/* Submit Buttons: Properly padded, balanced font scale, zero text clipping */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-2.5 sm:gap-3 w-full">
                <button
                  type="submit"
                  className="w-full sm:flex-1 py-3 px-4 sm:px-5 text-[11px] sm:text-xs uppercase tracking-[0.14em] font-semibold text-[#0B291F] bg-[#D4AF37] hover:bg-[#E8D6A4] rounded-full transition-colors cursor-pointer shadow-md text-center leading-normal break-words sm:whitespace-nowrap flex items-center justify-center min-h-[44px]"
                >
                  Confirm Appointment Request
                </button>

                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-5 text-[11px] sm:text-xs uppercase tracking-wider font-semibold text-[#FBFBF7] bg-[#0B291F] hover:bg-[#123C2D] rounded-full transition-colors shrink-0 min-h-[44px]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                  <span>Call {BUSINESS_INFO.phone}</span>
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
