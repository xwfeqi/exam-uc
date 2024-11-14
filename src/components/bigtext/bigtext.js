import React from "react";

const Bigtext = () => {
  return (
    <div
      className="relative flex items-center justify-center min-h-screen bg-cover -mt-20 bg-center "
      style={{
        backgroundImage: `url('https://c0.wallpaperflare.com/preview/642/227/793/architectural-photography-of-gray-and-white-house.jpg')`,
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
