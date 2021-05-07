import React from 'react'
import {Link} from 'react-router-dom'

const CountryFoodItems = (props) => {
    return (
        <Link to={`/recipe/${props.idMeal}`}>
        <div id="meal-card">
            <img src={props.strMealThumb} id="meal-thumb" alt={props.strMeal}/>
            <h4 id="meal-name">{props.strMeal}</h4>
        </div>
        </Link>
    ) 
}

export default CountryFoodItems