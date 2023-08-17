import {
  Container,
  ContentTecnology,
  Carousel,
  Images,
} from "./Tecnology.style";

import { useRef } from "react";

import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const Tecnology = () => {
  const carousel = useRef(null);

  const handleAdvanceRight = (e) => {
    e.preventDefault()

    //carousel.current.scrollLeft += carousel.current.offsetWidth;
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  const handleAdvanceLeft = (e) => {
    e.preventDefault()
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  return (
    <Container id="tecnology">
      <h2>
        <span>|</span> TECNOLOGIAS
      </h2>
      <p>Veja as ferramentes que fazem parte do meu dia a dia.</p>
      <ContentTecnology>
        <Carousel>
          <Images ref={carousel}>
            <div>
              <img
                src="https://img.icons8.com/fluency/240/html-5.png"
                alt="html-5"
              />
            </div>

            <div>
              <img
                src="https://img.icons8.com/fluency/240/css3.png"
                alt="css3"
              />
            </div>

            <div>
              <img
                src="https://img.icons8.com/color/240/javascript--v1.png"
                alt="javascript--v1"
              />
            </div>

            <div>
              <img
                src="https://img.icons8.com/ultraviolet/240/react--v1.png"
                alt="react--v1"
              />
            </div>

            <div>
              <img
                src="https://img.icons8.com/color/240/firebase.png"
                alt="firebase"
              />
            </div>

            <div>
              <img
                src="https://img.icons8.com/color/240/salesforce.png"
                alt="salesforce"
              />
            </div>
          </Images>
          <button onClick={handleAdvanceRight} className="btn-right">
            <BsChevronCompactRight />
          </button>
          <button onClick={handleAdvanceLeft} className="btn-left">
            <BsChevronCompactLeft />
          </button>
        </Carousel>
      </ContentTecnology>
    </Container>
  );
};

export default Tecnology;
