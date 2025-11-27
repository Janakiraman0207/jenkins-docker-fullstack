const API_URL = "http://3.89.228.20/api/products";

async function loadProducts() {
  const res = await fetch(API_URL);
  const data = await res.json();

  const container = document.getElementById('products');
  container.innerHTML = '';

  data.forEach(p => {
    const div = document.createElement('div');
    div.className = "card";
    div.innerHTML = `
      <div class="card-title">${p.name}</div>
      <div class="card-price">₹${p.price}</div>
    `;
    container.appendChild(div);
  });
}

loadProducts();
