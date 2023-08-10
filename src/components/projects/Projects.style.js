import styled from "styled-components";

export const Container = styled.section`
  background-color: #202020;

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
    background-color: #202020;
    text-align: center;
    padding: 0 1em 0 1em;
  }

  @media screen and (max-width: 576px) {
    & h2 {
      font-size: 40px;
    }
  }
`;

export const ContentProject = styled.div`
  max-width: 900px;
  margin: auto;
  padding: 30px 1em;

  & div {
    text-align: center;
    background-color: #151515;
  }

  & img {
    width: 100%;
    padding: 20px;
  }

  & p {
    color: #f4f4f2;
    background-color: #151515;
    padding-bottom: 10px;
  }
`;
