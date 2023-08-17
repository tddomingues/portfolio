import {
  Container,
  ContentProject,
  ListProjects,
  CarouselProject,
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
        <span>|</span> PROJETOS
      </h2>
      <p>Veja alguns projetos de aprendizados.</p>
      <ContentProject>
        <CarouselProject>
          <ListProjects ref={carousel}>
            <div>
              <h5>Cinebase</h5>
              <a href="https://github.com/tddomingues/cinebase">
                <img src={projetoCinebase} alt="Projeto Cinebase" />
                <p>React.js - Styled Component - API TMDB</p>
              </a>
            </div>
            <div>
              <h5>To - Do List</h5>
              <a href="https://github.com/tddomingues/todo_servidor">
                <img src={projetoTodo} alt="Projeto Todo" />
                <p>React.js - Styled Component - Firebase</p>
              </a>
            </div>
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
