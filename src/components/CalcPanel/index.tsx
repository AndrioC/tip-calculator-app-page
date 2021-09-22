import React, { useState } from "react";
import { BiDollar } from "react-icons/bi";
import { FaUser } from "react-icons/fa";

import Input from "../Input";
import PercentageButton from "../PercentageButton";
import PercentageButtonCustom from "../PercentageButtonCustom";
import {
  Container,
  BillWrapper,
  TitleWrapper,
  TipsWrapper,
  SelectTipWrapper,
  NumberPeopleWrapper,
  HeaderTitle,
  ZeroError,
} from "./styles";

const CalcPanel: React.FC = () => {
  const [valueBill, setValueBill] = useState(0);
  const [numberPeople, setNumberPeople] = useState(1);

  const handleNumberOfPeople = (value: string) => {
    setNumberPeople(Number(value));
  };
  return (
    <Container>
      <BillWrapper>
        <TitleWrapper>Bill</TitleWrapper>
        <Input icon={BiDollar} type="number" placeholder={String(valueBill)} />
      </BillWrapper>

      <SelectTipWrapper>
        <TitleWrapper>Select Tip %</TitleWrapper>
        <TipsWrapper>
          <PercentageButton value="5" />
          <PercentageButton value="10" />
          <PercentageButton value="15" />
          <PercentageButton value="25" />
          <PercentageButton value="50" />
          <PercentageButtonCustom placeholder="Custom" />
        </TipsWrapper>
      </SelectTipWrapper>

      <NumberPeopleWrapper>
        <HeaderTitle>
          <TitleWrapper>Number of People</TitleWrapper>
          {numberPeople === 0 && <ZeroError>Can't be zero</ZeroError>}
        </HeaderTitle>
        <Input
          icon={FaUser}
          type="number"
          placeholder={String(0)}
          onChange={(e) => handleNumberOfPeople(e.target.value)}
          value={numberPeople}
        />
      </NumberPeopleWrapper>
    </Container>
  );
};

export default CalcPanel;
