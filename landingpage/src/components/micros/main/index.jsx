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
                    <h1>Sobre mim</h1>
                    <p>Milena Resende, 22, mineira. Arteira, faz aquarela, bordado, cerâmica e recicla papel.
Dos títulos de gente grande, é Licenciada em Artes Visuais pela Universidade Federal
de Juiz de Fora e professora da rede Estadual de Minas Gerais. Tem interesse em
poéticas cotidianas, pesquisas em processo criativo, pertencimento e cadernos de
artista. Sua criança interior brinca, rodopia... pinta e borda em seu coração.</p>
                </AboutText>
            </AboutContainer>
            </MainContainer>
        );
    }

    export default Main;