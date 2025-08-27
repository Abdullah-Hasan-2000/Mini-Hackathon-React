import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function AuthButton({ color, value, type }) {
  return (
    <>
      <Button variant="contained" color={color} type={type}>
        {value}
      </Button>
    </>
  );
}
