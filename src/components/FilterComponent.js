// src/components/FilterComponent.js
import React, { useState } from 'react';
import { Box, Button, Checkbox, FormControlLabel, FormGroup, MenuItem, Select, Typography, Grid, TextField } from '@mui/material';

const filters = {
  main: ['Mention', 'New Conversations', 'Assignments', 'Reminder', 'Participations'],
  users: ['A', 'B', 'C'],
  date: ['On date', 'Before date', 'After date', 'Between date']
};

const FilterComponent = ({ onFilterChange }) => {
  const [selectedMainFilters, setSelectedMainFilters] = useState([]);
  const [selectedUserFilters, setSelectedUserFilters] = useState([]);
  const [selectedDateFilter, setSelectedDateFilter] = useState('');
  const [dateValue, setDateValue] = useState('');

  const handleMainFilterChange = (event) => {
    const value = event.target.value;
    setSelectedMainFilters(typeof value === 'string' ? value.split(',') : value);
  };

  const handleUserFilterChange = (event) => {
    const value = event.target.value;
    setSelectedUserFilters(typeof value === 'string' ? value.split(',') : value);
  };

  const handleDateFilterChange = (event) => {
    setSelectedDateFilter(event.target.value);
  };

  const handleDateValueChange = (event) => {
    setDateValue(event.target.value);
  };

  const applyFilters = () => {
    onFilterChange({
      main: selectedMainFilters,
      users: selectedUserFilters,
      date: {
        type: selectedDateFilter,
        value: dateValue
      }
    });
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Filters
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Typography variant="subtitle1">Main Filters</Typography>
          <Select
            multiple
            value={selectedMainFilters}
            onChange={handleMainFilterChange}
            renderValue={(selected) => selected.join(', ')}
            fullWidth
          >
            {filters.main.map((filter) => (
              <MenuItem key={filter} value={filter}>
                <Checkbox checked={selectedMainFilters.indexOf(filter) > -1} />
                <Typography>{filter}</Typography>
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="subtitle1">User Filters</Typography>
          <Select
            multiple
            value={selectedUserFilters}
            onChange={handleUserFilterChange}
            renderValue={(selected) => selected.join(', ')}
            fullWidth
          >
            {filters.users.map((filter) => (
              <MenuItem key={filter} value={filter}>
                <Checkbox checked={selectedUserFilters.indexOf(filter) > -1} />
                <Typography>{filter}</Typography>
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="subtitle1">Date Filter</Typography>
          <Select
            value={selectedDateFilter}
            onChange={handleDateFilterChange}
            fullWidth
          >
            {filters.date.map((filter) => (
              <MenuItem key={filter} value={filter}>
                <Typography>{filter}</Typography>
              </MenuItem>
            ))}
          </Select>
          {(selectedDateFilter === 'On date' || selectedDateFilter === 'Before date' || selectedDateFilter === 'After date') && (
            <TextField
              type="date"
              value={dateValue}
              onChange={handleDateValueChange}
              fullWidth
              margin="normal"
            />
          )}
          {selectedDateFilter === 'Between date' && (
            <Box display="flex" justifyContent="space-between">
              <TextField
                type="date"
                label="Start Date"
                value={dateValue.start || ''}
                onChange={(e) => setDateValue({ ...dateValue, start: e.target.value })}
                margin="normal"
              />
              <TextField
                type="date"
                label="End Date"
                value={dateValue.end || ''}
                onChange={(e) => setDateValue({ ...dateValue, end: e.target.value })}
                margin="normal"
              />
            </Box>
          )}
        </Grid>
      </Grid>
      <Button variant="contained" color="primary" onClick={applyFilters} style={{ marginTop: '20px' }}>
        Apply Filters
      </Button>
    </Box>
  );
};

export default FilterComponent;
