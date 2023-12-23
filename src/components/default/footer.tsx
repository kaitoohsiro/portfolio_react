// Footer.jsx
import '../../style/components/default/Footer.scss';

const Footer = () => {
  return (
    <footer>
      <div className="nav-container">
        <a href="#">WORK</a>
        <span className="separator"> | </span>
        <a href="#">BLOG</a>
        <span className="separator"> | </span>
        <a href="#">ABOUT</a>
        <span className="separator"> | </span>
        <a href="#">CONTACT</a>
      </div>
      <p className="copyright">&copy; 2023 Your Company</p>
    </footer>
  );
};

export default Footer;
