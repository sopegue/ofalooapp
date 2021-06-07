import "../header/Header.css";
import Logo from "../../logo/Logo";
import "../header/Proposition.css";
import Proposition from "../header/Proposition";
import { Link, BrowserRouter as Router } from "react-router-dom";
import Userdrop from "./Userdrop";
// import Logo from "../../logo/Logo";
function Header() {
  return (
    <div>
      <div className="header-home relative w-full">
        <div className="absolute bgtr h-full w-full"></div>
        <div className="relative z-20 px-14 pt-7">
          <div className="flex items-center justify-between">
            <Router>
              <Link to="/">
                <Logo></Logo>
              </Link>
            </Router>
            <div className="flex items-center space-x-20">
              <div className="flex items-center space-x-10">
                <Proposition title="Acheter"></Proposition>
                <Proposition title="Louer"></Proposition>
                <a
                  href="/devenir-agent"
                  className="color-white size-13 rounded font-semibold px-4 pb-1.5 button is-lights"
                >
                  Devenir agent
                </a>
              </div>
              <div>
                <Userdrop></Userdrop>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
