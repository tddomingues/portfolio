import {
  Container,
  ContentProject,
  ListProjects,
  CarouselProject,
  BoxProject,
} from "./Projects.style.js";

import projetoCinebase from "../../assets/projetoCinebase.png";
import projetoTodo from "../../assets/projetoOrganize.png";
import projetoNexGen from "../../assets/nexgen.png";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

import { useRef } from "react";

const Projects = () => {
  const carousel = useRef(null);

  const handleAdvanceRight = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  const handleAdvanceLeft = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };
  return (
    <Container id="project">
      <h2>
      <span>&lt;h2&gt;</span><br/> PROJETOS <br/><span>&lt;/h2&gt;</span>
      </h2>
      <p>Veja alguns projetos de aprendizados.</p>
      <ContentProject>
        <CarouselProject>
          <ListProjects ref={carousel}>
            <BoxProject>
              <h5>Cinebase</h5>
              <img src={projetoCinebase} alt="Projeto Cinebase" />
              <p>React.js - Styled Component - API TMDB</p>
              <div>
                <a href="https://cinebase-five.vercel.app/">
                  <span>Visite</span>
                </a>
                <a href="https://github.com/tddomingues/cinebase">
                  <span>GitHub</span>
                </a>
              </div>
            </BoxProject>
            <BoxProject>
              <h5>NexGen Software</h5>
              <img src={projetoNexGen} alt="Projeto Todo" />
              <p>React.js - Styled Component</p>
              <div>
                <a href="https://nexgen-git-main-tddomingues.vercel.app/">
                  <span>Visite</span>
                </a>
                <a href="https://github.com/tddomingues/nexgen">
                  <span>GitHub</span>
                </a>
              </div>
            </BoxProject>
            <BoxProject>
              <h5>Gerenciador de Tarefas - Organize</h5>
              <img src={projetoTodo} alt="Projeto Todo" />
              <p>React.js - Styled Component - Mongodb - Nodejs - Express</p>
              <div>
                {/* <a href="https://todolistfirebase-kappa.vercel.app/">
                  <span>Visite</span>
                </a> */}
                <a href="https://github.com/tddomingues/fullstack-lista-de-tarefas">
                  <span>GitHub</span>
                </a>
              </div>
            </BoxProject>
          </ListProjects>

          <button onClick={handleAdvanceRight} className="btn-right">
            <BsChevronCompactRight />
          </button>
          <button onClick={handleAdvanceLeft} className="btn-left">
            <BsChevronCompactLeft />
          </button>
        </CarouselProject>
      </ContentProject>
    </Container>
  );
};

export default Projects;
