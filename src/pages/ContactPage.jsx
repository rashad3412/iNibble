import React, { useState } from "react";
import PageTemplate from "../components/PageTemplate";

function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form from submitting
    setIsSubmitted(true); // Show confirmation message
    setFormData({ name: "", email: "", message: "" }); // Reset form data
    setTimeout(() => setIsSubmitted(false), 3000); // Hide message after 3 seconds
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <PageTemplate>
      <div id="contact-page">
        <h1 id="contact-title">Get in Touch with iNibble</h1>
        <p id="contact-subtitle">
          We'd love to hear from you! Reach out for inquiries, feedback, or just
          to say hello.
        </p>
        <form id="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            placeholder="Your message"
            rows="5"
            value={formData.message}
            onChange={handleInputChange}
            required
          ></textarea>

          <button type="submit" id="submit-button">
            Send Message
          </button>
        </form>
        {isSubmitted && (
          <div id="confirmation-message">
            Your message was sent successfully! 🎉
          </div>
        )}
        <div>
          <p id="contact-email">
            Email: <a href="mailto:support@inibble.com">support@inibble.com</a>
          </p>
        </div>
      </div>
    </PageTemplate>
  );
}

export default ContactPage;
