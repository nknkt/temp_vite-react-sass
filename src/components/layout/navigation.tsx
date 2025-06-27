import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav className="p-navigation">
    <ul className="p-navigation__list">
      <li className="p-navigation__item">
        <Link to="/" className="p-navigation__link">Home</Link>
      </li>
      <li className="p-navigation__item">
        <Link to="/about" className="p-navigation__link">About</Link>
      </li>
      <li className="p-navigation__item">
        <Link to="/hoge" className="p-navigation__link">Hoge</Link>
      </li>
      <li className="p-navigation__item">
        <Link to="/contact" className="p-navigation__link">Contact</Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;