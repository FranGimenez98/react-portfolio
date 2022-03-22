import styled from "styled-components";

export const Container = styled.section`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column nowrap;

    h2{
        color: ${props => props.theme.primary};
    }
`
export const WorkContainer = styled.div`
    background-color: ${props => props.theme.background_alt};
    display: flex;
    flex-flow: column nowrap;
    height: 15rem;
    border-radius: 15px;
    box-shadow: ${props => props.theme.boxShadow};

    h3{
        margin: 1rem 0 .5rem 1rem;
        color: ${props => props.theme.primary};
    }

    span{
        margin-left: 1rem;
        color: ${props => props.theme.font};
    }
`
export const Image = styled.img`
    height: 10rem;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
`

export const DemoContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;

    span{
        color: ${props => props.theme.font};
    }

    .arrow{
        color: ${props => props.theme.secondary};
    }
`