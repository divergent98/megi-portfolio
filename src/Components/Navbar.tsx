import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import mnLogo from "../assets/mn-logo.png";
import meggiverseLogo from "../assets/meggiverse-logo.png";
import artvanturistaLogo from "../assets/artvanturista-logo.png";
import { useState } from "react";
import { useTranslation } from "react-i18next";

type NavbarProps = {
  logo?: string; // Logo name passed as a prop
  color?: string; // CSS class for text color
};

const CustomNavbar: React.FC<NavbarProps> = ({ logo, color }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Match logo prop to the corresponding image
  const getLogoImage = (logoName: string | undefined) => {
    switch (logoName) {
      case "mnLogo":
        return mnLogo;
      case "meggiverseLogo":
        return meggiverseLogo;
      case "artvanturistaLogo":
        return artvanturistaLogo;
      default:
        return mnLogo; // If no logo matches, return default
    }
  };

  const logoImage = getLogoImage(logo);

  const { t, i18n } = useTranslation();
  
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="navbar navbar-expand-lg  bg-transparent">
      <div className="container-fluid">
        {/* Logo Section */}
        <Link to="/" className="navbar-brand">
          {logoImage ? (
            <img src={logoImage} alt="Logo" className="img-fluid" style={{ maxHeight: "40px" }} />
          ) : (
            "Logo not found"
          )}
        </Link>

        {/* Burger Menu Toggle */}
        <button
          className={`navbar-toggler`}
          type="button"
          aria-controls="navbarNav"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className={`navbar-toggler-icon ${color}`}></span>
        </button>

        {/* Collapsible Menu */}
        <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className={`nav-link text-uppercase ${color}`} onClick={() => setIsMenuOpen(false)}>
             {t('home')}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/artvanturista" className={`nav-link text-uppercase ${color}`} onClick={() => setIsMenuOpen(false)}>
                Artvanturista
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/maggiverse" className={`nav-link text-uppercase ${color}`} onClick={() => setIsMenuOpen(false)}>
                Maggiverse
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/graphic-design" className={`nav-link text-uppercase ${color}`} onClick={() => setIsMenuOpen(false)}>
                Graphic Design
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/social-media-and-marketing" className={`nav-link text-uppercase ${color}`} onClick={() => setIsMenuOpen(false)}>
                Social Media & Marketing
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/ux-ui-design" className={`nav-link text-uppercase ${color}`} onClick={() => setIsMenuOpen(false)}>
                UX/UI Design
              </Link>
            </li>
            <li>
      
          <select
          className="form-select border-none border-0 bg-transparent"
            onChange={(e) => changeLanguage(e.target.value)}
            defaultValue={i18n.language}
          >
            <option value="en">ENGLISH</option>
            <option value="sr">SRPSKI</option>
     
          </select>
        </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default CustomNavbar;
