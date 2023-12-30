// Header.tsx
import '../../style/components/default/Header.scss';

interface HeaderProps {
  scrolled: boolean;
}

const Header = ({ scrolled }: HeaderProps) => {
  return (
    <header className={`${scrolled ? 'scrolled' : ''}`}>
      <div className="left">
        <a href="/" className="header_title">KAIX.</a>
      </div>
      <div className="right">
        <a href="/#Work" className={`menu_default ${scrolled ? 'menu' : 'scrolled_menu'}`}>WORK</a>
        <a href="/#Blog" className={`menu_default ${scrolled ? 'menu' : 'scrolled_menu'}`}>BLOG</a>
        <a href="/about" className={`menu_default ${scrolled ? 'menu' : 'scrolled_menu'}`}>ABOUT</a>
        <a href="/#Contact" className={`menu_default ${scrolled ? 'menu' : 'scrolled_menu'}`}>CONTACT</a>
      </div>
    </header>
  );
};

export default Header;
