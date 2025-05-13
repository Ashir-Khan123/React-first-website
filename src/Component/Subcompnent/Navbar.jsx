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
    <Navbar className="flex justify-around">
      <NavbarBrand>
        <span className="w-[120px]">
          <img src={logo} alt={"logo"}/>
        </span>
      </NavbarBrand>
      <div className="flex md:order-2">
        <Button className="uppercase">Register</Button>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavLink className={({ isActive }) => isActive ? "text-white" : "text-gray-400" } to="/" > Wev XV </NavLink>
        <NavLink className={({ isActive }) => isActive ? "text-white" : "text-gray-400" } to="/all_project">All Projects</NavLink>
        <NavLink className={({ isActive }) => isActive ? "text-white" : "text-gray-400" } to="/community">Community</NavLink>
        <NavLink className={({ isActive }) => isActive ? "text-white" : "text-gray-400" } to="/about_us">About Us</NavLink>
      </NavbarCollapse>
    </Navbar>
  );
}
