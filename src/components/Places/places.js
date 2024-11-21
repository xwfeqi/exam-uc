import React, { useState } from "react";
import Navbar from "../navbar/navbar"; // імпорт компонента Navbar

// Приклад місць
const places = [
  {
    id: 1,
    title: "Вілла Грушевських",
    description: "Опис місця 1",
    image: "./images/Villa_Hrushevsky.png",
    location: "проспект Шевченка, Львів, Львівська область, 79000",
    map: "https://www.google.com/maps?q=1",
    category: "Будинки",
  },
  {
    id: 2,
    title: "Готель Дністер",
    description: "Опис місця 2",
    image: "./images/Dnister_Building.png",
    location: "Адреса місця 2",
    map: "https://www.google.com/maps?q=2",
    category: "Природні",
  },
  {
    id: 3,
    title: "Галицька ощадна каса",
    description: "Опис місця 3",
    image: "./images/Galycka_Oshchadna_Kasa.png",
    location: "Адреса місця 3",
    map: "https://www.google.com/maps?q=3",
    category: "Культурні",
  },
  {
    id: 3,
    title: "Гранд Готель",
    description: "Опис місця 3",
    image: "./images/Grand_Hotel.png",
    location: "Адреса місця 3",
    map: "https://www.google.com/maps?q=3",
    category: "Культурні",
  },
  {
    id: 3,
    title: "Будинок учених",
    description: "Опис місця 3",
    image: "./images/House_of_Scientists.png",
    location: "Адреса місця 3",
    map: "https://www.google.com/maps?q=3",
    category: "Культурні",
  },
  {
    id: 3,
    title: "Будинок з химерами",
    description: "Опис місця 3",
    image: "./images/House_with_Chimeras.png",
    location: "Адреса місця 3",
    map: "https://www.google.com/maps?q=3",
    category: "Культурні",
  },
  {
    id: 3,
    title: "Палац Потоцьких",
    description: "Опис місця 3",
    image: "./images/Lviv_Citadel.png",
    location: "Адреса місця 3",
    map: "https://www.google.com/maps?q=3",
    category: "Культурні",
  },
  {
    id: 3,
    title: "Місце 8",
    description: "Опис місця 3",
    image: "./images/Monastery_Lazar.png",
    location: "Адреса місця 3",
    map: "https://www.google.com/maps?q=3",
    category: "Культурні",
  },
  {
    id: 3,
    title: "Місце 9",
    description: "Опис місця 3",
    image: "./images/Monastery_Onufriy.png",
    location: "Адреса місця 3",
    map: "https://www.google.com/maps?q=3",
    category: "Культурні",
  },
  {
    id: 3,
    title: "Місце 10",
    description: "Опис місця 3",
    image: "./images/Palac Semenskih-levyckih.png",
    location: "Адреса місця 3",
    map: "https://www.google.com/maps?q=3",
    category: "Культурні",
  },
  {
    id: 3,
    title: "Місце 11",
    description: "Опис місця 3",
    image: "./images/Palace_Besyadetskykh.png",
    location: "Адреса місця 3",
    map: "https://www.google.com/maps?q=3",
    category: "Культурні",
  },
  {
    id: 3,
    title: "Місце 12",
    description: "Опис місця 3",
    image: "./images/Palace_Goluhovsky.png",
    location: "Адреса місця 3",
    map: "https://www.google.com/maps?q=3",
    category: "Культурні",
  },
  {
    id: 3,
    title: "Місце 13",
    description: "Опис місця 3",
    image: "./images/Palace_Sosnovskogo.png",
    location: "Адреса місця 3",
    map: "https://www.google.com/maps?q=3",
    category: "Культурні",
  },
  {
    id: 3,
    title: "Місце 14",
    description: "Опис місця 3",
    image: "./images/Palac Semenskih-levyckih.png",
    location: "Адреса місця 3",
    map: "https://www.google.com/maps?q=3",
    category: "Культурні",
  },
  {
    id: 3,
    title: "Місце 10",
    description: "Опис місця 3",
    image: "./images/Palac Semenskih-levyckih.png",
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
                
              </div>
            ))}
          </div>

          {/* Модальне вікно з деталями місця */}
{selectedPlace && (
  <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center">
    <div className="bg-white p-8 shadow-xl rounded-lg max-w-4xl w-full">
      <button
        className="absolute top-4 right-4 text-black text-3xl font-bold"
        onClick={handleCloseModal}
      >
        &times;
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative">
          <img
            src={selectedPlace.image}
            alt={selectedPlace.title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold text-black">{selectedPlace.title}</h3>
            <p className="text-gray-800 mt-2">{selectedPlace.description}</p>
          </div>
          <div className="mt-6">
            <h4 className="font-semibold text-black">Адреса:</h4>
            <p className="text-gray-700">{selectedPlace.location}</p>
          </div>
          <div className="mt-4">
            <h4 className="font-semibold text-black">Карта:</h4>
            <a
              href={selectedPlace.map}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
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
