const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require("mongoose");
const routePost = require("./routes/post.route");

mongoose
  .connect("mongodb://127.0.0.1:27017/PostList")
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

app.use(express.json());
app.use(cors());

const postList = [
  { id: '1', titre: "Premier post", contenu: "détails premier post" },
  { id: '2', titre: "Deuxième post", contenu: "détails deuxième post" },
  { id: '3', titre: "Troisième post", contenu: "détails troisième post" },
];

app.get('/postList', (req, res) => {
  res.json(postList);
});

app.use("/api/postList", routePost);

app.listen(3000, () => console.log("Server running on port 3000"));
