import React, { useEffect, useState } from 'react';
import './AdminView.css';
import Axios from 'axios';

function AdminView() {

    const TableView = ({ props }) => {
        return (
            <tr className="bg-white border-b">
                <td className="px-6 py-4 whitespace-nowrap bg-red-50">{props.name}</td>
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
    const token = localStorage.getItem("token");
    useEffect(() => {
        const fetchData = async () => {
            const response = await Axios.get("http://localhost:5000/admin/api/csresponses", {
                headers: {
                    'x-auth-token': token
                }
            });
            setRegData(response.data);
            console.log(regData);
        };
        fetchData();
    }, []);

    return (
        <div className="flex flex-col">
            <div className='mt-5 bg-white mx-8'>
                <p>CS Data</p>
            </div>
            <div className="overflow-x-auto">
                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <table className="min-w-full">
                            <thead className="border-b bg-white">
                                <tr className='bg-gray-300 '>
                                    <th scope="col" className='p-5 text-red-500'>
                                        Name
                                    </th>
                                    <th scope="col">
                                        College
                                    </th>
                                    <th scope="col">
                                        Branch
                                    </th>
                                    <th scope="col">
                                        Semester
                                    </th>
                                    <th scope="col">
                                        Email
                                    </th>
                                    <th scope="col">
                                        Ph No.
                                    </th>
                                    <th scope="col">
                                        Transaction ID
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {regData!==null && regData.map((item) => <TableView props={item} />)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminView