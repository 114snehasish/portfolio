import './about.css';
import { Element } from 'react-scroll';
import picture from '../../assets/picture.jpg';

const About = () => {
  return (
    <Element name="about" className="about-section">
      <div className="section-container">
        <h2 className="about-title">About Me</h2>

        <div className="about-content">
          <div className="about-text">
            <p>
              I am a passionate software engineer with expertise in full-stack
              development, cloud technologies, and DevOps practices. With a
              strong foundation in modern web technologies, I focus on creating
              efficient, scalable, and user-friendly applications.
            </p>
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
