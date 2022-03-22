import styled from "styled-components";
import {Link as LinkS} from 'react-scroll'
import { AiOutlineHome } from "react-icons/ai";
import { MdWorkOutline } from "react-icons/md";

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${(props) => props.theme.background};
  z-index: 100;

  .icon{
    color: ${props => props.theme.primary};
    font-size: 1.1rem;
    cursor: pointer;
  }
`;

export const NavContainer = styled.nav`
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 968px;
  margin-left: 1rem;
  margin-right: 1rem;
`;
export const Logo = styled.h2`
  color: ${(props) => props.theme.primary};
  font-weight: normal;
  font-size: 1.2rem;
`;

export const NavMenu = styled.div`
  position: fixed;
  bottom: 1rem;
  width: 90%;
  background-color: hsla(134, 32%, 16%, 0.25);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 1rem 2.25rem;
`;

export const NavList = styled.ul`  
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const NavItem = styled.li`

`

export const NavLink = styled(LinkS)`
    color: white;
    font-size: 1.5rem;
    padding: 0.4rem;
    display: flex;
    border-radius: 5rem;
    cursor: pointer;

    &.active{
        color: red;
    }
`
