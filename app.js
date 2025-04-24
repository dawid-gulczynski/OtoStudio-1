const express = require("express");
const app = express();
const cors = require("cors");
const sequelize = require("./config/database");
const Studio = require("./models/studio");
const studioRoutes = require("./routes/studioRoutes.js");

app.use(cors());
app.use(express.json());
app.use("/api/studios", studioRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(500).json({ message: "Coś się zepsuło :c" });
});

sequelize
  .sync()
  .then(() => {
    app.listen(3000, () => {
      console.log("dziala na porcie 3000");
    });
  })
  .catch((err) => {
    console.error("Błąd połaczenia z baza", err);
  });
