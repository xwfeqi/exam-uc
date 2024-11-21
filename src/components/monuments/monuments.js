import React, { useState } from "react";
import Navbar from "../navbar/navbar"; // імпорт компонента Navbar

const monuments = [
  {
    id: 1,
    title: "Пам’ятник Войцеху Бартошу Гловацькому",
    description: "Якщо більшості львів’ян, пам’ятник, що знаходить в парку на вулиці Личаківській може і відомий, то постать Бартоша Гловацького навряд чи. І це не дивно, адже жодного стосунку цей чоловік до Львова ніколи не мав. А пам’ятник йому звели поляки як героєві повстання під проводом Тадеуша Костюшки, а конкретніше – героя Рацлавицької битви. Нагадаємо, що битва ця була проти російських військ, а тому дивно, що пам’ятник пережив радянську владу Львова. Однак його врятувало те, що сам Бартош був кріпаком за походженням, тож радянська пропаганда «трудящим» борцем за справедливість. Поставили цей монумент ще в 1906 році. З того часу він лиш оновив свою табличку, на котрій окрім польської тепер присутня й українська мова.",
    images: [
      "https://i0.wp.com/photo-lviv.in.ua/wp-content/uploads/2016/05/1907.jpg?fit=5121%2C2502",
      "https://i0.wp.com/photo-lviv.in.ua/wp-content/uploads/2016/05/1925.jpg?fit=5121%2C2502",
      "https://i0.wp.com/photo-lviv.in.ua/wp-content/uploads/2016/05/glov1.jpg?fit=5121%2C2502"
    ]
  },
  {
    id: 2,
    title: "Монумент Адаму Міцкевичу",
    description: "А от пам’ятник Адаму Міцкевичу на одноіменній площі, який старший від попереднього пам’ятника всього лиш на 2 роки, можна назвати «найнаглішим» пам’ятником Львова. Це ж скільки треба мати хамства, щоб потіснити скульптуру Матері Божої. Не дарма ж колись у нашому місті жартували «Посунься Маріє, бо Міцкевич іде». А якщо серйозно, то пам’ятник польському поетові, котрий, як і Гловацький, у Львові ніколи не бував, був чи не найдорожчим монументом того часу. Кошти на нього збирали так довго, що від часу коли обрали проект пам’ятника (1898 рік) та до відкриття  (1904 рік) пройшло аж 6 років. І кращого місця для Міцкевича не знайшли як площу, де до того уже пів століття стояла скульптура Богоматері, котру довелося перемістити на початок проспекту, там вона стоїть і по сьогодні. Чому радянська влада вирішила залишити цей монумент у Львові, а не передати полякам, як вчинила з тим же Фредром, залишається тільки гадати. Можливо свою роль зіграло те, що Міцкевич довгий час жив і працював в самій Росії.",
    images: [
      "https://i0.wp.com/photo-lviv.in.ua/wp-content/uploads/2016/05/1910.jpg?fit=5121%2C2502",
      "https://i0.wp.com/photo-lviv.in.ua/wp-content/uploads/2016/05/1912.jpg?fit=5121%2C2502",
      "https://i0.wp.com/photo-lviv.in.ua/wp-content/uploads/2016/05/Lvov_mickiewicz.jpg"
    ]
  },
  {
    id: 3,
    title: "Пам’ятник Яну Кілінському",
    description: "А от пам’ятник Яну Кілінському у Стрийському парку по праву можна вважати найстарішим антропоморфним пам’ятником Львова, адже встановленого його ще позаминулого століття, у 1895 році. Постать Яна Кілінського знайома львів’янам тільки з колишньої назви парку, який носив його ім’я. Зважаючи на певну схожість зі згаданим вище пам’ятником Гловацькому можна здогадатись, що Кілінський теж учасник повстання 1794 року, хоча відіграв у ньому значно більшу роль, як і в цілому польському національному русі. Чи бував Ян Кілінський у Львові – навряд чи, принаймні жодних відомостей про це ми не маємо. Оскільки він походив з простої сім’ї та й сам довгий час був звичайним шевцем, то його пам’ятник теж не рухали за радянської влади.",
    images: [
      "https://i0.wp.com/photo-lviv.in.ua/wp-content/uploads/2016/05/1905-kil.jpg",
      "https://i0.wp.com/photo-lviv.in.ua/wp-content/uploads/2016/05/71.jpg",
      "https://i0.wp.com/photo-lviv.in.ua/wp-content/uploads/2016/05/LwowPomniKilinskiego4.jpg"
    ]
  },
  {
    id: 4,
    title: "Обеліск Теофіла Віснєвського",
    description: "В один рік з пам’ятником Кілінському було встановлено обеліск на Горі Страт, що на Клепарові. Імена тих, кому саме присвячено цей монумент, знайомі небагатьом, в тому числі й історикам. Та це й не дивно, оскільки Теофіл Віснєвський та Юзеф Капусцінський були маловідомими польськими патріотами, страченими в 1847 році на цьому ж місці. У 1895 році їм поставлено монумент, хоча на ньому згадується ім’я лиш Віснєвського. Цікавий той факт, що і страта, і монумент страченим було поставлено за австрійської влади Львова. Довгий час обеліск був у запущеному стані, і лиш в 2015 році відбулась його реконструкція.",
    images: [
      "https://i0.wp.com/photo-lviv.in.ua/wp-content/uploads/2016/05/45_full.jpg",
      "https://i0.wp.com/photo-lviv.in.ua/wp-content/uploads/2016/05/50_full.jpg?fit=5121%2C2502",
      "https://i0.wp.com/photo-lviv.in.ua/wp-content/uploads/2016/05/58_full.jpg?fit=5121%2C2502"
    ]
  },
  {
    id: 5,
    title: "камінь Яна III Собєського",
    description: "Пам'ятник Богдану Хмельницькому є символом боротьби за незалежність України. Він встановлений у Львові і є важливою частиною культурної спадщини країни.",
    images: [
      "https://i0.wp.com/photo-lviv.in.ua/wp-content/uploads/2016/05/06.08.p.Kotlobulatov_053.jpg",
      "https://i0.wp.com/photo-lviv.in.ua/wp-content/uploads/2016/05/1-1.jpg?fit=5121%2C2502",
      
    ]
  }
];

