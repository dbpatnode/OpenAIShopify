import { useState } from 'react';

const ResponseFilter = ({ setFilterBy }) => {
  const [selectedAI, setSelectedAI] = useState('All');

  const filterValues = [
    'All',
    'text-curie-001',
    'text-davinci-002',
    'text-babbage-001',
    'text-ada-001',
  ];

  const handleFilterChange = (e) => {
    const { name } = e.target;
    setFilterBy(name);
    setSelectedAI(name);
  };

  return (
    <div className='w-70'>
      <label>Filter by AI engine:</label>
      <div className='ResponseFilter'>
        {filterValues.map((value) => {
          const selected = selectedAI === value;
          return (
            <button
              key={value}
              name={value}
              onClick={(e) => handleFilterChange(e)}
              className={selected ? 'active' : ''}
            >
              {value}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ResponseFilter;
