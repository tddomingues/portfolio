import styled from "styled-components";

const Centralize = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.section`
  background-color: #151515;
`;

export const ContentContact = styled(Centralize)`
  flex-direction: column;
  padding-bottom: 30px;
  text-align: center;

  & h2 {
    font-size: 50px;
    color: #f4f4f2;
    padding: 30px 0px;
  }
  & span {
    color: #2790b0;
  }

  & p {
    color: #f4f4f2;
    font-size: 30px;
    padding: 30px 1em 30px 1em;
  }

  @media screen and (max-width: 576px) {
    & h2 {
      font-size: 40px;
    }
  }
`;

export const Icons = styled(Centralize)`
  gap: 40px;

  @media screen and (max-width: 576px) {
    flex-direction: column;
  }
`;

export const Icon = styled(Centralize)`
  color: #f4f4f2;
  font-size: 30px;
  flex-direction: column;

  & span {
    color: #e76777;
    font-size: 20px;
  }

  & div {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    border: 2px solid #f4f4f2;
    border-radius: 30px;
    text-align: center;
    width: 60px;
    height: 60px;
    background-color: #e76777;
  }
`;

export const ConnectiveText = styled.div`
  & p {
    color: #f4f4f2;
    font-size: 30px;
    text-align: center;
    padding: 30px 1em 30px 1em;
  }
`;

export const Form = styled.form`
  background-color: #202020;
  padding: 10px;

  & div {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 10px;
  }

  & input,
  textarea {
    padding: 10px;
    font-size: 16px;
    color: #f4f4f2;
  }

  & input {
    width: 500px;
  }

  & textarea {
    max-width: 500px;
    min-width: 500px;
    min-height: 300px;
  }

  & input[type="text"],
  textarea {
    border-bottom: 2px solid #2790b0;
  }

  & input[type="submit"] {
    margin-top: 10px;
    cursor: pointer;
    font-weight: bold;
    color: #151515;
    background-color: #2790b0;
    transition: 0.4s;
    width: 100%;
  }

  & input[type="submit"]:hover {
    color: #f4f4f2;
  }

  @media screen and (max-width: 576px) {
    & input {
      width: 300px;
    }
    & textarea {
      max-width: 300px;
      min-width: 300px;
      min-height: 300px;
    }
  }
`;
