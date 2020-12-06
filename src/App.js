import React, { Component } from 'react';
import Notes from './components/Notes';
import AddNote from './components//AddNote';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  state = {
    notes: [
      {id: 1, content:'Note 1'},
      {id: 2, content:'Note 2'},
      {id: 3, content:'Note 3'}

    ]
  }
  showNote = (id) => {
    console.log(id);
  }
  addNote = (note) => {
    note.id = Math.random();
    let notes = [...this.state.notes, note];
    this.setState({
      notes
    });
  }
  deleteNote = (id) => {
    const notes = this.state.notes.filter(note => {
      return note.id !== id
    });
    this.setState({
      notes
    })
  }
  render() {
    return (
      <div className="note-taker-app container">
        <AddNote addNote={this.addNote} className="my-5"/>
        <h1 className="text-center text-primary">Notes</h1>
        <Notes notes={this.state.notes} deleteNote={this.deleteNote} />    
      </div>
    );
  }
}

export default App;
