import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHamburger } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'

const burgerIcon = <FontAwesomeIcon icon={faHamburger} size="1x"/>


const Header = () => {
    return (
    <div id="header">
        
        <h1><Link to='/'>Instant Recipe <span id="icon">{burgerIcon}</span></Link></h1>
        
    </div>
    )
}

export default Header