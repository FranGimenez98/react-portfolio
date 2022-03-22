import React from "react";
import { Container, DemoContainer, Image, WorkContainer } from "./StyledWorks";
import movie from "../../assets/movies.png";
import { IoMdArrowRoundForward } from "react-icons/io";

export const Works = () => {
  return (
    <Container id="works">
      <span>My Portfolio</span>
      <h2>Recent Works</h2>
      <WorkContainer>
        <Image src={movie} alt="" />
        <h3>Front End Movies SPA</h3>
        <DemoContainer>
          <span>Demo</span>
          <IoMdArrowRoundForward className="arrow" />
        </DemoContainer>
      </WorkContainer>
    </Container>
  );
};
