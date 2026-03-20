const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let enquiries = [];

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

app.post("/api/admissions", (req, res) => {
  const data = req.body;
  enquiries.push(data);
  res.json({ message: "Saved successfully" });
});

app.get("/api/admissions", (req, res) => {
  res.json(enquiries);
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
