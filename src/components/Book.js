import React from "react";

const Book = props => {
  return (
    <div
      className="book-card"
      onClick={() => props.handleBookEvent(props.bookData)}
    >
      <h1>{props.bookData.title}</h1>
      <img id="book-card" src={props.bookData.img} alt="book cover" />
    </div>
  );
};

export default Book;
