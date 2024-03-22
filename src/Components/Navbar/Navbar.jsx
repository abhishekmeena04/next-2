import React, { useState } from "react";
import HeaderTopCntr from "./header-top/HeaderTopCntr";
import Dropdown from "./Dropdown";
import { Link } from "react-scroll";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Navbar = () => {
  const [isClick, setisClick] = useState();
  const toggleNavbar = () => {
    setisClick(!isClick);
  };
  return (
    <>
      <HeaderTopCntr />
      {/* <nav className="flex content-center container lg:w-[1070px] xl:w-[1170px] md:w-[768px] 2xl:w-[1170px] flex content-center 2xl:justify-between  xl:justify-between text-center md:justify-center justify-center lg:flex-row xl:flex-row 2xl:flex-row md:flex-col flex-wrap">
        <div className="dropnav-full-width">
          <div id="logo">
            <a href="./">
              <div>
                <img src="/img.jpeg" class="img-responsive w-16 py-2"></img>
              </div>
            </a>
          </div>
          <div className="responsive max-md:block xl:hidden 2xl:hidden lg:hidden">
            <ul className="flex flex-col content-center justify-center">
              <li className="tel-em font-lexend text-[18px] flex justify-center content-center">
                <img src="img.jpeg" alt="" className="w-[16px]" />
                <a href="newnational_s@yahoo.com">newnational_s@yahoo.com</a>
              </li>
              <li className="tel-em font-lexend text-[18px] flex content-center justify-center">
                <img src="" alt="" className="w-[10px]" />
                <a href="#">020-65290835/8806360119</a>
              </li>
            </ul>
          </div>
          <Dropdown />
        </div>

        <div className="flex content-center justify-center">
          <div className="menu flex content-center justify-center items-center max-md:hidden">
            <ul
              className="nav font-lexend text-[15px] font-bold flex flex-wrap md:py-[10px]"
              id="nav"
            >
              <li>
                <Link
                  to="/"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={10}
                  duration={500}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="WelcomeCntr"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="gallery"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={10}
                  duration={500}
                >
                  Gallery
                </Link>
              </li>

              <li>
                <Link
                  to="About"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  About Us
                </Link>
              </li>
              {
                <li>
                  <Link
                    to="Contect"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={10}
                    duration={500}
                  >
                    Contact Us
                  </Link>
                </li>
              }
              <li></li>
            </ul>
          </div>
        </div>
      </nav> */}
      <nav className="bg-[#2d4567] py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img className="logo-img" src="/img.jpeg" alt="" />
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4">
                <Link
                  href="/"
                  className="text-white hover:bg-white hover:text-black rounded-lg p-2 font-lexend"
                >
                  Home
                </Link>
                <Link
                  href="/Services"
                  className="text-white hover:bg-white hover:text-black rounded-lg  p-2 font-lexend"
                >
                  Services
                </Link>
                <Link
                  href="/"
                  className="text-white hover:bg-white hover:text-black rounded-lg  p-2 font-lexend"
                >
                  Gallery
                </Link>
                <Link
                  href="/about"
                  className="text-white hover:bg-white hover:text-black rounded-lg  p-2 font-lexend"
                >
                  About
                </Link>
                <Link
                  href="/"
                  className="text-white hover:bg-white hover:text-black rounded-lg  p-2 font-lexend"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-white md:text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                onClick={toggleNavbar}
              >
                {isClick ? (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="rounded"
                      strokeLinejoin="rounded"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="rounded"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    ></path>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        {isClick && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href="/"
                className="text-white block hover:bg-white hover:text-black rounded-lg p-2 pl-4 font-lexend"
              >
                Home
              </Link>
              <Link
                href="/"
                className="text-white block hover:bg-white hover:text-black rounded-lg  p-2 pl-4 font-lexend"
              >
                Services
              </Link>
              <Link
                href="/"
                className="text-white block hover:bg-white hover:text-black rounded-lg  p-2 pl-4 font-lexend"
              >
                Gallery
              </Link>
              <Link
                href="/"
                className="text-white block hover:bg-white hover:text-black rounded-lg  p-2 pl-4 font-lexend"
              >
                About
              </Link>
              <Link
                href="/"
                className="text-white block hover:bg-white hover:text-black rounded-lg  p-2 pl-4 font-lexend"
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
