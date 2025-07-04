// TO-DO APP
function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();
  if (task) {
    const list = document.getElementById("taskList");
    const li = document.createElement("li");
    li.textContent = task;
    list.appendChild(li);
    saveTask(task);
    input.value = "";
  }
}

function saveTask(task) {
  const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  tasks.forEach(task => {
    const li = document.createElement("li");
    li.textContent = task;
    document.getElementById("taskList").appendChild(li);
  });
}

// PRODUCT LISTING
const products = [
  { name: "Smartphone", category: "electronics", price: 500 },
  { name: "Jeans", category: "fashion", price: 40 },
  { name: "Laptop", category: "electronics", price: 800 },
  { name: "T-Shirt", category: "fashion", price: 20 }
];

function renderProducts() {
  const filter = document.getElementById("filter").value;
  const sort = document.getElementById("sort").value;
  let filtered = [...products];

  if (filter !== "all") {
    filtered = filtered.filter(p => p.category === filter);
  }

  if (sort === "priceLow") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === "priceHigh") {
    filtered.sort((a, b) => b.price - a.price);
  }

  const container = document.getElementById("productContainer");
  container.innerHTML = "";

  filtered.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `<h3>${p.name}</h3><p>Category: ${p.category}</p><p>Price: $${p.price}</p>`;
    container.appendChild(div);
  });
}

// INIT
window.onload = function () {
  loadTasks();
  renderProducts();
};
