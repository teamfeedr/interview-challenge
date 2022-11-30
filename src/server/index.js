const express = require('express');

const itemsHandler = require('./itemsHandler');

const app = express();

const port = process.env.PORT || 8080;

app.use(express.static('dist'));

app.get('/api/items', itemsHandler);

app.listen(port, () => console.log(`Listening on port ${port}!`));
