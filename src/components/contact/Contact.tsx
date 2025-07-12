import './contact.css';
import { Element } from 'react-scroll';
import { FaEnvelope, FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';

const Contact = () => {
  const socialLinks = [
    {
      name: 'Email',
      icon: FaEnvelope,
      href: 'mailto:snehasish.chakraborty@gmail.com',
      label: 'snehasish.chakraborty@gmail.com',
      description:
        'Drop me a line and I promise to reply faster than my coffee gets cold!',
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      href: 'https://linkedin.com/in/snehasish-chakraborty',
      label: 'linkedin.com/in/snehasish-chakraborty',
      description:
        'Connect with me professionally, or just to see what I look like in a suit!',
    },
    {
      name: 'GitHub',
      icon: FaGithub,
      href: 'https://github.com/snehasish-chakraborty',
      label: 'github.com/snehasish-chakraborty',
      description:
        'Check out my code – where bugs are just undocumented features!',
    },
    {
      name: 'X',
      icon: FaXTwitter,
      href: 'https://x.com/snehasish_c',
      label: '@snehasish_c',
      description:
        'Follow me for tech thoughts in 280 characters or less. No cat pictures, I promise!',
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
                      <span className="social-label">{link.label}</span>
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
