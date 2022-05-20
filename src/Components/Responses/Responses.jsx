const Responses = ({ responses }) => {
  return (
    <div className='Responses-container'>
      <h3>Responses</h3>
      {responses?.map((resp, index) => {
        const { response, prompt, engine } = resp;

        return (
          <div className='Response' key={index}>
            <span>
              <p>
                <span className='prompt-span'>
                  <b>Prompt:</b>
                </span>
                <span>{prompt}</span>
              </p>
            </span>
            <span>
              <p>
                <span className='response-span'>
                  <b>Response:</b>
                </span>
                <span>{response}</span>
              </p>
            </span>
            <span>
              <p>
                <span className='engine-span'>
                  <b>Engine:</b>
                </span>
                <span>{engine}</span>
              </p>
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Responses;
