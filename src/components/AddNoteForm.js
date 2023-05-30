import React, { useState } from 'react';

function AddNoteForm({ notes, setNotes }) {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [charCount, setCharCount] = useState(0);

    const addNote = (e) => {
        e.preventDefault();

        const newNote = {
            id: +new Date(),
            title: title,
            body: body,
            archived: false,
            createdAt: new Date().toISOString(),
        };

        setNotes([...notes, newNote]);

        setTitle('');
        setBody('');
        setCharCount(0);
    };

    const handleTitleChange = (e) => {
        const newTitle = e.target.value;

        if (newTitle.length <= 50) {
            setTitle(newTitle);
            setCharCount(newTitle.length);
        }
    };

    return (
        <form onSubmit={addNote}>
            <input
                type="text"
                value={title}
                onChange={handleTitleChange}
                placeholder="Judul catatan..."
            />
            <p>{50 - charCount} karakter tersisa</p>
            <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                placeholder="Isi catatan..."
            />
            <button className="add" type="submit">Tambah Catatan</button>
        </form>
    );
}

export default AddNoteForm;
