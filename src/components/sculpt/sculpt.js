import { useState, useEffect } from "react";
import man_1 from "./../../Images/taras.png";
import man_2 from "./../../Images/lesya.gif";
import man_3 from "./../../Images/franko.jpg";

const Sculpt = () => {
  const images = [
    { 
      src: man_1, 
      text: `"Заповітаю тобі, сину, на світі любити,  
              Свою Вітчизну, її святу землю."`, 
      author: "Тарас Шевченко"
    },
    { 
      src: man_2, 
      text: `"Якщо ти вірно любиш рідну землю,  
              То й життя твоє не даремне."`, 
      author: "Леся Українка"
    },
    { 
      src: man_3, 
      text: `"Без культури, без науки немає нації,  
              немає й майбутнього."`, 
      author: "Іван Франко"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsFading(false);
      }, 800); // Тривалість анімації зміни
    }, 10000); // Інтервал зміни фото/тексту
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="flex items-center justify-center -mt-24 bg-gray-100">
      <div className="flex items-center gap-12 max-w-7xl mx-auto">
        {/* Фото */}
        <div
          className={`relative w-96 aspect-square transition-opacity duration-500 ${isFading ? "opacity-0" : "opacity-100"}`}
        >
          <img
            src={images[currentIndex].src}
            alt="Famous person"
            className="w-full h-full object-contain rounded-lg"
          />
        </div>

        {/* Текст */}
        <div className="w-2/3">
          <blockquote
            className={`text-left text-3xl font-semibold text-gray-800 transition-opacity duration-500 ${isFading ? "opacity-0" : "opacity-100"}`}
            style={{ fontFamily: "'Dancing Script', cursive", minHeight: "8rem" }} // Фіксована висота
          >
            <p>{images[currentIndex].text}</p>
          </blockquote>
          <footer className="text-lg text-gray-600 mt-4 text-right" style={{ fontFamily: "'Great Vibes', cursive" }}>
            {/* Писаний шрифт для автора */}
            {images[currentIndex].author}
          </footer>
        </div>
      </div>
    </section>
  );
};

export default Sculpt;
