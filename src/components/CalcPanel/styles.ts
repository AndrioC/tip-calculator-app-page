import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 920px;
  height: 480px;
  background: var(--white);
  border-radius: 24px;
  box-shadow: 0px 32px 43px rgba(79, 166, 175, 0.200735);
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

export const SelectTipWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
