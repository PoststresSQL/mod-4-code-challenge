import Book from "../components/Book";
import React from "react";

// render all selectedBooks through Bookshelf

const Bookshelf = props => {
  
  return (
    
    <div className="bookshelf">
      <h1>Book Shelf</h1>
      {props.selectedBooks.map(book => (
        <Book
          handleBookEvent={props.handleBookRemoval}
          bookData={book}
          key={book.id}
        />
      ))}
    </div>
  );
};

export default Bookshelf; //hello!!
