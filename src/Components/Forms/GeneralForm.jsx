import { engines } from '../../Data/engines';
import { prompts } from '../../Data/prompts';

const Form = ({
  handleSubmit,
  userPrompt,
  setUserPrompt,
  AIEngine,
  setAIEngine,
  AIPrompt,
  setAIPrompt,
  loading,
}) => {
  const handleChange = (e) => {
    const { value } = e.target;
    setUserPrompt(value);
  };

  const handlePromptSelect = (e) => {
    const { value } = e.target;
    let selectedPrompt = prompts.find((prompt) => prompt.promptName === value);
    setAIPrompt(selectedPrompt);
  };

  const handleEngineSelect = (e) => {
    const { value } = e.target;
    let selectedEngine = engines.find((engine) => engine.engineName === value);
    setAIEngine(selectedEngine);
  };

  const { engineName, engineDescription } = AIEngine;
  const { promptName, promptDescription, instructions } = AIPrompt;
  return (
    <div className='Form w-70'>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className='upper-form'>
          <span className='w-50'>
            <label htmlFor='prompt'>Choose a prompt type:</label>

            <div className='select-dropdown'>
              <select
                name='prompt'
                id='prompt'
                defaultValue={AIPrompt}
                onChange={(e) => handlePromptSelect(e)}
              >
                {prompts.map((prompt) => {
                  const { promptName } = prompt;
                  return (
                    <option key={promptName} value={promptName}>
                      {promptName}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className='engine-description'>
              <b>{promptName}</b>
              <p>{promptDescription}</p>
            </div>
          </span>

          <span className='w-50'>
            <label htmlFor='engines'>Choose a GPT-3 AI engine:</label>

            <div className='select-dropdown'>
              <select
                name='engines'
                id='engines'
                defaultValue={AIEngine}
                onChange={(e) => handleEngineSelect(e)}
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
              <b>{engineName}</b>
              <p>{engineDescription}</p>
            </div>
          </span>
        </div>

        <div className='instructions'>
          <b>Instructions: </b>
          <label>{instructions}</label>
        </div>
        <div>
          <textarea
            name='userPrompt'
            value={userPrompt}
            onChange={(e) => handleChange(e)}
            placeholder='Enter prompt here...'
          />
        </div>

        <span>
          <button type='submit' disabled={userPrompt === '' || loading}>
            {loading && <i className='fa fa-refresh fa-spin' />}
            {loading && <span>Loading...</span>}
            {!loading && <span>Submit</span>}
          </button>
        </span>
      </form>
    </div>
  );
};

export default Form;
