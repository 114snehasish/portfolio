import './about.css';
import { Element } from 'react-scroll';
import picture from '@assets/picture.jpg';
import { aboutItems } from '@data/aboutItems';
import { renderHighlightedText } from '@utils/textHighlighter';

const About = () => {
  return (
    <Element name="about" className="about-section">
      <div className="section-container">
        <h2 className="about-title">About Me</h2>

        <div className="about-content">
          {/* Image with float right on medium screens and above */}
          <div className="about-image">
            <div className="image-container">
              <img src={picture} alt="Profile" className="profile-image" />
              <div className="image-overlay"></div>
            </div>
          </div>

          {/* Text that will wrap around the image */}
          <div className="md:clear-none">
            {aboutItems.map((item) => (
              <div className="bullet-point" key={item.id}>
                <item.icon className="bullet-icon" />
                <p className="text-regular">
                  {renderHighlightedText(item.text)}
                </p>
              </div>
            ))}
          </div>

          {/* Clear the float at the end */}
          <div className="md:clear-both"></div>
        </div>
      </div>
    </Element>
  );
};

export default About;
