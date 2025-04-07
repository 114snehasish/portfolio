import './about.css';
import { forwardRef } from 'react';

const About = forwardRef<HTMLElement, {}>((_, ref) => {
  return (
    <section ref={ref} id="about" className="about-section">
      <h2 className="about-title">About Me</h2>
      
      <div className="about-content">
        <p>
          I am a passionate software engineer with expertise in full-stack development, 
          cloud technologies, and DevOps practices. With a strong foundation in modern 
          web technologies, I focus on creating efficient, scalable, and user-friendly applications.
        </p>
      </div>
      
      <div className="about-grid">
        <div className="about-card">
          <h3 className="about-card-title">Background</h3>
          <div className="about-card-content">
            <p>
              I started my journey in software development in 2016, working with various 
              technologies and frameworks. My experience spans across different business domains 
              including Pharma, Travel, and Banking, giving me a diverse perspective on 
              industry-specific challenges and solutions.
            </p>
          </div>
        </div>
        
        <div className="about-card">
          <h3 className="about-card-title">Interests</h3>
          <div className="about-card-content">
            <p>
              Beyond coding, I'm passionate about cloud architecture, containerization, 
              and continuous integration/deployment practices. I enjoy exploring new 
              technologies and contributing to open-source projects when possible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});

About.displayName = 'About';

export default About; 