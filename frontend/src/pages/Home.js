import { StyledSubtitle, StyledTitle } from "../components/Styles";

const Home = () =>{
    return (
        <div>
            <div>
                <StyledTitle size = {65}>Bienvenido a Tinder-UNI</StyledTitle>
                <StyledSubtitle size = {27}>La única plataforma para conocer personas dentro de la universidad :D</StyledSubtitle>
            </div>
        </div>
    );
}

export default Home;