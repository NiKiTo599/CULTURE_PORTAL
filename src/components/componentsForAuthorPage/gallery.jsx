import React from 'react';
import { I18n } from 'react-i18next';
import { Carousel } from 'react-bootstrap';
import GalleryStyle from './authorStyles/gallery.module.css';


function renderSlides(authorInfo) {
    const photos = authorInfo.gallery;
    return photos.map((photo) =>
        <Carousel.Item fade={false}>
            <img
                className="d-block w-100"
                src={require('../../images'+photo.img)}
                alt={authorInfo.name}
            />
            <Carousel.Caption>
                <p>{ photo.description }</p>
            </Carousel.Caption>
        </Carousel.Item>
    )
}

const Gallery = (authorInfo) => {
    const slides = renderSlides(authorInfo);
    return (
        <I18n>
            {t => (
                <div className={GalleryStyle.container}>
                    <h3 className={GalleryStyle.gallery_title}>{t('photo')}</h3>
                        <Carousel>
                            { slides }
                        </Carousel>
                </div>
             )}
        </I18n>
    )
}

export default Gallery
export const query = graphql`
  query($lng: String!) {
    locales: allLocale(filter: { lng: { eq: $lng }, ns: { eq: "messages" } }) {
      ...TranslationFragment
    }
  }
`;