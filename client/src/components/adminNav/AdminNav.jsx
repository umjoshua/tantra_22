import React from 'react';

function AdminNav() {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  const handleReload = () => {
    window.location.reload();
  };
  return (
    <div className='bg-[#FFFFFF] w-[100%] h-[70px] flex items-center justify-between p-5 sticky top-0'>
      <div className='w-[85%] h-[100%] flex items-center pl-[3%]'>
        <span>Tantra 22 Admin Dashboard</span>
      </div>
      <div className='flex flex-row'>
        <button className='bg-teal-500 p-2 rounded-xl font-bold mx-5' onClick={handleReload}>RELOAD</button>
        <button className='bg-red-500 p-2 rounded-xl font-bold mx-5 text-white' onClick={handleLogout}>LOGOUT</button>
      </div>
    </div>
  )
}

export default AdminNav