import React, { Component } from "react";
import BookShelf from "../BookShelf";
import SearchButton from "../SearchButton";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class BookList extends Component {
  shelfs = [
    {
      name: `currentlyReading`,
      heading: `Currently Reading`
    },
    {
      name: `wantToRead`,
      heading: `Want to Read`
    },
    {
      name: `read`,
      heading: `Read`
    }
  ];

  render() {
    console.log("props book", this.props.books);
    console.log("selfs", this.shelfs);
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        {this.shelfs.map((shelf, index) =>
          <BookShelf
            key={index}
            books={this.props.books.filter(book => book.shelf === shelf.name)}
            title={shelf.heading}
            onUpdateShelf={(book, shelf) => {
              this.props.onUpdateShelf(book, shelf);
            }}
          />
        )}
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}

BookList.propTypes = {
  books: PropTypes.array
};

export default BookList;
