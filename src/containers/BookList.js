import React, { Component } from "react";
import Book from "../components/Book";
// import Form from "../components/Form";

export class Booklist extends Component {
  render() {
    return (
      <div className="book-list">
        <h1>Book List</h1>
        {this.props.allBooks.map(book => (
          <Book
            handleBookEvent={this.props.handleBookSelection}
            bookData={book}
            key={book.id}
          />
        ))}
      </div>
    );
  }
}

export default Booklist;
