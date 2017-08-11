let books = [];
let id = 0;

module.exports = {
  create: (req, res) => {
    let { title, author } = req.body
    books.push({ title, author, id })
    id++
    res.status(200).send(books)
  },
  read: (req, res) => {
    res.status(200).send(books)
  },
  update: (req, res) => {
    books.map(e => {
      if (e.id === +req.params.id) Object.assign(e, req.body)
      return e
    })
    res.status(200).send(books)
  },
  delete: (req, res) => {
    console.log(req.params.id)
    console.log(books)
    books = books.filter(e => {
      if(e.id !== +req.params.id) return e
    })
    console.log(books, ' should be altered')

    res.status(200).send(books)
  }
}