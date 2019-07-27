import React from 'react';
import { Link } from 'gatsby';
import './styles/header.css';
import logo from '../data/images/theatre-column.png';


const Header = () => {
    return (
        <header>
            <nav>
                <div className='nav-left'>
                    <div className='logo'>
                        <Link to='/'>
                            <img src={ logo } wight="30" height="30" alt="logo"/>
                        </Link>
                    </div>
                    <h1>Theater directors of Belarus</h1>
                </div>
                <div className='nav-right'>
                    <ul className='navigation-bar'>
                        <li>
                            <Link to='/' className='nav-item'>Home</Link>
                        </li>
                        <li>
                            <Link to='/' className='nav-item'>Сatalog</Link>
                        </li>
                    </ul>  
                </div>
            </nav>
        </header>
    )
}

export default Header;