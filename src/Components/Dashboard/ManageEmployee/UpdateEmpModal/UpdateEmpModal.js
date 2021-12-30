import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import Swal from 'sweetalert2'
import { AiFillCloseCircle } from 'react-icons/ai'
import './UpdateEmpModal.css'
import axios from 'axios';
const UpdateEmpModal = ({ employee, setShowModal, ...rest }) => {
    const [updatedEmp, setUpdatedEmp] = useState({})
    const handleBlur = (e)=>{
        const field = e.target.name;
        const value = e.target.value;
        const updateEmp = {...updatedEmp};
        updateEmp[field] = value;
        setUpdatedEmp(updateEmp)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        Swal.fire({
            icon:'question',
            title: 'Are you sure you want to update?',
            showCancelButton: true,
            confirmButtonText: 'Update',
          }).then((result) => {
            if (result.isConfirmed) {
                axios.put(`http://localhost:5000/employee/${employee._id}`, {updatedEmp,employee})
                .then(res=> {
                    if(res.data.acknowledged){
                        setUpdatedEmp({})
                        setShowModal(false)
                        Swal.fire({
                            icon: 'success',
                            title: 'Successfully Updated ',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }else{
                        Swal.fire('Something went wrong! Try again', '', "warning")
                    }
                })
            }
          })
    }
    return (
        <Modal
            {...rest}
            size='md'
            centered
            className='custom-m'
        >
            <div className='custom-modal'>
                <button className='close-btn' onClick={() => setShowModal(false)}><AiFillCloseCircle/></button>
                <h3 className='text-center mb-4'>Update Employee</h3>
                <form onSubmit={handleSubmit}>
                    <input onBlur={handleBlur} type="text" name='employee_img' defaultValue={employee.employee_img} required />

                    <input onBlur={handleBlur} type="text" name='employee_name' defaultValue={employee.employee_name} required />

                    <input onBlur={handleBlur} type="number" name='employee_salary' defaultValue={employee.employee_salary} min={0} required />

                    <input onBlur={handleBlur} type="number" name='employee_age' defaultValue={employee.employee_age} min={25} max={70} required />

                    <button className='add-btn' type='submit'>Update</button>
                </form>
            </div>
        </Modal>

    );
};

export default UpdateEmpModal;