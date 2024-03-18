import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const HeaderTopCntr = () => {
  return (
    <>
      <section className="header-top flex content-center justify-center">
        <div className="text-center font-black tracking-wider lg:flex md:justify-between lg:justify-around lg:w-[970px] xl:w-[1500px] 2xl:w-[1170px]">
          <p className="top-header-text font-spartan text-center text-[13px] md:text-[15px]">
            Welcome to the New National Security Services
          </p>
          <div className="flex flex-col sm:flex-row md:flex-row items-center">
            <div className="flex px-[15px] py-[2px]">
              <div>
                <a
                  href="tel:+91-20-65290835"
                  target="_top"
                  className="flex items-center mr-[5px]"
                >
                  <BsFillTelephoneFill className="mr-[1px]" />
                  <span>+91-20-65290835</span>
                </a>
              </div>

              <div>
                {" "}
                <a
                  href="tel: 8806360119"
                  target="_top"
                  className="flex items-center mr-[1px]"
                >
                  <BsFillTelephoneFill className="mr-[1px]" />
                  8806360119
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
                  <MdEmail className="mr-[5px] md:hidden" />
                  newnational_s@yahoo.com
                </a>
              </li>
              <ul className="header-social ml-[30px] md:ml-[20px] lg:ml-[20px] flex flex-wrap md:flex-wrap md:flex-nowrap items-center justify-center">
                <li>
                  <a href="" target="_blank">
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a href="" target="_blank">
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a href="" target="_blank">
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a href="" target="_blank">
                    <FaYoutube />
                  </a>
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeaderTopCntr;
