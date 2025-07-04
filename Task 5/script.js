const products = [
  { id: 1, name: 'Matte Lipstick', category: 'lipstick', price: 399, image: 'images/MatteLipstick.jpg' },
  { id: 2, name: 'Liquid Foundation', category: 'foundation', price: 599, image: 'images/LiquidFoundation.jpg' },
  { id: 3, name: 'Black Eyeliner', category: 'eyeliner', price: 299, image: 'images/Eyeliner.jpg' },
  { id: 4, name: 'Glossy Lipstick', category: 'lipstick', price: 499, image: 'images/GlossyLipstick.jpg' },
];

let cart   = JSON.parse(localStorage.getItem('glamCart')) || [];

const productContainer = document.getElementById('products');
const cartCount = document.getElementById('cart-count');
const cartItems = document.getElementById('cart-items');
const cartSidebar = document.getElementById('cart');
const checkoutBtn = document.getElementById('checkout');
const cartBtn = document.getElementById('cart-btn');
const categoryFilter = document.getElementById('category-filter');

function renderProducts(filtered = products) {
  productContainer.innerHTML = '';
  filtered.forEach(p => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}" />
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    `;
    productContainer.appendChild(card);
  });
}

function addToCart(id) {
  const item = products.find(p => p.id === id);
  cart.push(item);
  localStorage.setItem('glamCart', JSON.stringify(cart));
  updateCart();
}

function updateCart() {
  cartItems.innerHTML = '';
  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - ₹${item.price}`;
    const btn = document.createElement('button');
    btn.textContent = 'Remove';
    btn.onclick = () => {
      cart.splice(index, 1);
      localStorage.setItem('glamCart', JSON.stringify(cart));
      updateCart();
    };
    li.appendChild(btn);
    cartItems.appendChild(li);
  });
  cartCount.textContent = cart.length;
}

categoryFilter.addEventListener('change', () => {
  const value = categoryFilter.value;
  const filtered = value === 'all' ? products : products.filter(p => p.category === value);
  renderProducts(filtered);
});

cartBtn.addEventListener('click', () => {
  cartSidebar.classList.toggle('hidden');
});

checkoutBtn.addEventListener('click', () => {
  alert('Thanks for your order!');
  cart = [];
  localStorage.removeItem('glamCart');
  updateCart();
});

document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  updateCart();
});
