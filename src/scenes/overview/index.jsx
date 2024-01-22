import React from 'react';
import PersonChart from './Table.jsx';
import data from './people.json'; // Replace with the actual data file path

function App() {
  return (
    <div>
      <PersonChart data={data} />
    </div>
  );
}

export default App;
