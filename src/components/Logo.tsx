import "./Logo.css";
import LogoImage from "../assets/logo.svg";
const Logo = () => {
  return (
    <div className="logo">
      <img src={LogoImage} alt="Nord Software" />
    </div>
  );
};

export default Logo;
