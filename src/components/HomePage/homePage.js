import React from "react";
import Navbar from "../navbar/navbar";
import Bigtext from "../bigtext/bigtext";
import Cardcomponent from "../cardcomponent/cardcomponent";
import AboutProject from "../AboutProject/AboutProject";
import Footer from "../Footer/footer";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Bigtext />
      <Cardcomponent />
      <AboutProject />
      <Footer />
    </div>
  );
};

export default HomePage;
