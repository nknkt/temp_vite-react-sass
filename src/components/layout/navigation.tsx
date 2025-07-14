import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav className="l-navigation">
    <ul className="l-navigation__list">
      <li className="l-navigation__item">
        <Link to="/" className="l-navigation__link">Home</Link>
      </li>
      <li className="l-navigation__item">
        <Link to="/about" className="l-navigation__link">About</Link>
      </li>
      <li className="l-navigation__item">
        <Link to="/hoge" className="l-navigation__link">Hoge</Link>
      </li>
      <li className="l-navigation__item">
        <Link to="/contact" className="l-navigation__link">Contact</Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;