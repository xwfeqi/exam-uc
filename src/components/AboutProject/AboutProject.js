import React from "react";
import { FaGlobe, FaLightbulb, FaUsers } from "react-icons/fa";
import Navbar from "../navbar/navbar"; // імпорт компонента Navbar
import CardComponent from "../cardcomponent/cardcomponent";

const AboutProject = () => {
  return (
    <div>
      {/* Navbar - окремо від основного контенту */}
      <Navbar />

      <section className="min-h-screen flex flex-col items-center justify-center py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-black mb-12 mt-12">
            About Our Project
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <FaGlobe className="text-black text-5xl mb-6 mx-auto" />
              <h3 className="text-2xl font-semibold text-black mb-4">Global Perspective</h3>
              <p className="text-black">
                Our mission is to showcase Ukrainian culture to a global audience, bridging cultures through stories, art, and history.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <FaLightbulb className="text-black text-5xl mb-6 mx-auto" />
              <h3 className="text-2xl font-semibold text-black mb-4">Inspiration and Education</h3>
              <p className="text-black">
                We aim to inspire curiosity and educate through carefully curated content that highlights the uniqueness of Ukrainian traditions.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <FaUsers className="text-black text-5xl mb-6 mx-auto" />
              <h3 className="text-2xl font-semibold text-black mb-4">Community Focus</h3>
              <p className="text-black">
                Join a community that celebrates and preserves cultural heritage, fostering connections among enthusiasts and newcomers alike.
              </p>
            </div>
          </div>

          {/* CardComponent */}
          <CardComponent />
        </div>
      </section>
    </div>
  );
};

export default AboutProject;
