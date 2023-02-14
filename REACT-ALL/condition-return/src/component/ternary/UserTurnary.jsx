import React from 'react'
import LoginTurnary from './LoginTurnary'
import LogoutTernary from './LogoutTernary'

export default function UserTurnary() {
    let islogin=true;
  return (
    <>
     {islogin? <LoginTurnary name='pallab'/>: <LogoutTernary />}
     
     {
     false? 
     <div>this is true</div> 
     : 
     <h3>this is false</h3> 
     }
    </>
  )
}
