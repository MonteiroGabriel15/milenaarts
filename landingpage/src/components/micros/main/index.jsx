import React, { useState } from 'react';
import { 
    MainContainer, 
    TitleContainer, 
    TitleImage, 
    AboutContainer, 
    AboutImage, 
    AboutText, 
    PoemContainer,
    CarouselContainer,
    CarouselPage,
    CarouselImage,
    CarouselButton,
    IconLinkContainer,
    Icon
} from './style';
import titleimagephoto from '../../../assets/pinceishorizontal.jpg';
import pfp from "../../../assets/pfp2.jpg";
import behanceIcon from '../../../assets/behance.png';  // ícone do Behance
import instagramIcon from '../../../assets/instagram.png';  // ícone do Instagram

const Main = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const images = [
        require('../../../assets/Acalento-Afeto.jpg'),
        require('../../../assets/Aconchego.jpg'),
        require('../../../assets/Água.jpg'),
        require('../../../assets/Gratidão.jpg'),
        require('../../../assets/Paladar.jpg'),
        require('../../../assets/Pausa.jpg'),
        require('../../../assets/Reconforto.jpg'),
        require('../../../assets/Sentir.jpg'),
        require('../../../assets/Sintonia.jpg')
    ];
    
    const totalPages = Math.ceil(images.length / 3);

    const nextPage = () => {
        setCurrentPage((prev) => (prev + 1) % totalPages);
    };

    const prevPage = () => {
        setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
    };

    const renderCarouselPage = (pageIndex) => {
        const startIndex = pageIndex * 3;
        const pageImages = images.slice(startIndex, startIndex + 3);

        return (
            <CarouselPage>
                {pageImages.map((image, index) => (
                    <CarouselImage key={startIndex + index} src={image} alt={`Image ${startIndex + index + 1}`} />
                ))}
            </CarouselPage>
        );
    };

    return (
        <MainContainer>
            <TitleContainer>
                <h1>MILENA RESENDE</h1>
                <h3>Artista  | Professora | Pesquisadora </h3>
                <TitleImage src={titleimagephoto} alt="Gratidão"/>
            </TitleContainer>
            <PoemContainer>
                <p>"A maior riqueza do homem é a sua incompletude" </p>
                <br/>
                <h3>- Manoel de Barros</h3>
            </PoemContainer>
            <AboutContainer>
        <AboutImage src={pfp} alt="Milenapfp" />
        <AboutText>
          <h1>Sobre mim</h1>
          <p>
            Milena Resende, 22, mineira. Arteira, faz aquarela, bordado, cerâmica
            e recicla papel. Dos títulos de gente grande, é Licenciada em Artes
            Visuais pela Universidade Federal de Juiz de Fora e professora da rede
            Estadual de Minas Gerais. Tem interesse em poéticas cotidianas, pesquisas
            em processo criativo, pertencimento e cadernos de artista. Sua criança
            interior brinca, rodopia... pinta e borda em seu coração.
          </p>
          <IconLinkContainer>
            <a href="https://www.behance.net/milenaresecf91/projects" target="_blank" rel="noopener noreferrer">
              <Icon src={behanceIcon} alt="Behance" />
            </a>
            <a href="https://www.instagram.com/mil_resende" target="_blank" rel="noopener noreferrer">
              <Icon src={instagramIcon} alt="Instagram" />
            </a>
          </IconLinkContainer>
        </AboutText>
      </AboutContainer>
            <CarouselContainer>
                {renderCarouselPage(currentPage)}
                <CarouselButton onClick={prevPage} position="left">&lt;</CarouselButton>
                <CarouselButton onClick={nextPage} position="right">&gt;</CarouselButton>
            </CarouselContainer>
        </MainContainer>
    );
}

export default Main;