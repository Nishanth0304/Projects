
import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setSubmitted(false);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.message.trim()
    ) {
      return;
    }

    setSubmitted(true);

    // Demo only: no message is sent to a server.
    setForm({
      name: "",
      email: "",
      message: "",
    });
  }

  return (
    <main className="main-content">
      <section className="panel contact-panel">
        <p className="eyebrow">GET IN TOUCH</p>
        <h2>Contact Us</h2>
        <p className="welcome-description">
          Have a question about StudentHub? Fill in this demo form.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="contact-name">Your Name</label>
            <input
              id="contact-name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="contact-email">Email Address</label>
            <input
              id="contact-email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Write your message..."
              rows={5}
              required
            />
          </div>

          <button type="submit" className="primary-button">
            Send Message
          </button>
        </form>

        {submitted && (
          <p className="success-message" role="status">
            Demo submission successful! No message was sent
            to a server.
          </p>
        )}
      </section>
    </main>
  );
}

export default Contact;
