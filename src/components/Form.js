import React, { Component } from 'react';

export class Form extends Component {
constructor(){
  super()

  this.state={
    title: "",
    author: "",
    img_url: ""
  }
}

handleFormChange = (e) => {
  this.setState({ [e.target.name]: e.target.value })
}

handleSubmit = (e) => {
  e.preventDefault();
  // handleBookCreation()
  // create an object with the contents of the state.
  // use a callback function to .push new object into state in App.js
}
  
render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleFormChange} type="text" name="title" placeholder='title'/>
          <input onChange={this.handleFormChange} type="text" name="author" placeholder='author'/>
          <input onChange={this.handleFormChange} type="text" name="img_url" placeholder='img_url'/>
          <input type="submit" value='submit'/>
        </form>
      </div>
    );
  }
}

export default Form;
