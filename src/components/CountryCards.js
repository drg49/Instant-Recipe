import React from 'react'
import {Link} from 'react-router-dom'

const CountryCards = (props) => {

    return (
    <Link to={`/cuisine/${props.strArea}`}>  
      <div id="cuisine-country"style={{backgroundImage: `url(${props.img})`}} title={props.strArea}>
          <h2 id="countryName">{props.strArea}</h2>
      </div>
    </Link>
    )
     
}

export default CountryCards