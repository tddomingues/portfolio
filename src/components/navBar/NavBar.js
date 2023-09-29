import { FiX, FiMenu } from "react-icons/fi";
import {
  BsFillHouseFill,
  BsFillPersonFill,
  BsFillChatRightFill,
  BsHammer,
  BsFillCupHotFill,
} from "react-icons/bs";

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

    // if(activeMenu) {
    //   document.body.style.overflow = "auto"
    // } else {
    //   document.body.style.overflow = "hidden"
    // }
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
              <div>
                <BsFillHouseFill />
              </div>
              Início
            </a>
          </li>
          <li>
            <a href="#aboutMe">
              <div>
                <BsFillPersonFill />
              </div>
              Sobre Mim
            </a>
          </li>
          <li>
            <a href="#tecnology">
              <div>
                <BsHammer />
              </div>
              Tecnologias
            </a>
          </li>
          <li>
            <a href="#project">
              <div>
                <BsFillCupHotFill />
              </div>
              Projetos
            </a>
          </li>
          <li>
            <a href="#contact">
              <div>
                <BsFillChatRightFill />
              </div>
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

        <ResponsiveNavItems className={activeMenu ? "open-menu" : "closed-menu"}>
          <li>
            <a href="#home" onClick={eventScan}>
              <div>
                <BsFillHouseFill />
              </div>
              Início
            </a>
          </li>
          <li>
            <a href="#aboutMe" onClick={eventScan}>
              <div>
                <BsFillPersonFill />
              </div>
              Sobre Mim
            </a>
          </li>
          <li>
            <a href="#tecnology" onClick={eventScan}>
              <div>
                <BsHammer />
              </div>
              Tecnologias
            </a>
          </li>
          <li>
            <a href="#project" onClick={eventScan}>
              <div>
                <BsFillCupHotFill />
              </div>
              Projetos
            </a>
          </li>
          <li>
            <a href="#contact" onClick={eventScan}>
              <div>
                <BsFillChatRightFill />
              </div>
              Contato
            </a>
          </li>
        </ResponsiveNavItems>
      </Nav>
    </Container>
  );
};

export default NavBar;
