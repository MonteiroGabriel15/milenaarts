import styled from "styled-components";
export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  overflow-x: hidden;

  /* Responsividade para dispositivos móveis */
  @media (max-width: 768px) {
    height: auto;
  }

  /* Responsividade para tablets/iPads */
  @media (min-width: 768px) and (max-width: 1024px) {
    height: auto;
    width: 100vw;
  }

  /* Responsividade para telas muito pequenas (smartphones) */
  @media (max-width: 480px) {
  }
`;