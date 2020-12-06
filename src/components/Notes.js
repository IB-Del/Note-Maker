import React from 'react';
const Notes = ({notes, deleteNote}) => {
    const notesList = notes.length ? (
        notes.map(note => {
            return (
                    <div className="col-sm-6 col-md-4 mb-5">
                        <div className="card" key={note.id} >
                            <span className="px-3 py-3">{note.content}</span>
                            <button className="btn bg-success" onClick={() => {deleteNote(note.id)}}>delete note</button>
                        </div>
                    </div>
                    
            )
        })
    ): (
        <p className="text-center">You how no notes left, add a new note!</p>
    );
    return (
        <div className="container notes my-5">
            <div className="row">
                    {notesList}
            </div>
        </div>
    )
}

export default Notes;