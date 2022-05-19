import { engines } from '../../Data/engines';
import Loading from '../Loading/Loading';

const Form = ({
  handleSubmit,
  userPrompt,
  setUserPrompt,
  AIEngine,
  setAIEngine,
  loading,
}) => {
  const handleChange = (e) => {
    const { value } = e.target;
    setUserPrompt(value);
  };

  const handleSelect = (e) => {
    const { value } = e.target;
    let selectedEngine = engines.find((engine) => engine.engineName === value);
    setAIEngine(selectedEngine);
  };

  console.log('loading: ', loading);

  return (
    <div className='Form'>
      <form onSubmit={(e) => handleSubmit(e)}>
        <span>
          <div className='upper-form'>
            <label htmlFor='engines'>Choose a GPT-3 engine:</label>

            <div className='select-dropdown'>
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
          <button type='submit' disabled={userPrompt === '' || loading}>
            {loading ? <Loading /> : 'Submit'}
          </button>
        </span>
      </form>
    </div>
  );
};

export default Form;
