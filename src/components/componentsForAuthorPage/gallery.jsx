import React from 'react';
import { Carousel } from 'react-bootstrap';


function renderSlides(authorInfo) {
    const photos = authorInfo.gallery;
    return photos.map((photo) =>
        <Carousel.Item>
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
        <div>
            <Carousel>
                { slides }
            </Carousel>
        </div>
    )
}

export default Gallery