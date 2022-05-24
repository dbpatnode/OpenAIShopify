const Responses = ({ responses, setResponses, filterBy }) => {
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

  const filteredResponeses = () => {
    if (filterBy === 'All') {
      return responses;
    } else {
      return responses.filter((response) => response.engine === filterBy);
    }
  };

  return (
    <div className='Responses-container w-70'>
      {filteredResponeses().length === 0 ? (
        <div className='no-response'>
          <p>No responses found...</p>
        </div>
      ) : (
        <>
          {filteredResponeses()?.map((resp, index) => {
            const { response, prompt, engine } = resp;

            return (
              <div className='Response' key={index}>
                <span className='response-card-top'>
                  <span className={`engine ${engine}-color`}>{engine}</span>
                  <span className='close'>
                    <button onClick={() => handleClick(resp)}>
                      <i className='fa fa-times'></i>
                    </button>
                  </span>
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
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default Responses;
