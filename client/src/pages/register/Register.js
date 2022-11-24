import { React, useState } from 'react';
import './style.css';

import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Select } from './dropdown';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import AccountsData from '../../data/accountsData/AccountsData';

import Axios from "axios";

const states = [
    "Kerala", "Karnataka", "Tamil Nadu", "Andaman & Nicobar", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh", "Chhattisgarh", "Dadra & Nagar Haveli", "Daman & Diu", "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu & Kashmir", "Jharkhand", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Orissa", "Pondicherry", "Punjab", "Rajasthan", "Sikkim", "Tripura", "Uttar Pradesh", "Uttaranchal", "West Bengal"
]

const branches = [
    'CSE', 'ME', 'AEI', 'ECE', 'ADS', 'CE', 'Other'
]

const sem = [
    'S1', 'S3', 'S5', 'S7'
]


function Register() {
    const navigate = useNavigate();
    const { state } = useLocation();
    const { name, fee,dept } = state;

    const [branch, setBranch] = useState(null);
    const [semester, setSemester] = useState(null);
    const [stateName, setstateName] = useState(null);
    const [warning, setWarning] = useState(false);

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    const schema = yup.object().shape({
        fname: yup.string().required(),
        college: yup.string().required(),
        email: yup.string().email().required(),
        district: yup.string().required(),
        phno: yup.string().matches(phoneRegExp).required(),
        tid: yup.string(),
    });

    const { register, handleSubmit } = useForm({
        resolver: yupResolver(schema),
    });

    const RegisterData = (data ) => {
        console.log("mii");
        Axios.post("http://localhost:5000/register",
            {
                name: data.fname,
                college: data.college,
                branch: data.branch,
                semester: data.semester,
                phno: data.phno,
                email: data.email,
                stateName: data.stateName,
                district: data.district,
                tid: data.tid? data.tid : null,
            }
        ).then((response) => {
            window.location = "/thanks";
        }).catch((error) => {
            console.log(error);
        });
    }

    const onSubmit = (data) => {
        if (branch != null && semester != null && stateName != null) {
            data.semester = semester;
            data.stateName = stateName;
            data.branch = branch;
            console.log(data);
            setWarning(false);
            RegisterData(data);
        }
        else {
            setWarning(true);
        }
    };

    return (
        <div className="form_container">
            <h1>Register for {name} </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="column">
                        <label>Name *</label>
                        <input type="text" placeholder="Name"
                            {...register('fname')}
                        />
                    </div>
                    <div className="column">
                        <label>Email *</label>
                        <input type="email" placeholder="email"
                            {...register('email')}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <label >College *</label>
                        <input type="text" placeholder="College"
                            {...register('college')}
                        />
                    </div>
                    <div className="column">
                        <label>Branch *</label>
                        <Select options={branches} st={branch} setSt={setBranch} />
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <label>Semester *</label>
                        <Select options={sem} st={semester} setSt={setSemester} />
                    </div>
                    <div className="column">
                        <label>Phone Number *</label>
                        <input type="tel" placeholder='+91'
                            {...register('phno')}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <label>State *</label>
                        <Select options={states} st={stateName} setSt={setstateName} />
                    </div>
                    <div className="column">
                        <label>Distrcit *</label>
                        <input type="text" placeholder="District"
                            {...register('district')}
                        />
                    </div>
                </div>
                <div className='column'>
                    {fee !== 'FREE' ?
                        <div>
                            FEE: Rs. {fee}
                            <div className='text-red-900'>Transfer the amount to the account mentioned below: *</div>
                            <div>Name: {AccountsData[dept].name}</div>
                            <div>A/c No: {AccountsData[dept].accountNo}</div>
                            <div>IFSC: {AccountsData[dept].ifsc}</div>
                            <div>BANK: {AccountsData[dept].bankName}</div>
                            <div className="column">
                                <label>Transaction ID: *</label>
                                <input type="text" placeholder="Transaction ID "
                                    {...register('tid')} required
                                />
                            </div>
                        </div> : null}

                </div>
                {warning ? <div className='p-1 text-red-600'>*Please fill all the fields.</div> : null}
                <input type='submit' className='submit'></input>
            </form>
            <button className='submit' onClick={() => { navigate(-1) }}>Cancel</button>
        </div>
    )
}

export default Register