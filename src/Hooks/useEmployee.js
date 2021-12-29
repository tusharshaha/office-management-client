import axios from "axios"
import { useEffect, useState } from "react"

const useEmployee =()=>{
    const [employees, setEmployees] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:5000/employees')
        .then(res => setEmployees(res.data))
    },[employees])
    return {employees};
}
export default useEmployee;