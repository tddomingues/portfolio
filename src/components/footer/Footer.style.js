import styled from "styled-components";

export const Container = styled.footer`
  background-color: #2790b0;
  width: 100%;
  color: #f4f4f2;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 1em 10px 1em;
  border-bottom: 8px solid #E76777;

  & span {
    color: #202020;
    font-weight: bold;
  }

  @media screen and (max-width: 576px) {
    flex-direction: column;
  }
`;
