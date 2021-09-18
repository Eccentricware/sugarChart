import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Dropdown = ({id, label, options, handleChange}) => (
  <FormControl fullWidth>
    <InputLabel id={id}>{id.toUpperCase()}</InputLabel>
    <Select
      labelId={id}
      id={`${id}-select`}
      value={options[0]}
      label={id}
      onChange={(e)=>{
        e.preventDefault();
        handleChange(e.target.value)
      }}
    >
      {
        options.map((option, i)=>(
          <MenuItem key={i} value={option}>{option}</MenuItem>
        ))
      }
    </Select>
  </FormControl>
);

export default Dropdown;