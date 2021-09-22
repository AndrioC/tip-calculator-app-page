import styled, { css } from "styled-components";

interface ContainerProps {
  isFocused: boolean;
  value?: number;
}
export const Container = styled.div<ContainerProps>`
  width: 379px;
  height: 48px;
  background: var(--grey);
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 21px;

  ${(props) =>
    props.isFocused &&
    css`
      border: 2px solid;
      border-color: var(--green-40);
    `}

  ${(props) =>
    props.value === 0 &&
    css`
      border: 2px solid;
      border-color: var(--orange);
    `}

  svg {
    fill: var(--green-light);
  }

  input {
    flex: 1;
    border: none;
    background: transparent;
    outline: none;
    direction: rtl;
    color: var(--green-dark);
    font-weight: bold;
    font-size: 24px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    background: #fff;
  }

  input::placeholder {
    opacity: 0.35;
  }
`;
