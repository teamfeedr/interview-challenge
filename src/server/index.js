const express = require('express');
const items = require('./items');
const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 8080;

app.use(express.static('dist'));
app.use(bodyParser.json());

app.get('/api/items', (req, res) => res.send({ items }));

app.post('/api/filter', (req, res) => {
  const searchValue = req.body.filter;
  res.send(items.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase())))
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
