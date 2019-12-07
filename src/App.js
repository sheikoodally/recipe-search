import React, {useState, useEffect} from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import Recipe from './components/Recipe';
import Suggestion from './components/Suggestion';




const App = () => {


  const APP_ID = '063e3b1b';
  const APP_KEY = 'cd6d42cacda20e2dd5d7d8d529a15b9f';

  //const test = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const[query, setQuery] = useState('chicken');



  useEffect(() =>{
      getRecipes();
  }, [query]);

  const getRecipes = async () =>{
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&start=0&to=20`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits)
  };


  const updateSearch = e => {
      setSearch(e.target.value);
      console.log(search)
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery (search);
  }


  return(
    <div className="App">
      <Suggestion/>
     <form onSubmit={getSearch} className="search-form">
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
        <div className = "recipeApp">
          {recipes.map( recipe => (
            <Recipe key={recipe.recipe.uri}
              label={recipe.recipe.label}
              image= {recipe.recipe.image}
              calories = {recipe.recipe.calories}
              ingredientLines = {recipe.recipe.ingredientLines}
              url = {recipe.recipe.url}
            />
          ))}
        </div>
    </div>
  );
};

export default App;
