import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import jobImg from '../../../assets/job-img.jpg'
import './FindJobs.css'
const FindJobs = () => {
    return (
        <Container className='content-gap'>
            <Row className='g-4'>
                <Col xs={12} md={4}>
                    <div className='job-img'>
                        <img src={jobImg} alt="" />
                    </div>
                </Col>

                <Col xs={12} md={8}>
                    <div className='find-job-details'>
                        <h1 className='banner-heading'>Find Million Of Jobs And</h1>
                        <h2 className='banner-heading text-red'>Achieve Success</h2>
                        <p className='banner-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit deserunt harum ipsum obcaecati sint odio sapiente animi provident placeat ut consequuntur voluptatibus optio eligendi qui, velit, blanditiis officia vitae libero!</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default FindJobs;