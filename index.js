const express = require("express");
const app = express();
const path = require("path");

const publicPath = path.join(__dirname, "public");
const paperPath = path.join(__dirname, "node_modules", "paper", "dist");

// Custom middleware to set MIME type for JavaScript files
app.get("/", (req, res) => {
  const filePath = path.join(publicPath, "index.html");
  res.sendFile(filePath);
});

// Serve static files from the "public" directory
app.use(express.static(publicPath));

// Serve paper-full.js from the "node_modules" directory
app.use("/public/paper", express.static(paperPath));

// Serve index.html for the /testLand route
app.get("/testLand", (req, res) => {
  const filePath = path.join(publicPath, "testLand", "index.html");
  res.sendFile(filePath);
});

const port = 3000;
app.listen(port, () => console.log(`Running on http://localhost:${port}`));
