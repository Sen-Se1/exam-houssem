const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const postList = [
  { id: '1', titre: "Premier post", contenu: "détails premier post" },
  { id: '2', titre: "Deuxième post", contenu: "détails deuxième post" },
  { id: '3', titre: "Troisième post", contenu: "détails troisième post" },
];

app.get('/postList', (req, res) => {
  res.json(postList);
});

app.listen(3000, () => console.log("Server running on port 3000"));
