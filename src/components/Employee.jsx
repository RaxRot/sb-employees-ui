import {useState} from "react";

export default function Employee(){
    const [firstName,setFirstName]=useState('');
    const [lastName,setLastName]=useState('');
    const [email,setEmail]=useState('');

    function handleFirstName(e) {
        setFirstName(e.target.value);
    }
    function handleLastName(e) {
        setLastName(e.target.value);
    }
    function handleEmail(e) {
        setEmail(e.target.value);
    }

    function saveEmployee(e) {
        e.preventDefault();

        const  employee={firstName,lastName,email};
        console.log(employee);
    }

    return <div className='container mt-5'>
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                <h2 className='text-center'>Add Employee</h2>
                <div className='card-body'>
                    <form>

                        <div className='form-group mb-2'>
                            <label className='form-label'>First Name</label>
                            <input type='text'
                                   placeholder='enter employee first name'
                                   name='firstName'
                                   value={firstName}
                                   onChange={handleFirstName}
                                   className='form-control'/>
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Last Name</label>
                            <input type='text'
                                   placeholder='enter employee last name'
                                   name='lastName'
                                   value={lastName}
                                   onChange={handleLastName}
                                   className='form-control'/>
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Email</label>
                            <input type='text'
                                   placeholder='enter employee email'
                                   name='email'
                                   value={email}
                                   onChange={handleEmail}
                                   className='form-control'/>
                        </div>

                        <button onClick={saveEmployee} className='btn btn-success'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
}