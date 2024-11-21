import React, { useState, useEffect, useRef} from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useParams, useNavigate } from "react-router-dom";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine";

// Дані про маршрути
const routeDetails = {
  1: {
    title: "Історичний Львів",
    landmarks: [
      {
        name: "Вілла Бачевських",
        coords: [49.829919, 24.024488],
        description: "Історична вілла, пов’язана із родиною Бачевських, відома своєю архітектурою в стилі неокласицизму.",
        image: "/images/Villa_Bachevskih.png",
      },
      {
        name: "Палац графа Голуховського",
        coords: [49.840207, 24.018755],
        description: "Розкішний палац XIX століття, відомий своїм неоренесансним стилем та історичною значущістю.",
        image: "/images/Palace_Goluhovsky.png",
      },
      {
        name: "Будинок вчених",
        coords: [49.841051, 24.021625],
        description: "Архітектурна пам'ятка в стилі необароко, яка служила казино, а нині є осередком культури.",
        image: "/images/House_of_Scientists.png",
      },
      {
        name: "Палац Туркулів-Комелло",
        coords: [49.836448, 24.045299],
        description: "Будівля XIX століття в стилі ранньої неоготики, частина університету ветеринарної медицини.",
        image: "/images/Palace_Turkul_Komello.png",
      },
      {
        name: "Палац Сосновського",
        coords: [49.831609, 24.010354],
        description: "Псевдоготичний палац із елементами венеційської готики, гарно збережений і реставрований.",
        image: "/images/Palace_Sosnovskogo.png",
      },
      {
        name: "Вілла Юзефи Франц",
        coords: [49.830934, 24.004166],
        description: "Вілла в стилі необароко з асиметричною композицією, значним декором та триярусною вежею.",
        image: "/images/Villa_Yuzefi_Franc.png",
      },
    ],
  },
  2: {
    title: "Релігійні пам’ятки",
    landmarks: [
      {
        name: "Монастир святого Онуфрія",
        coords: [49.849013, 24.028445],
        description: "Один із найстаріших монастирів Львова з багатою історією.",
        image: "/images/Monastery_Onufriy.png",
      },
      {
        name: "Храм Святого Іоана Золотоустого",
        coords: [49.842106, 24.045525],
        description: "Вражаючий храм у стилі неоромантизму з унікальними вітражами.",
        image: "/images/Temple_Ioan_Zlatoust.png",
      },
      {
        name: "Храм святого Івана Хрестителя",
        coords: [49.846870, 24.030516],
        description: "Стародавній храм, що був заснований як православний, а згодом перероблений у неоготику.",
        image: "/images/Temple_St_Ivan_Xrestytel.png",
      },
      {
        name: "Костел і монастир Святого Лазаря",
        coords: [49.834449, 24.020612],
        description: "Ренесансна святиня, що раніше була притулком для немічних.",
        image: "/images/Monastery_Lazar.png",
      },
    ],
  },
  3: {
    title: "Культурно-мистецькі місця",
    landmarks: [
      {
        name: "Галицька ощадна каса",
        coords: [49.841131, 24.027344],
        description: "Історична будівля, нині музей етнографії та художнього промислу.",
        image: "/images/Galycka_Oshchadna_Kasa.png",
      },
      {
        name: "Будинок страхового товариства \"Дністер\"",
        coords: [49.841808, 24.035134],
        description: "Перший будинок українського страхового товариства, приклад архітектури модерну.",
        image: "/images/Dnister_Building.png",
      },
      {
        name: "Вілла Грушевських",
        coords: [49.822529, 24.030888],
        description: "Меморіальний музей, присвячений Михайлу Грушевському, в оточенні мальовничого саду.",
        image: "/images/Villa_Hrushevsky.png",
      },
      {
        name: "Гранд Готель",
        coords: [49.840855, 24.027496],
        description: "Розкішний готель з ампірними та неоренесансними елементами.",
        image: "/images/Grand_Hotel.png",
      },
      {
        name: "Палац Бесядецьких",
        coords: [49.838808, 24.033560],
        description: "Бароковий палац, що перероблявся кілька разів у різні стилі, зараз частина Львівського університету.",
        image: "/images/Palace_Besyadetskykh.png",
      },
    ],
  },
  4: {
    title: "Неординарна архітектура",
    landmarks: [
      {
        name: "Будинок з химерами",
        coords: [49.830409, 24.018302],
        description: "Унікальна будівля, прикрашена скульптурами фантастичних істот.",
        image: "/images/House_with_Chimeras.png",
      },
      {
        name: "Пластиліновий будинок",
        coords: [49.834130, 24.062334],
        description: "Екстравагантний будинок в стилі модерн з плавними формами фасаду.",
        image: "/images/Plasticine_House.png",
      },
      {
        name: "Львівська цитадель",
        coords: [49.833968, 24.026865],
        description: "Історична оборонна споруда, що перетворена на готель і культурний простір.",
        image: "/images/Lviv_Citadel.png",
      },
      {
        name: "Будинок Шпрехера",
        coords: [49.839938, 24.030004],
        description: "Неокласичний будинок з елементами, характерними для будівель початку ХХ століття.",
        image: "/images/Spreher_Building.png",
      },
    ],
  },
};




