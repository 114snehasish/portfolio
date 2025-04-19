import './about.css';
import { Element } from 'react-scroll';
import picture from '../../assets/picture.jpg';
import { aboutItems } from '../../data/aboutItems';
import React from 'react';

const About = () => {
  // Helper function to render paragraph with highlighted text
  const renderContent = (text: string[], highlights: string[]) => {
    const content: React.ReactNode[] = [];

    // Ensure both arrays have the same length for proper interleaving
    const maxLength = Math.max(text.length, highlights.length + 1);

    for (let i = 0; i < maxLength; i++) {
      // Add text segment if available
      if (i < text.length) {
        content.push(text[i]);
      }

      // Add highlighted text if available
      if (i < highlights.length) {
        content.push(
          <span key={`highlight-${i}`} className="text-secondary">
            {highlights[i]}
          </span>
        );
      }
    }

    return content;
  };

  return (
    <Element name="about" className="about-section">
      <div className="section-container">
        <h2 className="about-title">About Me</h2>

        <div className="about-content">
          <div className="about-text">
            {aboutItems.map((item) => (
              <div className="bullet-point" key={item.id}>
                <item.icon className="bullet-icon" />
                <p className="text-regular">
                  {renderContent(item.text, item.highlights)}
                </p>
              </div>
            ))}
          </div>
          <div className="about-image">
            <div className="image-container">
              <img src={picture} alt="Profile" className="profile-image" />
              <div className="image-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default About;
