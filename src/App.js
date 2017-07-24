import React from "react";
import * as BooksAPI from "./BooksAPI";
import BookList from "./components/BookList";
import SearchBar from "./components/SearchBar";
import { Route } from "react-router-dom";
import "./App.css";

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  }

  searchBook(books) {
    BooksAPI.search(books, 20).then(book => {
      this.setState(state => ({
        books: state.book
      }));
    });
  }

  render() {
    console.log("0. App component", this.state.books);
    return (
      <div>
        <Route
          exact
          path="/"
          render={() => <BookList books={this.state.books} />}
        />

        <Route
          path="/search"
          render={({ history }) =>
            <SearchBar
              onSearch={book => {
                this.searchBook(book);
                history.push("/");
              }}
            />}
        />
      </div>
    );
  }
}

export default BooksApp;

// <Route path='/search' render={({ history }) => (
//   <CreateContact
//     onCreateContact={(contact) => {
//       this.createContact(contact)
//       history.push('/')
//     }}
//   />
// )}/>
