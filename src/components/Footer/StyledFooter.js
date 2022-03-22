import styled from "styled-components";

export const Container = styled.div`
    height: 20rem;
    width: 100%;
    background-color: ${props => props.theme.primary};
    display: flex;
    padding-top: 2rem;
    gap: 1rem;
    flex-flow: column nowrap;
    text-align: center;

    h2{
        color: ${props => props.theme.background};
    }

    p{
        color: ${props => props.theme.background};
        padding-top: 2rem;
    }
`
export const FooterLinks = styled.ul`
    display: flex;
    justify-content: center;
    gap: 1rem;

    li{
        color: ${props => props.theme.background};
        font-size: 1.3rem;
    }
`
export const FooterSocials = styled.ul`
    display: flex;
    justify-content: center;
    gap: 1rem;

    li{
        color: ${props => props.theme.background};
        font-size: 2rem;
    }
`