// Simple product list
const products = [
  { id: 1, name: "Smartphone", price: 9999, image: "https://5.imimg.com/data5/SELLER/Default/2022/10/LO/ZQ/XF/113077208/i-phone14-pro-jpg-500x500.jpg" },
  { id: 2, name: "Headphones", price: 1999, image: "https://www.lapcare.com/cdn/shop/files/1_6122ca29-5373-4c4f-97c2-0728ea368fc1.webp?v=1757326029&width=2048" },
  { id: 3, name: "Laptop", price: 49999, image: "https://saudewala.in/cdn/shop/collections/Laptop.jpg?v=1732216115" },
  { id: 4, name: "Smartwatch", price: 2999, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSsafa1JZJRoqFyM2bns8fXXkHiptfs1bEFA&s" }
];

let cart = [];
const productList = document.getElementById("product-list");
const cartCount = document.getElementById("cart-count");
const cartTotal = document.getElementById("cart-total");

// Display products
function displayProducts() {
  products.forEach(product => {
    const div = document.createElement("div");
    div.classList.add("product");
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>Price: ₹${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productList.appendChild(div);
  });
}

// Add product to cart
function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  updateCart();
}

// Update cart display
function updateCart() {
  cartCount.textContent = cart.length;
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  cartTotal.textContent = total;
}

displayProducts();