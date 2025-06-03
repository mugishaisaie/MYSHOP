const products = [
  {
    name: 'Back pack',
    url: 'images/backpack.jpg',
    category: 'fashions',
    price: 29.99,
  },
  {
    name: 'Baking',
    url: 'images/baking.webp',
    category: 'Electronics',
    price: 32.99,
  },
  {
    name: 'Basketball',
    url: 'images/basketball.jpg',
    category: 'Games',
    price: 74.29,
  },
  {
    name: 'Bathroom',
    url: 'images/bathroom.jpg',
    category: 'Home&Kitchen',
    price: 39.11,
  },
  {
    name: 'Blender',
    url: 'images/blender.jpg',
    category: 'Electronics',
    price: 23.11,
  },
  {
    name: 'Bowl set',
    url: 'images/bowl-set.jpg',
    category: 'Electronics',
    price: 32.43,
  },
  {
    name: 'Boxes',
    url: 'images/boxes.jpg',
    category: 'Home&Kitchen',
    price: 19.33,
  },
  {
    name: 'Cooking',
    url: 'images/cooking-set.webp',
    category: 'Home&Kitchen',
    price: 1099.99,
  },
  {
    name: 'cotton',
    url: 'images/cotton.webp',
    category: 'Home&Kitchen',
    price: 88.99,
  },
  {
    name: 'Curtain Beige',
    url: 'images/curtain-beige.webp',
    category: 'Home&Kitchen',
    price: 799.99,
  },
  {
    name: 'Curtains',
    url: 'images/curtains.jpg',
    category: 'Home&Kitchen',
    price: 33.54,
  },
  {
    name: 'Duvet',
    url: 'images/duvet.jpg',
    category: 'Home&Kitchen',
    price: 99,
  },
  {
    name: 'Earrings',
    url: 'images/earrings.webp',
    category: 'Fashions',
    price: 65.09,
  },
  {
    name: 'Food storage',
    url: 'images/food-storage.jpg',
    category: 'Home&Kitchen',
    price: 96.97,
  },
  {
    name: 'Glass',
    url: 'images/glass.jpg',
    category: 'Home&Kitchen',
    price: 87.11,
  },
  {
    name: 'Kettle',
    url: 'images/kettle.webp',
    category: 'Electronics',
    price: 91.23,
  },
  {
    name: 'Men cozy',
    url: 'images/men-cozy.jpg',
    category: 'Fashions',
    price: 97.73,
  },
  {
    name: 'Men Pants',
    url: 'images/men-pants.jpg',
    category: 'Fashions',
    price: 99.34,
  },
  {
    name: 'Men shirt',
    url: 'images/men-shirt-blue.jpg',
    category: 'Fashions',
    price: 213.11,
  },
  {
    name: 'Men shorts',
    url: 'images/men-shorts-.jpg',
    category: 'Fashions',
    price: 95.55,
  },
  {
    name: 'Men sunglasses',
    url: 'images/men-sunglasses.jpg',
    category: 'Fashions',
    price: 54.53,
  },
  
  {
    name: 'Shoe Pink',
    url: 'images/shoe-pink.webp',
    category: 'Fashions',
    price: 76.99,
  },
  {
    name: 'Shoe Gray',
    url: 'images/shoes-gray.jpg',
    category: 'Fashions',
    price: 94.59,
  },
  {
    name: 'Shoe green',
    url: 'images/shoes-green.jpg',
    category: 'Fashions',
    price: 77.19,
  },
  {
    name: 'socks',
    url: 'images/socks.jpg',
    category: 'Fashions',
    price: 98.99,
  },
  {
    name: 'Sun hat',
    url: 'images/straw-sunhat.webp',
    category: 'Fashions',
    price: 99.99,
  },
  
  {
    name: 'Mirror Sliver',
    url: 'images/vanity-mirror-silver.jpg',
    category: 'Fashions',
    price: 92.99,
  },
  {
    name: 'Beach Sandals',
    url: 'images/women-beach-sandals.jpg',
    category: 'Fashions',
    price: 59.99,
  },
];


// Select Dom Elements

const productWrapper  = document.getElementById("products-wrapper")
const checkBoxes  = document.querySelectorAll(".check")
const filtersContainer  = document.getElementById("filters-container")
const searchInput  = document.getElementById("search")
const cartCount  = document.getElementById("cartCount")
  
// init cart item quantity


// Event listener for filtering products

filtersContainer.addEventListener("change",filterProducts);
searchInput.addEventListener("input",filterProducts);

let cartItemsCount = 0

// Init product Element Array
const productElements = [];

// Loop over product and create an Element

products.forEach((product)=>{
  const productElement = createProductElement(product);

productElements.push(productElement);
productWrapper.appendChild(productElement);

})


// function create product Element
function createProductElement(product){
  const productElement = document.createElement("div");
productElement.className ="item space-y-2";

productElement.innerHTML = `

<div class="bg-gray-100 flex justify-center relative overflow-hidden group cursor-pointer border rounded-xl">
            <img src=${product.url} alt=${product.name} class="w-full h-50 object-cover" />
            <button class="status bg-gray-800 text-white absolute bottom-0 left-0 right-0 text-center py-2 translate-y-full transition group-hover:translate-y-0 cursor-pointer">
                Add to Cart
            </button>
        </div>
        <p class="text-xl"> ${product.name}</p>
        <strong>${product.price.toLocaleString()}</strong>
`;

productElement.querySelector(".status").addEventListener("click",updateCart)

return productElement;

}


// Add or remove Item from Cart
function updateCart(e){
  const statusEl = e.target;
  // console.log(statusEl)

  if(statusEl.classList.contains("added")){
    statusEl.classList.remove("added");
    statusEl.innerHTML ="Add to Cart";
    statusEl.classList.remove("added");
    statusEl.classList.add("bg-gray-800");
    statusEl.classList.remove("bg-red-500");
    cartItemsCount--;

  }else{
    statusEl.classList.add("added");
    statusEl.innerHTML ="Remove from Cart";
    statusEl.classList.remove("bg-gray-800");
    statusEl.classList.add("bg-red-500");
    cartItemsCount++;
  }
// update cart Item Count  
cartCount.innerText = cartItemsCount.toString();
}


// Filter products based on checkboxes and search input

function filterProducts(){
  // get search term
  const searchTerm = searchInput.value.trim().toLowerCase();
  // get checked categories

  const checkedCategories = Array.from(checkBoxes).filter((check)=>check.checked).map((check)=>check.id);

  // console.log(checkedCategories)
  // Loops over the product and find matches

  productElements.forEach((productElement,index)=>{
    const product = products[index];

    // check if product matches search term or checked categories

    const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm);

    const productCategory = product.category.toLowerCase();
    const isInCheckedCategory = checkedCategories.length === 0 || checkedCategories.includes(productCategory)

    // show or hide product based on Matches

    if(matchesSearchTerm && isInCheckedCategory){
      productElement.classList.remove("hidden")
    }else{
      productElement.classList.add("hidden")

    }
  })
}
