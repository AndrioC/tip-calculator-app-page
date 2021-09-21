import styled from "styled-components";

interface ContainerProps {
  isFocused: boolean;
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
