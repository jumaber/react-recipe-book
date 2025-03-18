import dashboard from "../assets/dashboard.png";
import saved from "../assets/bookmark.png";
import about from "../assets/info.png";



export function Sidebar (){
   return (
    <div className="flex flex-col">
      <a href="/" className="sidebar-link"><img src={dashboard} alt="dashboard" className="h-4" />Dashboard</a>
      <a href="" className="sidebar-link"><img src={saved} alt="saved" className="h-4" />Saved</a>
      <a href="/About" className="sidebar-link"><img src={about} alt="about" className="h-4" />About</a>
      <a href="" className="btn">Upload Recipe</a>
    </div>
    )
  }
