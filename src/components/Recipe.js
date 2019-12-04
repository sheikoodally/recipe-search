import React from 'react';
import  './recipe.css'


const Recipe = ({label, calories, image, ingredientLines, url}) => {

    let counter = 0;

    return(
        <div style = {Recipes} className="Recipes">
            <h1>{label}</h1>
            <p>{calories}</p>
            <img src={image} alt=""></img>
            <ul >{ ingredientLines.map(list =>(
                <li key={counter} {...counter= counter + 1}>{list}</li>
            ))}
            </ul>
            <a style = {PointerStyle} href={url} target="_blank">Click here for full recipe...</a>
            <hr></hr>
    </div>
    );
};

const Recipes = {
}

const PointerStyle = {
    cursor: 'pointer'
}

export default Recipe;