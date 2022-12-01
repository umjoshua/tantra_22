import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import jwt_decode from "jwt-decode";
import AdminNav from '../adminNav/AdminNav';

function AdminView() {

    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.reload();
    };

    useEffect(() => {
        const fetchData = async () => {
            const response = await Axios.get(url, {
                headers: {
                    'x-auth-token': token
                }
            }).catch((error) => {
                if (error.response) {
                    console.log(error.response.status);
                    setStatusAuth(false);
                }
            })
            const grouped = groupBy(response.data, 'event_id');
            setRegData(grouped);
            setindexList(Object.keys(grouped));
        };
        fetchData();
    }, []);

    const [regData, setRegData] = useState(null);
    const [indexList, setindexList] = useState([]);
    const [statusAuth, setStatusAuth] = useState(true);

    const token = localStorage.getItem("token");
    let userRole = ""
    try {
        userRole = jwt_decode(token).role;
    }
    catch (error) {
        console.log(error);
    }



    let baseUrl = "http://localhost:5000/admin/api/"
    let url = baseUrl + "responses";
    console.log(url);
    let branch = "";


    switch (userRole) {
        case "sadmin":
            url = baseUrl + "responses";
            branch = "Super Admin"
            break;
        case "csadmin":
            url = baseUrl + "csresponses";
            branch = "CSE"
            break;
        case "ceadmin":
            url = baseUrl + "ceresponses";
            branch = "CE"
            break;
        case "adsadmin":
            url = baseUrl + "adsresponses";
            branch = "ADS"
            break;
        case "aeiadmin":
            url = baseUrl + "aeiresponses";
            branch = "AEI"
            break;
        case "eceadmin":
            url = baseUrl + "eceresponses";
            branch = "ECE"
            break;
        case "eeeadmin":
            url = baseUrl + "eeeresponses";
            branch = "EEE"
            break;
        case "ashadmin":
            url = baseUrl + "ashresponses";
            branch = "ASH"
            break;
        case "commadmin":
            url = baseUrl + "commresponses"
            branch = "Common Events"
            break;
    }


    const Table = ({ data, ind }) => {
        console.log(data);
        return (
            <div className="flex flex-col">
                <div className='mt-5 bg-white mx-8 px-5 pt-5 justify-between flex flex-row'>
                    <p className='font-extrabold '>{data[0].event_name}</p>
                    {/* <button className='bg-gray-400 px-2 rounded cursor-pointer' disabled>Export Data</button> */}
                </div>
                <div className='bg-white mx-8 pl-5'>
                <p className='font-extrabold '>Total Registrations: {data.length}</p>
                </div>
                <div className="overflow-x-auto">
                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full">
                                <TableHeader />
                                <tbody className='items-center justify-evenly'>
                                    {regData[ind].map((item, index) => <TableData props={item} key={index} ind={index}/>)}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const TableHeader = () => {
        return (
            <thead className="border-b bg-white text-center">
                <tr>
                    <th>Sl.No</th>
                    <th className='py-5'>Name</th>
                    <th>College</th>
                    <th>Branch</th>
                    <th>Semester</th>
                    <th>Email</th>
                    <th>Ph No.</th>
                    <th>Transaction ID</th>
                </tr>
            </thead>
        )
    }

    const TableData = ({ props, ind }) => {
        return (
            <tr className="bg-white border-b text-center">
                <td >{ind+1}</td>
                <td className="py-4 whitespace-nowrap ">{props.name}</td>
                <td>{props.college}</td>
                <td>{props.branch}</td>
                <td>{props.semester}</td>
                <td>{props.email}</td>
                <td>{props.phno}</td>
                <td>{props.tid}</td>
            </tr>
        )
    }

    function groupBy(objectArray, property) {
        return objectArray.reduce((acc, obj) => {
            const key = obj[property];
            if (!acc[key]) {
                acc[key] = [];
            }
            acc[key].push(obj);
            return acc;
        }, {});
    }

    return (
        <div>
            {!statusAuth ?
                <div className='bg-white w-screen h-screen items-center flex justify-center flex-col'>
                    <div className='text-red-800 font-extrabold text-2xl'>UnAuthorized Access!!</div>
                    <div>
                        Click
                        <button className='px-5 py-1 bg-teal-400 rounded mx-2' onClick={handleLogout}>Login</button>
                        to Login
                    </div>
                </div> : <AdminNav branch={branch} />}
            {regData != null && indexList.map((item, index) => <Table data={regData[item]} ind={item} key={index} />)}
        </div>
    )
}

export default AdminView