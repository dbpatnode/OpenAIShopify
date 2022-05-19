import { useState, useEffect } from 'react';
import Form from './Form/Form';
import Responses from './Responses/Responses';
const { Configuration, OpenAIApi } = require('openai');

function App() {
  const [userPrompt, setUserPrompt] = useState('');

  // locale storage used to persist prompts:
  const [responses, setResponses] = useState(() => {
    const saved = localStorage.getItem('responses');
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });

  // grabs already saved prompts from locale storage
  useEffect(() => {
    localStorage.setItem('responses', JSON.stringify(responses));
  }, [responses]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // fetching API data
    const configuration = new Configuration({
      apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

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
        setUserPrompt('');
      });
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setUserPrompt(value);
  };

  console.log(responses.length);

  return (
    <div className='App'>
      <h1>Fun with AI</h1>
      <Form
        handleSubmit={handleSubmit}
        userPrompt={userPrompt}
        handleChange={handleChange}
      />

      {responses.length === 0 ? <></> : <Responses responses={responses} />}
    </div>
  );
}

export default App;
