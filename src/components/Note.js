import React from 'react';

function Note({ note, deleteNote, archiveNote }) {
    const formattedBody = note.body.split('\n').map((text, index) => (
        <React.Fragment key={index}>
            {text}
            <br />
        </React.Fragment>
    ));

    return (
        <div className="note-card">
            <h3>{note.title}</h3>
            <p>{formattedBody}</p>
            <p>{new Date(note.createdAt).toLocaleString()}</p>
            <button className="delete" onClick={() => deleteNote(note.id)}>Hapus</button>
            <button className="archive" onClick={() => archiveNote(note.id)}>
                {note.archived ? 'Batal Arsip' : 'Arsip'}
            </button>
        </div>
    );
}

export default Note;
