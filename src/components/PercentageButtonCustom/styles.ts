import styled, { css } from "styled-components";

interface ContainerProps {
  isFocused: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 120px;
  height: 48px;
  background: var(--grey);
  border: none;
  outline: none;
  border-radius: 6px;
  font-weight: bold;
  font-size: 24px;
  color: var(--white);
  transition: background-color 0.3s;
  display: flex;
  padding: 12px;

  ${(props) =>
    props.isFocused &&
    css`
      color: #ff9000;
      border: 2px solid;
      border-color: #ff9000;
    `}

  input {
    flex: 1;
    width: 100%;
    border: none;
    background: transparent;
    outline: none;
    direction: rtl;
    color: var(--green-dark);
    font-weight: bold;
    font-size: 24px;
  }
`;
