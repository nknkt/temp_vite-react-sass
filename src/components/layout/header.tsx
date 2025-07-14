import Navigation from './navigation';
import logo from '../../assets/images/common/logo.png';


const Header = () => (
  <header className="l-header">
    <h1>
      <a href='/' className="l-header__logo">
        <img src={logo} alt="Logo" />
      </a>
    </h1>
    <Navigation />
  </header>
);

export default Header;