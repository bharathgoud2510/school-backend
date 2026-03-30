const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Backend is LIVE 🚀");
});

const PORT = process.env.PORT;

if (!PORT) {
  console.log("PORT not found ❌");
}

app.listen(PORT, "0.0.0.0", () => {
  console.log("Server running on port " + PORT);
});