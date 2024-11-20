import React, { useState } from "react";
import Navbar from "../navbar/navbar"; // імпорт компонента Navbar

// Приклад місць
const places = [
  {
    id: 1,
    title: "Місце 1",
    description: "Опис місця 1",
    image: "https://via.placeholder.com/400",
    location: "Адреса місця 1",
    map: "https://www.google.com/maps?q=1",
    category: "Історичні",
  },
  {
    id: 2,
    title: "Місце 2",
    description: "Опис місця 2",
    image: "https://via.placeholder.com/400",
    location: "Адреса місця 2",
    map: "https://www.google.com/maps?q=2",
    category: "Природні",
  },
  {
    id: 3,
    title: "Місце 3",
    description: "Опис місця 3",
    image: "https://via.placeholder.com/400",
    location: "Адреса місця 3",
    map: "https://www.google.com/maps?q=3",
    category: "Культурні",
  },
];

const Places = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Всі категорії");

  const handlePlaceClick = (place) => {
    setSelectedPlace(place);
  };

  const handleCloseModal = () => {
    setSelectedPlace(null);
  };

  const filteredPlaces = places.filter((place) => {
    const matchesSearch = place.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "Всі категорії" || place.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-gray-100 text-black min-h-screen">
      {/* Navbar */}
      <Navbar />

      <section className="flex pt-24">
        {/* Фільтри зліва */}
        <div className="w-[15%] bg-gray-200 p-4 ml-6 mt-4 shadow h-[80%] flex-shrink-0">
          <h3 className="text-lg font-bold text-black mb-4">Фільтри</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-black mb-2">Пошук:</label>
              <input
                type="text"
                placeholder="Введіть назву"
                className="w-full p-2 border border-gray-800"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-black mb-2">Категорія:</label>
              <select
                className="w-full p-2 border border-gray-800"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option>Всі категорії</option>
                <option>Історичні</option>
                <option>Природні</option>
                <option>Культурні</option>
              </select>
            </div>
            <button
              type="button"
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("Всі категорії");
              }}
              className="w-full bg-black text-white p-2 shadow hover:bg-gray-800"
            >
              Скинути фільтри
            </button>
          </form>
        </div>

        {/* Список карток місць справа */}
        <div className="w-[85%] p-6">
          <h2 className="text-3xl font-extrabold text-black mb-8">Місця</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPlaces.map((place) => (
              <div
                key={place.id}
                className="bg-white p-4 shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => handlePlaceClick(place)}
              >
                <img
                  src={place.image}
                  alt={place.title}
                  className="w-full h-40 object-cover mb-4"
                />
                <div className="text-xl font-bold text-black mb-2">{place.title}</div>
                <div className="text-sm text-gray-700">{place.description}</div>
              </div>
            ))}
          </div>

          {/* Модальне вікно з деталями місця */}
          {selectedPlace && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
              <div className="bg-white p-6 shadow-lg max-w-xl w-full">
                <button
                  className="absolute top-2 right-2 text-black font-bold"
                  onClick={handleCloseModal}
                >
                  X
                </button>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <img
                      src={selectedPlace.image}
                      alt={selectedPlace.title}
                      className="w-full h-40 object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black">{selectedPlace.title}</h3>
                    <p className="text-gray-700">{selectedPlace.description}</p>
                    <div className="mt-4">
                      <h4 className="font-bold text-black">Адреса:</h4>
                      <p className="text-gray-700">{selectedPlace.location}</p>
                    </div>
                    <div className="mt-4">
                      <h4 className="font-bold text-black">Карта:</h4>
                      <a
                        href={selectedPlace.map}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black underline"
                      >
                        Переглянути на карті
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Places;
