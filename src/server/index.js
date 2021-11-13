const express = require("express");
const items = require("./items");
const cors = require("cors");
const app = express();

const port = process.env.PORT || 8080;
app.use(cors());
app.use(express.static("dist"));

app.get("/api/items", (req, res) => res.send({ items }));

app.listen(port, () => console.log(`Listening on port ${port}!`));
