const Responses = ({ responses }) => {
  return (
    <div>
      <h3>Responses</h3>
      {responses?.map((resp, index) => {
        const { response, prompt } = resp;

        return (
          <div className='Response' key={index}>
            <div>
              <p>
                <span className='prompt'>
                  <b>prompt:</b>
                </span>
                <span>{prompt}</span>
              </p>
            </div>
            <div>
              <p>
                <span>
                  <b>response:</b>
                </span>
                <span>{response}</span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Responses;
