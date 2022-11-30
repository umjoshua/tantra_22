import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import jwt_decode from "jwt-decode";

function AdminView() {

    const Table = ({ data, ind }) => {
        console.log(data);
        return (
            <div className="flex flex-col">
                <div className='mt-5 bg-white mx-8 p-5'>
                    <p className='font-extrabold'>{data[0].event_name}</p>
                </div>
                <div className="overflow-x-auto">
                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full">
                                <TableHeader />
                                <tbody>
                                    {regData[ind].map((item, index) => <TableData props={item} key={index} />)}
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
            <thead className="border-b bg-white">
                <tr >
                    <th className='p-5 '>Name</th>
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

    const TableData = ({ props }) => {
        return (
            <tr className="bg-white border-b">
                <td className="px-6 py-4 whitespace-nowrap ">{props.name}</td>
                <td>{props.college}</td>
                <td>{props.branch}</td>
                <td>{props.semester}</td>
                <td>{props.email}</td>
                <td>{props.phno}</td>
                <td>{props.tid}</td>
            </tr>
        )
    }
    const [regData, setRegData] = useState(null);
    const [indexList, setindexList] = useState([]);

    const token = localStorage.getItem("token");
    let userRole = jwt_decode(token).role;

    let baseUrl = "http://localhost:5000/admin/api/"
    let url = baseUrl + "responses";
    console.log(url);

    switch (userRole) {
        case "sadmin":
            url = baseUrl + "responses";
            break;
        case "csadmin":
            url = baseUrl + "csresponses";
            break;
        case "ceadmin":
            url = baseUrl + "ceresponses";
            break;
        case "adsadmin":
            url = baseUrl + "adsresponses";
            break;
        case "aeiadmin":
            url = baseUrl + "aeiresponses";
            break;
        case "eceadmin":
            url = baseUrl + "eceresponses";
            break;
        case "eeeadmin":
            url = baseUrl + "eeeresponses";
            break;
        case "ashadmin":
            url = baseUrl + "ashresponses";
            break;
        case "commadmin":
            url = baseUrl + "commresponses"
            break;
    }

    useEffect(() => {
        const fetchData = async () => {
            const response = await Axios.get(url, {
                headers: {
                    'x-auth-token': token
                }
            });
            const grouped = groupBy(response.data, 'event_id');
            setRegData(grouped);
            setindexList(Object.keys(grouped));
        };
        fetchData();
    }, []);

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
            {regData != null && indexList.map((item, index) => <Table data={regData[item]} ind={item} key={index} />)}
        </div>
    )
}

export default AdminView