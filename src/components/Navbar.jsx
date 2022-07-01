import { Link } from "react-router-dom";

export const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light py-4">
    <div className="container-fluid">
      <Link to="/" className="navbar-brand">
        <img
          className="img-fluid"
          src="bootstrap5-plain-assets/logos/plainb-logo.svg"
          alt=""
          width="96px"
        />
      </Link>
      <button className="navbar-toggler" type="button">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="nav03">
        <ul className="navbar-nav mt-3 mt-lg-0 mb-3 mb-lg-0 ms-lg-3 me-auto">
          <li className="nav-item me-4">
            <Link to="/" className="nav-link">
              Strona główna
            </Link>
          </li>
          <li className="nav-item me-4">
            <Link to="/blog" className="nav-link">
              Blog
            </Link>
          </li>
          <li className="nav-item me-4">
            <Link to="/about" className="nav-link">
              O nas
            </Link>
          </li>
          <li className="nav-item me-4">
            <Link to="/contact" className="nav-link">
              Kontakt
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);
