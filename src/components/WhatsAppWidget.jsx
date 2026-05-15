import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WHATSAPP_NUMBER = '447401148372'; // +44 7401 148372 without spaces/+
const WHATSAPP_MESSAGE = encodeURIComponent(
  'Hi! I found EduGlobe Lanka online and would like to know more about study abroad options.'
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const WhatsAppIcon = ({ size = 28, color = 'white' }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16 2C8.268 2 2 8.268 2 16c0 2.492.655 4.83 1.8 6.856L2 30l7.344-1.924A13.93 13.93 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2z"
      fill={color === 'white' ? 'white' : '#25D366'}
    />
    <path
      d="M22.003 19.394c-.32-.16-1.89-.932-2.183-1.038-.292-.107-.505-.16-.717.16-.213.32-.822 1.038-.007 1.251.293.053.505-.107.717-.16.213-.053.4-.027.56.08.373.267 1.066.934 1.493 1.28.16.133.374.093.507-.04.32-.32.746-.774.906-.96.16-.186.214-.4.054-.56-.16-.16-.614-.614-.934-.774-.32-.16-.533-.187-.746.08z"
      fill={color === 'white' ? '#25D366' : 'white'}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 3.5C9.096 3.5 3.5 9.096 3.5 16c0 2.37.634 4.594 1.743 6.508L3.5 28.5l6.198-1.617A12.46 12.46 0 0016 28.5c6.904 0 12.5-5.596 12.5-12.5S22.904 3.5 16 3.5zm-4.74 6.75c-.2-.005-.422.003-.63.48-.213.48-.814 1.97-.814 1.97s-.2.456-.04.97c.16.512.8 1.63.8 1.63.64 1.066 1.547 2.13 2.56 2.88 1.013.747 2.187 1.227 3.2 1.387.507.08 1.013.026 1.387-.16.373-.187.88-.694 1.066-1.04.187-.347.107-.614-.026-.827-.134-.213-1.6-1.52-1.92-1.68-.32-.16-.534-.187-.747.08-.213.267-.8.88-.96 1.04-.16.16-.32.213-.56.08-.24-.133-1.013-.48-1.92-1.44-.72-.77-1.2-1.707-1.36-1.947-.16-.24 0-.4.12-.56.107-.134.267-.347.4-.52.133-.174.187-.32.267-.534.08-.213.04-.4-.027-.56-.066-.16-.64-1.6-.88-2.16-.213-.507-.44-.507-.6-.507l-.307-.013z"
      fill={color === 'white' ? '#25D366' : 'white'}
    />
  </svg>
);

const WhatsAppWidget = () => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 9999, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 12 }}>

      {/* Popup card */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.92 }}
            transition={{ duration: 0.22, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              width: 300,
              borderRadius: 16,
              overflow: 'hidden',
              boxShadow: '0 8px 40px rgba(0,0,0,0.22)',
              fontFamily: '"Outfit", "Poppins", sans-serif',
            }}
          >
            {/* Green header */}
            <div style={{
              background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
              padding: '20px 18px 18px',
              display: 'flex',
              alignItems: 'flex-start',
              gap: 12,
            }}>
              <div style={{ flexShrink: 0, marginTop: 2 }}>
                <WhatsAppIcon size={36} color="white" />
              </div>
              <div>
                <p style={{ margin: 0, color: 'white', fontWeight: 700, fontSize: '1.05rem', lineHeight: 1.3 }}>
                  Start a Conversation
                </p>
                <p style={{ margin: '4px 0 0', color: 'rgba(255,255,255,0.88)', fontSize: '0.82rem', lineHeight: 1.5 }}>
                  Hi! Click below to chat with us on <strong>WhatsApp</strong>
                </p>
              </div>
            </div>

            {/* White body */}
            <div style={{ background: '#f0f4f3', padding: '12px 14px 14px' }}>
              <p style={{ margin: '0 0 10px', color: '#888', fontSize: '0.78rem' }}>
                The team typically replies in a few minutes.
              </p>

              {/* Consultant card */}
              <motion.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, boxShadow: '0 4px 20px rgba(37,211,102,0.18)' }}
                whileTap={{ scale: 0.98 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  background: 'white',
                  border: '1px solid #e0e0e0',
                  borderRadius: 10,
                  padding: '12px 14px',
                  textDecoration: 'none',
                  cursor: 'pointer',
                }}
              >
                {/* Avatar with WA icon */}
                <div style={{
                  width: 42, height: 42, borderRadius: '50%',
                  background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <WhatsAppIcon size={24} color="white" />
                </div>

                <span style={{ flex: 1, color: '#333', fontSize: '0.9rem', fontWeight: 500 }}>
                  Talk to our consultant!
                </span>

                {/* Green WA icon on right */}
                <div style={{ color: '#25D366' }}>
                  <WhatsAppIcon size={22} color="green" />
                </div>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating button */}
      <motion.button
        id="whatsapp-widget-btn"
        onClick={() => setOpen((o) => !o)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.92 }}
        aria-label={open ? 'Close WhatsApp chat' : 'Chat on WhatsApp'}
        style={{
          width: 58, height: 58, borderRadius: '50%', border: 'none', cursor: 'pointer',
          background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 6px 24px rgba(37,211,102,0.45)',
          position: 'relative',
        }}
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span
              key="close"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.18 }}
              style={{ color: 'white', fontSize: '1.5rem', fontWeight: 300, lineHeight: 1 }}
            >
              ✕
            </motion.span>
          ) : (
            <motion.span
              key="wa"
              initial={{ opacity: 0, rotate: 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -90 }}
              transition={{ duration: 0.18 }}
            >
              <WhatsAppIcon size={30} color="white" />
            </motion.span>
          )}
        </AnimatePresence>

        {/* Pulse ring when closed */}
        {!open && (
          <span style={{
            position: 'absolute', inset: -4, borderRadius: '50%',
            border: '2px solid rgba(37,211,102,0.5)',
            animation: 'wa-pulse 2s ease-out infinite',
            pointerEvents: 'none',
          }} />
        )}
      </motion.button>

      <style>{`
        @keyframes wa-pulse {
          0%   { transform: scale(1);   opacity: 0.8; }
          70%  { transform: scale(1.35); opacity: 0; }
          100% { transform: scale(1.35); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default WhatsAppWidget;
