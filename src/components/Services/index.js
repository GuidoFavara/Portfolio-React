import React from "react";
import Icon1 from "../../images/svg-1.svg";
import Icon2 from "../../images/svg-5.svg";
import Icon3 from "../../images/svg-4.svg";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Tech Stack</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Front End</ServicesH2>
          <ServicesP>
            JavaScript, React, Wordpress, TypeScript, WebPack, Axios, SaaS, Babel HTML5, CSS
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} to="www.google.com" />
          <ServicesH2>Back End</ServicesH2>
          <ServicesP>
            Firebase, Amazon AWS, Google Cloud, MySQL, MongoDB Node.Js, Rest APIs, Git
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Otros</ServicesH2>
          <ServicesP>
            C++, C#, Python, Django, Flask, Apache2, Linux, MacOS, Windows, MaterialUI, Photoshop
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
