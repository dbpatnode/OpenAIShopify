const Form = ({ handleSubmit, userPrompt, handleChange }) => {
  return (
    <div className='Form'>
      <form onSubmit={(e) => handleSubmit(e)}>
        <span>
          <textarea
            name='userPrompt'
            value={userPrompt}
            onChange={(e) => handleChange(e)}
            placeholder='Enter prompt here...'
          />
        </span>
        <span>
          <button type='submit'>Submit</button>
        </span>
      </form>
    </div>
  );
};

export default Form;
