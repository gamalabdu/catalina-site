
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from '../assets/logo1.png'; // Replace with your logo path

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-blue-950 text-neutral-100 font-semibold h-[60px] fixed top-0 w-full z-10 flex items-center justify-between px-4 lg:px-8">


      <div className="w-full flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img src={logo} alt="Logo" className="h-12 w-auto" />
        </Link>

        {/* Hamburger Icon */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-2xl focus:outline-none">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Full Menu for Larger Screens */}
        <div className="hidden lg:flex lg:space-x-8 lg:items-center lg:w-full lg:justify-evenly">
          {/* <Link to="/" className="hover:text-neutral-400">Home</Link> */}
          <Link to="/about" className="hover:text-neutral-400">About</Link>
          <Link to="/areasofpractice" className="hover:text-neutral-400">Areas Of Practice</Link>
          <Link to="/contact" className="hover:text-neutral-400">Contact</Link>
        </div>



      </div>

      {/* Full-Screen Menu for Smaller Screens */}
      <div
        className={`fixed inset-0 bg-blue-950 flex flex-col items-center justify-center space-y-8 text-xl transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* X Icon to Close the Menu */}
        <button onClick={toggleMenu} className="absolute top-4 right-4 text-2xl focus:outline-none">
          <FaTimes />
        </button>
        {/* <Link to="/" onClick={toggleMenu} className="hover:text-neutral-400">Home</Link> */}
        <Link to="/about" onClick={toggleMenu} className="hover:text-neutral-400">About</Link>
        <Link to="/areasofpractice" onClick={toggleMenu} className="hover:text-neutral-400">Areas Of Practice</Link>
        <Link to="/contact" onClick={toggleMenu} className="hover:text-neutral-400">Contact</Link>
      </div>
    </nav>
  );
};

export default NavBar;
