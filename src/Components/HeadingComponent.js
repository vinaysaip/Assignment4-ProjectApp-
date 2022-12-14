import { Link } from "react-router-dom";
import { title } from "../utils/constants";
const HeaderComponent = (props) => {
  return (
    <div className="header">
      <div className="logo-title">
        <img className="logo" src={require("../assets/TeamLogo.jpg")} />
        <Link to={`/search`}>
          <h1 className="title">{title}</h1>
        </Link>
      </div>

      <div className="d-flex">
        <Link to={`/about`}>
          <p className="login-text">AboutUs</p>
        </Link>
        <p className="login-text">
          <img className="user-icon" src={require("../assets/user_icon.png")} />
          Welcome, Vinay!
        </p>
      </div>
    </div>
  );
};
export default HeaderComponent;
