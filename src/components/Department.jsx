import { useEffect, useState } from "react";
import { createDepartment, getDepartment, updateDepartment } from "../service/DepartmentService.js";
import { useNavigate, useParams } from "react-router-dom";

export default function Department() {
    const [departmentName, setDepartmentName] = useState("");
    const [departmentDescription, setDepartmentDescription] = useState("");
    const navigator = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            getDepartment(id).then((response) => {
                setDepartmentName(response.data.departmentName);
                setDepartmentDescription(response.data.departmentDescription);
            }).catch((error) => console.log(error));
        }
    }, [id]);

    function saveDepartment(e) {
        e.preventDefault();
        const department = { departmentName, departmentDescription };

        if (id) {
            updateDepartment(id, department).then(() => {
                navigator("/departments");
            });
        } else {
            createDepartment(department).then(() => {
                navigator("/departments");
            });
        }
    }

    function pageTitle() {
        return id ? "Update Department" : "Add Department";
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="card col-md-6 offset-md-3">
                    <h2 className="text-center">{pageTitle()}</h2>
                    <div className="card-body">
                        <form>
                            <div className="form-group mb-2">
                                <label className="form-label">Department Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter department name"
                                    name="departmentName"
                                    value={departmentName}
                                    onChange={(e) => setDepartmentName(e.target.value)}
                                    className="form-control"
                                />
                            </div>

                            <div className="form-group mb-2">
                                <label className="form-label">Department Description</label>
                                <input
                                    type="text"
                                    placeholder="Enter department description"
                                    name="departmentDescription"
                                    value={departmentDescription}
                                    onChange={(e) => setDepartmentDescription(e.target.value)}
                                    className="form-control"
                                />
                            </div>

                            <button onClick={saveDepartment} className="btn btn-success">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
