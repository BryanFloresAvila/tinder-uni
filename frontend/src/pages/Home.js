import React  from 'react';
import { Avatar, ButtonGroup, StyledButton, StyledSubtitle, StyledTitle } from "../components/Styles";
import logo from "./../assets/logo.jpg";
const Home = () =>{
    return (
        <div>
            <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                backgroundColor: "transparent",
                width: "100%",
                padding: "15px",
                display: "flex",
                justifyContent: "flex-start",
            }}>
                <Avatar image = {logo}></Avatar>
            </div>
            <StyledTitle size = {65}>Bienvenido a Social-UNI</StyledTitle>
            <StyledSubtitle size = {27}>La única plataforma para conocer personas dentro de la universidad :D</StyledSubtitle>   
            <ButtonGroup>
                <StyledButton to = "/login">Login</StyledButton>
                <StyledButton to = "/signup">SignUp</StyledButton>
            </ButtonGroup>
        </div>
    );
}

export default Home;