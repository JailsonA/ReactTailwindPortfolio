import React from "react";
import { TypeAnimation } from "react-type-animation";
import {FaTwitter, FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover"
        src="https://gratisography.com/wp-content/uploads/2023/01/gratisography-clown-computer-free-stock-photo-1153x780.jpg"
        alt=""
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-black/80">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-200" >I'm Janilson Andrade</h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-200" >
            {" "}
            I'm a
            <TypeAnimation
              sequence={[
                "Developer", // Types 'One'
                3000, // Waits 1s
                "Coder", // Deletes 'One' and types 'Two'
                2000, // Waits 2s
                "Tech Enthusiast", // Types 'Three' without deleting 'Two'
                2000, // Waits 2s
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "1em", paddingLeft: '5px' }}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full text-white" >
              <FaTwitter size={20} className='cursor-pointer'/>
              <FaFacebook size={20} className='cursor-pointer'/>
              <FaInstagram size={20} className='cursor-pointer'/>
              <FaLinkedin size={20} className='cursor-pointer'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

/* https://www.npmjs.com/package/react-type-animation */
