'use client'

import { FloatingWhatsApp } from 'react-floating-whatsapp'

export default function WhatsAppButton() {
  return (
    <div className="whatsapp-widget-wrapper">
      <FloatingWhatsApp
        phoneNumber="919712652262"
        accountName="Bhumi Makeup Artistry"
        avatar="/logo.jpg"
        statusMessage="Typically replies within minutes"
        chatMessage="Hello! How can we help you with your makeup needs?"
        placeholder="Type a message..."
        allowClickAway
        allowEsc
        notification
        notificationSound
        notificationDelay={60000}
        buttonStyle={{
          backgroundColor: '#25D366',
          bottom: '20px',
          right: '20px',
        }}
        chatboxStyle={{
          bottom: '80px',
          right: '20px',
        }}
        darkMode={false}
      />
      <style jsx global>{`
        .whatsapp-widget-wrapper * {
          box-sizing: border-box;
        }

        /* Fix for input field */
        .floating-whatsapp-input,
        [class*="WAWidget"] input[type="text"],
        [class*="whatsapp"] input {
          padding: 10px 12px !important;
          margin: 0 !important;
          border: 1px solid #ddd !important;
          border-radius: 4px !important;
          width: 100% !important;
          box-sizing: border-box !important;
          font-size: 14px !important;
        }

        /* Fix for button layout */
        [class*="WAWidget"] button,
        [class*="whatsapp"] button {
          box-sizing: border-box !important;
        }
      `}</style>
    </div>
  )
}
