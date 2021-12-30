import React from 'react';
import { Container, Row, Col,Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useEmployee from '../../../Hooks/useEmployee';
import './OurEmployee.css'
const OurEmployee = () => {
    const { employees } = useEmployee()
    return (
        <Container className='content-gap'>
            <h1 className='banner-heading text-center'>Our <span className='text-red'>Employees</span></h1>

            {!employees ?
                <div className='d-flex justify-content-center align-items-center mt-5'>
                    <Spinner animation="grow" variant="danger" />
                </div>
                :
                <Row xs={1} sm={2} md={2} lg={3} className='g-3'>
                    {
                        employees?.slice(0, 6).map(emp => <Col key={emp._id}>
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
            {
                employees.length > 6 && <div className='text-center show-more my-5'>
                    <Link to='allEmployees'>Show More...</Link>
                </div>
            }
        </Container>
    );
};

export default OurEmployee;