import React from 'react';

export default function Object(props){
    const {msgarr,msgobj,msgfunc}=props;
    
    return(
        <>
            <div>
                <h1>the array is: {msgarr[0]+'=>'+msgarr[1]}</h1>
                <h1>the object is: {msgobj.name+'<***>'+msgobj.roll}</h1>
                <h1>the function is: {msgfunc(1,2)}</h1>
            </div>
        </>
    )
}