import React from "react";
import Navbar from "../navbar/navbar";
import Bigtext from "../bigtext/bigtext";
import Cardcomponent from "../cardcomponent/cardcomponent";
import Footer from "../Footer/footer";
import ExploreLvivPage from "../ExploreLvivPage/ExploreLvivPage";
import Sculpt from "../sculpt/sculpt";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Bigtext />
      <ExploreLvivPage/>
      <Sculpt/>
      <Footer />
    </div>
  );
};

export default HomePage;
