import React from "react";
import img from "../../assets/img-home.svg";

import {
  ButtonAbout,
  ButtonCV,
  HomeButtons,
  HomeContainer,
  HomeData,
  HomeHandle,
  HomeSocial,
  HomeSocialLink,
  Image,
  Section,
} from "./StyledHome";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { Link as LinkS } from "react-scroll/modules";

const Home = () => {
  return (
    <Section id="home">
      <HomeContainer>
        <HomeData>
          <span>Hello, I'm</span>
          <h1>Francisco Gimenez</h1>
          <h3>FullStack Developer</h3>

          <HomeButtons>
            <ButtonCV>Download CV</ButtonCV>

            <LinkS to="about">
              <ButtonAbout>About</ButtonAbout>
            </LinkS>
          </HomeButtons>
        </HomeData>
        <HomeHandle>
          <Image src={img} alt="ipux" />
        </HomeHandle>
        <HomeSocial>
          <HomeSocialLink>
            <AiFillLinkedin to="home" />
          </HomeSocialLink>
          <HomeSocialLink>
            <AiFillGithub />
          </HomeSocialLink>
        </HomeSocial>
      </HomeContainer>
    </Section>
  );
};

export default Home;
