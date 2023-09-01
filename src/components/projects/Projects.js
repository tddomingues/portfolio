import {
  Container,
  ContentProject,
  ListProjects,
  CarouselProject,
  BoxProject,
} from "./Projects.style.js";

import projetoCinebase from "../../assets/projetoCinebase.png";
import projetoTodo from "../../assets/projetoTodo.png";
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
                <a href="https://cinebase-bay.vercel.app/">
                  <span>Visite</span>
                </a>
                <a href="https://github.com/tddomingues/cinebase">
                  <span>GitHub</span>
                </a>
              </div>
            </BoxProject>
            <BoxProject>
              <h5>To - Do List</h5>
              <img src={projetoTodo} alt="Projeto Todo" />
              <p>React.js - Styled Component - Firebase</p>
              <div>
                <a href="https://todolistfirebase-kappa.vercel.app/">
                  <span>Visite</span>
                </a>
                <a href="https://github.com/tddomingues/todo_servidor">
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
