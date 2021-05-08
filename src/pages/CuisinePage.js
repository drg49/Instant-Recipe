import React, {useState, useEffect} from "react";
import FoodItems from '../components/FoodItems'

const CuisinePage = (props) => {
    const country = props.match.params.country
    
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`
    
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
                <div id="meal-flex">
                    {meals}
                </div>
            )
        }
    
        const loading = () => {
            return <h2>Loading...</h2>
        }
    
        return meals ? loaded() : loading()
}

export default CuisinePage