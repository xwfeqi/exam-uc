import React from "react";

const Bigtext = () => {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="max-w-4xl px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
          Welcome to Our Platform
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-700 leading-relaxed">
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
