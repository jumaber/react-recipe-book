import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "../assets/logo.svg";
import hamburger from "../assets/hamburger.svg"; 

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false); // Controls visibility of the mobile dropdown
  const location = useLocation(); // React Router hook to get the current path

  // Hide mobile menu on individual recipe or form pages
  if (location.pathname.startsWith("/recipe")) return null;
  if (location.pathname === "/recipeform") return null;

  return (
    <>
      {/* Top navigation bar (visible only on small screens) */}
      <div className="lg:hidden fixed top-0 left-0 w-full flex justify-between items-center px-4 bg-white shadow-md z-50">
        
        {/* App logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={Logo} alt="logo" className="h-10" />
          <p className="logo-name font-bold text-xl">Peachy</p>
        </Link>

        {/* Hamburger button toggles dropdown menu */}
        <button onClick={() => setIsOpen(!isOpen)} className="hmbg-menu">
          <img src={hamburger} alt="Menu" className="h-8" />
        </button>
      </div>

      {/* Slide-down dropdown menu when hamburger is open */}
      {isOpen && (
        <div className="lg:hidden fixed top-14 left-0 w-full bg-white shadow-md z-40 px-6 py-6 flex flex-col items-end gap-4">
          
          {/* Dashboard link */}
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)} // Close menu on click
            className={({ isActive }) =>
              isActive ? "sidebar-link-active" : "sidebar-link"
            }
          >
            Dashboard
          </NavLink>

          {/* About link */}
          <NavLink
            to="/about"
            onClick={() => setIsOpen(false)} // Close menu on click
            className={({ isActive }) =>
              isActive ? "sidebar-link-active" : "sidebar-link"
            }
          >
            About
          </NavLink>

          {/* External link to GitHub */}
          <a
            href="https://github.com/jumaber/react-recipe-book"
            target="_blank"
            rel="noopener noreferrer"
            className="sidebar-link"
          >
            GitHub Repo
          </a>
        </div>
      )}

      {/* Adds space below fixed nav so it doesn’t cover page content */}
      <div className="lg:hidden h-[56px]" />
    </>
  );
}
