import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 920px;
  height: 480px;
  background: var(--white);
  border-radius: 24px;
  box-shadow: 0px 32px 43px rgba(79, 166, 175, 0.200735);
  padding: 33px;
`;

export const BillWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const LeftSidePanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const RightSidePanel = styled.div`
  display: flex;
  flex-direction: column;
  width: 414px;
  height: 420px;
  border-radius: 15px;
  padding: 57px 42px;
  background: var(--green-dark);
  position: relative;
`;

export const TitleWrapper = styled.span`
  color: var(--green-100);
  font-weight: bold;
  font-size: 15px;
  margin-bottom: 6px;
`;

export const TipsWrapper = styled.div`
  margin-top: 18px;
  display: flex;
  width: 420px;
  flex-flow: row wrap;
`;

export const SelectTipWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 42px;
`;

export const NumberPeopleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 42px;
  width: 390px;
`;

export const HeaderTitle = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ZeroError = styled.span`
  color: var(--orange);
  font-weight: bold;
  font-size: 15px;
  margin-bottom: 6px;
  margin-right: 13px;
`;

export const ValueWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 42px;
`;
export const TypeValueText = styled.span`
  color: var(--white);
  font-size: 18px;
  font-weight: bold;

  p {
    color: var(--green-60);
    font-size: 13px;
  }
`;
export const TypeValueAmount = styled.span`
  font-size: 48px;
  font-weight: bold;
  color: var(--green-40);
`;

export const ResetButton = styled.button`
  text-transform: uppercase;
  background: var(--green-40);
  width: 333px;
  height: 48px;
  border: none;
  outline: none;
  color: var(--green-dark);
  font-size: 21px;
  font-weight: bold;
  position: absolute;
  bottom: 42px;
  transition: background-color 0.3s;

  :hover {
    background: var(--green-50);
  }
`;
