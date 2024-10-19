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
  margin-bottom: 2rem;

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
      font-size: 10vw;
      top: 10%;
    }

    h3 {
      font-size: 4vw;
      top: 30%;
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    h1 {
      font-size: 8vw;
    }

    h3 {
      font-size: 3vw;
    }
  }
`;

export const TitleImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const PoemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 2rem 0;

  p {
    font-family: 'Montserrat', sans-serif;
    font-size: 2vw;
    text-align: center;
  }
  
  h3 {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.5vw;
    margin-top: 1rem;
    align-self: flex-end;
    margin-right: 10%;
  }

  @media (max-width: 768px) {
    p {
      font-size: 4vw;
    }

    h3 {
      font-size: 3vw;
      margin-right: 5%;
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    p {
      font-size: 3vw;
    }

    h3 {
      font-size: 2vw;
    }
  }
`;

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 2rem 0;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const AboutImage = styled.img`
  width: 30%;
  height: 50%;
  object-fit: cover;
  margin-right: 2rem;

  @media (max-width: 768px) {
    width: 80%;
    height: auto;
    margin-right: 0;
    margin-bottom: 2rem;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 40%;
  }
`;

export const AboutText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 40%;

  h1 {
    font-family: 'Montserrat', sans-serif;
    font-size: 30px;
    margin-bottom: 1rem;
  }

  p { 
    font-family: 'Montserrat', sans-serif;
    font-size: 15px;
    text-align: justify;
  }
    
  @media (max-width: 768px) {
    width: 80%;
    align-items: center;

    h1 {
      font-size: 24px;
    }

    p {
      font-size: 14px;
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 50%;

    h1 {
      font-size: 28px;
    }

    p {
      font-size: 14px;
    }
  }
`; 

