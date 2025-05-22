# OtoStudio

**OtoStudio** to aplikacja webowa umożliwiająca użytkownikom przeglądanie, edytowanie oraz zarządzanie studiami muzycznymi. System oparty jest o Node.js i Express, z wykorzystaniem Sequelize do komunikacji z bazą danych MySQL. Frontend opiera się o klasyczne szablony HTML/CSS.

---

## Architektura systemu

```
OtoStudio/
 ├── app.js                  - Główna konfiguracja aplikacji Express
 ├── config/
 │   └── database.js        - Konfiguracja połączenia z bazą danych (Sequelize)
 ├── controllers/
 │   └── studioController.js - Logika aplikacji (obsługa CRUD)
 ├── frontend/
 │   ├── list/              - Widoki listy studiów
 │   ├── form/              - Widoki formularzy edycji
 │   └── details/           - Szczegóły studiów
 ├── models/
 │   └── Studio.js          - Model danych Sequelize
 ├── routes/
 │   └── studioRoutes.js    - Routing aplikacji
 └── package.json           - Zależności projektu
```

---

## Technologie

| Warstwa   | Technologia         | Opis                                        |
|-----------|---------------------|---------------------------------------------|
| Backend   | Node.js, Express.js | Obsługa serwera, API, routing                |
| Baza danych | MySQL + Sequelize | Relacyjna baza danych z ORM                  |
| Frontend  | HTML, CSS           | Widoki statyczne i dynamiczne                |

---

## Konfiguracja środowiska

### Wymagania:
- Node.js (v14+) https://nodejs.org/en/download
- MySQL https://www.mysql.com/downloads/
- Baza danych: `otostudio_db` na `127.0.0.1`

### Instalacja:
1. Utwórz bazę danych:
   ```sql
   CREATE DATABASE otostudio_db;
   ```
2. Skonfiguruj dane połączenia w `config/database.js`:
   ```js
   const sequelize = new Sequelize('otostudio_db', 'root', 'root', {
       host: '127.0.0.1',
       dialect: 'mysql'
   });
   ```
3. Zainstaluj zależności:
   ```
   npm install
   ```

4. Uruchom serwer:
   ```
   node app.js
   ```

5. Aplikacja dostępna pod adresem: `http://localhost:3000`

---

## Funkcjonalności backendu

- CRUD dla studiów:
  - Lista studiów
	- Filtrowanie studiów
	- Sortowanie studiów
  - Szczegóły studia
  - Formularze edycji i dodawania
  - Usuwanie studiów

- Obsługa routingu:
  - `/studios` – Lista
  - `/studios/:id` – Szczegóły
  - `/studios/edit/:id` – Edycja
  - `/studios/delete/:id` – Usuwanie

---

## Frontend

- Widoki HTML:
  - `list/index.html`
  - `details/studio.html`
  - `form/edit.html`
- Stylizacja:
  - `frontend/**/styles.css`

---

## Zespół

- Dawid Gulczyński  
- Kamil Orliński  
- Tymon Hładyszewski  
- Jakub Golec  
- Jan Jankowski  
