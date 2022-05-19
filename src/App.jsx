import { useState, useEffect } from 'react';
import Form from './Components/Form/Form';
import Responses from './Components/Responses/Responses';
const { Configuration, OpenAIApi } = require('openai');

function App() {
  const [loading, setLoading] = useState();
  const [userPrompt, setUserPrompt] = useState('');

  const [AIEngine, setAIEngine] = useState({
    engineName: 'text-curie-001',
    engineDescription: 'Very capable, but faster and lower cost than Davinci.',
  });

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
    setLoading(true);
    console.log(loading);
    // fetching API data
    const configuration = new Configuration({
      apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);
    const { engineName } = AIEngine;

    openai
      .createCompletion(engineName, {
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
          engine: engineName,
        };

        copiedResponses.unshift(newData);

        setResponses(copiedResponses);
        setLoading(false);
        setUserPrompt('');
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className='App'>
      <h1>Fun with AI</h1>
      <Form
        handleSubmit={handleSubmit}
        userPrompt={userPrompt}
        setUserPrompt={setUserPrompt}
        AIEngine={AIEngine}
        setAIEngine={setAIEngine}
        loading={loading}
      />

      {responses.length === 0 ? <></> : <Responses responses={responses} />}
    </div>
  );
}

export default App;
