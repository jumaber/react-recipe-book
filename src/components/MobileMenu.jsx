import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "../assets/logo.svg";
import hamburger from "../assets/hamburger.svg"; 

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Hide on recipe or recipeform pages
  if (location.pathname.startsWith("/recipe")) return null;
  if (location.pathname === "/recipeform") return null;




  return (
    <>
      {/* Top nav */}
      <div className="lg:hidden fixed top-0 left-0 w-full flex justify-between items-center p-4 bg-white shadow-md z-50">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={Logo} alt="logo" className="h-10" />
          <p className="logo-name font-bold text-xl">Peachy</p>
        </Link>

        {/* Hamburger Icon */}
        <button onClick={() => setIsOpen(!isOpen)} className="hmbg-menu">
          <img src={hamburger} alt="Menu" className="h-8" />
        </button>
      </div>

      {/* Full-width dropdown overlay */}
      {isOpen && (
        <div className="lg:hidden fixed top-20 left-0 w-full bg-white shadow-md z-40 px-6 py-6 flex flex-col items-end gap-4">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive ? "sidebar-link-active" : "sidebar-link"
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/about"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive ? "sidebar-link-active" : "sidebar-link"
            }
          >
            About
          </NavLink>

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

      {/* This ensures page content isn’t hidden under fixed nav */}
      <div className="lg:hidden h-[72px]" />
    </>
  );
}
