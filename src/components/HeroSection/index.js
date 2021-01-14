import React, { useState } from "react";
//import Video from "../../videos/video.mp4"; /* Si quiero un fondo de video habilito esto y cambio ImgBG por VideoBg */
import Img from "../../images/fondo2.jpg";
import { Button } from "../ButtonElement";
import {
  HeroContainer,
  HeroBg,
  //VideoBg,
  ImgBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowFoward,
  ArrowRight,
} from "./HeroElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <ImgBg src={Img} type="image/jpeg" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Front End Developer</HeroH1>
        <HeroP>
          Hola!, Soy Guido
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to="sobremi"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Sobre mí {hover ? <ArrowFoward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
