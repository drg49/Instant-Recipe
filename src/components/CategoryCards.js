import React from 'react'

const CategoryCards = (props) => {
    return (
    <section id="category-card">
    <div id="category-img" style={{backgroundImage: `url(${props.img})`}}>
    </div>
    <p id="category-name">{props.strCategory}</p>
    </section>
    )
}

export default CategoryCards