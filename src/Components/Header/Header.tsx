import "../Header/Header.scss";
import logo from "../../Assets/Images/mm.png";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div className="header">
      <NavLink to="/">
        {" "}
        <img src={logo} className="logo" alt="logo"></img>
      </NavLink>
    </div>
  );
};

export default Header;
