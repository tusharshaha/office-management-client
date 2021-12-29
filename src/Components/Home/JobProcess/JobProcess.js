import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './JobProcess.css'
import { HiUserGroup } from 'react-icons/hi'
import { FaSearch } from 'react-icons/fa'
import { IoDocumentTextSharp } from 'react-icons/io5'
const JobProcess = () => {
    const jobDetails = [
        { id: 1, icon: <HiUserGroup />, title: 'Create Account' },
        { id: 2, icon: <FaSearch />, title: 'Search Jobs' },
        { id: 3, icon: <IoDocumentTextSharp />, title: 'Upload Resume' }
    ]
    return (
        <Container className='content-gap'>
            <h1 className='banner-heading text-center'>Our Job <span className='text-red'>Process</span></h1>
            <Row xs={1} sm={2} md={3} className='g-4 mt-4'>
                {jobDetails.map(details=> <Col key={details.id}>
                        <div data-aos='zoom-in' className='custom-card'>
                            <div className='card-icon'>{details.icon}</div>
                            <h5 className='fw-bold text-red'>{details.title}</h5>
                            <p className='card-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo tempor incididunt</p>
                        </div>
                    </Col>)

                }
            </Row>
        </Container>
    );
};

export default JobProcess;