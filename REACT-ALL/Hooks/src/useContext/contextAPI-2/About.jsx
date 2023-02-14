import react, { useContext } from 'react';
import setContext from './SetContext';


function About(){
    const user=useContext(setContext);
    return(
        <>
            <h1>About Page</h1>
            {user.age}
        </>
    )
}

export default About;