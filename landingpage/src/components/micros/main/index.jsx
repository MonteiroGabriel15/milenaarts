    import React from 'react';
    import { MainContainer, TitleContainer, TitleImage, AboutContainer, AboutImage, AboutText, PoemContainer } from './style';
    import titleimagephoto from '../../../assets/pinceishorizontal.jpg';
    import pfp from "../../../assets/pfp2.jpg";
    const Main = () => {
        return (
            <MainContainer>
            <TitleContainer>
                <h1>MILENA RESENDE</h1>
                <h3>Artista  | Professora | Pesquisadora </h3>
                <TitleImage src={titleimagephoto} alt="Gratidão"/>
            </TitleContainer>
            <PoemContainer>
                <p>“A maior riqueza do homem é a sua incompletude” </p>
                <br></br>                    <h3>- Manoel de Barros</h3>
            </PoemContainer>
            <AboutContainer>
                <AboutImage src = {pfp} alt="Milenapfp"/>
                <AboutText>
                    Sobre mim
                </AboutText>
            </AboutContainer>
            </MainContainer>
        );
    }

    export default Main;