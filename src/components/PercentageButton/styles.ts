import styled from "styled-components";

export const Container = styled.button`
  width: 120px;
  height: 48px;
  background: var(--green-dark);
  border: none;
  outline: none;
  border-radius: 6px;
  font-weight: bold;
  font-size: 24px;
  color: var(--white);
  transition: background-color 0.3s;

  :hover {
    background: var(--green-50);
    color: var(--green-dark);
  }
`;
