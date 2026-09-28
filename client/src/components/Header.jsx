import { Link } from "react-router-dom";
import "./Header.css";
function Header() {
  return (
    <header>
      <h1>Hello, I am <span className="highlight-word">Sierra</span>.</h1>
      <h2>Junior Software Engineer</h2>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Me</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/references">References</Link></li>
          <li><Link to="/contact">Contact Me</Link></li>
        </ul>
      </nav>
      <hr />
    </header>
  );
}

export default Header;