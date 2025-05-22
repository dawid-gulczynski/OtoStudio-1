const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
const sequelize = require("./config/database");
const studioRoutes = require("./routes/studioRoutes.js");

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, 'frontend')));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "list", "index.html"));
});

app.use("/api/studios", studioRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Wystąpił błąd." });
});

sequelize
  .sync({alter: true})
  .then(() => {
    app.listen(3000, () => {
      console.log("Serwer działa na porcie 3000: http://localhost:3000");
    });
  })
  .catch((err) => {
    console.error("Błąd połączenia z bazą", err);
  });
