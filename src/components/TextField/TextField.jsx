import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function InputField({ label, type, autoComplete, onchange }) {
  return (
    <>
      <TextField label={label} variant="outlined" type={type} autoComplete={autoComplete} onChange={onchange} />

    </>
  );
}
