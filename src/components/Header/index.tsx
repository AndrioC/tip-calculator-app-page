import React from "react";

import imgLogo from "../../assets/logo.svg";
import { Container, LogoImage } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <LogoImage src={imgLogo} alt="logo" />
    </Container>
  );
};

export default Header;
