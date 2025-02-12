import './main.css';

const Main = () => {
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
          <span className="text-secondary">Spring Boot</span>,{' '}
          <span className="text-secondary">Angular</span> and{' '}
          <span className="text-secondary">Azure</span>. I also have experience
          in different DevOps technologies like{' '}
          <span className="text-secondary">GitHub Actions</span>,{' '}
          <span className="text-secondary">Docker</span>,{' '}
          <span className="text-secondary">Terraform</span> etc. I have also
          past experience in multiple{' '}
          <span className="text-secondary">AWS</span> services along with{' '}
          <span className="text-secondary">Documentum,</span>{' '}
          <span className="text-secondary">D2</span> and related ECM
          technologies. I have been into serving clients from different business
          domains such as Pharma, Banking and Travel.
        </p>
        <button className="cta-button mt-4" id="cta-button-main">
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