const Monuments = () => {
  const [currentImageIndexes, setCurrentImageIndexes] = useState(
    new Array(monuments.length).fill(0)
  );

  const handleNextImage = (index) => {
    setCurrentImageIndexes((prevIndexes) => {
      const newIndexes = [...prevIndexes];
      newIndexes[index] = (newIndexes[index] + 1) % monuments[index].images.length;
      return newIndexes;
    });
  };

  const handlePrevImage = (index) => {
    setCurrentImageIndexes((prevIndexes) => {
      const newIndexes = [...prevIndexes];
      newIndexes[index] =
        (newIndexes[index] - 1 + monuments[index].images.length) %
        monuments[index].images.length;
      return newIndexes;
    });
  };

  return (
    <div className="bg-gray-100 text-black min-h-screen pt-20">
      {/* Navbar */}
      <Navbar />

      {/* Монументи */}
      {monuments.map((monument, index) => (
        <section
          key={monument.id}
          className={`flex flex-col md:flex-row items-center p-6 space-y-8 md:space-y-0 bg-gray-${300 + index * 100}`}
        >
          <div className="md:w-2/5 w-full">
            <div className="relative w-full h-[400px]">
              <img
                src={monument.images[currentImageIndexes[index]]}
                alt={monument.title}
                className="w-full h-full object-contain rounded-lg"
              />
              <div className="absolute top-0 left-0 w-full flex justify-between mt-4 px-4">
                <button
                  onClick={() => handlePrevImage(index)}
                  className="bg-black text-white p-2 rounded-full"
                >
                  &lt;
                </button>
                <button
                  onClick={() => handleNextImage(index)}
                  className="bg-black text-white p-2 rounded-full"
                >
                  &gt;
                </button>
              </div>
            </div>
          </div>
          <div className="md:w-3/5 w-full">
            <h2 className="text-3xl font-bold text-black">{monument.title}</h2>
            <p className="text-gray-700 mt-4">{monument.description}</p>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Monuments;
