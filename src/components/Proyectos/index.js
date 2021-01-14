import React from "react";
import Icon1 from "../../images/netflix.jpg";
import Icon2 from "../../images/coins.jpg";
import Icon3 from "../../images/tinder.jpg";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
  Linkero,
} from "./ProyectosElements";
import { Repository } from "./RepositoryElements";

const Proyectos = () => {
  return (
    <ServicesContainer id="proyectos">
      <ServicesH1>Últimos Proyectos</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Netflix Clon</ServicesH2>
          <ServicesP>
            React, Firebase, Bebel, Fuse.
          </ServicesP>
          <Linkero
                  href="https://guido-net.netlify.app"
                  target="_blank"
                  arial-label="LinkedIn"
                >
                  Demo
                </Linkero>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} to="www.google.com" />
          <ServicesH2>Coins Banking</ServicesH2>
          <ServicesP>
            React, Router Dom, Scroll, Styled
          </ServicesP>
          <Linkero
                  href="https://coins-banking.netlify.app/"
                  target="_blank"
                  arial-label="LinkedIn"
                >
                  Demo
                </Linkero>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Tinder Clon</ServicesH2>
          <ServicesP>
            React, Express, NodeJs, WebPack, MaterialUI, Swipe
          </ServicesP>
          <Linkero
                  href="https://github.com/GuidoFavara/Tinder-Front"
                  target="_blank"
                  arial-label="LinkedIn"
                >
                  Demo
                </Linkero>
        </ServicesCard>
      </ServicesWrapper>
       <Repository
                    href="https://github.com/GuidoFavara"
                    target="_blank"
                    arial-label="Github" 
                  >
                  Ver Source
                  </Repository>
    </ServicesContainer>

  );
};

export default Proyectos;
