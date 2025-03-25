import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

import dashboard from "../assets/dashboard.png";
import about from "../assets/info.png";
import Logo from "../assets/logo.svg";

export function Sidebar (){
   return (
    <div className="flex flex-col fixed top-0 left-0 h-screen w-64 px-6 py-12 bg-white justify-between h-full hidden lg:flex">      
      <div> 
        {/* Logo */}
        <Link to="/">
          <div className='flex items-center gap-2 mb-24'>
            <img src={Logo} alt="logo" className="h-12"/>
            <p className="logo-name">Peachy</p>
          </div>
        </Link>

        {/* Navigation */}
        <div className="flex flex-col justify-start gap-4">    
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? "sidebar-link-active" : "sidebar-link"}
            >
            <img src={dashboard} alt="dashboard" className="h-4" />
            Dashboard
          </NavLink>

          <NavLink 
            to="/about" 
            className={({ isActive }) => isActive ? "sidebar-link-active" : "sidebar-link"}
            >
            <img src={about} alt="about" className="h-4" />
            About
          </NavLink>
        </div>
      </div>

      {/* Footer */}
      <div className="flex flex-row justify-center content-center items-center">
        <a href="https://github.com/jumaber/react-recipe-book" target="_blank" className="footer-link">Link to our Git Repo</a>
      </div>

    </div>
    )
  }
