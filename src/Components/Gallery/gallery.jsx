import React from "react";

import apple from "../../assets/images/img4.jpeg";
import bottle from "../../assets/images/img2.jpeg";
import boy from "../../assets/images/img7.jpeg";
import chai from "../../assets/images/img8.jpeg";
import chair from "../../assets/images/img3.jpeg";
import cock from "../../assets/images/img9.jpeg";
import cow from "../../assets/images/img10.jpeg";
import eye from "../../assets/images/img11.jpeg";
import flower from "../../assets/images/img12.jpeg";
import ganesh from "../../assets/images/img13.jpeg";
import girl from "../../assets/images/img1.jpeg";
// import god from "../../assets/images/god.jpg";
// import harry from "../../assets/images/harry.jpeg";
// import krishna from "../../assets/images/krishna.jpg";
// import meera from "../../assets/images/meera.jpg";
// import pakshi from "../../assets/images/pakshi.jpeg";
import pillar from "../../assets/images/img6.jpeg";
import pink from "../../assets/images/img5.jpeg";
import sun from "../../assets/images/img16.jpeg";
// import think from "../../assets/images/think.jpg";
import topi from "../../assets/images/img15.jpeg";
import women from "../../assets/images/img14.jpeg";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const itemData = [
  {
    img: girl,
    title: "Bed",
  },
  {
    img: bottle,
    title: "Books",
  },
  // +
  // {
  //   img: god,
  //   title: "Kitchen",
  // },
  {
    img: sun,
    title: "Blinds",
  },
  {
    img: topi,
    title: "Chairs",
  },
  // {
  //   img: krishna,
  //   title: "Laptop",
  // },
  {
    img: pink,
    title: "Doors",
  },
  {
    img: chair,
    title: "Coffee",
  },
  {
    img: cock,
    title: "Storage",
  },
  {
    img: cow,
    title: "Candle",
  },
  // {
  //   img: meera,
  //   title: "Coffee table",
  // },
  {
    img: chai,
    title: "Coffee",
  },
  {
    img: boy,
    title: "Storage",
  },
  {
    img: eye,
    title: "Candle",
  },
  {
    img: apple,
    title: "Coffee table",
  },
  {
    img: pillar,
    title: "Candle",
  },
  {
    img: ganesh,
    title: "Coffee table",
  },
  // {
  //   img: harry,
  //   title: "Storage",
  // },
  // {
  //   img: pakshi,
  //   title: "Candle",
  // },
  {
    img: flower,
    title: "Flower",
  },
  {
    img: women,
    title: "Women",
  },
];

const gallery = () => {
  return (
    <section className="bg-white" id="gallery">
      <div className="container lg:w-[970px] xl:w-[1000px] 2xl:w-[1200px] text-center 2xl:pt-[50px] 2xl:pb-[70px]">
        <h2 className="font-lexend md:text-[30px] lg:text-[30px] xl:text-[30px] 2xl:text-[30px] font-semibold text-xl">
          Gallery
        </h2>
        <ul className="sm:columns-2 md:columns-3 lg:columns-3  2xl:columns-3 xl:col-start-4 2xl:col-span-5 my-[50px]">
          {itemData.map((val, i) => {
            return (
              <li key={i} className="rounded-2xl mt-5">
                <img src={val.img} alt="" className="rounded-[15px]" />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default gallery;
