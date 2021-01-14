import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export const HeroContainer = styled.div`
 /* background: #0c0c0c; */ /*color detras del fondo */
  display: flex;
  justify-content: center; /* Centrado del texto */
  align-items: flex-end; /* Ubicacion del texto */
  padding: 370px 30px;
  height: 1024px;

  @media screen and (max-width: 768px) {
    height: 300px;
  }

  @media screen and (max-width: 480px) {
    height: 400px;
  }
  
  position: relative;
  z-index: 1;
  //background: #e0e4eb; /*este */
  //background: red;

  /*:before {
    content: "";
    position: absolute;
    top: 0;
    left: 1;
    right: 0;
    bottom: 0;
    /*background: linear-gradient(  /* Efecto para oscureser el video/img  */ /*
        180deg,
        rgb(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);*/
   // z-index: 2; 
//  }
`;

export const HeroBg = styled.div` /* posicion del fondo */
  position: absolute;
  top: 0; /*-100px */
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

/*export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;
*/
export const ImgBg = styled.img`
  width: 100%;
  height: 100%;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1100px; /* max-width: 1100px;*/
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 24px;
`;

export const HeroH1 = styled.h1` /* titulos */
  color: #fff;
  font-size: 48px;
  text-align: center;

  
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;
export const HeroP = styled.p` /* h2 del titulo */
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ArrowFoward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;
export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
