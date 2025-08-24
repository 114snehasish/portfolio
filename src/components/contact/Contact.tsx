import './contact.css';
import { Element } from 'react-scroll';
import { socialLinks } from '@data/contactItems';

const Contact = () => {
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
                  <div className="social-link-content">
                    <div className="social-link-header">
                      <link.icon className="social-icon" />
                      {link.shortLabel ? (
                        <>
                          <span className="social-label social-label-full">
                            {link.label}
                          </span>
                          <span className="social-label social-label-short">
                            {link.shortLabel}
                          </span>
                        </>
                      ) : (
                        <span className="social-label">{link.label}</span>
                      )}
                    </div>
                    <p className="social-description">{link.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Contact;
