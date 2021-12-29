import React from 'react';
import { Container,Table} from 'react-bootstrap';
import useEmployee from '../../../Hooks/useEmployee';
import './ManageEmployee.css'
const ManageEmployee = () => {
    const {employees} = useEmployee()
    return (
        <Container className='mt-4'>
            <div className='manage-emp-section'>
                <h2>Manage <span className='text-red'>Employees</span></h2>
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
                    {employees?.map(emp=><tbody key={emp._id}>
                        <tr>
                            <td><img className='table-img' src={emp.employee_img} alt="" /></td>
                            <td>{emp.employee_name}</td>
                            <td>{emp.employee_age}</td>
                            <td>{emp.employee_salary}</td>
                            <td>
                                <button className='update-btn'>Update</button>
                            </td>
                            <td>
                                <button className='delete-btn'>Delete</button>
                            </td>
                        </tr>
                    </tbody>)}
                </Table>
            </div>
        </Container>
    );
};

export default ManageEmployee;