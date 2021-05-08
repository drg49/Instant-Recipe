import React from 'react'
import {Link} from 'react-router-dom'

const IngredientCard = (props) => {
    return (
    <ul id="ing-list">
        <Link to={`/ingredient/${props.strIngredient}`}>
            <li id="ing-list-item">{props.strIngredient}</li>
        </Link>
    </ul>
    )
}

export default IngredientCard