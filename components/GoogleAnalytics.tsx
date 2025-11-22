'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

export function GoogleAnalytics({ gaId }: { gaId: string }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (!gaId) return

    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '')

    // Send pageview with custom URL
    if (window.gtag) {
      window.gtag('config', gaId, {
        page_path: url,
      })
    }
  }, [pathname, searchParams, gaId])

  if (!gaId) {
    return null
  }

  return (
    <>
      <script
        
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      <script
        id="google-analytics"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  )
}

// Helper function to track custom events
export const trackEvent = (eventName: string, eventParams?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams)
  }
}

// Predefined event tracking functions for your business
export const analytics = {
  // Track contact form submission
  trackContactForm: () => {
    trackEvent('contact_form_submission', {
      event_category: 'engagement',
      event_label: 'Contact Form',
    })
  },

  // Track WhatsApp button click
  trackWhatsAppClick: () => {
    trackEvent('whatsapp_click', {
      event_category: 'engagement',
      event_label: 'WhatsApp Button',
    })
  },

  // Track phone number click
  trackPhoneClick: () => {
    trackEvent('phone_click', {
      event_category: 'engagement',
      event_label: 'Phone Number',
    })
  },

  // Track email click
  trackEmailClick: () => {
    trackEvent('email_click', {
      event_category: 'engagement',
      event_label: 'Email Address',
    })
  },

  // Track portfolio image view
  trackPortfolioView: (imageName: string) => {
    trackEvent('portfolio_view', {
      event_category: 'content',
      event_label: imageName,
    })
  },

  // Track service page view
  trackServiceView: (serviceName: string) => {
    trackEvent('service_view', {
      event_category: 'content',
      event_label: serviceName,
    })
  },

  // Track brand click
  trackBrandClick: (brandName: string) => {
    trackEvent('brand_click', {
      event_category: 'engagement',
      event_label: brandName,
    })
  },

  // Track booking attempt
  trackBookingIntent: (source: string) => {
    trackEvent('booking_intent', {
      event_category: 'conversion',
      event_label: source,
    })
  },

  // Track destination wedding inquiry
  trackDestinationWeddingInquiry: () => {
    trackEvent('destination_wedding_inquiry', {
      event_category: 'conversion',
      event_label: 'Destination Wedding Page',
    })
  },
}

// Type definition for window.gtag
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js',
      targetId: string | Date,
      config?: Record<string, any>
    ) => void
    dataLayer: any[]
  }
}
