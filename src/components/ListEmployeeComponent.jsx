import {useEffect, useState} from "react";
import {deleteEmployee, listEmployees} from "../service/EmployeeService.js";
import {useNavigate} from "react-router-dom";

export default function ListEmployeeComponent(){

   const [employees,setEmployees]=useState([]);

   const navigator=useNavigate();

   useEffect(()=>{
       listEmployees().then((response)=>{
           setEmployees(response.data);
       }).catch(error=>{
           console.log(error);
       })
   },[])

    function addNewEmployee() {
        navigator('/add-employee')
    }

    function updateEmployee(id) {
        navigator(`/edit-employee/${id}`)
    }

    function removeEmployee(id) {
        deleteEmployee(id)
            .then(() => {
                listEmployees().then((response) => {
                    setEmployees(response.data);
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    return <div className="container">
    <h2 className="text-center mt-5">List of Employees</h2>
    <button className='btn btn-primary mb-2' onClick={addNewEmployee}>Add Employee</button>
    <table className="table table-striped table-bordered mt-5">
        <thead>
        <tr>
            <th>Employee ID</th>
            <th>Employee First Name</th>
            <th>Employee Last Name</th>
            <th>Employee Email</th>
            <th>Actions</th>
        </tr>
        </thead>
        <tbody>{
            employees.map(employee=><tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td>
                    <button className='btn btn-info' onClick={()=>updateEmployee(employee.id)}>Update</button>
                    <button className='btn btn-danger ms-2' onClick={()=>removeEmployee(employee.id)}>Delete</button>
                </td>
            </tr>)
        }
        </tbody>
    </table>
</div>
}