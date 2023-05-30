import React, { useState } from 'react';
import NotesList from './components/NotesList';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);

  return (
    <div className="App">
      <NotesList notes={notes} setNotes={setNotes} />
    </div>
  );
}

export default App;
