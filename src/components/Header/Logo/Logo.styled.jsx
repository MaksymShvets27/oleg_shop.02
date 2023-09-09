import { GrFacebook, GrInstagram } from "react-icons/gr";
import styled from "styled-components";

export const LogoIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;

  background-position: 50% 50%;
  background-size: cover;
  cursor: pointer;
  background-image: url("MS_SHOP_LOGO.jpg");
  @media (min-width: 768px) {
    width: 75px;
    height: 75px;
  }
`;

export const LogoIconsGroup = styled.div`
  position: relative;
`;

export const InstagramIconStyled = styled(GrInstagram)`
  width: 15px;
  height: 15px;
  color: black;
  border-radius: 25%;
  position: absolute;
  bottom: 60%;

  right: calc(100% + 7px);

  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;

  @media (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
  @media (min-width: 1440px) {
    width: 25px;
    height: 25px;
    bottom: 55%;
  }
`;

export const FacebookIconStyled = styled(GrFacebook)`
  width: 15px;
  height: 15px;
  color: black;
  border-radius: 25%;
  position: absolute;
  bottom: 0;
  right: calc(100% + 7px);
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;

  @media (min-width: 768px) {
    width: 20px;
    height: 20px;
    bottom: 20%;
    right: calc(100% + 7px);
  }
  @media (min-width: 1440px) {
    width: 25px;
    height: 25px;
    bottom: 15%;
    girht: calc(100% + 7px);
  }
`;
