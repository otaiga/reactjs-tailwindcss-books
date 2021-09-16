import React, { useEffect, useState } from "react";

const Book = (props) => {
  const {id} = props.match.params
  const [book, setBook] = useState({});

  const getBook = async (id) => {
    try {
      const response = await fetch(new URL(`/books?sub=${id}`, "http://localhost:8000"));
      if (response.ok) {
        const book = await response.json();
        if (book.length > 0){
          setBook(book[0]);
        }
        
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getBook(id);
  }, [id]);

  return book ?<div className="p-8">
    <h2 className="font-bold text-lg" >{book.title}</h2>
    <p>{book.description}</p>
  </div> : <p>Loading...</p>
}

export default Book;