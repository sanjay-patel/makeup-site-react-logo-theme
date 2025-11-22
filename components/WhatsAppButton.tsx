'use client'

import { useState } from 'react'
import { analytics } from './GoogleAnalytics'

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false)
  const phoneNumber = '919712652262' // Your WhatsApp number
  const message = 'Hello! I would like to inquire about your makeup services.'
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  const handleClick = () => {
    analytics.trackWhatsAppClick()
  }

  return (
    <>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
        aria-label="Chat on WhatsApp"
      >
        <svg
          viewBox="0 0 32 32"
          className="whatsapp-icon"
          fill="currentColor"
        >
          <path d="M16.002 0h-.004C7.165 0 0 7.164 0 16c0 3.502 1.126 6.741 3.036 9.377L1.051 31l5.814-1.936A15.918 15.918 0 0 0 16.002 32C24.838 32 32 24.836 32 16S24.838 0 16.002 0zm9.382 22.744c-.397 1.12-1.97 2.05-3.23 2.319-.86.18-1.983.325-5.765-1.236-4.842-1.997-7.955-6.882-8.195-7.199-.232-.317-1.948-2.588-1.948-4.934 0-2.346 1.232-3.5 1.67-3.977.438-.477.954-.596 1.272-.596.318 0 .636.003.915.017.293.015.687-.112 1.074.818.397.954 1.355 3.3 1.473 3.54.12.239.199.517.04.834-.16.318-.238.516-.477.794-.238.279-.502.623-.715.835-.238.239-.486.497-.21.974.278.477 1.233 2.033 2.646 3.293 1.817 1.621 3.35 2.125 3.826 2.364.477.238.755.199 1.034-.12.278-.318 1.195-1.393 1.513-1.87.318-.478.636-.398 1.074-.239.437.16 2.782 1.312 3.259 1.55.477.239.795.358.914.556.119.199.119 1.153-.278 2.272z"/>
        </svg>
        {isHovered && (
          <span className="whatsapp-tooltip">Chat with us on WhatsApp</span>
        )}
      </a>

      <style jsx>{`
        .whatsapp-float {
          position: fixed;
          width: 60px;
          height: 60px;
          bottom: 30px;
          right: 30px;
          background-color: #25d366;
          color: #fff;
          border-radius: 50%;
          text-align: center;
          font-size: 30px;
          box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
          z-index: 999;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          cursor: pointer;
          text-decoration: none;
        }

        .whatsapp-float:hover {
          background-color: #20ba5a;
          transform: scale(1.1);
          box-shadow: 0 6px 20px rgba(37, 211, 102, 0.6);
        }

        .whatsapp-icon {
          width: 32px;
          height: 32px;
          transition: transform 0.3s ease;
        }

        .whatsapp-float:hover .whatsapp-icon {
          transform: rotate(10deg);
        }

        .whatsapp-tooltip {
          position: absolute;
          right: 70px;
          background: #333;
          color: #fff;
          padding: 8px 16px;
          border-radius: 8px;
          font-size: 14px;
          white-space: nowrap;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
          animation: fadeIn 0.3s ease;
        }

        .whatsapp-tooltip::after {
          content: '';
          position: absolute;
          right: -8px;
          top: 50%;
          transform: translateY(-50%);
          width: 0;
          height: 0;
          border-left: 8px solid #333;
          border-top: 8px solid transparent;
          border-bottom: 8px solid transparent;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateX(10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes pulse {
          0% {
            box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
          }
          50% {
            box-shadow: 0 4px 20px rgba(37, 211, 102, 0.7);
          }
          100% {
            box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
          }
        }

        .whatsapp-float {
          animation: pulse 2s infinite;
        }

        /* Mobile responsive */
        @media (max-width: 768px) {
          .whatsapp-float {
            width: 50px;
            height: 50px;
            bottom: 20px;
            right: 20px;
          }

          .whatsapp-icon {
            width: 28px;
            height: 28px;
          }

          .whatsapp-tooltip {
            display: none;
          }
        }
      `}</style>
    </>
  )
}
