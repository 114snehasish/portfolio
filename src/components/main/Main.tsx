import './main.css';
import { Link } from 'react-scroll';
import { FaTerminal } from 'react-icons/fa6';
import { renderHighlightedText } from '@utils/textHighlighter';

const Main = () => {
  const yearsOfExperience = getYearsOfExperience();

  // Self-description text with highlighting syntax
  const selfDescriptionText = `I am a software engineer having $${yearsOfExperience}$ years of experience specializing in $Full Stack$, $Cloud$ and $DevOps$. I also have experience in different ECM Technologies like $Documentum$ and $D2$. I have been into serving clients from different business domains such as $Pharma$, $Travel$ and $Banking$.`;

  return (
    <main className="main">
      <section className="main-section">
        <div className="section-container">
          <p className="text-regular">
            <span className="text-secondary">Hi,</span> I am
          </p>
          <div className="big-text">
            <h1>Snehasish Chakraborty.</h1>
            <h1 className="caption">
              Building mission-critical systems with technical excellence.
            </h1>
          </div>
          <p className="self-description text-regular">
            {renderHighlightedText(selfDescriptionText)}
          </p>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="cta-button mt-4 inline-flex items-center gap-2 cursor-pointer"
            id="cta-button-main"
          >
            <FaTerminal className="text-lg" />
            <span>more about me</span>
          </Link>
        </div>
      </section>
    </main>
  );
};

function getYearsOfExperience() {
  const startYear = 2016;
  const currentYear = new Date().getFullYear();
  return currentYear - startYear;
}

export default Main;
