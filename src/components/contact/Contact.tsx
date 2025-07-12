import './contact.css';
import { Element } from 'react-scroll';
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaLocationDot,
  FaXTwitter,
} from 'react-icons/fa6';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = encodeURIComponent(`Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:snehasish.chakraborty@gmail.com?subject=${subject}&body=${body}`;
  };

  const socialLinks = [
    {
      name: 'Email',
      icon: FaEnvelope,
      href: 'mailto:snehasish.chakraborty@gmail.com',
      label: 'snehasish.chakraborty@gmail.com',
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      href: 'https://linkedin.com/in/snehasish-chakraborty',
      label: 'linkedin.com/in/snehasish-chakraborty',
    },
    {
      name: 'GitHub',
      icon: FaGithub,
      href: 'https://github.com/snehasish-chakraborty',
      label: 'github.com/snehasish-chakraborty',
    },
    {
      name: 'X',
      icon: FaXTwitter,
      href: 'https://x.com/snehasish_c',
      label: '@snehasish_c',
    },
  ];

  return (
    <Element name="contact" className="contact-section">
      <div className="section-container">
        <h2 className="contact-title">Get In Touch</h2>
        <p className="contact-subtitle">
          I'm always open to discussing new opportunities, interesting projects,
          or just having a chat about technology. Feel free to reach out if
          you'd like to connect!
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <h3 className="contact-info-title">Let's Connect</h3>
            <div className="contact-location">
              <FaLocationDot className="location-icon" />
              <span className="location-text">Based in India</span>
            </div>

            <div className="social-links">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={link.name}
                >
                  <link.icon className="social-icon" />
                  <span className="social-label">{link.label}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="contact-form-container">
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
                  onChange={handleInputChange}
                  required
                  className="form-input"
                  placeholder="Your name"
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
                  onChange={handleInputChange}
                  required
                  className="form-input"
                  placeholder="your.email@example.com"
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
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="form-textarea"
                  placeholder="Your message here..."
                />
              </div>

              <button type="submit" className="cta-button">
                <FaEnvelope className="button-icon" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Contact;
