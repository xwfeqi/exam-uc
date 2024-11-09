import React from "react";

const cards = [
  {
    title: "Person 1",
    description: "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to 'Naviglio' where you can enjoy the main night life in Barcelona.",
    imgSrc: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Person 2",
    description: "Explore the best of modern art in the heart of the city. The gallery is only a 5-minute walk from the subway station.",
    imgSrc: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Person 3",
    description: "Enjoy a scenic mountain trail perfect for beginners. The trail starts at the foothills and offers breathtaking views of the valley.",
    imgSrc: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Person 4",
    description: "Enjoy a scenic mountain trail perfect for beginners. The trail starts at the foothills and offers breathtaking views of the valley.",
    imgSrc: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

const CardComponent = () => {
  return (
    <div className="flex justify-center items-center py-10 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-screen-2xl mx-auto">
        {cards.map((card, index) => (
          <div key={index} className="flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-full">
            <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
              <img src={card.imgSrc} alt="card-image" />
            </div>
            <div className="p-6">
              <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                {card.title}
              </h5>
              <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit -mb-5">
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
