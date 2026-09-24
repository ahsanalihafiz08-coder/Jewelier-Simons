import React, { useState, useEffect, useRef } from 'react';
import { Phone, Bot, X, Send, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/jewelleryData';
import { WhatsAppLogo } from './SocialLogos';

export const ActionWidgets: React.FC = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<Array<{ sender: 'bot' | 'user'; text: string; time: string }>>([
    {
      sender: 'bot',
      text: `Welkom bij Juwelier Simons! I am your boutique concierge. How may I assist you with our fine jewellery collections, custom engagement rings, or visiting our boutique at Stationsstraat 24 in Oosterwolde?`,
      time: 'Just now',
    },
  ]);
  const [inputVal, setInputVal] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Enable automatic smooth auto-scroll to latest message
  useEffect(() => {
    if (chatOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatMessages, chatOpen]);

  const quickReplies = [
    'Where is the store located?',
    'Opening hours & schedule',
    'Boutique services & repairs',
    'Book a private consultation',
  ];

  const generateBotReply = (message: string): string => {
    const q = message.toLowerCase();

    // 1. Store Location / Address / Directions / Parking
    if (
      q.includes('location') ||
      q.includes('where') ||
      q.includes('address') ||
      q.includes('waar') ||
      q.includes('adres') ||
      q.includes('route') ||
      q.includes('park')
    ) {
      return `Juwelier Simons is situated in the historic heart of Oosterwolde at ${BUSINESS_INFO.fullAddress} (${BUSINESS_INFO.address}, ${BUSINESS_INFO.postalCode} ${BUSINESS_INFO.city}). We have convenient public parking located just steps away from our boutique entrance.`;
    }

    // 2. Business Hours / Opening Times
    if (
      q.includes('hour') ||
      q.includes('opening') ||
      q.includes('open') ||
      q.includes('time') ||
      q.includes('tijd') ||
      q.includes('openings') ||
      q.includes('gesloten') ||
      q.includes('schedule')
    ) {
      return `Our boutique opening hours at Stationsstraat 24, Oosterwolde are:\n• Tuesday – Friday: 09:30 – 18:00\n• Saturday: 09:30 – 17:00\n• Monday & Sunday: Closed.\nWe welcome walk-ins during open hours, or you can reserve a private consultation.`;
    }

    // 3. Boutique Services / Repairs / Goldsmithing / Custom Commissions
    if (
      q.includes('service') ||
      q.includes('repair') ||
      q.includes('reparatie') ||
      q.includes('goldsmith') ||
      q.includes('goudsmid') ||
      q.includes('battery') ||
      q.includes('batterij') ||
      q.includes('watch') ||
      q.includes('horloge') ||
      q.includes('resiz') ||
      q.includes('engrav')
    ) {
      return `At Juwelier Simons, our master craftsmen provide comprehensive boutique services including:\n• In-house goldsmithing & custom jewelry commissions\n• Professional watch repairs, battery replacements & waterproof testing\n• Ring resizing, gemstone setting & heirloom restoration\n• Ultrasonic cleaning, inspection & personalized engraving.`;
    }

    // 4. Appointment Bookings & Consultations
    if (
      q.includes('appointment') ||
      q.includes('consultation') ||
      q.includes('book') ||
      q.includes('afspraak') ||
      q.includes('reserve') ||
      q.includes('viewing')
    ) {
      return `Private consultations are warmly welcomed for bridal jewellery, wedding bands, bespoke goldsmith creations, and luxury watches. You can click 'Booking View' on any catalogue piece, submit the consultation form on this page, or call our boutique directly at ${BUSINESS_INFO.phone}.`;
    }

    // 5. Engagement Rings, Diamonds & Collections
    if (
      q.includes('engagement') ||
      q.includes('trouw') ||
      q.includes('wedding') ||
      q.includes('ring') ||
      q.includes('diamond') ||
      q.includes('diamant') ||
      q.includes('gold') ||
      q.includes('goud')
    ) {
      return `Our curated bridal and high-jewellery collections feature certified diamonds, solitaire engagement rings, handcrafted wedding bands, and 14k/18k gold creations in yellow, white, and rose gold. We invite you to visit our showcase in Oosterwolde to experience them in person.`;
    }

    // 6. Contact & Direct Communication
    if (
      q.includes('contact') ||
      q.includes('phone') ||
      q.includes('telefoon') ||
      q.includes('whatsapp') ||
      q.includes('call') ||
      q.includes('email')
    ) {
      return `You can connect with Juwelier Simons directly by phone at ${BUSINESS_INFO.phone}, chat via WhatsApp at +31 516 513 035, or visit us at Stationsstraat 24, Oosterwolde. We are always glad to assist you.`;
    }

    // Default Courteous Concierge Response
    return `Thank you for your inquiry with Juwelier Simons. Our experienced team in Oosterwolde is ready to assist you with fine jewellery selections, watch service, custom goldsmithing, or private appointments. Please feel free to call us at ${BUSINESS_INFO.phone} or send a message on WhatsApp.`;
  };

  const handleSend = (textToSend?: string) => {
    const message = textToSend || inputVal.trim();
    if (!message) return;

    const userMsg = { sender: 'user' as const, text: message, time: 'Just now' };
    setChatMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputVal('');

    setTimeout(() => {
      const botReply = generateBotReply(message);
      setChatMessages((prev) => [...prev, { sender: 'bot', text: botReply, time: 'Just now' }]);
    }, 350);
  };

  return (
    <>
      {/* Floating Action Icons Dock: Shifted further towards right screen border on mobile (right-1.5 sm:right-6) */}
      <div className="fixed bottom-4 sm:bottom-6 right-1.5 sm:right-6 z-40 flex flex-col items-center space-y-2.5 sm:space-y-3">
        {/* WhatsApp Official Brand Button - Clean icon only */}
        <a
          href={BUSINESS_INFO.socials.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-[#25D366] text-white shadow-xl hover:shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center cursor-pointer group"
          aria-label="Chat with Juwelier Simons on WhatsApp"
          title="WhatsApp (+31 516 513 035)"
        >
          <WhatsAppLogo size={24} />
        </a>

        {/* Direct Phone Call Button - Clean icon only */}
        <a
          href={`tel:${BUSINESS_INFO.phoneRaw}`}
          className="w-12 h-12 rounded-full bg-[#D4AF37] text-[#0B291F] shadow-xl hover:shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center cursor-pointer group"
          aria-label={`Call Juwelier Simons at ${BUSINESS_INFO.phone}`}
          title={`Call ${BUSINESS_INFO.phone}`}
        >
          <Phone className="w-5 h-5 fill-[#0B291F]" />
        </a>

        {/* AI Concierge Chatbot Button - Clean round icon */}
        <button
          type="button"
          onClick={() => setChatOpen(!chatOpen)}
          className={`w-12 h-12 rounded-full bg-[#0B291F] border border-[#D4AF37]/60 text-[#D4AF37] shadow-xl hover:shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center cursor-pointer relative group ${
            chatOpen ? 'bg-[#123C2D] border-[#D4AF37]' : ''
          }`}
          aria-label={chatOpen ? 'Close AI Concierge' : 'Open AI Concierge'}
          title="Simons AI Boutique Concierge"
        >
          <Bot className="w-5 h-5 text-[#D4AF37]" />
          <span className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full bg-[#25D366] border-2 border-[#0B291F]" />
        </button>
      </div>

      {/* AI Concierge Chat Window: Fixed Desktop Position, High Visibility & Readability */}
      {chatOpen && (
        <div
          className="fixed bottom-22 right-4 sm:right-6 z-50 w-[92vw] sm:w-[400px] max-w-md bg-[#FBFBF7] rounded-3xl border border-[#D4AF37]/50 shadow-2xl flex flex-col overflow-hidden animate-slideUp text-[#172B22]"
          style={{ height: '520px', maxHeight: 'calc(100vh - 110px)' }}
        >
          {/* Header */}
          <div className="p-4 bg-[#0B291F] text-[#FBFBF7] flex items-center justify-between border-b border-[#D4AF37]/30 shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#123C2D] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37]">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-serif tracking-wider uppercase text-[#FBFBF7] font-medium">
                  Simons AI Concierge
                </h4>
                <div className="flex items-center gap-1.5 text-[10px] text-[#D4AF37]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#25D366]" />
                  <span>Boutique Assistant Online</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setChatOpen(false)}
              className="w-8 h-8 min-w-[32px] min-h-[32px] aspect-square rounded-full bg-[#123C2D] text-[#FBFBF7] hover:text-[#D4AF37] flex items-center justify-center transition-colors cursor-pointer shrink-0"
              aria-label="Close Chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Container with Automatic Auto-Scroll */}
          <div className="p-4 flex-grow overflow-y-auto space-y-3 bg-[#F4EFE6]/60 text-xs">
            {chatMessages.map((msg, i) => (
              <div
                key={i}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`p-3.5 rounded-2xl max-w-[85%] leading-relaxed shadow-xs ${
                    msg.sender === 'user'
                      ? 'bg-[#0B291F] text-[#FBFBF7] rounded-br-xs'
                      : 'bg-[#FBFBF7] border border-[#D3DDD6] text-[#172B22] rounded-bl-xs'
                  }`}
                >
                  {msg.sender === 'bot' && (
                    <div className="flex items-center gap-1 text-[10px] text-[#0B291F] font-semibold mb-1">
                      <Sparkles className="w-3 h-3 text-[#D4AF37]" />
                      <span>Juwelier Simons Assistant</span>
                    </div>
                  )}
                  <p className="font-light">{msg.text}</p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Quick Questions: High Contrast & Visible */}
          <div className="p-2.5 bg-[#F8F5EE] border-t border-[#E5DDD0] flex gap-1.5 overflow-x-auto no-scrollbar shrink-0">
            {quickReplies.map((q, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSend(q)}
                className="text-[11px] whitespace-nowrap bg-[#FBFBF7] hover:bg-[#EBE5DC] text-[#0B291F] font-medium border border-[#D3DDD6] rounded-full px-3 py-1 transition-colors shrink-0 cursor-pointer shadow-2xs"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Chat Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-[#FBFBF7] border-t border-[#D3DDD6] flex items-center gap-2 shrink-0"
          >
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Ask about pieces, appointments, or boutique visit..."
              className="flex-grow px-4 py-2.5 text-xs bg-[#F8F5EE] border border-[#D3DDD6] rounded-full focus:outline-none focus:border-[#0B291F] text-[#172B22]"
            />
            <button
              type="submit"
              className="w-9 h-9 rounded-full bg-[#0B291F] text-[#D4AF37] hover:bg-[#123C2D] flex items-center justify-center transition-colors cursor-pointer shrink-0 shadow-sm"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};
