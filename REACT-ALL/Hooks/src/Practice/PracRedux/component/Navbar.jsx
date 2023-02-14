import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar=()=>{
    const navigate=useNavigate();
    return(
        <>
            <button className='btn btn-success m-2' onClick={()=>navigate('/user')}>user</button>
            <button className='btn btn-primary m-2' onClick={()=>{navigate(`/profile/${5}`)}}>profile</button>
        </>
    )
}

export default Navbar;

