import React from 'react'
import {Link} from 'react-router-dom'

const CategoryCards = (props) => {
    return (
        <Link to={`/category/${props.strCategory}`}>
            <section id="category-card">
                <div id="category-img" style={{backgroundImage: `url(${props.img})`}} title={props.strCategory}>
                </div>
                <p id="category-name">{props.strCategory}</p>
            </section>
        </Link>
    )
}

export default CategoryCards