import React from 'react';
import { Link } from 'gatsby';
import directorStyle from './director.module.css';

const DirectorOfDay = ({ titlePartOne, titlePartTwo, person, more, about, period, work }) => {
    return (
        <div className={directorStyle.container}>
            <div>
                <h3 className={directorStyle.title}><span className={directorStyle.text_color}>{ titlePartOne }</span><br/>{ titlePartTwo }</h3>
            </div>
            <div className={directorStyle.content_container}>
                <div>
                    <img src="https://minsknews.by/wp-content/uploads/2019/01/MK_15.jpg" className={directorStyle.image} alt="Ignat Buynitsky"/>
                </div>
                <div className={directorStyle.text_container}>
                    <h3 className={directorStyle.article_title}>{ person }</h3>
                    <p className={directorStyle.article_subtitle}>{ period }</p>
                    <p className={directorStyle.article_description}>{ about }</p>
                    <p className={directorStyle.article_description}>{ work }</p>
                    <Link className={directorStyle.button} to='/'>{ more } >></Link>
                </div>
            </div>
        </div>
    )
}

export default DirectorOfDay