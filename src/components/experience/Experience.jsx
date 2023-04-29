/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdComputer } from "react-icons/md";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./experience.css";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Web applicaion developer",
      companyName: "StoryMKRS (Sep 2018 - July 2020)",
      summary:
        "Developed CMS and E-commerce platforms with PHP and JavaScript. Developed an ecommerce analytics application using React, Laravel, and MySQL. Had some experience in chrome extension development. Facilitated maintenance and development of different projects. Participated in cross-functional team discussions to formulate effective development and maintenance strategies throughout all systems.",
    },
    {
      id: 2,
      role: "Pyton Software Engineer",
      companyName: "ITechArt Group (Nov 2020 - Aug 2021)",
      summary:
        "Implemented a taxonomy types for risk control. Improved access control system. Developed features related with risks and risk controls. Data migrations, data model tranformations. Cover logic changes and migrations with tests.",
    },
    {
      id: 3,
      role: "Senior Full Stack Developer",
      companyName: "Citizen (Oct 2021 - Dec 2022)",
      summary:
        "Led the development of multiple website and mobile applications from start to finish. Developed RESTful APIs using Laravel and Node.js to enable front-end developers to build seamless user experiences. Collaborated closely with cross-functional teams, including designers, product managers, and QA analysts, to deliver high-quality software applications. Managed a team of junior developers and provided mentorship to help them grow their skills.",
    },
  ];
  return (
    <section id="experience">
      <h5>Where I've Worked</h5>
      <h2>Experience</h2>
      <Swiper
        className="container experiences__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {experiences.map((experience) => (
          <SwiperSlide className="experience" key={experience.id}>
            <div className="company__avatar">
              <a>
                <MdComputer />
              </a>
            </div>
            <h5 className="role">{experience.role}</h5>
            <h5 className="company__name">{experience.companyName}</h5>
            <small className="summary">{experience.summary}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Experience;
