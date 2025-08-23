import './main.css';
import { Link } from 'react-scroll';
import { FaTerminal } from 'react-icons/fa6';
import { renderHighlightedText } from '@utils/textHighlighter';

const Main = () => {
  const yearsOfExperience = getYearsOfExperience();

  // Self-description text with highlighting syntax
  const selfDescriptionText = `I'm a passionate $Technical Squad Lead$ with $${yearsOfExperience}$ years of expertise in $Full Stack Development$, $Cloud Architecture$, and $DevOps Practices$. I've successfully delivered enterprise-grade solutions across critical business domains including $Pharmaceutical Research$, $Airline Operations$, and $Global Money Transfer$, while also bringing deep knowledge of $Enterprise Content Management$ technologies like $Documentum$ and $D2$.`;

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
              Building systems that cure bugs, navigate clouds, and move
              millions.
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
