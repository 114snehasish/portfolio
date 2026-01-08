import './about.css';
import { Element } from 'react-scroll';
import { aboutItems } from '@data/aboutItems';
import { renderHighlightedText } from '@utils/textHighlighter';
import pictureOriginal from '@assets/picture.jpg';

// In production, these paths will be replaced by the build process
const getImageSources = () => {
  // For production builds, we'll use relative paths that the build process optimizes
  if (import.meta.env.PROD) {
    return {
      webp: '/assets/picture-optimized.webp',
      thumb: '/assets/picture-thumb.webp',
      fallback: '/assets/picture-fallback.jpg',
    };
  }
  // For development, use the original image
  return {
    webp: pictureOriginal,
    thumb: pictureOriginal,
    fallback: pictureOriginal,
  };
};

const About = () => {
  const images = getImageSources();

  return (
    <Element name="about" className="about-section">
      <div className="section-container">
        <h2 className="about-title">About Me</h2>

        <div className="about-content">
          {/* Image with float right on medium screens and above */}
          <div className="about-image">
            <div className="image-container">
              <picture>
                <source
                  media="(max-width: 768px)"
                  srcSet={images.thumb}
                  type="image/webp"
                />
                <source
                  media="(min-width: 769px)"
                  srcSet={images.webp}
                  type="image/webp"
                />
                <img
                  src={images.fallback}
                  alt="Snehasish Chakraborty - Professional Photo"
                  loading="lazy"
                  className="profile-image"
                />
              </picture>
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
