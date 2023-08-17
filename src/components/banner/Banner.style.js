import styled from "styled-components";

import imgBannerDesktop from "../../assets/bannerDesktop.png";
import imgBannerMobile from "../../assets/bannerMobile.png";

export const Container = styled.header`
  background-image: url(${imgBannerDesktop});
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 700px;
  width: 100%;

  & div {
    padding: 60px;
    background-color: #151515;
    border-bottom: 20px solid #202020;
    border-top: 20px solid #202020;
  }

  & span {
    color: #2790b0;
  }
  & h1 {
    color: #f4f4f2;
    font-size: 100px;
    text-align: center;
  }

  @media screen and (max-width: 767px) {
    & h1 {
    color: #f4f4f2;
    font-size: 50px;
    text-align: center;
  }
  }

  @media screen and (max-width: 576px) {
    background-image: url(${imgBannerMobile});

    & div {
      padding: 60px 20px 60px 20px;
      background-color: #151515;
      border-bottom: 20px solid #202020;
      border-top: 20px solid #202020;
      margin: 1em;
    }

    & h1 {
      
      text-align: center;
    }
  }
`;
