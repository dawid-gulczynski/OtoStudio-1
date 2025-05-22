const API_URL = "http://localhost:3000/api/studios";
const list = document.getElementById("studio-list");
const modal = document.getElementById("studio-modal");
const openModal = document.getElementById("open-modal");
const closeModal = document.getElementById("close-modal");
const searchInput = document.getElementById("search-input");
const sortSelect = document.getElementById("sort-select");

openModal.addEventListener("click", () => modal.style.display = "flex");
closeModal.addEventListener("click", () => modal.style.display = "none");
window.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});

async function loadStudios() {
  const res = await fetch(API_URL);
  let studios = await res.json();

  const query = searchInput.value.toLowerCase();
  const sort = sortSelect.value;

  // Filtrowanie
  if (query) {
    studios = studios.filter(studio =>
      studio.name.toLowerCase().includes(query)
    );
  }

  // Sortowanie
  studios.sort((a, b) => {
    if (sort === "newest") {
      return new Date(b.createdAt) - new Date(a.createdAt);
    } else if (sort === "oldest") {
      return new Date(a.createdAt) - new Date(b.createdAt);
    } else if (sort === "name-asc") {
      return a.name.localeCompare(b.name);
    } else if (sort === "name-desc") {
      return b.name.localeCompare(a.name);
    }
    return 0;
  });

  list.innerHTML = "";
  studios.forEach((studio) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <a href="/details/studio.html?id=${studio.id}" class="studio-link">
        <img src="${studio.imageUrl}" alt="${studio.name}">
        <h3>${studio.name}</h3>
        <p>${studio.isForSale ? 'Na sprzedaż' : 'Na wynajem'} – <strong>${studio.price}${studio.isForSale ? ' PLN' : ' PLN/h'}</strong></p>
      </a>`;
    list.appendChild(li);
  });
}

async function deleteStudio(id) {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  loadStudios();
}

document.getElementById("add-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const form = e.target;
  const name = form.name.value;
  const price = form.price.value;
  const imageUrl = form.url.value;
  const type = form.type.value;
  const description = form.description.value;

  const isForSale = type === "sale";
  
  try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, price, imageUrl, description, isForSale })
      });

      if (!response.ok) {
        let errorMsg = "Wystąpił błąd podczas dodawania studia.";
        try {
          const errorData = await response.json();
          if (errorData.message) errorMsg = errorData.message;
        } catch (jsonErr) {
          console.warn("Nie można sparsować błędu JSON:", jsonErr);
        }
        throw new Error(errorMsg);
      }

      alert("Studio zostało dodane pomyślnie!");

      form.reset();
      modal.style.display = "none";
      loadStudios();

    } catch (error) {
      console.error("Błąd dodawania studia:", error);
      alert("Wystąpił błąd podczas dodawania studia.");
    }
});

searchInput.addEventListener("input", loadStudios);
sortSelect.addEventListener("change", loadStudios);
loadStudios();
