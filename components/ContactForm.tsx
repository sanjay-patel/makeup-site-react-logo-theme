'use client'

import { useState, FormEvent } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: '',
  })
  const [formMessage, setFormMessage] = useState({ text: '', type: '' })

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
      !formData.service ||
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

    // Simulate form submission (replace with actual backend logic)
    setTimeout(() => {
      setFormMessage({
        text: 'Thank you for your message! We will get back to you soon.',
        type: 'success',
      })
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        date: '',
        message: '',
      })
      setTimeout(() => setFormMessage({ text: '', type: '' }), 5000)
    }, 1000)
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
        <div className="form-group">
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
        </div>
        <div className="form-group">
          <label htmlFor="date">Preferred Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            min={today}
          />
        </div>
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
        <button type="submit" className="btn btn-primary">
          Send Message
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
