import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCocktail } from '@fortawesome/free-solid-svg-icons'

const cocktailIcon = <FontAwesomeIcon icon={faCocktail} size="1x"/>

const InstantCocktailAd = () => {
    return (
        
            <a href="https://instant-cocktail.vercel.app/" target="_blank" rel="noreferrer"><div id="adBox">Check out my other app <span id="cocktail-logo">Instant Cocktail {cocktailIcon}</span></div></a>
        
    )
}

export default InstantCocktailAd