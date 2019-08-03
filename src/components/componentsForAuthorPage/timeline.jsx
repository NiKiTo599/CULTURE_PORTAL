import React from 'react';
import TimelineStyle from './authorStyles/timeline.module.css';
import { I18n } from 'react-i18next';

function renderTimeline(times) {
    return times.map((time) =>
        (times.indexOf(time) % 2 === 0) ? (
            <div className={[TimelineStyle.container, TimelineStyle.left].join(' ')} >
                <div className={TimelineStyle.content}>
                    <p className={TimelineStyle.date}>{time.date}</p>
                    <p className={TimelineStyle.text}>{time.text}</p>
                </div>
            </div>
        ) :
            (<div className={[TimelineStyle.container, TimelineStyle.right].join(' ')} >
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
        <I18n>
            {t => (
                <div>
                    <h3 className={TimelineStyle.timeline_title}>{t('timeline title')}</h3>
                    <div className={TimelineStyle.timeline}>
                    { biographyTimeline }
                    </div>
                </div>
            )}
        </I18n>
    )
}

export default Timeline
export const query = graphql`
  query($lng: String!) {
    locales: allLocale(filter: { lng: { eq: $lng }, ns: { eq: "messages" } }) {
      ...TranslationFragment
    }
  }
`;
