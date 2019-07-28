import React from 'react';

import Footer from './footer';
import Header from './header';
import layoutStyles from './styles/layout.module.css'
import '../styles/style.css';

const Layout = (props) => {
    return (
        <div className={layoutStyles.wrapper}>
            <div className={layoutStyles.content}>
                <Header />
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout