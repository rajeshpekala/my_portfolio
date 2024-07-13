import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { gsap } from "gsap";

const NavBar = () => {
  const [nav, SetNav] = useState(false);
  const navRef = useRef(null);
  const headerRef = useRef(null);
  const desktopLinksRef = useRef(null);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "portfolio" },
    { id: 4, link: "contact" },
    { id: 5, link: "experience" },
  ];

  useEffect(() => {
    // Animate header elements on component mount
    gsap.fromTo(
      headerRef.current,
      {
        x: "-100%",
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.5,
      }
    );

    // Animate desktop links on component mount
    if (desktopLinksRef.current) {
      gsap.fromTo(
        desktopLinksRef.current.children,
        {
          x: "-100%",
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
        }
      );
    }

    // Animate nav items when nav is opened
    if (nav) {
      gsap.fromTo(
        navRef.current.children,
        {
          x: "-100%",
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
        }
      );
    }
  }, [nav]);

  return (
    <div className="flex justify-between items-center w-full h-20 text-white fixed bg-black px-4">
      <div ref={headerRef}>
        <h1 className="text-4xl font-signature ml-2">Rajesh</h1>
      </div>

      <ul ref={desktopLinksRef} className="hidden md:flex">
        {links.map((link) => (
          <li
            key={link.id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-150 duration-300"
          >
            <Link
              to={link.link}
              smooth
              duration={500}
              
            >
              {link.link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => SetNav(!nav)}
        className="cursor-pointer pr-4 z-10 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul
          ref={navRef}
          className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-t from-black to-gray-800"
        >
          {links.map((link) => (
            <li
              key={link.id}
              className="py-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-110 duration-200 text-4xl"
            >
              <Link
                to={link.link}
                onClick={() => SetNav(!nav)}
                smooth
                duration={500}
              >
                {link.link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
