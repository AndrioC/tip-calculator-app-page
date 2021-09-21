import React from "react";

import { Container } from "./styles";

interface Props {
  value: string;
}

const PercentageButton: React.FC<Props> = ({ value }) => {
  return <Container type="button">{value}%</Container>;
};

export default PercentageButton;
