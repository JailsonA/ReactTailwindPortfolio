import React from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    year: 2017,
    title: "Google",
    duration: "3 Years",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis maxime unde ex deleniti doloremque expedita obcaecati deserunt debitis laborum necessitatibus!",
  },
  {
    year: 2016,
    title: "Facebook",
    duration: "3 Years",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis maxime unde ex deleniti doloremque expedita obcaecati deserunt debitis laborum necessitatibus!",
  },
  {
    year: 2015,
    title: "Github",
    duration: "3 Years",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis maxime unde ex deleniti doloremque expedita obcaecati deserunt debitis laborum necessitatibus!",
  },
  {
    year: 2014,
    title: "DigitalCenter",
    duration: "3 Years",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis maxime unde ex deleniti doloremque expedita obcaecati deserunt debitis laborum necessitatibus!",
  },
];

const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-center text-[#374a5c]">Work</h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
