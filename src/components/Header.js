import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHamburger } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'

const burgerIcon = <FontAwesomeIcon icon={faHamburger} size="1x"/>


const Header = () => {
    return (
    <Link to='/'>
    <h1>Instant Recipe <span id="icon">{burgerIcon}</span></h1>
    </Link>
    )
}

export default Header