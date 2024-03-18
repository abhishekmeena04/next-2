import React from "react";
import HeaderTopCntr from "./header-top/HeaderTopCntr";
import Dropdown from "./Dropdown";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <>
      <HeaderTopCntr />
      <nav className="flex content-center container lg:w-[1070px] xl:w-[1170px] md:w-[768px] 2xl:w-[1170px] flex content-center 2xl:justify-between  xl:justify-between text-center md:justify-center justify-center lg:flex-row xl:flex-row 2xl:flex-row md:flex-col flex-wrap">
        <div className="dropnav-full-width">
          <div id="logo">
            <a href="./">
              <div>
                <img
                  className="py-1"
                  src="/img.jpeg"
                  class="img-responsive"
                ></img>
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
                  to="About"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  About Us
                </Link>
                {/* <ul>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                </ul> */}
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
                {/* <ul>
                  <li>
                    <a href="course.php?id=38">Security Guards</a>
                  </li>
                  <li>
                    <a href="course.php?id=40">Armed Security Guards</a>
                  </li>
                  <li>
                    <a href="course.php?id=24">Unarmed Securtiy Guaerda</a>
                  </li>
                  <li>
                    <a href="course.php?id=29">Vehicle Petrol Security</a>
                  </li>
                  <li>
                    <a href="course.php?id=12">Hire Off Duty Police</a>
                  </li>
                  <li>
                    <a href="course.php?id=35">
                      Entrance Preparation For N.I.D
                    </a>
                  </li>
                  <li>
                    <a href="course.php?id=32">Entrance Preparation for NIFT</a>
                  </li>
                  <li>
                    <a href="course.php?id=31">Animation Sketching</a>
                  </li>
                  <li>
                    <a href="course.php?id=16">
                      Entrance Preparation for B.F.A
                    </a>
                  </li>
                  <li>
                    <a href="course.php?id=30">
                      {" "}
                      1 to 3 Months Certificate Hobby Course{" "}
                    </a>
                  </li>
                  <li>
                    <a href="course.php?id=25">Kids Diploma (L-2)</a>
                  </li>
                  <li>
                    <a href="course.php?id=39">Kids Diploma (L-1)</a>
                  </li>
                  <li>
                    <a href="course.php?id=36">
                      Hobby Certificate Course For Kids
                    </a>
                  </li>
                </ul> */}
              </li>
              {/* <li>
                <a href="">Industries</a>
                <ul>
                  <li>
                    <a href="activity-page.php?id=8">Workshops</a>
                  </li>
                  <li>
                    <a href="activity-page.php?id=2">Outdoor</a>
                  </li>
                  <li>
                    <a href="activity-page.php?id=10">
                      National Art Seminar &amp; Award Show, 2018
                    </a>
                  </li>
                  <li>
                    <a href="activity-page.php?id=4">Media Coverage</a>
                  </li>
                  <li>
                    <a href="activity-page.php?id=9">Judging Art Events</a>
                  </li>
                  <li>
                    <a href="activity-page.php?id=5">Exhibition</a>
                  </li>
                  <li>
                    <a href="activity-page.php?id=7">Daily Activities</a>
                  </li>
                </ul>
              </li> */}
              {/* <li>
                <a href="">Surveillancee</a>
              </li> */}
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
                {/* <ul>
                  <li>
                    <a href="students-area.php?id=4">Work by Kids Level-2</a>
                  </li>
                  <li>
                    <a href="students-area.php?id=3">Work by Kids Level-1</a>
                  </li>
                  <li>
                    <a href="students-area.php?id=1">Sketching</a>
                  </li>
                  <li>
                    <a href="students-area.php?id=2">
                      Paintings done by Students of Level-3
                    </a>
                  </li>
                </ul> */}
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
      </nav>
    </>
  );
};

export default Navbar;
