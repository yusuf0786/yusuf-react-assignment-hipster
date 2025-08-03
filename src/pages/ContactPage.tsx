"use client"

import { useState, type FormEvent, type ChangeEvent } from "react"
import { MailIcon, PhoneIcon, MapPinIcon } from "../components/Icons"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("Thank you for your message!")
    setFormData({ name: "", email: "", message: "" })
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="page-content">
      <section className="content-section">
        <h1 className="page-title">Contact Us</h1>

        <div className="contact-container">
          <div className="contact-info">
            <h2 className="contact-title">Get in Touch</h2>
            <p className="contact-description">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <MailIcon className="contact-icon" />
                <span>hello@themeapp.com</span>
              </div>
              <div className="contact-item">
                <PhoneIcon className="contact-icon" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="contact-item">
                <MapPinIcon className="contact-icon" />
                <span>123 Theme Street, Design City, DC 12345</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="form-textarea"
              />
            </div>

            <button type="submit" className="form-submit">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
