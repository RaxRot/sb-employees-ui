import { useState } from "react";
import { createEmployee } from "../service/EmployeeService.js";
import { useNavigate } from "react-router-dom";

export default function Employee() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState({}); // 👉 добавили состояние ошибок

    const navigator = useNavigate();

    function handleFirstName(e) {
        setFirstName(e.target.value);
    }
    function handleLastName(e) {
        setLastName(e.target.value);
    }
    function handleEmail(e) {
        setEmail(e.target.value);
    }

    function validateForm() {
        const newErrors = {};

        if (!firstName.trim()) {
            newErrors.firstName = "First name is required";
        }

        if (!lastName.trim()) {
            newErrors.lastName = "Last name is required";
        }

        if (!email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "Email is invalid";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    function saveEmployee(e) {
        e.preventDefault();

        if (!validateForm()) return;

        const employee = { firstName, lastName, email };

        createEmployee(employee).then((response) => {
            navigator('/employees');
        });
    }

    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    <h2 className='text-center'>Add Employee</h2>
                    <div className='card-body'>
                        <form>

                            <div className='form-group mb-2'>
                                <label className='form-label'>First Name</label>
                                <input
                                    type='text'
                                    placeholder='Enter employee first name'
                                    name='firstName'
                                    value={firstName}
                                    onChange={handleFirstName}
                                    className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                                />
                                {errors.firstName && <div className='invalid-feedback'>{errors.firstName}</div>}
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Last Name</label>
                                <input
                                    type='text'
                                    placeholder='Enter employee last name'
                                    name='lastName'
                                    value={lastName}
                                    onChange={handleLastName}
                                    className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                                />
                                {errors.lastName && <div className='invalid-feedback'>{errors.lastName}</div>}
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Email</label>
                                <input
                                    type='text'
                                    placeholder='Enter employee email'
                                    name='email'
                                    value={email}
                                    onChange={handleEmail}
                                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                />
                                {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
                            </div>

                            <button onClick={saveEmployee} className='btn btn-success'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
