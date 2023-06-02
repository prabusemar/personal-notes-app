import React, { useState } from 'react';
import Note from './Note';
import SearchBar from './SearchBar';
import AddNoteForm from './AddNoteForm';

function NotesList({ notes, setNotes }) {
    const [searchTerm, setSearchTerm] = useState('');

    const deleteNote = (id) => {
        if (window.confirm('Anda yakin ingin menghapus catatan ini?')) {
            setNotes(notes.filter((note) => note.id !== id));
        }
    };

    const archiveNote = (id) => {
        setNotes(notes.map((note) =>
            note.id === id ? { ...note, archived: !note.archived } : note
        ));
    };

    const filteredNotes = notes.filter((note) => {
        return note.title.toLowerCase().includes(searchTerm.toLowerCase()) && !note.archived;
    });

    const archivedNotes = notes.filter((note) => note.archived);

    return (
        <div>
            <h1 className="judul">Aplikasi Catatan Pribadi</h1>

            <div className="container-tambah">
                <h2>Tambah Catatan</h2>
                <AddNoteForm notes={notes} setNotes={setNotes} />
            </div>

            <div className="container">
                <h2>Cari Catatan</h2>
                <SearchBar setSearchTerm={setSearchTerm} />
                <div className="note-container">
                    {filteredNotes.length > 0 ? filteredNotes.map((note) => (
                        <Note key={note.id} note={note} deleteNote={deleteNote} archiveNote={archiveNote} />
                    )) : <p>Tidak ada catatan</p>}
                </div>
            </div>

            <div className="container">
                <h2>Arsip</h2>
                <div className="note-container">
                    {archivedNotes.length > 0 ? archivedNotes.map((note) => (
                        <Note key={note.id} note={note} deleteNote={deleteNote} archiveNote={archiveNote} />
                    )) : <p>Tidak ada catatan yang diarsipkan</p>}
                </div>
            </div>
        </div>
    );
}

export default NotesList;
