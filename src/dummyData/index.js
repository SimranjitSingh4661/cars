const CAR1 = require("../assets/Images/car1.png");
const CAR2 = require("../assets/Images/car2.png");
const CAR3 = require("../assets/Images/car3.png");
const CAR4 = require("../assets/Images/car4.png");
const CAR5 = require("../assets/Images/car5.png");
const CAR6 = require("../assets/Images/car6.png");
const CAR7 = require("../assets/Images/car7.png");
const CAR8 = require("../assets/Images/car8.png");
const GALLERY1 = require("../assets/Images/carGallery1.jpg");
const GALLERY2 = require("../assets/Images/carGallery2.jpg");
const GALLERY3 = require("../assets/Images/carGallery3.jpg");
const GALLERY4 = require("../assets/Images/carGallery4.jpg");
const GALLERY5 = require("../assets/Images/carGallery5.jpg");
const GALLERY6 = require("../assets/Images/carGallery6.jpg");
const GALLERY7 = require("../assets/Images/carGallery7.jpg");
const GALLERY8 = require("../assets/Images/carGallery8.jpg");

const GALLERY9 = require("../assets/Images/carGallery9.jpg");
const GALLERY10 = require("../assets/Images/carGallery10.jpg");
const GALLERY11 = require("../assets/Images/carGallery11.jpg");
const GALLERY12 = require("../assets/Images/carGallery12.jpg");
const GALLERY13 = require("../assets/Images/carGallery13.jpg");
const GALLERY14 = require("../assets/Images/carGallery14.jpg");
const GALLERY15 = require("../assets/Images/carGallery15.jpg");
const GALLERY16 = require("../assets/Images/carGallery16.jpg");

export const CARS = [CAR1, CAR2, CAR3, CAR4, CAR5, CAR6, CAR7, CAR8];

const CAR_GALLERY = [
  GALLERY1,
  GALLERY2,
  GALLERY3,
  GALLERY4,
  GALLERY5,
  GALLERY6,
  GALLERY7,
  GALLERY8,
];

const CAR_GALLERY_2 = [
  GALLERY9,
  GALLERY10,
  GALLERY11,
  GALLERY12,
  GALLERY13,
  GALLERY14,
  GALLERY15,
  GALLERY16,
];

export const CARS_GALLERY = [
  {
    title: "Mercedes SL 63 AMG",
    price: "9500 AED/day",
    carGallery: CAR_GALLERY,
    description:
      "The Mercedes-Benz S-Class is a luxury car that sets the standard for prestige and comfort.",
    specifications: [
      {
        horsepower: "469 hp",
      },
      {
        transmission: "Automatic",
      },
    ],
    isBtnDisabled: false,
  },
  {
    title: "BMW 7 Series",
    price: "8680 AED/day",
    carGallery: CAR_GALLERY_2,

    description:
      "The BMW 7 Series is a full-size luxury sedan known for its plush interior and advanced technology features.",
    specifications: [
      {
        horsepower: "335 hp",
      },
      {
        transmission: "Manual",
      },
    ],
    isBtnDisabled: true,
  },
  {
    title: "Audi A8",
    price: "8650 AED/day",
    carGallery: CAR_GALLERY,
    description:
      "The Audi A8 is a sophisticated luxury sedan with a refined interior and powerful engine options.",
    specifications: [
      {
        horsepower: "335 hp",
      },
      {
        transmission: "Automatic",
      },
    ],
    isBtnDisabled: false,
  },
  {
    title: "Lexus LS",
    price: "7600 AED/day",
    carGallery: CAR_GALLERY_2,
    description: "The Lexus LS is a premium luxury sedan known for its quiet and comfortable ride.",
    specifications: [
      {
        horsepower: "416 hp",
      },
      {
        transmission: "Manual",
      },
    ],
    isBtnDisabled: true,
  },
  {
    title: "Jaguar XJ",
    price: "7670 AED/day",
    carGallery: CAR_GALLERY,
    description:
      "The Jaguar XJ is a stylish luxury sedan with powerful engine options and dynamic handling.",
    specifications: [
      {
        horsepower: "340 hp",
      },
      {
        transmission: "Automatic",
      },
    ],
    isBtnDisabled: false,
  },
  {
    title: "Volvo S90",
    price: "5150 AED/day",
    carGallery: CAR_GALLERY_2,
    description:
      "The Volvo S90 is a luxury sedan that offers a comfortable and safe driving experience.",
    specifications: [
      {
        horsepower: "316 hp",
      },
      {
        transmission: "Manual",
      },
    ],
    isBtnDisabled: true,
  },
  {
    title: "Cadillac CT6",
    price: "5895 AED/day",
    carGallery: CAR_GALLERY,
    description: "The Cadillac CT6 is a luxury sedan with a spacious cabin and smooth ride.",
    specifications: [
      {
        horsepower: "335 hp",
      },
      {
        transmission: "Automatic",
      },
    ],
    isBtnDisabled: false,
  },
  {
    title: "Lincoln Continental",
    price: "4635 AED/day",
    carGallery: CAR_GALLERY_2,
    description:
      "The Lincoln Continental is a classic luxury sedan with a comfortable interior and smooth ride.",
    specifications: [
      {
        horsepower: "335 hp",
      },
      {
        transmission: "Manual",
      },
    ],
    isBtnDisabled: true,
  },
];
