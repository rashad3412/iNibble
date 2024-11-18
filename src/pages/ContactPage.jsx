import React from "react";
import PageTemplate from "../components/PageTemplate";

function ContactPage() {
  return (
    <PageTemplate>
      <div id="contact-page">
        <h1 id="contact-title">Get in Touch with iNibble</h1>
        <p id="contact-subtitle">
          We'd love to hear from you! Reach out for inquiries, feedback, or just
          to say hello.
        </p>
        <form id="contact-form">
          <label for="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
            required
          />

          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
            required
          />

          <label for="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your message"
            rows="5"
            required
          ></textarea>

          <button type="submit" id="submit-button">
            Send Message
          </button>
        </form>
        <div id="contact-info">
          <p>
            Email: <a href="mailto:support@inibble.com">support@inibble.com</a>
          </p>
        </div>
      </div>
    </PageTemplate>
  );
}

export default ContactPage;
