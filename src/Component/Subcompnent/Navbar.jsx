import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
} from "flowbite-react";
import { NavLink } from "react-router"; // ✔️ make sure you're using `react-router-dom`
import logo from "../../assets/logo.png";
import { useState } from "react";

export default function NavbarComp() {
  const [Open, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!Open);
  };

  const handleLinkClick = () => {
    setIsOpen(false); 
  };

  return (
    <div>
      <Navbar className="flex justify-around fixed w-full z-50 top-0">
        <NavbarBrand>
          <span className="w-[110px]">
            <img src={logo} alt={"logo"} />
          </span>
        </NavbarBrand>
        <div className="flex md:order-2">
          <Button className="uppercase hidden md:block">Register</Button>
          <NavbarToggle onClick={handleToggle} className="cursor-pointer" />
        </div>
        <NavbarCollapse
          className={`font-semibold leading-10 text-center ${
            Open ? "block" : "hidden"
          } md:block`}>
          <NavLink
            onClick={handleLinkClick}
            className={({ isActive }) =>
              isActive ? "text-white" : "text-gray-400"
            }
            to="/"
          >
            Wev XV
          </NavLink>
          <NavLink
            onClick={handleLinkClick}
            className={({ isActive }) =>
              isActive ? "text-white" : "text-gray-400"
            }
            to="/All_project"
          >
            All Projects
          </NavLink>
          <NavLink
            onClick={handleLinkClick}
            className={({ isActive }) =>
              isActive ? "text-white" : "text-gray-400"
            }
            to="/Community"
          >
            Community
          </NavLink>
          <NavLink
            onClick={handleLinkClick}
            className={({ isActive }) =>
              isActive ? "text-white" : "text-gray-400"
            }
            to="/About_us"
          >
            About Us
          </NavLink>
        </NavbarCollapse>
      </Navbar>
    </div>
  );
}






