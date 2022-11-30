import React from 'react';

function AdminNav() {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  const token = localStorage.getItem("token");
  console.log(token);
  
  // function parseJwt(token) {
  //   return JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
  // }

  // const userRole = parseJwt(token);
  // console.log(userRole);

  return (
    <div className='bg-[#FFFFFF] w-[100%] h-[70px] flex items-center justify-between p-5'>
      <div className='w-[85%] h-[100%] flex items-center pl-[3%]'>
        <span>Tantra 22 Dashboard - </span>
      </div>
      <div>
        <button className='bg-teal-500 p-2 rounded-xl font-bold' onClick={handleLogout}>LOGOUT</button>
      </div>
    </div>
  )
}

export default AdminNav