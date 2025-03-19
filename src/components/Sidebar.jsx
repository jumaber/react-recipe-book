import dashboard from "../assets/dashboard.png";
import about from "../assets/info.png";



export function Sidebar (){
   return (
    <div className="flex flex-col">
      <a href="/" className="sidebar-link-active"><img src={dashboard} alt="dashboard" className="h-4" />Dashboard</a>
      <a href="/About" className="sidebar-link"><img src={about} alt="about" className="h-4" />About</a>
    </div>
    )
  }
