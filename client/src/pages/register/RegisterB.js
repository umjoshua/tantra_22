import { React, useState } from 'react';
import './style.css';

import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Select } from './dropdown';
import { useLocation, useNavigate } from 'react-router-dom';
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

function RegisterB() {
    const url = "https://tantra.herokuapp.com/register"
    const navigate = useNavigate();
    const { state } = useLocation();
    const { name, fee, dept, event_id } = state;
    const [disable, setDisable] = useState(false);
    const [netwarning, setNetWarning] = useState(false);

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

    const RegisterData = (data) => {
        Axios.post(url,
            {
                event_id: event_id,
                event_name: name,
                department: dept,
                name: data.fname,
                college: data.college,
                branch: data.branch,
                semester: data.semester,
                phno: data.phno,
                email: data.email,
                stateName: data.stateName,
                district: data.district,
                tid: data.tid ? data.tid : null,
            }
        ).then((response) => {
            setNetWarning(false);
            navigate('/thanks');
        }).catch((error) => {
            setNetWarning(true);
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
            setNetWarning(false);
            setDisable(true);
            RegisterData(data);
        }
        else {
            setWarning(true);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className='w-full'>
                <div className="min-h-screen p-6 flex items-center justify-center">
                    <div className="container max-w-screen-lg mx-auto">
                        <div>
                            <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 ">
                                    <div className="text-gray-600">
                                        <div className="font-bold text-2xl flex justify-center">Register for {name}</div>
                                        <p className='text-red-700 p-2'>NOTE: For group events, please fill the details of group leader.</p>
                                    </div>
                                    <div className="lg:col-span-2">
                                        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                            <div className="md:col-span-5">
                                                <label for="full_name">Full Name *</label>
                                                <input type="text" className="h-10 border mt-1 rounded px-4 w-full bg-white" placeholder='Full Name' {...register('fname')} />
                                            </div>

                                            <div className="md:col-span-5">
                                                <label for="email">Email *</label>
                                                <input type="text" className="h-10 border mt-1 rounded px-4 w-full bg-white" placeholder="email@domain.com"  {...register('email')} />
                                            </div>

                                            <div className="md:col-span-3">
                                                <label for="address">College * </label>
                                                <input type="text" className="h-10 border mt-1 rounded px-4 w-full bg-white" placeholder="College" {...register('college')} />
                                            </div>

                                            <div className="md:col-span-2">
                                                <label for="city">Branch *</label>
                                                <Select options={branches} st={branch} setSt={setBranch} />
                                            </div>
                                            <div className="md:col-span-3">
                                                <label for="address">Semester *</label>
                                                <Select options={sem} st={semester} setSt={setSemester} />
                                            </div>

                                            <div className="md:col-span-2">
                                                <label for="city">Phone Number *</label>
                                                <input type="text" className="h-10 border mt-1 rounded px-4 w-full bg-white" placeholder="Phone Number"
                                                    {...register('phno')}
                                                />
                                            </div>

                                            <div className="md:col-span-2">
                                                <label for="country">State *</label>
                                                <Select options={states} st={stateName} setSt={setstateName} />
                                            </div>

                                            <div className="md:col-span-3">
                                                <label for="state">District *</label>
                                                <div className="h-10 bg-white flex border border-gray-200 rounded items-center mt-1">
                                                    <input placeholder="District" className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                                                        {...register('district')}
                                                    />
                                                </div>
                                            </div>
                                            <div className='md:col-span-5'>
                                                {fee !== 'FREE' ?
                                                    <div>
                                                        FEE: Rs. {fee}
                                                        <div className='text-red-900'>Transfer the amount to the account mentioned below: *</div>
                                                        <div>Name: {AccountsData[dept].name}</div>
                                                        <div>A/c No: {AccountsData[dept].accountNo}</div>
                                                        <div>IFSC: {AccountsData[dept].ifsc}</div>
                                                        <div>BANK: {AccountsData[dept].bankName}</div>
                                                        <div className='mt-2'>
                                                            <label>Transaction ID: *</label>
                                                            <input type="text" placeholder="Transaction ID" className="h-10 border mt-1 rounded px-4 w-full bg-white"
                                                                {...register('tid')} required
                                                            />

                                                        </div>
                                                    </div> : null}

                                            </div>
                                            {warning ? <div className='p-1 text-red-600 md:col-span-5'>*Please fill all the fields.</div> : null}
                                            {netwarning ? <div className='p-1 text-red-600 font-bold md:col-span-5'>*Please check your network connection</div> : null}

                                            <div className="md:col-span-5 text-right">
                                                <div className="inline-flex items-end">
                                                    <button className='submit mr-5' onClick={() => { navigate(-1) }}>Cancel</button>
                                                    <input type='submit' disabled={disable && !netwarning ? true : false} className='submit'></input>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default RegisterB