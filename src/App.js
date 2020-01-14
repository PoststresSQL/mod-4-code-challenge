import React, { Component } from "react";
import "./App.css";
import Booklist from "./containers/Booklist";
import Bookshelf from "./containers/Bookshelf";
import Form from "./components/Form";

// endpoint
const API = "http://localhost:3005/books";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      allBooks: [],
      selectedBooks: []
    };
  }

  componentDidMount() {
    fetch(API)
      .then(res => res.json())
      .then(books => this.setState({ allBooks: books }));
  }

  handleBookSelection = selectedBook => {
    const bookExists = this.state.selectedBooks.some(book => book.id === selectedBook.id);

    if (!bookExists) {
      this.setState({
        selectedBooks: [...this.state.selectedBooks, selectedBook]
      });
    }
    else
    {
      alert('HEY MAN THERE"S A BOOK IN HERE ALREADY WITH THAT SAME NAME SO JUST READ IT OR REMOVE IT DAMN.')

    }
  };

  handleBookRemoval = selectedBook => {
    const newSelectedBookState = this.state.selectedBooks.filter(
      book => book.id !== selectedBook.id
    );

    console.log(newSelectedBookState);
    this.setState({
      selectedBooks: newSelectedBookState
    });
  };

  handleBookCreation = () => {};

  render() {
    // console.log(this.state.selectedBooks);

    return (
      <div>
        <Form handleBookCreation={this.handleBookCreation} />
        <div className={"book-container"}>
          <Booklist
            handleBookSelection={this.handleBookSelection}
            allBooks={this.state.allBooks}
          />
          <Bookshelf
            handleBookRemoval={this.handleBookRemoval}
            selectedBooks={this.state.selectedBooks}
          />
        </div>
      </div>
    );
  }
}

export default App;
