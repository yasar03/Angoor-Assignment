// src/components/FilterComponent.js
import React from 'react';
import { TextField, MenuItem, Select, InputLabel, FormControl, Checkbox, ListItemText, FormGroup, FormControlLabel } from '@mui/material';

const FilterComponent = () => {
  return (
    <div>
      <FormControl fullWidth>
        <InputLabel>Filter</InputLabel>
        <Select multiple value={[]} renderValue={(selected) => selected.join(', ')} >
          <MenuItem value="mentions">
            <Checkbox checked={true} />
            <ListItemText primary="Mentions" />
          </MenuItem>
          <MenuItem value="new-conversations">
            <Checkbox checked={false} />
            <ListItemText primary="New Conversations" />
          </MenuItem>
          <MenuItem value="assignments">
            <Checkbox checked={false} />
            <ListItemText primary="Assignments" />
          </MenuItem>
          <MenuItem value="reminder">
            <Checkbox checked={false} />
            <ListItemText primary="Reminder" />
          </MenuItem>
          <MenuItem value="participations">
            <Checkbox checked={false} />
            <ListItemText primary="Participations" />
          </MenuItem>
        </Select>
      </FormControl>
      <TextField
        id="date"
        label="On Date"
        type="date"
        defaultValue="2024-10-29"
        fullWidth
        InputLabelProps={{ shrink: true }}
      />
    </div>
  );
};

export default FilterComponent;
