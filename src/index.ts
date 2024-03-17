const express = require("express");
const cors = require("cors");
// import ObjectRoute from "./routes/ObjectRoute";

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "https://fe-template.azurewebsites.net/",
  })
);

// app.use("/objects", ObjectRoute);

app.get("/", (req, res) => {
  res.json({ message: "Radi" });
});

app.listen(8080, () => console.log("Server started..."));
