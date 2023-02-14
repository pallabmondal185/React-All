import React, { useState } from "react";

const  Hoc2= () => {
  return (
    <div>
      <h1>HOC</h1>
      <HOCRed cmp={Counter} />
      <HOCGreen cmp={Counter} />
      <HOCblue cmp={Counter} name='ram'/>
    </div>
  );
};
function HOCRed(props) {
  return (
    <div style={{ backgroundColor: "red", width: "100px", margin: '5px' }}>
      Red
      <props.cmp />
    </div>
  );
}
function HOCGreen(props) {
  return (
    <div style={{ backgroundColor: "green", width: "100px", margin: '5px' }}>
      Green
      <props.cmp />
    </div>
  );
}

function HOCblue(props){
    const [blueName,setBlueName]=useState('pallab')
    return(
        <div style={{backgroundColor: "blue", width:'100px', margin: '5px'}}>
            Blue;
            <props.cmp></props.cmp> <br />
            {blueName} <br />
            <button onClick={()=> setBlueName(props.name)}>Change</button>
        </div>
    )
}

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h4>{count}</h4>
      <button onClick={() => setCount(count + 1)}>Update</button>
    </div>
  );
}
export default Hoc2;