let books = [],
    id = 0;

module.exports = {
  create: (req, res) => {
    let { title, author } = req.body;
    books.push({id, title, author})
    id++;
    res.status(200).send(books);
  },
  read: (req, res) => {
    res.status(200).send(books);
  },
  update: (req, res) => {
    books.map(e => {
      if(e.id === +req.params.id) {
        Object.assign(e, req.body)
      }
      return e;
    })
    res.status(200).send(books);
  },
  delete: (req, res) => {
    
  }
}