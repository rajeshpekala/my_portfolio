import React from "react";
import HeroImage from "../assets/myimage.png";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a FullStack Developer
          </h2>
          <p className="text-gray-500 py-4">
            Welcome to my portfolio! Here, I want to share my experiences,
            talents, and creative projects with you. Take a look to get a sense
            of my unique skills and perspective. Let's explore together the
            exciting world of innovation and craftsmanship.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardDoubleArrowRight size={25} />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="MyImage"
            className="rounded-2xl mx-auto w-2/5 sm:w-1/4 md:w-3/6 lg:w-3/6 xl:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
