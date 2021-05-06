import React, {useState, useEffect} from 'react'
import Input from './Input'
import Cards from './Cards'

const Main = () => {

    const [placeholder, setPlaceholder] = useState("ex. Chinese, Mexican, Italian")

    const [url, setUrl] = useState("https://www.themealdb.com/api/json/v1/1/list.php?a=list") //regions is the default state
    const [dataset, setDataset] = useState (null)
    const [cards, setCards] = useState(null)

    const getData = async () => {
        const response = await fetch (url)
        const data = await response.json()
        setDataset(data)
    }

    useEffect(()=> {getData()}, [])
    


    const handleSearchChange = (event) => {
        if (event.target.value === "region") {
            setPlaceholder("ex. Chinese, Mexican, Italian")
            // setUrl("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
        } else if (event.target.value === 'category') {
            setPlaceholder("ex. Vegan, Seafood, Dessert")
            // setUrl("Catagory")
        } else if (event.target.value === "meal") {
            setPlaceholder("ex. Casserole, Wontons, Stew")
            // setUrl("Ingredient")
        } 
    }

    const handleMealChange = (event) => {
        console.log(event.target.value)
    }



    return ( 
        <>
        <Input handleSearchChange={handleSearchChange} handleMealChange={handleMealChange} placeholder={placeholder}/>
        <Cards dataset={dataset}/>
        </>
    )
}

export default Main