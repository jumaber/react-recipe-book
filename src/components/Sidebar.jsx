import { Link } from "react-router-dom";
import dashboard from "../assets/dashboard.png";
import about from "../assets/info.png";

import { Footer } from "/src/components/Footer";
import { Navbar } from "/src/components/Navbar";




export function Sidebar (){
   return (
    <div className="flex flex-col fixed top-0 left-0 h-screen w-64 px-6 py-12 bg-white justify-between h-full">      
      <div>
        <Navbar />
        <div className="flex flex-col justify-start">    
          <Link to="/" className="sidebar-link-active"><img src={dashboard} alt="dashboard" className="h-4" />Dashboard</Link>
          <Link to="/about" className="sidebar-link"><img src={about} alt="about" className="h-4" />About</Link>
        </div>
      </div>
      <Footer />
    </div>
    )
  }
