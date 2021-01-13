import styled from "styled-components";

export const Repository = styled.a` /* Link boton */
  
  text-decoration: none;
  border-radius: 50px;
  background: #557194;
  //white-space: space nowrap;
  padding: 10px 15px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &.hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;