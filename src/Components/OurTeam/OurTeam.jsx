import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { useRef } from "react";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";

import ot1 from "../../../public/assets/our-team7.png";
import ot2 from "../../../public/assets/our-team6.png";
import ot3 from "../../../public/assets/our-team5.png";
import ot4 from "../../../public/assets/our-team4.png";

const OurTeam = () => {
  const swiperRef = useRef(null); 

  const team = [
    {
      id: 1,
      name: "Emily",
      img: ot3,
      occupation: "Front End Developer",
      socialIcons: [
        {
          id: 1,
          icon: <FaFacebook className="text-2xl hover:text-[#7b956a]" />,
          title: "Facebook",
          link: "#",
        },
        {
          id: 2,
          icon: <FaInstagram className="text-2xl hover:text-[#7b956a]" />,
          title: "Instagram",
          link: "#",
        },
        {
          id: 3,
          icon: <FaTwitter className="text-2xl hover:text-[#7b956a]" />,
          title: "Twitter",
          link: "#",
        },
      ],
    },
    {
      id: 2,
      name: "Jon Arshaf",
      img: ot2,
      occupation: "Marketer",
      socialIcons: [
        {
          id: 1,
          icon: <FaFacebook className="text-2xl hover:text-[#7b956a]" />,
          title: "Facebook",
          link: "#",
        },
        {
          id: 2,
          icon: <FaInstagram className="text-2xl hover:text-[#7b956a]" />,
          title: "Instagram",
          link: "#",
        },
        {
          id: 3,
          icon: <FaTwitter className="text-2xl hover:text-[#7b956a]" />,
          title: "Twitter",
          link: "#",
        },
      ],
    },
    {
      id: 3,
      name: "Kani Jon",
      img: ot1,
      occupation: "Designer",
      socialIcons: [
        {
          id: 1,
          icon: <FaFacebook className="text-2xl hover:text-[#7b956a]" />,
          title: "Facebook",
          link: "#",
        },
        {
          id: 2,
          icon: <FaInstagram className="text-2xl hover:text-[#7b956a]" />,
          title: "Instagram",
          link: "#",
        },
        {
          id: 3,
          icon: <FaTwitter className="text-2xl hover:text-[#7b956a]" />,
          title: "Twitter",
          link: "#",
        },
      ],
    },
    {
      id: 4,
      name: "Sarah Smith",
      img: ot2,
      occupation: "Developer",
      socialIcons: [
        {
          id: 1,
          icon: <FaFacebook className="text-2xl hover:text-[#7b956a]" />,
          title: "Facebook",
          link: "#",
        },
        {
          id: 2,
          icon: <FaInstagram className="text-2xl hover:text-[#7b956a]" />,
          title: "Instagram",
          link: "#",
        },
        {
          id: 3,
          icon: <FaTwitter className="text-2xl hover:text-[#7b956a]" />,
          title: "Twitter",
          link: "#",
        },
      ],
    },
  ];

  return (
    <div className="bg-gray-50 py-12" id="team">
      <div className="container mx-auto px-4 lg:px-8">
        <header className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-[#24A556] md:text-5xl">
            Our Team
          </h2>
        </header>

        <main className="flex items-center gap-5">
          <Swiper
             ref={swiperRef}
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
              disableOnInteraction: false,
            }}
            freeMode={true}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            modules={[FreeMode, Pagination, Autoplay]}
            className="mySwiper pb-12"
            loop={true}
          >
            {team.map((member) => (
              <SwiperSlide key={member.id}>
                <section>
                  <figure className="relative">
                    <img src={member.img} alt="our team 1" />
                  </figure>

                  <div className="absolute -mt-16 md:-mt-20 w-full px-5">
                    <h2 className="text-xl text-white font-bold">
                      {member.name}
                    </h2>

                    <div className="flex  ">
                      <div className="flex-grow">
                        <p className="text-base text-white">
                          {member.occupation}
                        </p>
                      </div>

                      <div className="flex justify-end items-center gap-2">
                        {member.socialIcons.map((icon) => (
                          <button key={icon.id} className="text-white">
                            {icon.icon}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>
              </SwiperSlide>
            ))}
          </Swiper>
          <section className="space-y-32">
            <img src={ot4} alt="our team" />
            <div className="flex gap-5">
              <button
                className="bg-[#3F3F3F] rounded-full p-2"
                onClick={() => swiperRef.current.swiper.slidePrev()}
              >
                <FaArrowLeft className="text-white" />
              </button>
              <button
                className="bg-[#3F3F3F] rounded-full p-2"
                onClick={() => swiperRef.current.swiper.slideNext()}
              >
                <FaArrowRight className="text-white" />
              </button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default OurTeam;
