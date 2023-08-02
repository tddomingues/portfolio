// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Container, ContentTecnology } from "./Tecnology.style";

const Tecnology = () => {
  return (
    <Container id="tecnology">
      <h2>
        <span>|</span> TECNOLOGIAS
      </h2>
      <p>Veja as ferramentes que fazem parte do meu dia a dia.</p>
      <ContentTecnology>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          // navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          <div>
            <SwiperSlide>
              <img
               
                src="https://img.icons8.com/fluency/240/html-5.png"
                alt="html-5"
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                
                src="https://img.icons8.com/fluency/240/css3.png"
                alt="css3"
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
               
                src="https://img.icons8.com/color/240/javascript--v1.png"
                alt="javascript--v1"
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
               
                src="https://img.icons8.com/ultraviolet/240/react--v1.png"
                alt="react--v1"
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
               
                src="https://img.icons8.com/color/240/firebase.png"
                alt="firebase"
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                
                src="https://img.icons8.com/color/240/salesforce.png"
                alt="salesforce"
              />
            </SwiperSlide>
          </div>
        </Swiper>
      </ContentTecnology>
    </Container>
  );
};

export default Tecnology;
