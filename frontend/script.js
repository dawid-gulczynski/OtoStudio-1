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

async function deleteStudio(id) {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  loadStudios();
}

loadStudios();
