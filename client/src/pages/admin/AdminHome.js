import { React, useState } from 'react';

function AdminHome() {

    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.reload();
    };

    return (
        <div className='flex flex-col w-full h-full justify-center items-center'>
            <div className='
            w-[80%] mt-3 bg-red-200 h-[60px] 
            font-bold flex items-center p-2 rounded-[10px] justify-between'>
                Tantra”22 AdminHome Dashboard
                <button onClick={handleLogout}>LogOut</button>
            </div>
            <div className='bg-teal-100 mt-2 rounded-[10px] w-[80%] h-[100%] flex justify-center items-center'>asdf</div>
        </div>
    )
}

export default AdminHome