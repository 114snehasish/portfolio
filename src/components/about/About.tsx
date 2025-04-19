import './about.css';
import { Element } from 'react-scroll';
import picture from '../../assets/picture.jpg';
import { FaAngleRight } from 'react-icons/fa6';

const About = () => {
  return (
    <Element name="about" className="about-section">
      <div className="section-container">
        <h2 className="about-title">About Me</h2>

        <div className="about-content">
          <div className="about-text">
            <div className="bullet-point">
              <FaAngleRight className="bullet-icon" />
              <p className="text-regular">
                I began my career as a{' '}
                <span className="text-secondary">
                  Junior Documentum Developer
                </span>
                , rapidly establishing myself as a pivotal team member by
                contributing significantly to diverse projects and initiatives.
              </p>
            </div>
            <div className="bullet-point">
              <FaAngleRight className="bullet-icon" />
              <p className="text-regular">
                Within next <span className="text-secondary">three years</span>,
                I advanced to the role of{' '}
                <span className="text-secondary">Team Lead</span>, where I
                successfully orchestrated the{' '}
                <span className="text-secondary">End-to-End Delivery</span> of
                multiple products across various{' '}
                <span className="text-secondary">Tech Stacks</span>.
              </p>
            </div>
            <div className="bullet-point">
              <FaAngleRight className="bullet-icon" />
              <p className="text-regular">
                In subsequent years, I expanded my expertise in{' '}
                <span className="text-secondary">Cloud</span> and{' '}
                <span className="text-secondary">DevOps</span>, architecting and
                leading the development of numerous products across multiple
                projects and business domains.
              </p>
            </div>
            <div className="bullet-point">
              <FaAngleRight className="bullet-icon" />
              <p className="text-regular">
                A highlight of my career has been the{' '}
                <span className="text-secondary">trust and responsibility</span>{' '}
                entrusted to me upon joining new teams, where colleagues quickly
                recognize my ability to effectively manage and{' '}
                <span className="text-secondary">
                  resolve complex situations
                </span>
                .
              </p>
            </div>
            <div className="bullet-point">
              <FaAngleRight className="bullet-icon" />
              <p className="text-regular">
                In my free time, I enjoy doing{' '}
                <span className="text-secondary">Side Projects</span>, learning
                about <span className="text-secondary">Computer Hardwares</span>{' '}
                and{' '}
                <span className="text-secondary">
                  HomeLab and Home Automation
                </span>{' '}
                and <span className="text-secondary">Playing Video Games.</span>
              </p>
            </div>
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
