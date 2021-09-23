import React, { ButtonHTMLAttributes } from "react";

import { Container } from "./styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  value?: string;
};

const PercentageButton: React.FC<ButtonProps> = ({ value, ...rest }) => {
  return (
    <Container {...rest} type="button">
      {value}%
    </Container>
  );
};

export default PercentageButton;
