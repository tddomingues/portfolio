import styled from "styled-components";

import imgBannerDesktop from "../../assets/bannerDesktop.png";
import imgBannerMobile from "../../assets/bannerMobile.png";

export const Container = styled.header`
  background-image: url(${imgBannerDesktop});
  background-position: center;
  background-size: cover;
  height: 800px;
  width: 100%;

  @media screen and (max-width: 576px) {
    background-image: url(${imgBannerMobile});   
  }
`;


