import React from 'react';
import FullScreenImage from '../../data/images/kupalawski.jpg';
import fullscreenStyle from './fullscreen.module.css';

const Fullscreen = ( { titleFullscreen, web }) => {
    return (
        <div className={fullscreenStyle.container}>
            <img src= { FullScreenImage } className={fullscreenStyle.image} alt="Kupalawski theater"/>
            <div className={fullscreenStyle.text_container}>
                <h2 className={fullscreenStyle.title}>
                { web } <br/>
                { titleFullscreen }
                </h2>
            </div>
        </div>
    )
}

export default Fullscreen