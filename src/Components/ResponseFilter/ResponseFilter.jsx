const ResponseFilter = ({ responses }) => {
  const filterValues = [
    {
      text: 'All',
    },
    {
      text: 'text-curie-001',
    },
    {
      text: 'text-davinci-002',
    },
    {
      text: 'text-babbage-001',
    },
    {
      text: 'text-ada-001',
    },
  ];

  return (
    <div className='ResponseFilter w-70'>
      {filterValues.map((value) => {
        const { text } = value;
        return (
          <button key={text} name={text}>
            {text}
          </button>
        );
      })}
    </div>
  );
};

export default ResponseFilter;
