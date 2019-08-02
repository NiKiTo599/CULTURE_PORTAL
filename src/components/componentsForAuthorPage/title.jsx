import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import YoutubeComponent from "./YoutubeComponent";
import TitleStyle from './authorStyles/title.module.css';

const Title = (authorInfo) => {
    return (
        <div className={TitleStyle.author_header_container}>
            <Container>
            <Row>
                <Col md={4}>
                    <img 
                        src={require('../../images/'+ authorInfo.img)} alt='authorInfo.name' className={TitleStyle.author_image}
                    />
                </Col>
                <Col md={8}>
                    <div className={TitleStyle.author_info} >
                        <h2 className={TitleStyle.author_title}>{authorInfo.name}</h2>
                        <p className={TitleStyle.birth_date}>{authorInfo.date}</p>
                        <p className={TitleStyle.author_description}>{authorInfo.description}</p>
                        <YoutubeComponent videoId={authorInfo.video_id} />
                    </div>
                </Col>
            </Row>
            </Container>

        </div>
    );
};

export default Title;