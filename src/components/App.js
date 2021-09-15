import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Book from "./Book";
import books from "../lib/books";

const Home = () => {
  return (
    <section className="p-8">
      <h1 className="font-bold ">List of books</h1>
      <ul>
        {Object.keys(books).map((bookId) => {
          return (
            <li key={bookId}>
              <Link
                className="no-underline hover:underline"
                to={`/book/${bookId}`}
              >
                {books[bookId].title}
              </Link>
            </li>
          );
        })}
      </ul>
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
