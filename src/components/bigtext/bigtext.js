import React from "react";
import man_1 from "./../../Images/image-from-rawpixel-id-6740096-png.png"; // Ваше зображення

const Bigtext = () => {
  return (
    <div
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center m-l "
      style={{
        backgroundImage: `url('https://lviv.travel/image/news/6d/7c/6d7cbcb17b84deea15e0c1a6497c5130961f7156_1597159209.png?crop=1070%2C576%2C119%2C0')`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-80"></div>

      {/* Зображення поверх фону */}
      <div
        className="absolute top-0 left-1/2 transform -translate-x-1/2"
        style={{
          zIndex: 0, // Забезпечує, що зображення буде над фоном
          maxWidth: "100%",
          width: "auto",
        }}
      >
        <img
          src={man_1}
          alt="Background Image"
          className="w-full p-20 mt-3.5 "
        />
      </div>

      {/* Text content */}
      <div className="relative  px-5 text-white  z-20 text-left">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight ">
          Explore Lviv with us
        </h1>
        <p className="mt-6 text-lg md:text-xl leading-relaxed">
          This is a sample text component designed to take up the full screen
          <span className="text-transparent bg-clip-text ">
            width and height. It provides ample space to{" "}
          </span>
          convey important information in an appealing layout. Whether
        </p>
      </div>
    </div>
  );
};

export default Bigtext;
