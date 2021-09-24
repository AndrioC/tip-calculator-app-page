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
  margin-right: 15px;
  margin-bottom: 15px;

  :hover {
    background: var(--green-50);
    color: var(--green-dark);
  }

  /* Mobile Version */
  @media (max-width: 539px) {
    width: 147px;
  }
`;
