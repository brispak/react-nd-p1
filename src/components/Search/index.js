import React, { Component } from "react";
import { Link } from "react-router-dom";
import Book from "../Book/index.js";
import * as BooksAPI from "../../BooksAPI.js";
import BookShelf from "../BookShelf/index.js";

class Search extends Component {
  state = {
    query: "",
    books: []
  };

  bookArr = (book, books) => {
    return book.map(item => {
      books.forEach(Item => {
        if (Item.id === item.id) {
          item.shelf = Item.shelf;
          return;
        }
      });
      return item;
    });
  };

  updateQuery = e => {
    const value = e.target.value.trim();
    this.setState({ query: value });
    this.searchData(value);
  };

  searchData = value => {
    if (value.length !== 0) {
      BooksAPI.search(value, 10).then(books => {
        if (books.length > 0) {
          books = books.filter(book => book.imageLinks);
          books = this.bookArr(books, this.props.books);
          this.setState({ books });
        } else {
          this.setState({ books: [] });
        }
      });
    } else {
      this.setState({ books: [], query: "" });
    }
  };

  render() {
    return (
      <div>
        <div className="search-books">
          <div className="search-books-bar">
            <Link className="close-search" to="/">
              Close
            </Link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title or author"
                value={this.state.query}
                onChange={this.updateQuery}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid" />
          </div>
        </div>
        {this.state.query !== "" &&
          this.state.books.length > 0 &&
          <BookShelf
            title="Search Results"
            books={this.state.books}
            onUpdateShelf={(id, shelf) => {
              this.props.onUpdateShelf(id, shelf);
            }}
          />}
      </div>
    );
  }
}

Search.propTypes = {
  books: PropTypes.array,
  onUpdateShelf: PropTypes.func.isRequired
};

export default Search;
