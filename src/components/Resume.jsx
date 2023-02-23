import React from "react";
import About from '../assets/about.svg'
const Resume = () => {
  return (
    <div id="resume" className=" w-full h-[600px] py-16 px-4">
      <div className="max-w-[1040px]  m-auto py-16 md:pl-20 mx-auto grid md:grid-cols-2">
        <img src={About} alt="about" className="w-[400px] mx-auto my-4" />
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-center text-[#374a5c]">About me</h1>
          <p className='my-4 text-sm font-normal leading-none text-stone-500 text-center'>Lorem ipsum dolor sit amet.</p>
          <p className='my-2 text-base font-normal text-stone-700 text-center'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim,
            doloribus. Delectus ut placeat amet aperiam, voluptas illum. Tempora
            facere aut, quaerat exercitationem, totam accusamus commodi rerum ut
            nesciunt distinctio expedita?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Resume;
