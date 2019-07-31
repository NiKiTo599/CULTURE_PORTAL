import React from 'react';
import TimelineStyle from './authorStyles/timeline.module.css';

function renderTimeline(times) {
    return times.map((time, index) =>
        (times.indexOf(time) % 2 === 0) ? (
            <div className={[TimelineStyle.container, TimelineStyle.left].join(' ')} key={index}>
                <div className={TimelineStyle.content}>
                    <p className={TimelineStyle.date}>{time.date}</p>
                    <p className={TimelineStyle.text}>{time.text}</p>
                </div>
            </div>
        ) :
            (<div className={[TimelineStyle.container, TimelineStyle.right].join(' ')} key={index}>
                <div className={TimelineStyle.content}>
                    <p className={TimelineStyle.date}>{time.date}</p>
                    <p className={TimelineStyle.text}>{time.text}</p>
                </div>
            </div>)
    )
}

const Timeline = (authorInfo) => {
    const biographyTimeline = renderTimeline(authorInfo.timeline);
    return (
        <div>
            <h3 className={TimelineStyle.timeline_title}>Краткая биография</h3>
            <div className={TimelineStyle.timeline}>
               { biographyTimeline }
            </div>
        </div>
    )
}

export default Timeline