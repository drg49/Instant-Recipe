import React,{useState, useEffect} from 'react'
import FoodItems from '../components/FoodItems'

const CategoryMealPage = (props) => {
    const category = props.match.params.category

    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`

    const [meals, setMeals] = useState(null)
    
    const getMeals = async () => {
        const response = await fetch(url)
        const data = await response.json()
        setMeals(data.meals.map((item, index) => {
            return (
                <FoodItems
                    strMeal={item.strMeal}
                    strMealThumb={item.strMealThumb}
                    idMeal={item.idMeal}
                    key={index}
                />
            )
        }))
    }

    useEffect(() => {getMeals()}, [])

    const loaded = () => {
        return (
            <>
            <h2 id="page-title">{category} Recipes</h2>
            <div id="meal-flex">
                {meals}
            </div>
            </>
        )
    }

    const loading = () => {
        return <h2>Loading...</h2>
    }

    return meals ? loaded() : loading()

}

export default CategoryMealPage