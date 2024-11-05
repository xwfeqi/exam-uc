import React from 'react';

const ExampleCarouselImage = ({ imageUrl, altText }) => {
  return (
    <img
      className="d-block w-100"
      src={"https://dic.academic.ru/pictures/wiki/files/50/811ee752dd972bb6fc0f7f200be8741d.jpg"}
      alt={altText}
      style={{ height: '100%', objectFit: 'cover' }} // Додаємо стиль для кращого вигляду
    />
  );
};

export default ExampleCarouselImage;
