import axios from 'axios';
import React, { useState } from 'react';
import { Container, Table, Spinner } from 'react-bootstrap';
import Swal from 'sweetalert2'
import useEmployee from '../../../Hooks/useEmployee';
import './ManageEmployee.css'
import UpdateEmpModal from './UpdateEmpModal/UpdateEmpModal';
const ManageEmployee = () => {
    const { employees } = useEmployee()
    const [employee, setEmployee] = useState({})
    const [modalShow, setModalShow] = useState(false);
    const handleDelete = (id) => {
        Swal.fire({
            icon: 'warning',
            title: 'Are you sure you want to delete?',
            showCancelButton: true,
            confirmButtonText: 'Delete',
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://stormy-savannah-20150.herokuapp.com/deleteEmp/${id}`)
                    .then(res => {
                        if (res.data.acknowledged) {
                            Swal.fire({
                                icon: 'success',
                                title: 'Successfully Deleted',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                    })

            }
        })
    }
    return (
        <Container className='mt-4'>
            <div className='manage-emp-section'>
                <h2>Manage <span className='text-red'>Employees</span></h2>
                {!employees ?
                    <div className='d-flex justify-content-center align-items-center mt-5'>
                        <Spinner animation="grow" variant="danger" />
                    </div>
                    :
                    <Table className='mt-5' responsive striped bordered hover size='sm'>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Emp Name</th>
                                <th>Emp Age</th>
                                <th>Emp Salary</th>
                                <th colSpan={2}>Manage</th>
                            </tr>
                        </thead>
                        {employees?.map(emp => <tbody key={emp._id}>
                            <tr>
                                <td><img className='table-img' src={emp.employee_img} alt="" /></td>
                                <td>{emp.employee_name}</td>
                                <td>{emp.employee_age}</td>
                                <td>{emp.employee_salary}</td>
                                <td>
                                    <button onClick={() => {
                                        setModalShow(true)
                                        setEmployee(emp)
                                    }} className='update-btn'>Update</button>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(emp._id)} className='delete-btn'>Delete</button>
                                </td>
                            </tr>
                        </tbody>)}
                    </Table>
                }

            </div>
            <UpdateEmpModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                employee={employee}
                setShowModal={setModalShow}
            />
        </Container>
    );
};

export default ManageEmployee;