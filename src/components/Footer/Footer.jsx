import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareGithub,
  faSquareLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="text">
        <p>
          &copy;2026&nbsp;<span>Weatherly ·</span>&nbsp;Built by Gianni Dylan
        </p>
      </div>

      <div className="social-links">
        <a href="https://github.com/giannidylancbhg" target="_blank">
          <FontAwesomeIcon icon={faSquareGithub} className="icon" />
          Github
        </a>

        <a href="https://www.linkedin.com/in/giannidylan/" target="_blank">
          <FontAwesomeIcon icon={faSquareLinkedin} className="icon" />
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
