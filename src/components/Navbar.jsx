import Logo from "../assets/logo.svg";

export function Navbar (){
   return (
    <div className='flex items-center gap-2 mb-27'>
      <img src={Logo} alt="logo" className="h-12"/>
      <p className="text-2xl font-black">Peachy</p>
    </div>
    )
  }
