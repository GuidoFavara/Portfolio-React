import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="sobremi" onClick={toggle}>
            Sobre mí
          </SidebarLink>
          <SidebarLink to="services" onClick={toggle}>
            Tech Stack
          </SidebarLink>
          <SidebarLink to="proyectos" onClick={toggle}>
            Proyectos
          </SidebarLink>
          <SidebarLink to="footer" onClick={toggle}>
            Contacto
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute href="//www.github.com/GuidoFavara"
              target="_blank"
              arial-label="GitHub" onClick={toggle}>
            Repositorio
          </SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
