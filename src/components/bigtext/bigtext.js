import React from "react";

const Bigtext = () => {
  return (
    <div
      className="relative flex items-center justify-center min-h-screen bg-cover  bg-center "
      style={{
        backgroundImage: `url('https://lviv.travel/image/news/6d/7c/6d7cbcb17b84deea15e0c1a6497c5130961f7156_1597159209.png?crop=1070%2C576%2C119%2C0')`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-80 "></div>

      {/* Text content */}
      <div className="relative max-w-4xl px-8 text-white text-center ">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Explore Lviv with us
        </h1>
        <p className="mt-6 text-lg md:text-xl leading-relaxed">
          This is a sample text component designed to take up the full screen width and height.
          It provides ample space to convey important information in an appealing layout. Whether
          you want to introduce a new product, share a message, or simply display content in a
          visually engaging way, this component is flexible and easy to adapt to your needs.
        </p>
        
      </div>
    </div>
  );
};

export default Bigtext;
