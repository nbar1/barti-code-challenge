import Logo from '../Logo';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="container">
      <Logo />
      <div>
        For educational use only. All characters and content are the property of Disney. This test
        is for private use and development testing only and should not be distributed for public
        consumption
      </div>
    </footer>
  );
};

export { Footer };
