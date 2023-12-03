import Linkedin from "/images/icons/linkedin.png";
import Git from "/images/icons/github.png";
import "./partials.css";

function Header() {
  return (
    <header>
      <div className="center-header">
        <nav>
          <a href="www.linkedin.com/in/ahmadzafarjs" target="_blank">
            <img src={Linkedin} alt={Linkedin} />
          </a>
          <a href="www.github.com/ahmadzafarjs" target="_blank">
            <img src={Git} alt={Git} />
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
