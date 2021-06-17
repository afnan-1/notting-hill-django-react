import React, { useState, useMemo } from "react";
// import Select from 'react-select'
import countryList from "react-select-country-list";
import TextField from "@material-ui/core/TextField";
import MenuItem from '@material-ui/core/MenuItem';

function CountrySelector() {
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);
console.log(options)
  const changeHandler = (value) => {
    setValue(value);
  };
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  //   return <Select options={options} value={value} onChange={changeHandler} />
  return (
    <TextField
      id="standard-select-currency"
      select
      label="Country of residence"
      variant="outlined"
      fullWidth
      value={value}
      onChange={handleChange}
    >
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
}

export default CountrySelector;
