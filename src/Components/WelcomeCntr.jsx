import React from "react";
import Button from "./Button/Button";
import Marque from "./Marque";

const WelcomeCntr = () => {
  return (
    <section className="bg-white" id="WelcomeCntr">
      <Marque />
      <div className="container font-spartan font-bold text-center mt-[0px] flex-wrap pb-[25px] text-[13px] lg:w-[970px] xl:w-[1170px] 2xl:w-[1170px] 2xl:pt-[50px] 2xl:pb-[70px]">
        <div id="heading">
          <h1 className="font-lexend text-[19px] mt-[5px] mb-[20px] lg:text-[36px] xl:text-[36px]  2xl:text-[36px]">
            Welcome to{" "}
            <span className="text-[#ff4c02]">
              The New National Security Services{" "}
              <h1 className="text-[#000000]">SERVICE OFFERED BY OUR AGENCY</h1>
            </span>
          </h1>
        </div>
        <p className="text-start text-[15px] mb-[20px] leading-[23px] font-semibold font-black">
          <span className="font-lexend font-black text-1xl">
            SECURITY SERVICES :{" "}
          </span>{" "}
          We provide trained Civillian as well as Ex-Serviceman Gunman with
          Uniforms and other accesories as per requirement. Security guard
          services are a fundamental component of physical security, providing
          on-the-ground protection for people, property, and assets
        </p>
        <p className="text-start text-[15px] mb-[20px] leading-[23px] font-semibold font-black">
          <span className="font-lexend font-black">
            HOUSEKEEPING SERVICES :{" "}
          </span>
          We provide trained Housekeeping personnel with or material to keep
          your office factory or premises clean. Combining housekeeping services
          with security guard duties can provide a comprehensive approach to
          maintaining the safety, cleanliness, and overall well-being of a
          property.
        </p>
        <p className="text-[15px] text-start mb-[20px] leading-[23px] font-semibold font-black">
          <span className="font-lexend font-black">LABOUR CONTRACTS : </span>
          We have all the necessary & required Govt. Licences accept your Labour
          on our contract as well as we can new labour as per your requirement.
          Labor contracts for security guard services outline the terms and
          conditions of employment between the security company providing the
          guards and the client or organization receiving the security services.
        </p>
        <p className="text-[15px] text-start mb-[20px] leading-[23px] font-semibold font-black">
          <span className="font-lexend font-black">Fire Fighting : </span>
          We have guards, officers & supervicors for fire fighting who are
          trained with modern fire fighting accessories, equipments & methods.
        </p>
        <p className="text-[16px] text-start mb-[20px] leading-[23px] font-semibold font-black">
          <span className="font-lexend font-black">Allied Service : </span>
          In addition to security management services, we also provide casual &
          on - contract basic labour whenever demanded at very rates, besides
          these we are also arranging articles required for fire fighting such
          as fire buckets.
        </p>
        <Button />
      </div>
    </section>
  );
};

export default WelcomeCntr;
