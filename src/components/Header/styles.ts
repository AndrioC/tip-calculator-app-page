import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 920px;
  margin-bottom: 90px;

  /* Mobile Version */
  @media (max-width: 539px) {
    margin-bottom: 30px;
  }
`;

export const LogoImage = styled.img`
  width: 90px;
  height: 54px;
`;
