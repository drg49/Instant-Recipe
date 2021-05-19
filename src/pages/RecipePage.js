import React, {useState, useEffect} from 'react'
import load from '../loading.gif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'

const backBtn = <FontAwesomeIcon icon={faArrowLeft} size="1x"/>

const RecipePage = (props) => {
    const mealId = props.match.params.mealId
    
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`

    const [recipe, setRecipe] = useState(null)

    const getRecipe = async () => {
        const response = await fetch(url)
        const data = await response.json()
        setRecipe(data.meals[0])
    }

    useEffect(() => {getRecipe()}, [])

    const loaded = () => {
        return (
            <div>
                <Link to='/' id="home"><span>{backBtn}</span></Link>
                <h2 id="recipeTitle">{recipe.strMeal}</h2>
                <img id="recipethumb" src={recipe.strMealThumb} alt={recipe.strMeal} />
                <p id="origin">Cuisine: {recipe.strArea}</p>
                <h4 id="ingredients">Ingredients</h4>
                <ul>
                    <li>{recipe.strIngredient1}</li>
                    <li>{recipe.strIngredient2}</li>
                    <li>{recipe.strIngredient3}</li>
                    <li>{recipe.strIngredient4}</li>
                    <li>{recipe.strIngredient5}</li>
                    <li>{recipe.strIngredient6}</li>
                    <li>{recipe.strIngredient8}</li>
                    <li>{recipe.strIngredient9}</li>
                    <li>{recipe.strIngredient10}</li>
                    <li>{recipe.strIngredient11}</li>
                    <li>{recipe.strIngredient12}</li>
                    <li>{recipe.strIngredient13}</li>
                    <li>{recipe.strIngredient14}</li>
                    <li>{recipe.strIngredient15}</li>
                    <li>{recipe.strIngredient16}</li>
                    <li>{recipe.strIngredient17}</li>
                    <li>{recipe.strIngredient18}</li>
                    <li>{recipe.strIngredient19}</li>
                    <li>{recipe.strIngredient20}</li>
                </ul>
                <p id="instructions">{recipe.strInstructions}</p>
                <a id="video-btn" href={recipe.strYoutube} target="_blank" rel="noreferrer">Watch Instructional Video</a>          
            </div>
        )
    }

    const loading = () => {
        return <img id="load" src={load} alt="The page is loading"/>
    }

    return recipe ? loaded() : loading()

}

export default RecipePage