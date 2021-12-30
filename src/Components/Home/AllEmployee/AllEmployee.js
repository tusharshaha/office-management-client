import React from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import useEmployee from '../../../Hooks/useEmployee';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import './AllEmployee.css'
const AllEmployee = () => {
    const { employees } = useEmployee()
    return (
        <>
            <Header></Header>
            <Container className='content-gap'>
                <h1 className='banner-heading text-center'>Our <span className='text-red'>All</span> Employees</h1>

                {!employees ?
                    <div className='d-flex justify-content-center align-items-center mt-5'>
                        <Spinner animation="grow" variant="danger" />
                    </div>
                    :
                    <Row xs={1} md={2} lg={3} className='g-3 mt-5'>
                        {
                            employees?.map(emp => <Col key={emp._id}>
                                <div className="custom-card">
                                    <div className='card-img'>
                                        <img src={emp.employee_img} alt="" />
                                    </div>
                                    <h5 className='fw-bold'>{emp.employee_name}</h5>
                                </div>
                            </Col>)
                        }
                    </Row>
                }
            </Container>
            <Footer></Footer>
        </>
    );
};

export default AllEmployee;