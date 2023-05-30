import React from 'react';

function SearchBar({ setSearchTerm }) {
    return (
        <form>
            <input
                type="text"
                placeholder="Cari catatan..."
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </form>
    );
}

export default SearchBar;
