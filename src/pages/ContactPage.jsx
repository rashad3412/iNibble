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
          <label>Name</label>
          <input type="text" name="name" placeholder="Your name" required />

          <label>Email</label>
          <input id="email" name="email" placeholder="Your email" required />

          <label>Message</label>
          <textarea
            name="message"
            placeholder="Your message"
            rows="5"
            required
          ></textarea>

          <button type="submit" id="submit-button">
            Send Message
          </button>
        </form>
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
