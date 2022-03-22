import styled from "styled-components";

export const Container = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  margin-left: 2rem;
  margin-right: 2rem;

  h2 {
    color: ${(props) => props.theme.primary};
    margin-bottom: 1rem;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-flow: column;
  width: 100%;
  padding-top: 2rem;
`;

export const InputContainer = styled.div`
  position: relative;
  height: 4rem;
  margin-bottom: 2rem;

  input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 2px solid ${(props) => props.theme.primary};
    border-radius: 15px;
    background: none;
    color: ${(props) => props.theme.font};
    outline: none;
    z-index: 1;
    padding-left: 1rem;
  }

  label {
    position: absolute;
    top: -0.55rem;
    z-index: 10;
    left: 1.25rem;
    font-size: 15px;
    background-color: ${(props) => props.theme.background};
  }

  textarea {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 2px solid ${(props) => props.theme.primary};
    border-radius: 15px;
    background: none;
    color: ${(props) => props.theme.font};
    outline: none;
    z-index: 1;
    padding: 1rem;
    resize: none;
    height: 11rem;
    padding: 1rem;
  }
`;

export const Button = styled.button`
  border: none;
  border-radius: 15px;
  background-color: ${(props) => props.theme.primary};
  width: 8rem;
  height: 2.5rem;
  margin-top: 6rem;
  color: ${props => props.theme.background}
`;
