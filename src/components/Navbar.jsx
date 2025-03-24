import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";

export function Navbar (){
   return (
    <Link to="/">
      <div className='flex items-center gap-2 mb-27'>
        <img src={Logo} alt="logo" className="h-12"/>
        <p className="logo-name">Peachy</p>
      </div>
    </Link>
    )
  }
