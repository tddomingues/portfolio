import {Container, PerfilPhoto, ContentAbout, TextAbout, TextOffice, TextMore, Icons, Icon} from "./About.style"

import {FiLinkedin, FiGithub} from "react-icons/fi"

const About = () => {
  return (
    <Container id="aboutMe">
      <h2>
        <span>&lt;h2&gt;</span><br/> SOBRE MIM <br/><span>&lt;/h2&gt;</span>
      </h2>
      <ContentAbout>
        <PerfilPhoto></PerfilPhoto>
        <TextAbout>
          <TextOffice>
            Desenvolvedor <span>Front-end</span>.
          </TextOffice>
          <TextMore>
            Prazer, meu nome é <span>Tiago</span>, tenho 25 anos, resíduo em Maringá, no Paraná, e sou apaixonado por
            tecnologia. Para manter contato com a Era Digital, abandonei o curso de Biomedicina para
            ingressar em
             <span> Engenharia de Software</span>. Atualmente,
            dedico-me diariamente a aprimorar minhas habilidades no
            desenvolvimento Front-end, com o objetivo de ingressar no mercado de
            trabalho como
             <span> estagiário</span> para que eu possa crescer
            profissionalmente e colaborar em projetos.
          </TextMore>
        </TextAbout>
        <Icons>
          <Icon>
            <a href="https://www.linkedin.com/in/tiago-domingues-4089b5123/"  target="_blank" rel="noreferrer">
              <FiLinkedin/>
            </a>
          </Icon>

          <Icon>
            <a href="https://github.com/tddomingues"  target="_blank" rel="noreferrer">
              <FiGithub/>
            </a>
          </Icon>
        </Icons>
      </ContentAbout>
    </Container>
  );
};

export default About;
