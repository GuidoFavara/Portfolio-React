import styled from "styled-components";

export const ServicesContainer = styled.div` /* Contenedor */
  height: 700px; /* 800 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px; /* 1300*/
  }
`;

export const ServicesWrapper = styled.div` /* Espacios entre cards*/
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 15px;

  @media creen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ServicesCard = styled.div` /* Estilo Card */
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
a
  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    //cursor: pointer;
  }
`;

export const ServicesIcon = styled.img` /* Tamaño imagenes */
  height: 200px;
  width: 210px;
  margin-bottom: 10px;
`;

export const ServicesH1 = styled.h1` /* Titulo de entrada */
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 10px;
  }
`;

export const ServicesH2 = styled.h1` /* Título del card */
  font-size: 1rem;
  margin-bottom: 8px;
`;
export const Linkero = styled.a` /* Link boton */
 border-radius: 50px;
  background: ${({ primary }) => (primary ? "#010606" : "#557194")}; /* primer boton color */
  white-space: nowrap;
  padding: ${({ big }) => (big ? "10px 48px" : "8px 15px")};
  color: ${({ dark }) => (dark ? "#010606" : "#fff")}; /* color texto boton */
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#557194" : "black")};
  }
`;
export const ServicesP = styled.p` /* Subtitulo */
  font-size: 1rem;
  text-align: center;
  margin-bottom: 1px;
`;

