import React, { useState } from 'react';
import { ResponsiveBar } from '@nivo/bar';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const PersonChart = ({ data }) => {
  const [selectedPerson, setSelectedPerson] = useState(null);

  const handleSelectPerson = (event, person) => {
    setSelectedPerson(person);
  };

  const getChartData = () => {
    if (!selectedPerson) return [];

    // Filter data for the selected person
    const personData = data.filter((person) => person.PERSON_ID === selectedPerson.PERSON_ID);

    // Map the data to match the Nivo Bar Chart format
    return personData.map((entry) => ({
      month: `Month ${entry.MONTH}`,
      durationMinutes: entry.DURATION_MINUTES,
    }));
  };

  // Filter options based on the typed letter
  const filterOptions = (options, { inputValue }) => {
    const filteredOptions = options.filter(
      (option) =>
        option.FIRST_NAME.toLowerCase().includes(inputValue.toLowerCase()) ||
        option.LAST_NAME.toLowerCase().includes(inputValue.toLowerCase())
    );
    return filteredOptions;
  };

  return (
    <div>
      <h2>Person Search</h2>
      <Autocomplete
        options={data}
        getOptionLabel={(option) => `${option.FIRST_NAME} ${option.LAST_NAME}`}
        renderInput={(params) => (
          <TextField {...params} label="Search for a person" variant="outlined" />
        )}
        onChange={handleSelectPerson}
        filterOptions={filterOptions}
        isOptionEqualToValue={(option, value) => option.PERSON_ID === value.PERSON_ID}
      />

      {selectedPerson && (
        <div>
          <h3>{`${selectedPerson.FIRST_NAME} ${selectedPerson.LAST_NAME}'s Monthly Duration`}</h3>
          <div style={{ height: '400px', background: '#f0f0f0', padding: '20px' }}>
            <ResponsiveBar
              data={getChartData()}
              keys={['durationMinutes']}
              indexBy="month"
              margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
              padding={0.3}
              colors={{ scheme: 'nivo' }}
              borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
              axisTop={null}
              axisRight={null}
              axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
              }}
              axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
              }}
              enableLabel={false}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PersonChart;
