import React, {useEffect, useState} from 'react'
import load from '../loading.gif'
import FoodItems from '../components/FoodItems'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'

const backBtn = <FontAwesomeIcon icon={faArrowLeft} size="1x"/>

const IngredientFilterPage = (props) => {
    const ingredient = props.match.params.ingredient

    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`

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
            <Link to='/' id="home"><span>{backBtn}</span></Link>
        
            <h2 id="page-title">Recipes Containing {ingredient}</h2>
            <div id="meal-flex">
                {meals}
            </div>
            </>
        )
    }

    const loading = () => {
        return <img id="load" src={load} alt="The page is loading"/>
    }

    return meals ? loaded() : loading()

}

export default IngredientFilterPage