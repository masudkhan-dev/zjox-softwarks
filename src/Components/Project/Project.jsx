// swiper js
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";

// react icons
import { FaArrowRight } from "react-icons/fa";

// project image
import p1 from "../../../public/assets/project1.png";
import p2 from "../../../public/assets/project2.png";
import p3 from "../../../public/assets/project3.png";
import p4 from "../../../public/assets/project4.png";
import p5 from "../../../public/assets/project5.png";
import p6 from "../../../public/assets/project6.png";
import p7 from "../../../public/assets/project7.png";

const Project = () => {
  const projects = [
    {
      id: 1,
      image: p2,
      guester: p5,
      title: "VR training app for a manufacturing company",
    },
    {
      id: 2,
      image: p3,
      guester: p6,
      title: "VR training app for a manufacturing company",
    },
    {
      id: 3,
      image: p4,
      guester: p7,
      title: "VR training app for a manufacturing company",
    },
    {
      id: 4,
      image: p3,
      guester: p6,
      title: "VR training app for a manufacturing company",
    },
  ];

  return (
    <div className="bg-[#F3F3F3]" id="project">
      <div className="container mx-auto px-3 lg:px-0 mt-10 pb-16">
        <div>
          <header className="flex justify-between items-center">
            <h2 className="text-3xl font-bold text-[#24A556] md:text-5xl mt-5">
              Project
            </h2>
            <figure className="cursor-pointer">
              <img src={p1} alt="drug" width={80} />
            </figure>
          </header>
          <main>
            <section className="mt-8">
              <Swiper
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  480: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                }}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: true,
                }}
                freeMode={true}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                }}
                modules={[FreeMode, Pagination, Autoplay]}
                loop={true}
                className="mySwiper pb-12"
              >
                {projects.map((project) => (
                  <SwiperSlide key={project.id}>
                    <article className="overflow-hidden rounded-lg shadow hover:shadow-lg bg-white  hover:bg-[#3f3f3f] transition-colors duration-700  hover:text-white">
                      <figure className="absolute w-full z-20">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="h-56 w-full object-cover rounded-lg"
                        />
                      </figure>

                      <div className="p-4 sm:p-6 ">
                        <figure className="relative ml-20 z-0">
                          <img src={project.guester} alt="" />
                        </figure>
                        <h3 className="-mt-5 text-2xl font-bold  z-30">
                          {project.title}
                        </h3>
                        <button className="mt-5 p-2 rounded-full bg-[#24A556] text-white ">
                          <FaArrowRight className="" />
                        </button>
                      </div>
                    </article>
                  </SwiperSlide>
                ))}
              </Swiper>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Project;
