import './experiences.css';
import { Element } from 'react-scroll';
import { experienceItems } from '@data/experiencesItems';
import { FaGithub, FaLink } from 'react-icons/fa6';

const Experiences = () => {
  return (
    <Element name="experiences" className="experiences-section">
      <div className="section-container">
        <h2 className="experiences-title">Work Experience</h2>
        <p className="experiences-subtitle">
          My professional journey has equipped me with a diverse set of skills
          and experiences. Here's a look at my career path and the roles that
          have shaped my expertise.
        </p>

        <div className="experiences-timeline">
          {experienceItems.map((experience) => (
            <div className="experience-card" key={experience.id}>
              <div
                className={`experience-type-badge experience-type-badge-${experience.type.toLowerCase()}`}
              >
                {experience.type}
              </div>
              <div className="experience-header">
                <experience.icon className="experience-icon" />
                <div className="experience-title-container">
                  <div className="experience-title-row">
                    <h3 className="experience-title">{experience.title}</h3>
                    {experience.githubUrl && (
                      <a
                        href={experience.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="experience-link-icon"
                        title="View GitHub Repository"
                      >
                        <FaGithub />
                      </a>
                    )}
                    {experience.liveUrl && (
                      <a
                        href={experience.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="experience-link-icon"
                        title="View Live Site"
                      >
                        <FaLink />
                      </a>
                    )}
                  </div>
                  <p className="experience-company">{experience.company}</p>
                  <p className="experience-period">{experience.period}</p>
                </div>
              </div>

              <div className="experience-section">
                <h4 className="experience-section-title">
                  Roles & Responsibilities
                </h4>
                <p className="experience-description">
                  {experience.rolesAndResponsibilities}
                </p>
              </div>

              <div className="experience-section">
                <h4 className="experience-section-title">Key Outcomes</h4>
                <p className="experience-description">
                  {experience.keyOutcomes}
                </p>
              </div>

              <div className="experience-skills">
                {experience.skills.map((skill) => (
                  <span
                    className="experience-skill-tag"
                    key={`${experience.id}-${skill}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
};

export default Experiences;
