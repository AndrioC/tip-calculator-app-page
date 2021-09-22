import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 920px;
  height: 480px;
  background: var(--white);
  border-radius: 24px;
  box-shadow: 0px 32px 43px rgba(79, 166, 175, 0.200735);
  padding: 48px;
`;

export const BillWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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
