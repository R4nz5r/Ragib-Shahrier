import "../footer/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Ragib Shahrier</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#testimonials" className="footer__link">
              Testimonials
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/imm_ragib"
            className="home__social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <i className="uil uil-instagram"></i>
          </a>

          <a
            href="https://www.facebook.com/R4nz5r"
            className="home__social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <i className="uil uil-facebook"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/ragib-shahrier/"
            className="home__social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <i className="uil uil-linkedin"></i>
          </a>

          <a
            href="https://github.com/R4nz5r"
            className="home__social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <i className="uil uil-github-alt"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; Ragib Shahrier - All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
