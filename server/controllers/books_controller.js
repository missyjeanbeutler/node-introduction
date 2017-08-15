let books = [],
    id = 0;

module.exports = {
  create: (req, res) => {
    let { title, author } = req.body;
    books.push({id, title, author})
    id++;
    res.status(200).send(books);
  },
  read:
  update:
  delete:
}