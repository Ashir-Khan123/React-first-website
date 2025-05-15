import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
} from "flowbite-react";
import { NavLink } from "react-router";
import logo from "../../assets/logo.png"

export default function NavbarComp() {
  return (
    <Navbar className="flex justify-around fixed w-full z-50 top-0">
      <NavbarBrand>
        <span className="w-[110px]">
          <img src={logo} alt={"logo"}/>
        </span>
      </NavbarBrand>
      <div className="flex md:order-2">
        <Button className="uppercase hidden md:block">Register</Button>
        <NavbarToggle className="cursor-pointer"/>
      </div>
      <NavbarCollapse>
        <NavLink className={({ isActive }) => isActive ? "text-white" : "text-gray-400" } to="/" > Wev XV </NavLink>
        <NavLink className={({ isActive }) => isActive ? "text-white" : "text-gray-400" } to="/All_project">All Projects</NavLink>
        <NavLink className={({ isActive }) => isActive ? "text-white" : "text-gray-400" } to="/Community">Community</NavLink>
        <NavLink className={({ isActive }) => isActive ? "text-white" : "text-gray-400" } to="/About_us">About Us</NavLink>
      </NavbarCollapse>
    </Navbar>
  );
}





