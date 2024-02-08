const books = [
  {title: "The Iliad", publishingYear: 1598},
  {title: "The Odyssey", publishingYear: 1614},
  {title: "The Golden Ass", publishingYear: 1566},
];

exports.add = (book) => {
  books.push(book);
}


exports.all = books