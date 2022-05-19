const Responses = ({ responses }) => {
  return (
    <div>
      <h3>Responses</h3>
      {responses?.map((resp, index) => {
        const { response, prompt, engine } = resp;

        return (
          <div className='Response' key={index}>
            <div>
              <p>
                <span className='prompt-span'>
                  <b>Prompt:</b>
                </span>
                <span>{prompt}</span>
              </p>
            </div>
            <div>
              <p>
                <span className='response-span'>
                  <b>Response:</b>
                </span>
                <span>{response}</span>
              </p>
            </div>
            <div>
              <p>
                <span className='engine-span'>
                  <b>Engine:</b>
                </span>
                <span>{engine}</span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Responses;
