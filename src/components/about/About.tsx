import './about.css';
import { Element } from 'react-scroll';
import picture from '../../assets/picture.jpg';
import { aboutItems } from '../../data/aboutItems';
import { ReactNode } from 'react';

const About = () => {
  // Helper function to parse text with special $highlight$ syntax
  const renderContent = (text: string): ReactNode[] => {
    if (!text) return [];

    // Split the text by the delimiter pattern
    const parts = text.split(/\$(.*?)\$/);

    return parts.map((part, index) => {
      // Even indices are regular text, odd indices are highlighted text
      const isHighlighted = index % 2 !== 0;

      return isHighlighted ? (
        <span key={`highlight-${index}`} className="text-secondary">
          {part}
        </span>
      ) : (
        part
      );
    });
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
                <p className="text-regular">{renderContent(item.text)}</p>
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
