import React from "react";
// import "./styles.css";
import Carousel from "./Carousel.jsx";

export default function App() {
  return (
    <Carousel>
      <div>
        <img
          className="object-cover"
          src="https://xpressguards.com/wp-content/uploads/2021/09/security-guard-company.jpg"
          alt="img1"
        />
      </div>
      <div>
        <img
          src="https://denetimservices.com/wp-content/uploads/2020/08/1.jpg"
          alt="img2"
        />
      </div>
      <div>
        <img
          src="https://imgs.search.brave.com/YZjFSAx7f77VolTWCHjBGXf97EWE19nWIhiBfJl-RiI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9z/ZWN1cml0eS1ndWFy/ZC1wcm90ZWN0aW5n/LWNsaWVudF8yMy0y/MTQ4NDA0MDA0Lmpw/Zz9zaXplPTYyNiZl/eHQ9anBn"
          alt="img3"
        />
      </div>
      <div>
        <img
          src="https://imgs.search.brave.com/cd4fKstmjD12-nVXM-S213x-SAQSPCDJhdLG97kHa5Q/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9saXJw/LmNkbi13ZWJzaXRl/LmNvbS8zMjhhMjk5/MS9kbXMzcmVwL211/bHRpL29wdC9FbGl0/ZS1TZWN1cml0eS1Q/cm9mZXNzaW9uYWxz/LS1MTEMtaG9tZS0x/LTYwMHcuanBn"
          alt="img4"
        />
      </div>
    </Carousel>
  );
}
