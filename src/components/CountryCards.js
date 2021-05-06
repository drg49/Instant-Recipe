import React from 'react'
import {Link} from 'react-router-dom'

const CountryCards = (props) => {
    const countryName = props.strArea


    return (
      <Link to={`/cuisine/${props.strArea}`}>  
        <h2>{countryName}</h2>
      </Link>
    )
    
    
}

export default CountryCards