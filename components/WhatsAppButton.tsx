'use client'

import { FloatingWhatsApp } from 'react-floating-whatsapp'

export default function WhatsAppButton() {
  return (
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
  )
}
