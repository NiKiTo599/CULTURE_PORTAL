import React from 'react';
import { Link } from 'gatsby-plugin-i18next';
import headerStyle from './styles/header.module.css';
import logo from '../data/images/theatre-column.png';

import Switcher from './Switcher';

const Header = ({ siteTitle, linkHome, linkCatalog }) => (
  <header>
    <nav>
        <div className={ headerStyle.nav_left }>
            <div className={ headerStyle.logo }>
                <Link to='/'>
                    <img src={ logo } wight="30" height="30" alt="logo"/>
                </Link>
            </div>
            <h1 className={headerStyle.logo_text}>{siteTitle}</h1>
        </div>
            <div className={ headerStyle.nav_right }>
                <ul className={ headerStyle.navigation_bar }>
                    <li>
                        <Link to='/' className={ headerStyle.nav_item }>{linkHome}</Link>
                    </li>
                    <li>
                        <Link to='/search' className={ headerStyle.nav_item }>{linkCatalog}</Link>
                    </li>
                    <li  className={ headerStyle.option } >
                        <Switcher />
                    </li>
                </ul>  
            </div>
        </nav>
  </header>
);

export default Header;
