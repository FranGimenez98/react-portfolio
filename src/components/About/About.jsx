import React from "react";
import {
  AboutContainer,
  ExperienceBox,
  Image,
  Section,
  ImageHandle,
  InforWrapper,
  Button,
} from "./StyledAbout";
import { RiComputerLine } from "react-icons/ri";

const About = () => {
  return (
    <Section id="about">
      <span>My Intro</span>
      <h2>About Me</h2>
      <AboutContainer>
        {/* <ImageHandle>
          <Image src={img} />
        </ImageHandle> */}
        <InforWrapper>
          
          <p>
            Full Stack developer more oriented to the Front End, passionate
            about web development dedicated to creating functional products and
            with great ambition to continue improving and learning day by day,
            committed and open to any offer.
          </p>
          <ExperienceBox>
            <RiComputerLine className="computer" />
            <h3>Experience</h3>
            <h4>1 Year</h4>
            <span>As a self-taught student.</span>
            <h4>4 Months</h4>
            <span>In SoyHenry Bootcamp.</span>
          </ExperienceBox>
        </InforWrapper>
      </AboutContainer>
    </Section>
  );
};

export default About;