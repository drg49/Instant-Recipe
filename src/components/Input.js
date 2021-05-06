import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const searchIcon = <FontAwesomeIcon icon={faSearch} size="sm"/>


const Input = (props) => {

    
    

    return (
        <>
        <select id="search-option" onChange={props.handleSearchChange}>
           <option value="cuisine">Cuisine</option>
           <option value="category">Category</option>
           <option value="meal"> Meal Name</option>
        </select>
        <input type="text" onChange={props.handleMealChange} placeholder={props.placeholder}/>
        <button onClick={props.handleMealChange}>{searchIcon}</button>
        </>
    )
}
export default Input