const Responses = ({ responses }) => {
  return (
    <div>
      <h3>Responses</h3>
      {responses?.map((resp, index) => {
        const { response, prompt } = resp;

        return (
          <div key={index}>
            <span>
              <p>
                <b>prompt:</b> {prompt}
              </p>
            </span>
            <span>
              <p>
                <b>response:</b> {response}
              </p>
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Responses;
