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

  mergeArr = (arr, Arr) => {
    return arr.map(item => {
      Arr.forEach(Item => {
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
          books = this.mergeArr(books, this.props.books);
          this.setState({ books });
        } else {
          this.setState({ books: [] });
        }
      });
    } else {
      this.setState({ books: [], query: "" });
    }
  };

  //
  // updateResults = searchResults => {
  //   const booksDB = this.props.books.map(b => b.id);
  //   searchResults.map(book => {
  //     booksDB.includes(book.id) &&
  //       (book.shelf = this.props.books.filter(b => b.id === book.id).shelf);
  //   });
  //   this.setState({ results: searchResults });
  // };
  //
  // updateQuery = query => {
  //   this.setState({ query });
  //   this.searchBooks(query);
  // };
  //
  // searchBooks = query => {
  //   BooksAPI.search(query, 20).then(books => {
  //     Array.isArray(books) && this.updateResults(books);
  //   });
  // };

  render() {
    console.log("#this props", this.props);
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

export default Search;
