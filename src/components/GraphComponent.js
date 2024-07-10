import React, { useState, useEffect } from 'react';
import jsonData from '../data/data.json'; // Assuming your JSON data is imported here

const GraphComponent = () => {
  const [filteredData, setFilteredData] = useState(jsonData.results); // Initialize with all data
  const [selectedFilters, setSelectedFilters] = useState({
    pi: '', // Participant Identifier filter
    date: '', // Date filter (On date, Before date, After date, Between date)
  });

  // Function to apply filters and update filteredData state
  const applyFilters = () => {
    let newData = jsonData.results;

    // Filter by Participant Identifier
    if (selectedFilters.pi) {
      newData = newData.filter(item => item.pi.identity === selectedFilters.pi);
    }

    // Filter by Date
    if (selectedFilters.date) {
      switch (selectedFilters.date) {
        case 'on':
          // Example: Filter on a specific date
          newData = newData.filter(item => {
            const createdAtDate = new Date(item.created_at);
            const selectedDate = new Date('2024-04-26'); // Example date, replace with selected date logic
            return createdAtDate.toDateString() === selectedDate.toDateString();
          });
          break;
        case 'before':
          // Example: Filter before a specific date
          newData = newData.filter(item => {
            const createdAtDate = new Date(item.created_at);
            const selectedDate = new Date('2024-04-25'); // Example date, replace with selected date logic
            return createdAtDate < selectedDate;
          });
          break;
        // Add cases for 'after' and 'between' as per your requirements
        default:
          break;
      }
    }

    setFilteredData(newData);
  };

  // useEffect to apply filters whenever selectedFilters change
  useEffect(() => {
    applyFilters();
  }, [selectedFilters]);

  return (
    <div>
      {/* Filter components and UI elements to select filters */}
      <div>
        <label>Select Participant Identifier:</label>
        <select
          value={selectedFilters.pi}
          onChange={(e) => setSelectedFilters({ ...selectedFilters, pi: e.target.value })}
        >
          <option value="">All Participants</option>
          {/* Options based on available Participant Identifiers in data */}
          {jsonData.results.map(item => (
            <option key={item.pi.id} value={item.pi.identity}>{item.pi.identity}</option>
          ))}
        </select>
      </div>

      <div>
        <label>Select Date Filter:</label>
        <select
          value={selectedFilters.date}
          onChange={(e) => setSelectedFilters({ ...selectedFilters, date: e.target.value })}
        >
          <option value="">Select Date Filter</option>
          <option value="on">On date</option>
          <option value="before">Before date</option>
          {/* Add options for 'after' and 'between' as per your requirements */}
        </select>
      </div>

      {/* Render graphs based on filteredData */}
      <div>
        <h2>Graphs</h2>
        {/* Example: Render different types of graphs based on filteredData */}
        {/* Implement logic to render different types of graphs based on requirements */}
        {/* Example: Total Calls Graph Component */}
        <TotalCallsGraph data={filteredData} />
        {/* Add other graph components here */}
      </div>
    </div>
  );
};

export default GraphComponent;
