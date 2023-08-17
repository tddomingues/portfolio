import styled from "styled-components";

export const Container = styled.section`
  background-color: #151515;

  & h2 {
    font-size: 50px;
    color: #f4f4f2;
    padding: 30px 0px;
    text-align: center;
  }

  & span {
    color: #2790b0;
  }

  & p {
    color: #f4f4f2;
    font-size: 20px;
    background-color: #151515;
    text-align: center;
    padding: 0 1em 0 1em;
  }

  @media screen and (max-width: 576px) {
    & h2 {
      font-size: 40px;
    }
  }
`;

export const ContentTecnology = styled.div`
  padding: 30px 1em;

  & img {
    width: 300px;
    height: 300px;
  }
`;

export const Carousel = styled.div`
  background-color: #202020;
  max-width: 900px;
  margin: auto;
  position: relative;

  & ::-webkit-scrollbar {
    display: none;
  }

  & .btn-right,
  .btn-left {
    display: grid;
    place-items: center;
    background-color: #f4f4f241;
    color: #2790b0;
    font-size: 80px;
    position: absolute;
    top: 106px;
  }

  & .btn-right {
    right: -40px;
  }

  & .btn-left {
    left: -40px;
  }

  @media screen and (max-width: 1199px) {
    max-width: 600px;
  }

  @media screen and (max-width: 767px) {
    max-width: 300px;
  }

  @media screen and (max-width: 576px) {
    max-width: 300px;

    & .btn-right,
    .btn-left {
      font-size: 60px;
      top: 115px;
    }

    & .btn-right {
      right: -20px;
    }

    & .btn-left {
      left: -20px;
    }
  }
`;

export const Images = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
`;
