import logo from '../Asset/Logo.png'
import '../Style/Header.css'
import { Link } from 'react-router-dom'

function Header() {

    return (
            <nav className="main-nav">
                <Link className="main-nav-logo" to="/">
                    <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>
                <div>
                    <Link className="main-nav-item" to="/Signin">
                        <i className="fa fa-user-circle"></i>
                        {" Sign In"}
                    </Link>
                </div>
            </nav>

    )
}

export default Header