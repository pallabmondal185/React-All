import React, { useState } from 'react'

function FormValidationEg1() {
    
    const [userError, setUserError] = useState(false);
    const [passError,setPassError]=useState(false);

    function handleUsernameChange(e) {
        let item = e.target.value;
        if(item.length<6 || item.length>10){
            setUserError(true);
        }
        else{
            setUserError(false)
        }
    }

    function handlePasswordChange(e) {
        let item = e.target.value;
        if(item.length<6 || item.length>10){
            setPassError(true)
        }
        else{
            setPassError(false)
        }
    }
    

    function handleSubmit(e) {
       if(!passError && !userError){
        alert('Login Successfully')
       }
       
        e.preventDefault();
    }
    return (
        <>
            <div className='container'>
                <form action="" onSubmit={handleSubmit}>
                    <label htmlFor="">Enter username: </label>
                    <input onChange={handleUsernameChange} type="text" name="name" id="" /><br />
                    <span>{userError ? 'username is between 6 and 10 charecter' : ''}</span><br />

                    <label htmlFor="">Enter password: </label>
                    <input onChange={handlePasswordChange} type="password" name="email" id="" /><br />
                    <span>{passError ?'username is between 6 and 10 charecter':''}</span><br />

                    <button type='submit'>Submit</button>
                </form>
            </div>
        </>
    )
}

export default FormValidationEg1
