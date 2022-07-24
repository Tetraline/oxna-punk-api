import "./NavBar.scss";
import logo from "../../assets/images/logo.png";
import menuIcon from "../../assets/images/menu-icon.png";

const NavBar = () => {
  return (
    <nav className="nav">
      <img className="nav__item" src={logo} alt="BEER Logo" />
      <img className="nav__item" src={menuIcon} alt="Menu" />
    </nav>
  );
};

export default NavBar;
