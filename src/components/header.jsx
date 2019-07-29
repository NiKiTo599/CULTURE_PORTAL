import React from 'react';
import { Link } from 'gatsby';
import headerStyle from './styles/header.module.css';
import logo from '../data/images/theatre-column.png';


const Header = () => {
    return (
        <header>
            <nav>
                <div className={ headerStyle.nav_left }>
                    <div className={ headerStyle.logo }>
                        <Link to='/'>
                            <img src={ logo } wight="30" height="30" alt="logo"/>
                        </Link>
                    </div>
                    <h1>Theater directors of Belarus</h1>
                </div>
                <div className={ headerStyle.nav_right }>
                    <ul className={ headerStyle.navigation_bar }>
                        <li>
                            <Link to='/' className={ headerStyle.nav_item }>Home</Link>
                        </li>
                        <li>
                            <Link to='/search' className={ headerStyle.nav_item }>Сatalog</Link>
                        </li>
                        <li>
                            <select className={ headerStyle.lang_select }>
                                <option>EN</option>
                                <option>BY</option>
                                <option>RU</option>
                            </select>
                        </li>
                    </ul>  
                </div>
            </nav>
        </header>
    )
}

export default Header;