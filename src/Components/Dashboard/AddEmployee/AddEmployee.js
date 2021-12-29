import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'
import { Container } from 'react-bootstrap';
import './AddEmployee.css'
const AddEmployee = () => {
    const [employee, setEmployee] = useState({})
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5000/addEmployee', employee)
            .then(res => {
                if (res.data.acknowledged) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Successfully Added Employee',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    e.target.reset()
                }else{
                    Swal.fire({
                        position: 'center',
                        icon: 'warning',
                        title: 'Something Went Wrong! try agin.',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
    }
    const handleBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newEmployee = { ...employee }
        newEmployee[field] = value;
        setEmployee(newEmployee);
    }
    return (
        <Container>
            <div data-aos='fade-down' className='add-emp-section'>
                <h2 className='mb-4 text-uppercase'>Add <span className='text-red'>New</span> Employee</h2>
                <form onSubmit={handleSubmit}>
                    <input onBlur={handleBlur} type="text" name='employee_img' placeholder='Image Url' required />

                    <input onBlur={handleBlur} type="text" name='employee_name' placeholder='Employee Name' required />

                    <input onBlur={handleBlur} type="number" name='employee_salary' placeholder='Employee Salary' min={0} required />

                    <input onBlur={handleBlur} type="number" name='employee_age' placeholder='Employee Age' min={25} max={70} required />

                    <button className='add-btn' type='submit'>Add Employee</button>
                </form>
            </div>
        </Container>
    );
};

export default AddEmployee;