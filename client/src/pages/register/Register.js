import { React, useState } from 'react';
import './style.css';

import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Select } from './dropdown';
import Navbar from '../../components/navbar/Navbar';

const states = [
    "Andaman & Nicobar", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh", "Chhattisgarh", "Dadra & Nagar Haveli", "Daman & Diu", "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu & Kashmir", "Jharkhand", "Karnataka", "Kerala", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Orissa", "Pondicherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Tripura", "Uttar Pradesh", "Uttaranchal", "West Bengal"
]

const branches = [
    'CSE', 'ME', 'AEI', 'ECE', 'ADS', 'CE', 'Other'
]

const sem = [
    'S1', 'S3', 'S5', 'S7'
]


function Register() {

    const [branch, setBranch] = useState(null);
    const [semester, setSemester] = useState(null);
    const [state, setState] = useState(null);
    const [warning, setWarning] = useState(false);

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    const schema = yup.object().shape({
        name: yup.string().required(),
        college: yup.string().required(),
        email: yup.string().email().required(),
        district: yup.string().required(),
        phno: yup.string().matches(phoneRegExp).required(),
    });

    const { register, handleSubmit } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        if (branch != null && semester != null && state != null) {
            data.semester = semester;
            data.state = state;
            data.branch = branch;
            console.log(data);
            setWarning(false);
        }
        else {
            setWarning(true);
        }
    };

    return (
        <div className="form_container">
            <h1>Register for event </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="column">
                        <label>Name</label>
                        <input type="text" placeholder="Name"
                            {...register('name')}
                        />
                    </div>
                    <div className="column">
                        <label>Email</label>
                        <input type="email" placeholder="email"
                            {...register('email')}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <label >College</label>
                        <input type="text" placeholder="College"
                            {...register('college')}
                        />
                    </div>
                    <div className="column">
                        <label>Branch</label>
                        <Select options={branches} st={branch} setSt={setBranch} />
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <label>Semester</label>
                        <Select options={sem} st={semester} setSt={setSemester} />
                    </div>
                    <div className="column">
                        <label>Phone Number</label>
                        <input type="tel" placeholder='+91'
                            {...register('phno')}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <label>State</label>
                        <Select options={states} st={state} setSt={setState} />
                    </div>
                    <div className="column">
                        <label>Distrcit</label>
                        <input type="text" placeholder="District"
                            {...register('district')}
                        />
                    </div>
                </div>
                {warning ? <div className='p-1 text-red-600'>*Please fill all the fields.</div> : null}
                <input type='submit' className='submit'></input>
            </form>
        </div>
    )
}

export default Register