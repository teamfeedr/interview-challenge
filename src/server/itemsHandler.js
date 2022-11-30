const items = require('./items');

module.exports = (req, res) => {
  const filter = req.query.filter;

  if (!filter) {
    res.send({ items });
  } else {
    const filteredItems = items.filter(({ name }) => {
      return name.toLowerCase().includes(filter.toLowerCase());
    });

    res.send({ items: filteredItems });
  }
};
