import React from 'react';
import Login from './Login';
import Logout from './Logout';

export default function User(props) {
  
    
        {
             const islogin=true;
             if(islogin){
                 return(
                    <>
                    <Login name='pallab mondal'/>
                    </>
                 )
             }
             else{
                 return(
                    <>
                    <Logout />
                    </>
                 )
             }
        }
    
}
