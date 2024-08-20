import { Link } from "react-router-dom";

const NavBar = () => {


    return (
      <nav className="bg-blue-950 text-neutral-100 font-semibold h-[60px] fixed top-0 w-full z-10">
        <div className="flex flex-row items-center align-middle justify-evenly h-full">
          <Link to='home' className="hover:text-neutral-400 cursor-pointer">Home</Link>
          <Link to='about' className="hover:text-neutral-400 cursor-pointer">About</Link>
          <Link to='areasofpractice' className="hover:text-neutral-400 cursor-pointer">Areas Of Practice</Link>
        </div>
      </nav>
    );
    
  }
  
  export default NavBar;
  