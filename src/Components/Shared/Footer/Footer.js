import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import "./Footer.css"
const Footer = () => {
    return (
        <div className='footer-section'>
            <div className='footer'>
                <Container>
                    <Row xs={1} md={2} lg={3}>
                        <Col></Col>
                        <Col></Col>
                        <Col></Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Footer;