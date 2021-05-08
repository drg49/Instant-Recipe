import React, {useState, useEffect} from 'react'
import Input from '../components/Input'
import CountryCards from '../components/CountryCards'
import cuisines from '../datasets/cuisineData'
import CategoryCards from '../components/CategoryCards'
import categories from '../datasets/categoryData'
import ingredients from '../datasets/ingredientData'
import IngredientCard from '../components/IngredientCards'

const Main = () => {

    const [placeholder, setPlaceholder] = useState("ex. Vegan, Seafood, Dessert")

    const categoryMap = categories.map((item, index) => {
        return (
            <CategoryCards
                strCategory={item.strCategory}
                img={item.img}
                key={index}
            />
        )
    })

    const cuisineMap = cuisines.map((item, index) => {
        return (
            <CountryCards
                strArea={item.strArea}
                img={item.img}
                key={index}
            />
        )
    })

    const ingredientMap = ingredients.map((item, index) => {
        return (
            <IngredientCard
            strIngredient={item.strIngredient}
            key={index}
            /> 
        )
    })

    const [cards, setCards] = useState(categoryMap)
    const [changeID, setChangeID] = useState(1) //This helps change the search results

    const handleSearchChange = (event) => {
        if (event.target.value === "category") {
            setPlaceholder("ex. Vegan, Seafood, Dessert")
            setCards(categoryMap)
            setChangeID(1)
        } 
        if (event.target.value === 'cuisine') {
            setPlaceholder("ex. Chinese, Mexican, Italian")
            setCards(cuisineMap)
            setChangeID(2)
        } 
        if (event.target.value === "ingredient") {
            setPlaceholder("ex. Cheese, Mushrooms, Onions")
            setCards(ingredientMap)
            setChangeID(3)
        } 
    }

    const handleMealChange = (event) => {
        //Prevent whitespace
        var key = event.keyCode;
        if (key === 32) {
          event.preventDefault();
        }
        //Determine which search field is being used
        if (changeID === 1) {
          let searchValue = event.target.value.trim();
            setCards(
                categories.filter((item, index) => 
                item.strCategory
                    .toLowerCase()
                    .includes(searchValue.toLowerCase().replace( /\s\s+/g, ' ' ))).map((item, index) => {
                        return (
                            <CategoryCards
                            strCategory={item.strCategory}
                            img={item.img}
                            key={index}
                            />
                        )
                    })
                )
            }

        if (changeID === 2) {
            let searchValue = event.target.value.trim();
            setCards(
                cuisines.filter((item, index) =>
                item.strArea
                  .toLowerCase()        //Make the search more user friendly by removing extra spaces and capital letters.
                  .includes(searchValue.toLowerCase().replace( /\s\s+/g, ' ' ))).map((item, index) => {
                    return (
                        <CountryCards
                            strArea={item.strArea}
                            img={item.img}
                            key={index}
                        /> 
                    )
                })
            )
        }
        
        if (changeID === 3) {
            let searchValue = event.target.value.trim();
            setCards(
                ingredients.filter((item, index) =>
                item.strIngredient
                  .toLowerCase()        //Make the search more user friendly by removing extra spaces and capital letters.
                  .includes(searchValue.toLowerCase().replace( /\s\s+/g, ' ' ))).map((item, index) => {
                    return (
                        <IngredientCard
                            strIngredient={item.strIngredient}
                            key={index}
                        /> 
                    )
                })
            )
        }
    }

    let resultNumber;
    if (changeID === 3) {
        resultNumber = <p>Displaying {cards.length} out of 573 results.</p>
    } else {
        resultNumber = null
    }

    return ( 
        <>
        <Input handleSearchChange={handleSearchChange} handleMealChange={handleMealChange} placeholder={placeholder}/>
        {resultNumber}
        <section id="cuisine-wrapper">
            {cards}
        </section>
        </>
    )
}

export default Main