import styled from "styled-components";

import photoPerfil from "../../assets/perfil.png";

export const Centralize = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PerfilPhoto = styled.div`
  background-image: url(${photoPerfil});
  background-size: cover;
  background-position: center;
  height: 400px;
  width: 400px;

  @media screen and (max-width: 576px) {
    height: 300px;
    width: 300px;
  }
`;

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

  @media screen and (max-width: 576px) {
    & h2 {
      font-size: 40px;
    }
  }
`;

export const ContentAbout = styled(Centralize)`
  flex-direction: column;
  gap: 2em;
  width: 80%;
  margin: auto;
  padding: 0px 1em 30px 1em;
`;

export const TextAbout = styled.div`
  max-width: 700px;
  border-left: 10px solid #e76777;
  padding-left: 10px;
`;

export const TextOffice = styled.p`
  font-size: 35px;
  color: #f4f4f2;
  text-transform: uppercase;

  & span {
    color: #2790b0;
  }
`;

export const TextMore = styled.p`
  color: #f4f4f2;
  font-size: 20px;

  & span {
    color: #2790b0;
  }
`;

export const Icons = styled(Centralize)`
  gap: 40px;
`;

export const Icon = styled(Centralize)`
  margin-bottom: 10px;
  border: 2px solid #f4f4f2;
  border-radius: 30px;
  width: 60px;
  height: 60px;
  background-color: #e76777;
  transition: 0.4s;

  & a {
    color: #f4f4f2;
    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover {
    background-color: #2790b0;
  }
`;
