const books = [
  {title: "The Iliad", publishingYear: 1598},
  {title: "The Odyssey", publishingYear: 1614},
  {title: "The Golden Ass", publishingYear: 1566},
];

exports.add = (book) => {
  books.push(book);
}

exports.get = (idx) => {
  return books[idx];
}

exports.update = (book) => {
  books[book.id] = book;
}

exports.upsert = (book) => {
  if (book.id) {
    exports.update(book);
  } else {
    exports.add(book);
  }
}

exports.all = books
