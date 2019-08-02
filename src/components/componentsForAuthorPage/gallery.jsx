import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import GalleryStyle from './authorStyles/gallery.module.css';


function renderSlides(authorInfo) {
    const photos = authorInfo.gallery;
    return photos.map((photo) =>
        <Carousel.Item fade={false}>
            <img
                className="d-block w-100"
                src={require('../../data/images/gallery/'+photo.img)}
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
        <div className={GalleryStyle.container}>
            <h3 className={GalleryStyle.gallery_title}>Фотогалерея</h3>
                <Carousel>
                    { slides }
                </Carousel>
        </div>
    )
}

export default Gallery