import { Container, ContentProject } from "./Projects.style.js";
import projetoCinebase from "../../assets/projetoCinebase.png";

const Projects = () => {
  return (
    <Container id="project">
      <h2>
        <span>|</span> PROJETOS
      </h2>
      <p>Veja alguns projetos de aprendizados.</p>
      <ContentProject>
        <div>
          <a href="https://github.com/tddomingues/cinebase">
            <img src={projetoCinebase} alt="Projeto Cinebase" />
            <p>React.js - Styled Component - API tmdb</p>
          </a>
        </div>
      </ContentProject>
    </Container>
  );
};

export default Projects;
