import React from "react";
// import Navbar from "./Components/Navbar/Navbar";
import WelcomeCntr from "./Components/WelcomeCntr";
import Onlinecls from "./Components/Onlinecls";
import Gallery from "./Components/Gallery/gallery";
import Footer from "./Components/Footer/Footer";
import Card1 from "./Components/Card/cards";
import Student from "./Components/Student/Student";
import Slider from "./Components/Slider/Slider";
import About from "./Components/About";
import Contect from "./Components/Contect";

const App = () => {
  return (
    <main className="body">
      {/* <Navbar /> */}
      <Slider />
      <WelcomeCntr />
      {/* <Onlinecls /> */}
      <Card1 />
      <Gallery />
      {/* <Student /> */}
      <Contect />
      <About />
      <Footer />
    </main>
  );
};

export default App;
