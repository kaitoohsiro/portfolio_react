// Footer.jsx
import '../../style/components/default/Footer.scss';

const Footer = () => {
  return (
    <footer>
      <div className="nav-container">
        <a href="/#Work">WORK</a>
        <span className="separator"> | </span>
        <a href="/#Blog">BLOG</a>
        <span className="separator"> | </span>
        <a href="/about">ABOUT</a>
        <span className="separator"> | </span>
        <a href="/#Contact">CONTACT</a>
      </div>
      <p className="copyright">&copy; 2023 Your Company</p>
    </footer>
  );
};

export default Footer;
