const Responses = ({ responses, setResponses }) => {
  const handleClick = (resp) => {
    let matchingResponse = responses.find(
      (response) => response.id === resp.id,
    );

    let filteredArray = responses.filter(
      (response) => response !== matchingResponse,
    );
    setResponses(filteredArray);
    localStorage.removeItem(JSON.stringify(resp));
  };


  return (
    <div className='Responses-container w-70'>
      <h3>Responses</h3>
      {responses?.map((resp, index) => {
        const { response, prompt, engine } = resp;

        return (
          <div className='Response' key={index}>
            <span className='close'>
              <button onClick={() => handleClick(resp)}>
                <i className='fa fa-times'></i>
              </button>
            </span>
            <span>
              <p>
                <span className='prompt-span'>
                  <b>Prompt:</b>
                </span>
                <span className='wrap'>{prompt}</span>
              </p>
            </span>
            <span>
              <p>
                <span className='response-span'>
                  <b>Response:</b>
                </span>
                <span className='wrap'>{response}</span>
              </p>
            </span>
            <span>
              <p>
                <span className='engine-span'>
                  <b>Engine:</b>
                </span>
                <span className='wrap'>{engine}</span>
              </p>
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Responses;