// Компонент для отримання геолокації користувача
const LocationFinder = ({ setUserLocation, setErrorMessage }) => {
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          const { latitude, longitude } = coords;
          setUserLocation([latitude, longitude]); // Оновлення місцезнаходження
        },
        () => {
          setErrorMessage("Location access denied. Using default location.");
          setUserLocation([49.841, 24.031]); // Встановлення дефолтного місцезнаходження
        }
      );
    } else {
      setErrorMessage("Geolocation is not supported on this device. Using default location.");
      setUserLocation([49.841, 24.031]); // Встановлення дефолтного місцезнаходження
    }
  }, [setUserLocation, setErrorMessage]);

  return null;
};
const RouteMap = () => {
  const { id } = useParams(); // Отримуємо ID маршруту з URL
  const [selectedLandmark, setSelectedLandmark] = useState(null);
  const [landmarks, setLandmarks] = useState([]);
  const [userLocation, setUserLocation] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const routeControlRef = useRef(null);

  const handleGoBack = () => {
    navigate('/dest-page');
  };
  // Відслідковуємо зміну id і оновлюємо пам'ятки
  useEffect(() => {
    const route = routeDetails[id];
    if (route) {
      setLandmarks(route.landmarks);
      setSelectedLandmark(null); // Скидаємо вибрану пам'ятку
    } else {
      setLandmarks([]);
    }
  }, [id]); // Оновлюємо landmarks при зміні id маршруту

  // Функція для вибору пам'ятки
  const handleLandmarkChange = (landmark) => {
    setSelectedLandmark(landmark); // Оновлюємо вибрану пам'ятку
  };

  const customIcon = new L.Icon({
    iconUrl: "/images/location.png",
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  const Route = ({ userLocation, selectedLandmark }) => {
    const map = useMap();

    useEffect(() => {
      if (userLocation && selectedLandmark) {
        const userLatLng = L.latLng(userLocation);
        const landmarkLatLng = L.latLng(selectedLandmark.coords);

        if (routeControlRef.current) {
          routeControlRef.current.setWaypoints([userLatLng, landmarkLatLng]);
        } else {
          routeControlRef.current = L.Routing.control({
            waypoints: [userLatLng, landmarkLatLng],
            routeWhileDragging: true,
            createMarker: () => null,
            show: false,
          }).addTo(map);
        }

        // Видалення маршруту з DOM
        const routingContainer = document.querySelector(".leaflet-routing-container");
        if (routingContainer) {
          routingContainer.remove();
        }
      }
    }, [userLocation, selectedLandmark, map]);

    return null;
  };

  return (
    <div className="relative min-h-screen bg-gray-100 flex">
      {/* Панель вибору пам'ятки зліва */}
      <div className="w-1/4 p-4 bg-slate-400- shadow-lg rounded-md">
        <h2 className="text-xl font-bold mb-4">Пам'ятки</h2>
        <div className="space-y-4">
          {landmarks.map((landmark, index) => (
            <div
              key={index}
              className="flex items-center cursor-pointer p-2 hover:bg-gray-200 rounded-md"
              onClick={() => handleLandmarkChange(landmark)} // передаємо пам'ятку при кліку
            >
              <img
                src={landmark.image}
                alt={landmark.name}
                className="w-12 h-12 object-cover rounded-md mr-4"
              />
              <span>{landmark.name}</span>
            </div>
          ))}
        </div>
      </div>

      

      <LocationFinder setUserLocation={setUserLocation} setErrorMessage={setErrorMessage} />
      {errorMessage && (
    <div className="fixed top-4 right-4 w-80  bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded-lg shadow-md">
      {errorMessage}
    </div>
  )}
  <div className="absolute bottom-4 left-4">
        <button
          onClick={handleGoBack} // Викликаємо функцію при натисканні
          className="bg-white text-gray-700 p-3 rounded-full shadow-lg hover:bg-gray-200 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      </div> 
      

      {/* Карта справа */}
      <div className="w-3/4">
        <MapContainer
          center={userLocation || [49.841, 24.031]}
          zoom={13}
          className="h-screen"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />

          {userLocation && (
            <Marker position={userLocation} icon={customIcon}>
              <Popup>Your Location</Popup>
            </Marker>
          )}

          {selectedLandmark && (
            <Marker position={selectedLandmark.coords} icon={customIcon}>
              <Popup>{selectedLandmark.name}</Popup>
            </Marker>
          )}

          <Route userLocation={userLocation} selectedLandmark={selectedLandmark} />
        </MapContainer>

        
        
      </div>
      

      
    </div>  
  );
};

export default RouteMap;