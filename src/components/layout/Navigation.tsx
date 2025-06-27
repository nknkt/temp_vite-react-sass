import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav className="navigation">
    <Link to="/" className="navigation__link">Home</Link>
    <Link to="/about" className="navigation__link">About</Link>
    <Link to="/hoge" className="navigation__link">Hoge</Link>
    <Link to="/contact" className="navigation__link">Contact</Link>
  </nav>
);

export default Navigation;