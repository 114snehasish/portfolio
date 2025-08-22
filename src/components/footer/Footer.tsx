import './footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          © {currentYear} Snehasish Chakraborty - Built with 💗 using React
        </p>
      </div>
    </footer>
  );
};

export default Footer;
