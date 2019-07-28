import React from 'react';
import { Link } from 'gatsby';
import directorStyle from './director.module.css';

const DirectorOfDay = () => {
    return (
        <div className={directorStyle.container}>
            <div>
                <h3 className={directorStyle.title}><span className={directorStyle.text_color}>Director</span><br/>of the day</h3>
            </div>
            <div className={directorStyle.content_container}>
                <div>
                    <img src="https://minsknews.by/wp-content/uploads/2019/01/MK_15.jpg" className={directorStyle.image} alt="Ignat Buynitsky"/>
                </div>
                <div className={directorStyle.text_container}>
                    <h3 className={directorStyle.article_title}>Ignat Buynitsky</h3>
                    <p className={directorStyle.article_subtitle}>10 (22) August 1861 - 9 (22) September 1917</p>
                    <p className={directorStyle.article_description}>Belarusian actor, director, theater figure, founder of the first professional national Belarusian theater.</p>
                    <p className={directorStyle.article_description}>The Buynitsky Theater showed performances in towns and villages of Belarus, toured in Vilnius, Minsk, Polotsk, St. Petersburg, Warsaw and other cities. His work laid the foundations of the Belarusian professional theatrical art.</p>
                    <Link className={directorStyle.button} to='/'>more info >></Link>
                </div>
            </div>
        </div>
    )
}

export default DirectorOfDay