import React from "react"; 
import logo from "../../../assets/logo-milena-azul-escuro.png";
import menu from "../../../assets/menu.png"
import { Container, LogoContainer, LogoImage, MenuContainer, MenuImage } from "./style";


const Header = () => {
    return (
        <Container>
            <LogoContainer>
                <LogoImage src={logo}/>
            </LogoContainer>
            <MenuContainer>
                <MenuImage src={menu} />
            </MenuContainer>
        </Container>

    )
};

export default Header;