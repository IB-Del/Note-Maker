import React, { Component } from 'react';
import { Form, Button } from "react-bootstrap";

class AddNote extends Component {
    state = {
      content: ''
    }
    
    handleChange = (e) => {
      this.setState({
        content: e.target.value
      });
    }
    handleSubmit = (e) => {
      e.preventDefault();
      // call function to add a note
      this.props.addNote(this.state);
      this.setState({
        content: ''
      })
    }
    render() {
      return (
        <div className="text-center my-4">
          <form onSubmit={this.handleSubmit}>
            <Form.Control
          aas="textarea"
          rows="3"
          placeholder="write your note here"
          name="text"
          className="py-1 mx-1 my-2" type="text" onChange={this.handleChange} value={this.state.content}
        />
            <button type="submit" className="btn bg-success mx-2 mb-5">Add Note</button>
            <button type="submit" className="btn bg-success mx-2 mb-5">Delete</button>
            <button type="submit" className="btn bg-success mx-2 mb-5">Save</button>
          </form>
        </div>
      )
    }
  }
export default AddNote