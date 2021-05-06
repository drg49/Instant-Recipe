import React, {useState, useEffect} from "react";
import CountryFoodItems from '../components/CountryFoodItems'

const CuisinePage = (props) => {
    const country = props.match.params.country
    
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`
    
    const [cuisine, setCuisine] = useState(null)
    
        const getCuisine = async () => {
            const response = await fetch(url)
            const data = await response.json()
            setCuisine(data.meals.map((item, index) => {
                return (
                    <CountryFoodItems
                        strMeal={item.strMeal}
                    />
                )
            }))
        }

        useEffect(() => {getCuisine()}, [])

        const loaded = () => {
            return (
                <div>
                    {cuisine}
                </div>
            )
        }
    
        const loading = () => {
            return <h2>Loading...</h2>
        }
    
        return cuisine ? loaded() : loading()
}

export default CuisinePage