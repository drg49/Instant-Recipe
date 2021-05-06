import React from 'react'
import {Link} from 'react-router-dom'

const CountryCards = (props) => {
    const countryName = props.strArea


    return (
    <div id="cuisine-country">
      <Link to={`/cuisine/${props.strArea}`}>  
        <h2>{countryName}</h2>
      </Link>
    </div>
    )
    
    
}

export default CountryCards