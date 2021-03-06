import styled, { css } from "styled-components";

import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/icons8-ethereum.svg";
import CartIcon from "../shopping-cart/shopping-cart.component";

const ButtonTag = css`
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  min-width: fit-content;
  @media screen and (max-width: 800px) {
    padding: 10px;
  }
`;

export const HeaderContainer = styled.div`
  padding: 15px 25px 15px 25px;
  margin: 15px 0px 25px 0px;
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 800px) {
    padding: 10px;
    height: 60px;
    margin: 20px 0px;
  }
`;

export const LogoImage = styled(Logo)`
  height: 70px;
  width: 70px;
  @media screen and (max-width: 800px) {
    height: 50px;
    width: 50px;
  }
`;

export const NavigationButtons = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  font-size: 14px;
  @media screen and (max-width: 800px) {
    font-size: 11px;
  }
`;

export const ButtonLink = styled(Link)`
  ${ButtonTag}
`;
{
  /*Since I'm using as tag to pass a link tag as div as it was initially div, this Button Div is no longer being used but I want to
leave it here incase I want to look back at it */
}
export const ButtonDiv = styled.div`
  ${ButtonTag}
`;

export const ButtonCart = styled(CartIcon)`
  ${ButtonTag}
`;
