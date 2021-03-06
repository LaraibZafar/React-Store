import styled, { css } from "styled-components";

const normalButtonStyles = css`
  background-color: black;
  color: white;
  border: none;
  &:hover {
    background-color: white;
    color: black;
    border: 2px solid black;
  }
`;

const invertedButtonStyles = css`
  background-color: white;
  color: black;
  border: 2px solid black;
  outline: none;
  position: absolute;
  top: 78%;
  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const googleButtonStyles = css`
  background-color: #4285f4;
  color: white;
  border: none;
  outline: 1px solid #4285f4;

  &:hover {
    background-color: #407adb;
    border: none;
  }
`;

const selectButtonStyle = (props) => {
  if (props.isGoogleButton) {
    return googleButtonStyles;
  } else {
    return props.invertedButton ? invertedButtonStyles : normalButtonStyles;
  }
};

export const CustomButtonStyles = styled.button`
  width: 170px;
  min-width: 50px;
  height: 55px;
  font-size: 18px;
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  ${selectButtonStyle}
  @media screen and (max-width: 900px) {
    display: block;
    min-width: unset;
    width: 70%;
    min-width: fit-content;
    margin: 0px;
  }
`;
