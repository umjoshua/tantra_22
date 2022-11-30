import React from 'react'
import AdminNav from '../../components/adminNav/AdminNav';
import AdminView from '../../components/adminView/AdminView';
import Axios from 'axios';

function AdminHome() {
    return (
        <div className='w-[100%] h-[100%]'>
            <AdminNav />
            <AdminView />
        </div>
    )
}

export default AdminHome