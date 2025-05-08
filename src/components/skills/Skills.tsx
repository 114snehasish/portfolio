import './skills.css';
import { Element } from 'react-scroll';
import { skillCategories } from '@data/skillsItems';

const Skills = () => {
  return (
    <Element name="skills" className="skills-section">
      <div className="section-container">
        <h2 className="skills-title">Skills & Expertise</h2>
        <p className="skills-subtitle text-regular">
          A tech polymath living a double life: corporate coder by day, digital
          tinkerer by night. I've archived tech fossils, launched ventures with
          a keystroke, befriended AI (but still write my own code), and can't
          stop recommending my favorite IDEs. Scroll down for the proof.
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
