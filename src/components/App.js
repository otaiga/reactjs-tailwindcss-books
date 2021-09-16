import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Book from "./Book";

const Home = () => {
  const [books, setBooks] = useState([]);

  const getBooks = async () => {
    try {
      const response = await fetch(new URL("books", "http://localhost:8000"));
      if (response.ok) {
        const books = await response.json();
        setBooks(books);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <section className="p-8">
      {books.length > 0 ? (
        <>
          <h1 className="font-bold ">List of books</h1>
          <ul>
            {books.map((book) => {
              return (
                <li key={book.sub}>
                  <Link
                    className="no-underline hover:underline"
                    to={`/book/${book.sub}`}
                  >
                    {book.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </section>
  );
};

const App = () => {
  return (
    <Router>
      <nav className="bg-blue-400 text-white p-4">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/book/:id" render={(props) => <Book {...props} />} />
      </Switch>
    </Router>
  );
};

export default App;
