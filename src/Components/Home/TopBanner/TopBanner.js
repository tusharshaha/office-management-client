import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './TopBanner.css'
import topBanner from '../../../assets/banner-img.png'
const TopBanner = () => {
    return (
        <div className='top-banner'>
            <Container>
                <Row xs={1} md={2} className='g-4 d-flex align-items-center'>
                    <Col>
                        <div>
                            <h1 className='banner-heading'>Find Your Favourite</h1>
                            <h2 className='text-red banner-heading'>Job Immediete</h2>

                            <p className='banner-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti, nisi. Deleniti nobis beatae nulla harum consequatur omnis cum quo quam! Veniam quibusdam praesentium facere magni mollitia unde laborum quam consequatur!</p>
                        </div>
                    </Col>
                    <Col>
                        <div className='banner-img'>
                            <img src={topBanner} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default TopBanner;