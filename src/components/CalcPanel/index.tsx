import React, { useEffect, useState } from "react";
import { BiDollar } from "react-icons/bi";
import { FaUser } from "react-icons/fa";

import Input from "../Input";
import PercentageButton from "../PercentageButton";
import PercentageButtonCustom from "../PercentageButtonCustom";
import {
  Container,
  LeftSidePanel,
  RightSidePanel,
  BillWrapper,
  TitleWrapper,
  TipsWrapper,
  SelectTipWrapper,
  NumberPeopleWrapper,
  HeaderTitle,
  ZeroError,
  ValueWrapper,
  TypeValueText,
  TypeValueAmount,
  ResetButton,
} from "./styles";

const CalcPanel: React.FC = () => {
  const [valueBill, setValueBill] = useState(0);
  const [numberPeople, setNumberPeople] = useState(1);
  const [percentageValue, setPercentageValue] = useState(0);

  const [tipAmount, setTipAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const handleNumberOfPeople = (value: string) => {
    setNumberPeople(Number(value));
  };

  const handlePercentageValue = (value: number) => {
    setPercentageValue(value);
  };

  const handleResetValue = () => {
    setValueBill(0);
    setNumberPeople(1);
    setPercentageValue(0);
    setTipAmount(0);
    setTotalAmount(0);
  };

  useEffect(() => {
    const tipValue = (valueBill * (percentageValue / 100)) / numberPeople;
    const totalValue = valueBill / numberPeople + tipValue;
    setTipAmount(tipValue);
    setTotalAmount(totalValue);
  }, [valueBill, percentageValue, numberPeople]);

  return (
    <Container>
      <LeftSidePanel>
        <BillWrapper>
          <TitleWrapper>Bill</TitleWrapper>
          <Input
            icon={BiDollar}
            type="number"
            placeholder={String(valueBill)}
            onChange={(e) => setValueBill(+e.target.value)}
          />
        </BillWrapper>

        <SelectTipWrapper>
          <TitleWrapper>Select Tip %</TitleWrapper>
          <TipsWrapper>
            <PercentageButton
              value="5"
              onClick={() => handlePercentageValue(5)}
              style={{
                backgroundColor: percentageValue === 5 ? "#26C2AE" : "",
              }}
            />
            <PercentageButton
              value="10"
              onClick={() => handlePercentageValue(10)}
              style={{
                backgroundColor: percentageValue === 10 ? "#26C2AE" : "",
              }}
            />
            <PercentageButton
              value="15"
              onClick={() => handlePercentageValue(15)}
              style={{
                backgroundColor: percentageValue === 15 ? "#26C2AE" : "",
              }}
            />
            <PercentageButton
              value="25"
              onClick={() => handlePercentageValue(25)}
              style={{
                backgroundColor: percentageValue === 25 ? "#26C2AE" : "",
              }}
            />
            <PercentageButton
              value="50"
              onClick={() => handlePercentageValue(50)}
              style={{
                backgroundColor: percentageValue === 50 ? "#26C2AE" : "",
              }}
            />
            <PercentageButtonCustom
              placeholder="Custom"
              id="custom-percentage"
              onChange={(e) => handlePercentageValue(+e.target.value)}
            />
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
      </LeftSidePanel>

      <RightSidePanel>
        <ValueWrapper>
          <TypeValueText>
            Tip Amount <p>/ person</p>
          </TypeValueText>
          <TypeValueAmount>${tipAmount.toFixed(2)}</TypeValueAmount>
        </ValueWrapper>

        <ValueWrapper>
          <TypeValueText>
            Total <p>/ person</p>
          </TypeValueText>
          <TypeValueAmount>${totalAmount.toFixed(2)}</TypeValueAmount>
        </ValueWrapper>

        <ResetButton type="button" onClick={handleResetValue}>
          Reset
        </ResetButton>
      </RightSidePanel>
    </Container>
  );
};

export default CalcPanel;
