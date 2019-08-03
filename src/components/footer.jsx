import React from 'react'

import footerStyle from './styles/footer.module.css';

const Footer = ({create}) => {
    return (
        <footer>
            <p className={footerStyle.footer_text}>{create}</p>
        </footer>
    )
}

export default Footer