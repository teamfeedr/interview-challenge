const express = require("express");
const cors = require("cors");
const items = require("./items");

const app = express();

const port = process.env.PORT || 8080;

app.use(express.static("dist"));

app.use(cors());

app.get("/api/items/:filter", (req, res) => {
  const filter = req.params.filter;
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );
  res.send({ items: filteredItems });
});
app.get("/api/items", (req, res) => res.send({ items }));

app.listen(port, () => console.log(`Listening on port ${port}!`));
