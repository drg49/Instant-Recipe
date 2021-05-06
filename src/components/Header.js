import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHamburger } from '@fortawesome/free-solid-svg-icons'

const burgerIcon = <FontAwesomeIcon icon={faHamburger} size="1x"/>


const Header = () => {
    return (
    <>
    <h1>Instant Recipe <span id="icon">{burgerIcon}</span></h1>
    </>
    )
}

export default Header