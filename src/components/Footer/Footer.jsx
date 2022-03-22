import React from "react";
import { Container, FooterLinks, FooterSocials } from "./StyledFooter";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <Container>
      <h2>Fran</h2>
      <FooterLinks>
        <li>About</li>
        <li>Experience</li>
        <li>Works</li>
      </FooterLinks>
      <FooterSocials>
        <li>
          <AiFillLinkedin />
        </li>
        <li>
          <AiFillGithub />
        </li>
      </FooterSocials>
      <p>© Francisco. All rights reserved.</p>
    </Container>
  );
};

export default Footer;
