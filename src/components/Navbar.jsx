import Logo from "../assets/logo.svg";

export function Navbar (){
   return (
    <div className='flex gap-2 mb-8'>
      <img src={Logo} alt="logo" className="h-8"/>
      <p className="logo-header">Peachy</p>
    </div>
    )
  }
