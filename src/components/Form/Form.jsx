import React from "react";
import { Container, FormContainer, Button, InputContainer } from "./StyledForm";

const Form = () => {
  return (
    <Container id="form">
      <span>Contact Me</span>
      <h2>Get in Touch</h2>
      <FormContainer>
          
        <InputContainer>
          <label>Name</label>
          <input type="text" placeholder="Enter your Name" />
        </InputContainer>
        
        <InputContainer>
        <label>Mail</label>
          <input type="text" placeholder="Enter your Mail" />
        </InputContainer>
        
        <InputContainer>
          <label>Message</label>
          <textarea type="text" placeholder="Leave me your Message" />
        </InputContainer>

        <Button>Send</Button>
      </FormContainer>

    </Container>
  );
};

export default Form;
