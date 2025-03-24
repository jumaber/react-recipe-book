import { NavLink } from "react-router-dom";
import dashboard from "../assets/dashboard.png";
import about from "../assets/info.png";

import { Footer } from "/src/components/Footer";
import { Navbar } from "/src/components/Navbar";




export function Sidebar (){
   return (
    <div className="flex flex-col fixed top-0 left-0 h-screen w-64 px-6 py-12 bg-white justify-between h-full hidden lg:flex">      
      <div>
        <Navbar />
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
      <Footer />
    </div>
    )
  }
