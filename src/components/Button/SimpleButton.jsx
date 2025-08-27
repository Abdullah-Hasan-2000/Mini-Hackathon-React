import * as React from 'react';
import Button from '@mui/material/Button';

export default function SimpleButton({ color, value, type, onclick }) {
  return (
    <>
      <Button sx={{ width: "150px" }} variant="contained" color={color} type={type} onClick={onclick}>
        {value}
      </Button>
    </>
  );
}
