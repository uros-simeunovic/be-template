const express = require("express");
// import ObjectRoute from "./routes/ObjectRoute";

const app = express();

app.use(express.json());

// app.use("/objects", ObjectRoute);

app.get("/", (req, res) => {
  res.json({ message: "Radi" });
});

app.listen(8080, () => console.log("Server started on http://localhost:8080"));
