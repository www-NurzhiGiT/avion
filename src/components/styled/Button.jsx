import styled from "styled-components";

export const ButtonTwo = styled.button`
  padding: 16px 32px 16px 32px;
  background-color: ${(props) => props.color || "#F9F9F9"};
  color: ${(props) => props.textColor || "black"};
  border: none;
  cursor: pointer;
  font-family: "Satoshi", sans-serif;
  &:hover {
    color: ${(props) => props.hoverColor || "#F0F0F0"};
    background-color: ${(props) => props.hoverBackgroundColor || "#E6E6E6"};
  }
  &:active {
    color: ${(props) => props.disabledColor || "orange"};
  }
`;
