import React, {useState, useEffect} from 'react'

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
                <h2>{recipe.strMeal}</h2>
            </div>
        )
    }

    const loading = () => {
        return <h2>Loading...</h2>
    }

    return recipe ? loaded() : loading()

}

export default RecipePage