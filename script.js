const tg = window.Telegram.WebApp;
tg.expand(); // разворачиваем мини-апп на весь экран

const products = [
  { id: 1, name: "Товар 1", price: 1200 },
  { id: 2, name: "Товар 2", price: 850 },
  { id: 3, name: "Товар 3", price: 1990 }
];

const cart = [];
const productsDiv = document.getElementById("products");

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

  tg.MainButton.setText(`Оформить заказ (${cart.length})`);
  tg.MainButton.show();
}

tg.MainButton.onClick(() => {
  tg.sendData(JSON.stringify({
    action: "order",
    items: cart
  }));
});
