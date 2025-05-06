import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { listDepartments, deleteDepartment } from "../service/DepartmentService.js";

export default function ListDepartmentComponent() {
    const [departments, setDepartments] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchDepartments();
    }, []);

    function fetchDepartments() {
        listDepartments()
            .then((response) => {
                setDepartments(response.data);
            })
            .catch((error) => {
                console.error("Error fetching departments:", error);
            });
    }

    function addNewDepartment() {
        navigate("/add-department");
    }

    function editDepartment(id) {
        navigate(`/edit-department/${id}`);
    }

    function removeDepartment(id) {
        deleteDepartment(id)
            .then(() => {
                fetchDepartments(); // обновить список после удаления
            })
            .catch((error) => {
                console.error("Error deleting department:", error);
            });
    }

    return (
        <div className="container mt-5">
            <h2 className="text-center">List of Departments</h2>
            <button className="btn btn-primary mb-2" onClick={addNewDepartment}>Add Department</button>
            <table className="table table-striped table-bordered mt-3">
                <thead>
                <tr>
                    <th>Department ID</th>
                    <th>Department Name</th>
                    <th>Department Description</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {
                    departments.map(department => (
                        <tr key={department.id}>
                            <td>{department.id}</td>
                            <td>{department.departmentName}</td>
                            <td>{department.departmentDescription}</td>
                            <td>
                                <button className="btn btn-info" onClick={() => editDepartment(department.id)}>Update</button>
                                <button className="btn btn-danger ms-2" onClick={() => removeDepartment(department.id)}>Delete</button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    );
}
