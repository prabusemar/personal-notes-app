import React from 'react';

function Note({ note, deleteNote, archiveNote }) {
    return (
        <div className="note-card">
            <h3>{note.title}</h3>
            <p>{note.body}</p>
            <button className="delete" onClick={() => deleteNote(note.id)}>Hapus</button>
            <button className="archive" onClick={() => archiveNote(note.id)}>
                {note.archived ? 'Batal Arsip' : 'Arsip'}
            </button>
        </div>
    );
}

export default Note;
