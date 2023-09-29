import styled from "styled-components";

const flexCenterSpaceBetween = `
  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  position: absolute;
  width: 100%;
`;

export const NavItems = styled.ul`
  ${flexCenterSpaceBetween}
  justify-content: space-between;

  & li {
    padding-right: 2em;
  }

  & a {
    ${flexCenterSpaceBetween};
    justify-content: space-between;
    color: #f4f4f2;
    font-size: 20px;
    padding: 6px;
    position: relative;
  }

  & a:after {
    content: "";
    position: absolute;
    background-color: #2790b0;
    height: 4px;
    bottom: 0px;
    border-radius: 2px;
    width: 0%;
    left: 0;
    transition: 0.5s;
  }

  & a:hover:after {
    width: 100%;
  }

  & div {
    ${flexCenterSpaceBetween};
    margin-right: 10px;
    color: #2790b0;
  }
  @media screen and (max-width: 1199px) {
    display: none;
  }
`;

export const ResponsiveNavItems = styled.ul`
  display: none;

  @media screen and (max-width: 1199px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    overflow: hidden;
    transition: 0.4s;
    gap: 15px;
    
    &.open-menu {
      height: 350px;
    }

    &.closed-menu {
      height: 0px;
    }

    & li {
      padding-right: 2em;
      border-bottom: 1px solid #969696;
    }

    & a {
      ${flexCenterSpaceBetween};
      justify-content: space-between;

      color: #f4f4f2;
      font-size: 25px;
      padding: 6px;
      position: relative;
    }

    & div {
      ${flexCenterSpaceBetween};
      margin-right: 10px;
      color: #2790b0;
    }
  }
`;

export const NavLogo = styled.span`
  & a {
    color: #e76777;
    font-size: 40px;
    font-weight: bold;
  }
  @media screen and (max-width: 1199px) {
    & a {
      font-size: 20px;
    }
  }
`;

export const Nav = styled.nav`
  background-color: #151515bc;
  backdrop-filter: blur(10px);
  margin: 10px;
  padding: 10px 1em 10px 1em;
  border-radius: 30px;
  border-bottom: 1px solid #f4f4f2;
  display: grid;
  grid-template-rows: 60px 1fr;
  grid-template-columns: auto auto;
  align-items: center;
  justify-content: space-between;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

  ${NavLogo} {
    grid-row: 1;
  }

  & button {
    display: none;
    align-items: center;
    justify-content: end;
    grid-row: 1;
    background-color: transparent;
    color: #f4f4f2;
    font-size: 40px;
  }

  ${ResponsiveNavItems} {
    grid-row: 2;
    grid-column: 1/3;
  }

  @media screen and (max-width: 1199px) {
    & button {
      display: flex;
    }
  }
`;
