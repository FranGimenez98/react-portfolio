import React from "react";
import {
  Container,
  SkillsBox,
  SkillsContainer,
  SkillsContent,
  SkillsData,
  SkillsGroup,
  Title,
} from "./StyledSkills";
import { ImCheckmark } from "react-icons/im";
import { BsCheckLg } from "react-icons/bs";

const Skills = () => {
  return (
    <Container id="skills">
      <span>My Skills</span>
      <h2>My Experience</h2>
      <SkillsContainer>
        <SkillsContent>
          <Title>Front End</Title>
          <SkillsBox>
            <SkillsGroup>
              <SkillsData>
                <BsCheckLg className="cheked"/>

                <div>
                  <h3>HTML</h3>
                </div>
              </SkillsData>
              <SkillsData>
                <BsCheckLg className="cheked"/>

                <div>
                  <h3>CSS</h3>
                </div>
              </SkillsData>
              <SkillsData>
                <BsCheckLg className="cheked"/>

                <div>
                  <h3>SCSS</h3>
                </div>
              </SkillsData>
              <SkillsData>
                <BsCheckLg className="cheked"/>

                <div>
                  <h3>Styled Components</h3>
                </div>
              </SkillsData>
            </SkillsGroup>

            <SkillsGroup>
              <SkillsData>
                <BsCheckLg className="cheked"/>

                <div>
                  <h3>JavaScript</h3>
                </div>
              </SkillsData>
              <SkillsData>
                <BsCheckLg className="cheked"/>

                <div>
                  <h3>React</h3>
                </div>
              </SkillsData>
              <SkillsData>
                <BsCheckLg className="cheked"/>

                <div>
                  <h3>Redux</h3>
                </div>
              </SkillsData>
            </SkillsGroup>
          </SkillsBox>
        </SkillsContent>

        <SkillsContent>
          <Title>Back End</Title>
          <SkillsBox>
            <SkillsGroup>
              <SkillsData>
                <BsCheckLg className="cheked"/>

                <div>
                  <h3>NodeJS</h3>
                </div>
              </SkillsData>
              <SkillsData>
                <BsCheckLg className="cheked"/>

                <div>
                  <h3>Express</h3>
                </div>
              </SkillsData>
            </SkillsGroup>
            <SkillsGroup>
              <SkillsData>
                <BsCheckLg className="cheked"/>

                <div>
                  <h3>PostgreSql</h3>
                </div>
              </SkillsData>
              <SkillsData>
                <BsCheckLg className="cheked"/>

                <div>
                  <h3>Sequelize</h3>
                </div>
              </SkillsData>
            </SkillsGroup>
          </SkillsBox>
        </SkillsContent>
      </SkillsContainer>
    </Container>
  );
};

export default Skills;