import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const HeaderTopCntr = () => {
  return (
    <>
      {/* <section className="header-top flex content-center justify-center hidden lg:flex">
        <div className="font-black tracking-wider lg:flex md:justify-between lg:justify-around lg:w-[970px] xl:w-[1500px] 2xl:w-[1170px]">
          <p className="mt-3 top-header-text font-spartan text-center text-[13px] md:text-[15px] font-spartan">
            The New National Security Services
          </p>
          <div className="flex flex-col sm:flex-row md:flex-row items-center">
            <div className="flex items-center justify-center px-[15px] py-[2px]">
              <div>
                <a
                  href="tel:+91-20-65290835"
                  target="_top"
                  className="flex items-center mr-[0px]"
                >
                  <BsFillTelephoneFill color="#2d4567" className="mr-[2px]" />
                  <span className="mr-2">+91-20-65290835</span>
                </a>
              </div>
              <div>
                {" "}
                <a
                  href="tel: 8806360119"
                  target="_top"
                  className="flex items-center mr-[2px]"
                >
                  <BsFillTelephoneFill color="#2d4567" className="mr-[2px]" />
                  +8806360119
                </a>
              </div>
            </div>
            <ul className="flex items-center px-[15px] py-[2px]">
              <li>
                <a
                  href="newnational_s@yahoo.com"
                  target="_top"
                  className="flex  flex-col sm:flex-row lg:flex-row 2xl:flex-row items-center>"
                >
                  <MdEmail color="#2d4567" className="mr-[5px] md:hidden" />
                  newnational_s@yahoo.com
                </a>
              </li>
              <ul className="header-social ml-[30px] md:ml-[20px] lg:ml-[20px] flex flex-wrap md:flex-wrap md:flex-nowrap items-center justify-center">
                <li>
                  <a href="" target="_blank">
                    <FaFacebookF color="#2d4567" />
                  </a>
                </li>
                <li>
                  <a href="" target="_blank">
                    <FaTwitter color="#2d4567" />
                  </a>
                </li>
                <li>
                  <a href="" target="_blank">
                    <FaInstagram color="#2d4567" />
                  </a>
                </li>
                <li>
                  <a href="" target="_blank">
                    <FaYoutube color="#2d4567" />
                  </a>
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </section> */}
      <div className="bg-[#f9f8f8] nav-top lg:px-10 max-w-7xl mx-auto">
        <div className="nav-top-first">
          <a href="tel:+91-20-65290835" target="_top">
            <BsFillTelephoneFill color="#2d4567" />
            <span className="font-lexend">+91-20-65290835</span>
          </a>
          <a
            className="font-lexend"
            href="newnational_s@yahoo.com"
            target="_top"
          >
            <MdEmail color="#2d4567" />
            newnational_s@yahoo.com
          </a>
        </div>
        <div className="nav-top-second">
          <a href="" target="_blank">
            <FaFacebookF color="#2d4567" size={16} className="facebook" />
          </a>
          <a href="" target="_blank">
            <FaTwitter color="#2d4567" size={16} className="twitter" />
          </a>
          <a href="" target="_blank">
            <FaInstagram color="#2d4567" size={16} className="instagram" />
          </a>
          <a href="" target="_blank">
            <FaYoutube color="#2d4567" size={16} className="youtube" />
          </a>
        </div>
      </div>
    </>
  );
};

export default HeaderTopCntr;
