const API_URL = "http://localhost:3000/api/studios";

async function loadStudios() {
  const res = await fetch(API_URL);
  const data = await res.json();

  const list = document.getElementById("studio-list");
  list.innerHTML = "";

  data.forEach((studio) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${studio.name}</strong> - ${studio.price} PLN
      <img src="${studio.imageUrl}" alt="${studio.name}" width="100"/>
      <button onclick="deleteStudio('${studio.id}')">Usuń</button>
    `;
    list.appendChild(li);
  });
}

const form = document.getElementById("add-form");

form.addEventListener("submit", (event) => {
  const name = document.querySelector('input[placeholder="Nazwa"]').value;
  const price = document.querySelector('input[placeholder="Cena"]').value;
  const imageUrl = document.querySelector('input[placeholder="url"]').value;

  const data = {
    name: name,
    price: price,
    imageUrl: imageUrl,
  };

  addStudio(data);
});

async function deleteStudio(id) {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  loadStudios();
}

async function addStudio(data) {
  await fetch(`${API_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).catch((error) => {
    console.error("Wystąpił błąd:", error);
  });
}

loadStudios();
