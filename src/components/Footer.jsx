import { Link } from "react-router-dom";

export const Footer = () => (
  <footer className="py-5">
    <div className="container">
      <div className="row border-bottom">
        <div className="col-12 col-lg-3 mb-5">
          <Link to="/" className="d-inline-block mb-4">
            <img
              className="img-fluid"
              src="bootstrap5-plain-assets/logos/plainb-logo.svg"
              alt=""
              width="96px"
            />
          </Link>
          <p className="text-muted mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div>
            <a className="d-inline-block me-3" href="#">
              <img
                className="mx-auto img-fluid"
                src="bootstrap5-plain-assets/socials/facebook.svg"
              />
            </a>
            <a className="d-inline-block me-3" href="#">
              <img
                className="mx-auto img-fluid"
                src="bootstrap5-plain-assets/socials/github.svg"
              />
            </a>
            <a className="d-inline-block me-3" href="#">
              <img
                className="mx-auto img-fluid"
                src="bootstrap5-plain-assets/socials/instagram.svg"
              />
            </a>
            <a className="d-inline-block me-3" href="#">
              <img
                className="mx-auto img-fluid"
                src="bootstrap5-plain-assets/socials/linkedin.svg"
              />
            </a>
            <a className="d-inline-block" href="#">
              <img
                className="mx-auto img-fluid"
                src="bootstrap5-plain-assets/socials/twitter.svg"
              />
            </a>
          </div>
        </div>
        <div className="col-12 col-lg-9">
          <div className="row">
            <div className="col-12 col-lg-3 mb-5">
              <h4 className="mb-4">Strony</h4>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link to="/" className="text-muted">
                    Strona główna
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/blog" className="text-muted">
                    Blog
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/about" className="text-muted">
                    O nas
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/contact" className="text-muted">
                    Kontakt
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-5 text-center">
        <p>All rights reserved © Wireframes Corporation 2021</p>
      </div>
    </div>
  </footer>
);
