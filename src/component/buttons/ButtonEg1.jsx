import React from 'react';
import { Button } from '@mui/material';

const ButtonEg1 = () => {
  return (
    <>
      <Button onClick={()=>{alert('onclick example')}}>OnClick Example</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="text">Contained</Button>
      <Button variant="outlined">Primary</Button>
      <Button variant="contained" color="success">Success</Button>
    </>
  )
}

export default ButtonEg1
