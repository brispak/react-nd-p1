import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";
import BookList from "./components/BookList";
import SearchBar from "./components/SearchBar";
import { Route } from "react-router-dom";
import "./App.css";

class BooksApp extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.fetchBooks();
  }

  fetchBooks = () => {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  };

  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      this.fetchBooks();
    });
  };

  searchBook(books) {
    BooksAPI.search(books, 20).then(book => {
      this.setState(state => ({
        books: state.book
      }));
    });
  }

  render() {
    return (
      <div>
        <Route
          exact
          path="/"
          render={() =>
            <BookList
              books={this.state.books}
              onUpdateShelf={(book, shelf) => {
                this.updateShelf(book, shelf);
              }}
            />}
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
