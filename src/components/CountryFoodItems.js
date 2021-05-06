import React from 'react'

const CountryFoodItems = (props) => {
    return (
        <div id="meal-card">
            <img src={props.strMealThumb} id="meal-thumb" alt={props.strMeal}/>
            <h4 id="meal-name">{props.strMeal}</h4>
        </div>

    ) 
}

export default CountryFoodItems