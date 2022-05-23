import { useState } from 'react';

const ResponseFilter = ({
  responses,
  setFilteredResponeses,
  filteredResponses,
}) => {
  const [selectedAI, setSelectedAI] = useState('All');
  console.log('selectedAI: ', selectedAI);
  const filterValues = [
    'All',
    'text-curie-001',
    'text-davinci-002',
    'text-babbage-001',
    'text-ada-001',
  ];

  const handleFilterChange = (e) => {
    console.log(e.target.name);
    const { name } = e.target;
    setSelectedAI(name);

    const newArray = [];

    responses.forEach((response) => {
      const responseAsArray = Object.entries(response);

      if (responseAsArray[2].includes(name)) {
        newArray.push(response);
        setFilteredResponeses(newArray);
        console.log(filteredResponses);
      }
    });
  };

  return (
    <div className='ResponseFilter w-70'>
      {/* <label>Filter:</label> */}
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
  );
};

export default ResponseFilter;
