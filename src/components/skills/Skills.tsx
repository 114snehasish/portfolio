import './skills.css';
import { Element } from 'react-scroll';
import { skillCategories } from '@data/skillsItems';

const Skills = () => {
  return (
    <Element name="skills" className="skills-section">
      <div className="section-container">
        <h2 className="skills-title">Skills & Expertise</h2>
        <p className="skills-subtitle">
          I wear many tech hats: office programmer by day, curious explorer by
          night. I've kept old tech skills in my back pocket, built cool side
          projects, made friends with AI tools (while still doing the real
          coding myself), and love telling everyone about my favorite coding
          tools. Keep scrolling to see what I can do.
        </p>

        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div className="skill-card" key={category.id}>
              <div className="skill-header">
                <category.icon className="skill-icon" />
                <h3 className="skill-title">{category.title}</h3>
              </div>

              <p className="skill-description">{category.description}</p>

              <div className="skill-list">
                {category.skills.map((skill) => (
                  <span className="skill-tag" key={`${category.id}-${skill}`}>
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

export default Skills;
