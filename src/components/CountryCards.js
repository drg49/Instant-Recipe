import React from 'react'
import {Link} from 'react-router-dom'

const CountryCards = (props) => {
    const countryName = props.strArea


    return (
    <div id="cuisine-country"style={{backgroundImage: `url(${props.img})`}}>
      <Link to={`/cuisine/${props.strArea}`}>  
        <h2 id="countryName">{countryName}</h2>
      </Link>
    </div>
    )
    
    
}

export default CountryCards