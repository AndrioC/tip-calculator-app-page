import React, { useState } from "react";
import { BiDollar } from "react-icons/bi";

import Input from "../Input";
import PercentageButton from "../PercentageButton";
import PercentageButtonCustom from "../PercentageButtonCustom";
import {
  Container,
  BillWrapper,
  TitleWrapper,
  SelectTipWrapper,
} from "./styles";

const CalcPanel: React.FC = () => {
  const [valueBill, setValueBill] = useState(0);
  return (
    <Container>
      <BillWrapper>
        <TitleWrapper>Bill</TitleWrapper>
        <Input icon={BiDollar} type="number" placeholder={String(valueBill)} />
      </BillWrapper>

      <SelectTipWrapper>
        <TitleWrapper>Select Tip %</TitleWrapper>
        <PercentageButton value="5" />
        <PercentageButtonCustom value={10} />
      </SelectTipWrapper>
    </Container>
  );
};

export default CalcPanel;
