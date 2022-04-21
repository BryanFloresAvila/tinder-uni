import styled from 'styled-components';

import background from "./../assets/background.jpg";

export const colors ={
    primary: "#00bcd4",
    theme: "#00bcg5",
    light1: "#fafafa",
    light2: "#f5f5f5",
    dark1: "#212121",
    dark2: "#303030",
    dark3: "#424242",
    red: "dc2626"
}

export const StyledContainer = styled.div`
    margin: 0;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(0deg, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${background});
    background-size: cover;
    background-attachment: fixed;
`;

export const StyledTitle = styled.h1`
    font-size: ${(props) => props.size}px;
    text-align: center;
    color: ${(props) => props.color ? props.color : props.primary};
    padding: 5px;
    margin-bottom: 20px;
`;

export const StyledSubtitle = styled.h2`
    font-size: ${(props) => props.size}px;
    text-align: center;
    color: ${(props) => props.color ? props.color : props.primary};
    padding: 5px;
    margin-bottom: 25px;
`