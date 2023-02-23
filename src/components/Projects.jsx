import React from "react";
import ProjectsItem from "./ProjectsItem";

import ImgProj1 from "../assets/1.jpg";
import ImgProj2 from "../assets/2.jpg";
import ImgProj3 from "../assets/4.jpg";
import ImgProj4 from "../assets/5.jpg";
import ImgProj5 from "../assets/5.png";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#374a5c]">Projects</h1>
      <p className="text-center py-8">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate
        doloribus enim, error quasi totam pariatur dignissimos. Temporibus,
        culpa atque expedita officia sint corporis rem, animi voluptatem
        quibusdam eum ratione facere?
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectsItem img={ImgProj1} title='Project abc' />
        <ProjectsItem img={ImgProj2} title='Project abc' />
        <ProjectsItem img={ImgProj3} title='Project abc' />
        <ProjectsItem img={ImgProj4} title='Project abc' />
      </div>
    </div>
  );
};

export default Projects;
