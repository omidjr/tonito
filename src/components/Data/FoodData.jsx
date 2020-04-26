export const formatPrice = (price) => {
  return price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};

export const FoodData = [
  {
    name: "California Style",
    img: "/img/food/pizza/california-style-pizza.jpg",
    section: "Top",
    item: "Pizza",
    price: [15, 19],
  },
  {
    name: "Hawaiian",
    img: "/img/food/pizza/hawaiian-pizza.jpg",
    section: "Top",
    item: "Pizza",
    price: [9.99, 19],
  },
  {
    name: "Greek Style",
    img: "/img/food/pizza/greek-style-pizza.jpg",
    section: "Top",
    item: "Pizza",
    price: [14, 18],
  },
  {
    name: "Sicilian",
    img: "/img/food/pizza/sicilian-pizza.jpg",
    section: "Top",
    item: "Pizza",
    price: [17, 21],
  },
  {
    name: "Seafood Pizza",
    img: "/img/food/pizza/pizza-ai-frutti-di-mare.jpg",
    section: "Special",
    item: "Pizza",
    price: [11, 15],
  },
  {
    name: "Diavola",
    img: "/img/food/pizza/pizza-alla-diavola.jpg",
    section: "Special",
    item: "Pizza",
    price: [12.5, 16.5],
  },
  {
    name: "Ortolana",
    img: "/img/food/pizza/pizza-ortolana.jpg",
    section: "Special",
    item: "Pizza",
    price: [13, 17],
  },
  {
    name: "Carbonara",
    img: "/img/food/pizza/pizza-carbonara.jpg",
    section: "Special",
    item: "Pizza",
    price: [13.5, 17.5],
  },
  {
    name: "Rustica",
    img: "/img/food/pizza/pizza-rustica.jpg",
    section: "Special",
    item: "Pizza",
    price: [13, 17],
  },
  {
    name: "Fries",
    img: "/img/food/sides/fries.jpeg",
    item: "Sides",
    price: [6, 10],
  },
  {
    name: "Olives",
    img: "/img/food/sides/olives.jpg",
    item: "Sides",
    price: [7, 11],
  },
  {
    name: "Caesar Salad",
    img: "/img/food/sides/salad.jpg",
    item: "Sides",
    price: [8.5, 12.5],
  },
  {
    name: "Mexican Corn",
    img: "/img/food/sides/corn.jpg",
    item: "Sides",
    price: [8.5, 12.5],
  },
  {
    name: "CokaCola",
    img: "/img/food/drinks/cokacola.jpg",
    item: "Drinks",
    price: [3, 7],
  },
  {
    name: "Pepsi",
    img: "/img/food/drinks/pepsi.jpg",
    item: "Drinks",
    price: [3, 7],
  },
  {
    name: "Sprite",
    img: "/img/food/drinks/sprite.jpg",
    item: "Drinks",
    price: [3, 7],
  },
  {
    name: "Fanta",
    img: "/img/food/drinks/fanta.jpg",
    item: "Drinks",
    price: [3, 7],
  },
  {
    name: "Mineral Water",
    img: "/img/food/drinks/mineral-water.jpg",
    item: "Drinks",
    price: [1.5, 4.5],
  },
];
