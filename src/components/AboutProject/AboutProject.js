import React from "react";
import { FaGlobe, FaLightbulb, FaUsers } from "react-icons/fa";

const AboutProject = () => {
  return (
    <section className="flex items-center justify-center min-h-screen py-16 px-6 bg-blue-50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-10">
          About Our Project
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
            <FaGlobe className="text-blue-600 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Global Perspective</h3>
            <p className="text-blue-600">
              Or mission is to showcase Ukrainian culture to a global audience, bridging cultures through stories, art, and history.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
            <FaLightbulb className="text-blue-400 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Inspiration and Education</h3>
            <p className="text-blue-600">
              We aim to inspire curiosity and educate through carefully curated content that highlights the uniqueness of Ukrainian traditions.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
            <FaUsers className="text-blue-500 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Community Focus</h3>
            <p className="text-blue-600">
              Join a community that celebrates and preserves cultural heritage, fostering connections among enthusiasts and newcomers alike.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;