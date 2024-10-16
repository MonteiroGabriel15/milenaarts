import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  position: relative;


  h1 {
    font-family: 'Montserrat', sans-serif;
    font-size: 7vw;
    color: #FFF;
    position: absolute;
    top: 5%;
    z-index: 1;
    text-align: center;
  }

    h3 {
    font-family: 'Montserrat', sans-serif;
    font-size: 2vw;
    color: #FFF;
    position: absolute;
    top: 25%;
    z-index: 1;
    text-align: center;
  }

  @media (max-width: 768px) {
    height: 50vh;

    h1 {
      font-size: 12vw;
    }
  }
`;

export const TitleImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const PoemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20vh;


  p{
  font-family: 'Montserrat', sans-serif;
  font-size: 2vw;
  }
  h3{
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5vw;
  position: relative;
  left: 220px;
  `

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 70vh;

  @media (max-width: 768px) {
    flex-direction: column;
    min-height: auto;
  }
`;

export const AboutImage = styled.img`
  width: 40%;
  height: auto;
  max-height: 70vh;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 80%;
    margin-bottom: 2rem;
  }
`;

export const AboutText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30%;
  padding: 0 2rem;

  @media (max-width: 768px) {
    width: 80%;
  }
`;