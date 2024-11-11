import React from "react";


const cards = [
  {
    title: "Nazar Adidas",
    description: "PM, FE, DBE (Drink Beer Everyday).",
    imgSrc: "images/photo_2024-10-29_10-43-59.jpg"
  },
  {
    title: "Ja ebu",
    description: "FE, Designer, DVE(Drink Vodka Everyday)",
    imgSrc: "images/photo_2024-09-09_13-13-02.jpg"
  },
  {
    title: "Mihuil Ogorodnik",
    description: "Nihuja ne delav(Designer)",
    imgSrc: "images/photo_2024-08-29_18-43-42.jpg"
  },
  {
    title: "Bairaktarchik",
    description: "Content Writer.",
    imgSrc: "images/photo_2024-10-23_12-19-54.jpg"
  }
];

const CardComponent = () => {
  return (
    <div className="flex justify-center items-center py-10 -mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-screen-xl mx-auto">
        {cards.map((card, index) => (
          <div key={index} className="flex flex-col text-blue-500 bg-white shadow-2xl bg-clip-border rounded-xl w-full">
            <div className="relative  h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
              <img src={card.imgSrc} alt="card-image" className="w-full h-full object-center object-cover " />
            </div>
            <div className="p-6">
              <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                {card.title}
              </h5>
              <p className="p-2 block font-sans text-base antialiased font-light leading-relaxed text-inherit -mb-5">
                {card.description}
              </p>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardComponent;