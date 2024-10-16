import styled from "styled-components";
// Responsividade do Header
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100vw;
  height: 10vh;
  background-color: #fff;
  align-items: center;
  padding: 2.5rem;
  box-shadow: 10px 5px 5px black;
  /* Responsividade para dispositivos móveis */
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 10px;
  }

  /* Responsividade para tablets/iPads */
  @media (min-width: 768px) and (max-width: 1024px) {
    flex-direction: row;
    height: 8vh; /* Reduzindo um pouco a altura para tablets */
  }
`;

export const LogoContainer = styled.div`
  width: 6vw;
  height: 10vh;

  @media (max-width: 768px) {
    width: 20vw;
    height: auto;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 10vw;
    height: auto;
  }
`;

export const LogoImage = styled.img`
  width: 100%;
  height: 100%;

  @media (max-width: 768px) {
    height: auto;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    height: auto;
  }
`;

export const MenuContainer = styled.div`
  width: 1.5vw;
  height: 3vh;
  margin-right: 2rem;

  @media (max-width: 768px) {
    width: 5vw;
    height: auto;
    margin-right: 0;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 3vw;
    height: auto;
    margin-right: 1rem;
  }
`;

export const MenuImage = styled.img`
  width: 100%;
  height: 100%;
  cursor: pointer;

  @media (max-width: 768px) {
    height: auto;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    height: auto;
  }
`;
