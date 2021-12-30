import React from 'react';
import { Container } from 'react-bootstrap';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import useEmployee from '../../../Hooks/useEmployee'
const DashboardHome = () => {
    const { employees } = useEmployee();
    const data = employees?.map(emp => {
        // i slice the name because of responsive
        const name = emp.employee_name;
        const data2 = {
            name: name.slice(0, 8),
            salary: emp.employee_salary
        }
        return data2
    })

    return (
        <Container>
            <h2 className='my-5'>Our Employee Salary Range</h2>
            {
                data && <ResponsiveContainer width="95%" aspect={3}>
                    <LineChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid />
                        <YAxis />
                        <XAxis dataKey="name" />
                        <Tooltip/>
                        <Line type="monotone" dataKey="salary" stroke="#8884d8" activeDot={{ r: data.length }} />
                    </LineChart>
                </ResponsiveContainer>
            }
        </Container>
    );
};

export default DashboardHome;