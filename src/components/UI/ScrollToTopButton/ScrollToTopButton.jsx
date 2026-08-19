import "./ScrollToTopButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export default function ScrollToTopButton() {
  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <button className="scroll-to-top" onClick={handleScrollToTop}>
      <FontAwesomeIcon icon={faArrowUp} />
    </button>
  );
}
