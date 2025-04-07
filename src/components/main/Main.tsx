import './main.css';

interface MainProps {
  scrollToAbout: () => void;
}

const Main = ({ scrollToAbout }: MainProps) => {
  const yearsOfExperience = getYearsOfExperience();
  
  return (
    <main className="main">
      <section className="main-section">
        <p>
          <span className="text-secondary">Hi,</span> I am
        </p>
        <div className="big-text">
          <h1>Snehasish Chakraborty.</h1>
          <h1 className="caption">I help team build products for the web.</h1>
        </div>
        <p className="self-description">
          I am a software engineer having{' '}
          <span className="text-secondary">{yearsOfExperience}</span> years of
          experience specializing in{' '}
          <span className="text-secondary">Full Stack</span>,{' '}
          <span className="text-secondary">Cloud</span> and{' '}
          <span className="text-secondary">DevOps</span>. I also have experience
          in different ECM Technologies like{' '}
          <span className="text-secondary">Documentum</span> and{' '}
          <span className="text-secondary">D2</span>. I have been into serving
          clients from different business domains such as{' '}
          <span className="text-secondary">Pharma</span>,{' '}
          <span className="text-secondary">Travel</span> and{' '}
          <span className="text-secondary">Banking</span>.
        </p>
        <button 
          className="cta-button mt-4" 
          id="cta-button-main"
          onClick={scrollToAbout}
        >
          $ more_about_me &gt;_
        </button>
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
