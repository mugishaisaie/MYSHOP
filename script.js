const products = [
  {
    name: 'Back pack',
    url: 'images/playstation_5.png',
    type: 'games',
    price: 499.99,
  },
  {
    name: 'Baking',
    url: 'images/samsung_galaxy.png',
    type: 'smartphones',
    price: 399.99,
  },
  {
    name: 'Basketball',
    url: 'images/cannon_eos_camera.png',
    type: 'cameras',
    price: 749.99,
  },
  {
    name: 'Bathroom',
    url: 'images/sony_a7_camera.png',
    type: 'cameras',
    price: 1999.99,
  },
  {
    name: 'Blender',
    url: 'images/lg_tv.png',
    type: 'televisions',
    price: 799.99,
  },
  {
    name: 'Bowl set',
    url: 'images/nintendo_switch.png',
    type: 'games',
    price: 299.99,
  },
  {
    name: 'Boxes',
    url: 'images/xbox_series_x.png',
    type: 'games',
    price: 499.99,
  },
  {
    name: 'Cooking',
    url: 'images/samsung_tv.png',
    type: 'televisions',
    price: 1099.99,
  },
  {
    name: 'cotton',
    url: 'images/google_pixel.png',
    type: 'smartphones',
    price: 499.99,
  },
  {
    name: 'Curtain Beige',
    url: 'images/sony_zv1f_camera.png',
    type: 'cameras',
    price: 799.99,
  },
  {
    name: 'Curtains',
    url: 'images/toshiba_tv.png',
    type: 'televisions',
    price: 499.99,
  },
  {
    name: 'Duvet',
    url: 'images/iphone_14.png',
    type: 'smartphones',
    price: 999.99,
  },
  {
    name: 'Earrings',
    url: 'images/iphone_14.png',
    type: 'smartphones',
    price: 999.99,
  },
  {
    name: 'Food storage',
    url: 'images/iphone_14.png',
    type: 'smartphones',
    price: 999.99,
  },
  {
    name: 'Glass',
    url: 'images/iphone_14.png',
    type: 'smartphones',
    price: 999.99,
  },
  {
    name: 'Kettle',
    url: 'images/iphone_14.png',
    type: 'smartphones',
    price: 999.99,
  },
  {
    name: 'Men cozy',
    url: 'images/iphone_14.png',
    type: 'smartphones',
    price: 999.99,
  },
  {
    name: 'Men Pants',
    url: 'images/iphone_14.png',
    type: 'smartphones',
    price: 999.99,
  },
  {
    name: 'Men shirt',
    url: 'images/iphone_14.png',
    type: 'smartphones',
    price: 999.99,
  },
  {
    name: 'Men shorts',
    url: 'images/iphone_14.png',
    type: 'smartphones',
    price: 999.99,
  },
  {
    name: 'Men sunglasses',
    url: 'images/iphone_14.png',
    type: 'smartphones',
    price: 999.99,
  },
  {
    name: 'Pack',
    url: 'images/iphone_14.png',
    type: 'smartphones',
    price: 999.99,
  },
  {
    name: 'Plain',
    url: 'images/iphone_14.png',
    type: 'smartphones',
    price: 999.99,
  },
  {
    name: 'Plates',
    url: 'images/iphone_14.png',
    type: 'smartphones',
    price: 999.99,
  },
  {
    name: 'Shoe Pink',
    url: 'images/iphone_14.png',
    type: 'smartphones',
    price: 999.99,
  },
  {
    name: 'Shoe Gray',
    url: 'images/iphone_14.png',
    type: 'smartphones',
    price: 999.99,
  },
  {
    name: 'Shoe green',
    url: 'images/iphone_14.png',
    type: 'smartphones',
    price: 999.99,
  },
  {
    name: 'socks',
    url: 'images/iphone_14.png',
    type: 'smartphones',
    price: 999.99,
  },
  {
    name: 'Sun hat',
    url: 'images/iphone_14.png',
    type: 'smartphones',
    price: 999.99,
  },
  {
    name: 'Tishirt',
    url: 'images/iphone_14.png',
    type: 'smartphones',
    price: 999.99,
  },
  {
    name: 'Toaster',
    url: 'images/iphone_14.png',
    type: 'smartphones',
    price: 999.99,
  },
  {
    name: 'Umbrella',
    url: 'images/iphone_14.png',
    type: 'smartphones',
    price: 999.99,
  },
  {
    name: 'Mirror Sliver',
    url: 'images/iphone_14.png',
    type: 'smartphones',
    price: 999.99,
  },
  {
    name: 'Beach Sandals',
    url: 'images/iphone_14.png',
    type: 'smartphones',
    price: 999.99,
  },
];


// Select Dom Elements

const productWrapper  = document.getElementById("products-wrapper")
const checkBoxes  = document.querySelectorAll(".check")
const filtersContainer  = document.getElementById("filters-container")
const searchInput  = document.getElementById("search")
const cartCount  = document.getElementById("cart-count")
  


console.log(checkBoxes)