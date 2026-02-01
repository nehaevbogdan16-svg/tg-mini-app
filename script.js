const products = [
  { id: 1, name: "Товар 1", price: 1200 },
  { id: 2, name: "Товар 2", price: 850 },
  { id: 3, name: "Товар 3", price: 1990 }
];

const cart = [];

const productsDiv = document.getElementById("products");
const cartDiv = document.getElementById("cart");
const cartItems = document.getElementById("cartItems");
const totalEl = document.getElementById("total");
const cartCount = document.getElementById("cartCount");

products.forEach(p => {
  const el = document.createElement("div");
  el.className = "product";
  el.innerHTML = `
    <h3>${p.name}</h3>
    <p>${p.price} ₽</p>
    <button onclick="addToCart(${p.id})">В корзину</button>
  `;
  productsDiv.appendChild(el);
});

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  updateCart();
}

function updateCart() {
  cartItems.innerHTML = "";
  let total = 0;
  cart.forEach(item => {
    total += item.price;
    const li = document.createElement("li");
    li.textContent = `${item.name} — ${item.price} ₽`;
    cartItems.appendChild(li);
  });
  totalEl.textContent = total;
  cartCount.textContent = cart.length;
}

document.getElementById("cartBtn").onclick = () => {
  cartDiv.style.display = "block";
};

function closeCart() {
  cartDiv.style.display = "none";
}
