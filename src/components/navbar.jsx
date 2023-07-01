import '../pages/style.css'
import Logo from '../assets/img/logo.jpg'
import {Link} from 'react-router-dom'

export const Navbar =() => {
    return (
        <div className='navbar'>
            <nav className="navbar navbar-expand-lg fixed-top">
                <div className="container-fluid">
                    <img className="nav-logo" src={Logo} alt="ebikeshop-logo" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav" style={{marginLeft: 'auto'}}>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <button className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                Our Cycle
                                </button>
                                <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/brand-a">BrandA</Link></li>
                                <li><Link className="dropdown-item" to="/brand-b">BrandB</Link></li>
                                <li><Link className="dropdown-item" to="/brand-c">BrandC</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/sign-in">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/sign-up">Signup</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/cart">Cart</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}