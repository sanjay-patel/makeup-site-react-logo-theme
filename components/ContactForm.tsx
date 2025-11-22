'use client'

import { useState, FormEvent } from 'react'
import { analytics } from './GoogleAnalytics'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [formMessage, setFormMessage] = useState({ text: '', type: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    // Validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      setFormMessage({
        text: 'Please fill in all required fields.',
        type: 'error',
      })
      setTimeout(() => setFormMessage({ text: '', type: '' }), 5000)
      return
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(formData.email)) {
      setFormMessage({
        text: 'Please enter a valid email address.',
        type: 'error',
      })
      setTimeout(() => setFormMessage({ text: '', type: '' }), 5000)
      return
    }

    // Phone validation
    const phonePattern = /^[\d\s\-\+\(\)]+$/
    if (!phonePattern.test(formData.phone)) {
      setFormMessage({
        text: 'Please enter a valid phone number.',
        type: 'error',
      })
      setTimeout(() => setFormMessage({ text: '', type: '' }), 5000)
      return
    }

    // Submit to Web3Forms
    setIsSubmitting(true)
    setFormMessage({ text: '', type: '' })

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          subject: 'New Contact Form Submission - Bhumi Makeup Artistry',
        }),
      })

      const result = await response.json()

      if (result.success) {
        // Track successful form submission
        analytics.trackContactForm()

        setFormMessage({
          text: 'Thank you for your message! We will get back to you soon.',
          type: 'success',
        })
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        })
        setTimeout(() => setFormMessage({ text: '', type: '' }), 5000)
      } else {
        setFormMessage({
          text: 'Something went wrong. Please try again or contact us directly.',
          type: 'error',
        })
        setTimeout(() => setFormMessage({ text: '', type: '' }), 5000)
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setFormMessage({
        text: 'Failed to send message. Please try again later.',
        type: 'error',
      })
      setTimeout(() => setFormMessage({ text: '', type: '' }), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  // Set minimum date to today
  const today = new Date().toISOString().split('T')[0]

  return (
    <div className="contact-form-wrapper">
      <h2>Send us a Message</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        {/* <div className="form-group">
          <label htmlFor="service">Service Type *</label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="">Select a service</option>
            <option value="bridal">Bridal Makeup</option>
            <option value="party">Party Makeup</option>
            <option value="photoshoot">Photoshoot Makeup</option>
            <option value="editorial">Editorial Makeup</option>
            <option value="other">Other</option>
          </select>
        </div> */}
        {/* <div className="form-group">
          <label htmlFor="date">Preferred Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            min={today}
          />
        </div> */}
        <div className="form-group">
          <label htmlFor="message">Message *</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
      {formMessage.text && (
        <div className={`form-message ${formMessage.type}`}>
          {formMessage.text}
        </div>
      )}
    </div>
  )
}
