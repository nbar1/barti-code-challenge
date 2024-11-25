import Logo from '../Logo';
import SearchBar from './SearchBar';
import './Header.css';
import ProfileIcon from './ProfileIcon';

const Header = () => {
  return (
    <header className="container">
      <Logo />
      <SearchBar />
      <ProfileIcon />
    </header>
  );
};

export { Header };
