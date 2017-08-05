import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";
import BookList from "./components/BookList";
import Search from "./components/Search";
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
          exact
          path="/search"
          render={({ history }) =>
            <Search
              books={this.state.books}
              onUpdateShelf={(book, shelf) => {
                this.updateShelf(book, shelf);
                history.push("/");
              }}
            />}
        />
      </div>
    );
  }
}

export default BooksApp;
