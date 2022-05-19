const Form = ({
  handleSubmit,
  userPrompt,
  setUserPrompt,
  AIEngine,
  setAIEngine,
}) => {
  const engines = [
    {
      engineName: 'text-curie-001',
      engineDescription:
        'Very capable, but faster and lower cost than Davinci.',
    },
    {
      engineName: 'text-davinci-002',
      engineDescription:
        'Most capable GPT-3 model. Can do any task the other models can do, often with less context. In addition to responding to prompts, also supports inserting completions within text.',
    },
    {
      engineName: 'text-babbage-001',
      engineDescription:
        'Capable of straightforward tasks, very fast, and lower cost.',
    },
    {
      engineName: 'text-ada-001',
      engineDescription:
        '	Capable of very simple tasks, usually the fastest model in the GPT-3 series, and lowest cost.',
    },
  ];

  const handleChange = (e) => {
    const { value } = e.target;
    setUserPrompt(value);
  };

  const handleSelect = (e) => {
    const { value } = e.target;
    let selectedEngine = engines.find((engine) => engine.engineName === value);
    setAIEngine(selectedEngine);
  };

  return (
    <div className='Form'>
      <form onSubmit={(e) => handleSubmit(e)}>
        <span>
          <div className='upper-form'>
            <label htmlFor='engines'>Choose a GPT-3 engine:</label>

            <div class='select-dropdown'>
              <select
                name='engines'
                id='engines'
                defaultValue={AIEngine}
                onChange={(e) => handleSelect(e)}
              >
                {engines.map((engine) => {
                  const { engineName } = engine;
                  return (
                    <option key={engineName} value={engineName}>
                      {engineName}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className='engine-description'>
              <b>{AIEngine.engineName}</b>
              <p>{AIEngine.engineDescription}</p>
            </div>
          </div>
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
