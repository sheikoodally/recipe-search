import React from 'react';
import  './recipe.css'


const Recipe = ({label, calories, image, ingredientLines, url}) => {

    let counter = 0;

    return(
        <div className="Recipes">
                <h1 >{label}</h1>
                <p>Calories: {calories}</p>
                <img src={image} alt=""></img>
                <ol className="listStyle">{ ingredientLines.map(list =>(
                    <li key={counter} {...counter= counter + 1}>{list}</li>
                ))}
                </ol>
                <a style = {PointerStyle} href={url} target="_blank">Click here for full recipe...</a>
                <hr></hr>
        </div>
    );
};



const PointerStyle = {
    cursor: 'pointer'
}

export default Recipe;