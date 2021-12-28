import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { FiMenu } from 'react-icons/fi'
import { Link, Outlet } from 'react-router-dom';
import {FaHome} from 'react-icons/fa'
import {IoIosPersonAdd} from 'react-icons/io'
import {MdMapsHomeWork,MdManageAccounts} from 'react-icons/md'
import './Dashboard.css'
const Dashboard = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <div className='d-flex'>
            <div onClick={() => setToggle(!toggle)} className="menubar">
                <FiMenu className='toggle-icon' />
            </div>
        {/* Dashboard menubar  */}
            <div className={toggle? "showDashMenu" : "dashLeftSide"}>
                <h3>Managex</h3>
                <ul className='menu-item'>
                    <li>
                        <Link to=''><MdMapsHomeWork className='icon'/>Dashboard Home</Link>
                    </li>
                    <li>
                        <Link to='/addEmployee'><IoIosPersonAdd className='icon'/>Add Employee</Link>
                    </li>
                    <li>
                        <Link to='manageEmploye'><MdManageAccounts className='icon'/>Manage Employee</Link>
                    </li>
                    <li>
                        <Link to='/home'><FaHome className='icon'/>Back To Home</Link>
                    </li>
                </ul>
            </div>
        {/* Dashboard details  */}
            <div className='dashRightSide'>
                <Container>
                    <Outlet/>
                </Container>
            </div>
        </div>
    );
};

export default Dashboard;