const express = require("express");
const app = express();

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  return res.json({ message: "Hi, I am node.js container" });
});

app.listen(PORT, () => console.log(`server started  on port : ${PORT}`));
