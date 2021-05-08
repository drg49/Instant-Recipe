import React,{useState, useEffect} from 'react'
import FoodItems from '../components/FoodItems'

const CategoryMealpage = (props) => {
    const category = props.match.params.category

    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`

    const [cuisine, setCuisine] = useState(null)
    
    const getMeals = async () => {
        const response = await fetch(url)
        const data = await response.json()
        setCuisine(data.meals.map((item, index) => {
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
            <div id="meal-flex">
                {cuisine}
            </div>
        )
    }

    const loading = () => {
        return <h2>Loading...</h2>
    }

    return cuisine ? loaded() : loading()

}

export default CategoryMealpage