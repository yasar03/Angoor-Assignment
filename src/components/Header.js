import React from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

const Header = ({ filters, setFilters }) => {
  const handleChange = (event) => {
    setFilters({
      ...filters,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <TextField
        select
        label="User Group"
        name="userGroup"
        value={filters.userGroup}
        onChange={handleChange}
        variant="outlined"
        margin="normal"
      >
        <MenuItem value="">All</MenuItem>
        <MenuItem value="919380840316">User 1</MenuItem>
        <MenuItem value="916264837310">User 2</MenuItem>
        {/* Add MenuItem for each user group */}
      </TextField>
      <Button variant="contained" color="primary" onClick={() => setFilters(filters)}>
        Apply Filters
      </Button>
    </div>
  );
};

export default Header;
