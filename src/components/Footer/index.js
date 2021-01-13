import React from "react";
import {
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import{AiOutlineMail} from 'react-icons/ai'
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  ContactMe,
} from "./FooterElemnts";
import { animateScroll as scroll } from "react-scroll";
const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer id="footer">
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Contacto</FooterLinkTitle>
              <FooterLink href="https://www.linkedin.com/in/guido-favara/"
              target="_blank">LinkedIn</FooterLink>
              <FooterLink href="mailto:guido.favara05@gmail.com">Mail</FooterLink>
              <FooterLink href="https://github.com/GuidoFavara"
              target="_blank">GitHub</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Educación</FooterLinkTitle>
              <FooterLink href="https://drive.google.com/drive/folders/1lJKlWtvbPwoFyx3LzGjfk6hlVai64D7y?usp=sharing"
              target="_blank"
              arial-label="Educacion">Ver Certificados</FooterLink>
              <FooterLink href="https://drive.google.com/file/d/1mjjA9cpaeb5GJ9Qwbbcxk7THN4Cz0gEY/view?usp=sharing"
              target="_blank"
              arial-label="cv">Ver CV</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome} />
            <SocialLogo />
            <WebsiteRights>
              {new Date().getFullYear()} Todos los derechos reservados.
              Desarrollado por {" "}
              {
                <ContactMe
                  href="//www.linkedin.com/in/guido-favara/"
                  target="_blank"
                  arial-label="LinkedIn"
                >
                  Guido Favara ©
                </ContactMe>
              }
            </WebsiteRights>
            <SocialIconLink
              href="//www.github.com/GuidoFavara"
              target="_blank"
              arial-label="GitHub"
            >
              <FaGithub />
            </SocialIconLink>
            <SocialIcons>
              <SocialIconLink
                href="//www.linkedin.com/in/guido-favara/"
                target="_blank"
                arial-label="LinkedIn"
              >
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
            <SocialIcons>
              <SocialIconLink
               href="mailto:guido.favara05@gmail.com">
                <AiOutlineMail />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
