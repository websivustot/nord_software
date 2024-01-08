import { FC } from "react";
import Logo from "./Logo";
import "./Header.css";
const Header: FC = () => {
  return (
    <header>
      <div className="header-container">
        <Logo />
        <div className="header-text">Nord Software</div>
      </div>
    </header>
  );
};

export default Header;
