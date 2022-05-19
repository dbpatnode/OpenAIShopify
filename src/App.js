import './App.scss';
import { useState, useEffect } from 'react';
const { Configuration, OpenAIApi } = require('openai');

function App() {
  const [userPrompt, setUserPrompt] = useState('');

  // locale storage used to persist prompts:
  const [responses, setResponses] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem('responses');
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });

  // grabs already saved prompts from locale storage
  useEffect(() => {
    // storing input name
    localStorage.setItem('responses', JSON.stringify(responses));
  }, [responses]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const configuration = new Configuration({
      apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    // fetching API data
    openai
      .createCompletion('text-curie-001', {
        prompt: userPrompt,
        temperature: 0.5,
        max_tokens: 100,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      })
      .then((resp) => {
        const responseText = resp.data.choices[0].text;
        const copiedResponses = [...responses];

        let newData = {
          response: responseText,
          prompt: userPrompt,
        };

        copiedResponses.push(newData);

        setResponses(copiedResponses);
      });
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setUserPrompt(value);
  };

  return (
    <div className='App'>
      <h1>Fun with AI</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <textarea
          name='userPrompt'
          onChange={(e) => handleChange(e)}
          placeholder='Enter prompt here...'
        />

        <button type='submit'>Submit</button>
      </form>

      <div>
        <h3>Responses</h3>
        {responses?.map((resp, index) => {
          const { response, prompt } = resp;

          return (
            <div key={index}>
              <div>
                <b>prompt:</b> {prompt}
              </div>
              <div>
                <b>response:</b> {response}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
