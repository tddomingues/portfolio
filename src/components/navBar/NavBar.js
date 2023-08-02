import { FiHome, FiX, FiMenu } from "react-icons/fi";
import { BsPerson, BsChatRightDots, BsPcDisplay } from "react-icons/bs";

import {
  Container,
  Nav,
  NavLogo,
  NavItems,
  ResponsiveNavItems,
} from "./NavBar.style";

import { useState } from "react";

const NavBar = () => {
  const [activeMenu, setActiveMenu] = useState(false);

  const eventScan = () => {
    setActiveMenu(!activeMenu);

    if(activeMenu) {
      document.body.style.overflow = "auto"
    } else {
      document.body.style.overflow = "hidden"
    }
  };

  return (
    <Container id="nav">
      <Nav>
        <NavLogo>
          <a href="#home">tgDomingues</a>
        </NavLogo>
        <NavItems>
          <li>
            <a href="#home">
              <span>
                <FiHome />
              </span>
              Início
            </a>
          </li>
          <li>
            <a href="#aboutMe">
              <span>
                <BsPerson />
              </span>
              Sobre Min
            </a>
          </li>
          <li>
            <a href="#tecnology">
              <span>
                <BsPcDisplay />
              </span>
              Tecnologias
            </a>
          </li>
          <li>
            <a href="#contact">
              <span>
                <BsChatRightDots />
              </span>
              Contato
            </a>
          </li>
        </NavItems>
        {!activeMenu && (
          <button onClick={eventScan}>
            <FiMenu />
          </button>
        )}
        {activeMenu && (
          <button onClick={eventScan}>
            <FiX />
          </button>
        )}
        {activeMenu && (
          <ResponsiveNavItems>
            <li>
              <a href="#home" onClick={eventScan}>
                <span>
                  <FiHome />
                </span>
                Início
              </a>
            </li>
            <li>
              <a href="#aboutMe" onClick={eventScan}>
                <span>
                  <BsPerson />
                </span>
                Sobre Min
              </a>
            </li>
            <li>
              <a href="#tecnology" onClick={eventScan}>
                <span>
                  <BsPcDisplay />
                </span>
                Tecnologias
              </a>
            </li>
            <li>
              <a href="#contact" onClick={eventScan}>
                <span>
                  <BsChatRightDots />
                </span>
                Contato
              </a>
            </li>
          </ResponsiveNavItems>
        )}
      </Nav>
    </Container>
  );
};

export default NavBar;
