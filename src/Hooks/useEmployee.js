import axios from "axios"
import { useEffect, useState } from "react"

const useEmployee =()=>{
    const [employees, setEmployees] = useState([])
    useEffect(()=>{
        axios.get('https://stormy-savannah-20150.herokuapp.com/employees')
        .then(res => setEmployees(res.data))
    },[employees])
    return {employees};
}
export default useEmployee;