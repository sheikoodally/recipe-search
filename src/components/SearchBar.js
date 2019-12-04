import React, {useState, setState} from 'react';


const SearchBar = () => {

    const [search, setSearch] = useState('');
    const[query, setQuery] = useState('chicken');

    const updateSearch = e => {
        setSearch(e.target.value)
        console.log(search)
    }

    

    return(
        <div className="SearchBar">
            <form className="search-form">
                <input 
                    type="text" 
                    placeholder="Enter Recipe"
                    className="search-bar"
                    value = {search}
                    onChange = {updateSearch}
                    
                />
                <button 
                    type="submit"
                    className="search-button" 
                >
                    Search
                </button>

        </form>

    </div>
    );
};

export default SearchBar;


