import React from "react";

const Bigtext = () => {
  return (
    <div
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center -mt-24 -z-10 h-auto"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1620121478247-ec786b9be2fa?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 backdrop-blur opacity-100"></div>

      <div className="absolute inset-0 bg-black opacity-65"></div>

      {/* Text content */}
      <div className="relative max-w-4xl px-8  text-white z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Welcome to Our Platform
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