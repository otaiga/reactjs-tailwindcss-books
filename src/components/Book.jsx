import React from "react";
import books from "../lib/books";

const Book = (props) => {
  const {id} = props.match.params
  const book = books[id]

  return <div className="p-8">
    <h2 className="font-bold text-lg" >{book.title}</h2>
    <p>{book.description}</p>
  </div>
}

export default Book;