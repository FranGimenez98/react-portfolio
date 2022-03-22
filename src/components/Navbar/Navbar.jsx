import React from "react";
import {
  Header,
  Logo,
  NavContainer,
  NavItem,
  NavLink,
  NavList,
  NavMenu,
} from "./StyledNavbar";

import { AiOutlineHome } from "react-icons/ai";

import { FaRegMoon, FaSun } from "react-icons/fa";
import {
  MdWorkOutline,
  MdOutlineFolder,
  MdOutlineEmail,
  MdPersonOutline,
} from "react-icons/md";


const Navbar = ({ theme, setTheme }) => {

  const handleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  const iconTheme =
    theme === "dark" ? (
      <FaSun className="icon" />
    ) : (
      <FaRegMoon className="icon" />
    );

  return (
    <Header>
      <NavContainer>
        <Logo>Fran</Logo>
        <NavMenu>
          <NavList>
            <NavItem>
              <NavLink to="home" smooth={true} duration={500} >
                <AiOutlineHome />
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink to="about" smooth={true} duration={400}>
                <MdPersonOutline />
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink to="skills" smooth={true} duration={400} >
                <MdOutlineFolder />
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink to="works" smooth={true} duration={400}>
                <MdWorkOutline />
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink to="form" smooth={true} duration={400}>
                <MdOutlineEmail />
              </NavLink>
            </NavItem>
          </NavList>
        </NavMenu>

        <div onClick={handleTheme}>{iconTheme}</div>
      </NavContainer>
    </Header>
  );
};

export default Navbar;
