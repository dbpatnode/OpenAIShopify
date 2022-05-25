import { useState, useEffect } from 'react';
import GeneralForm from '../Forms/GeneralForm';
import Responses from '../Responses/Responses';
import ResponseFilter from '../ResponseFilter/ResponseFilter';

// const { Configuration, OpenAIApi } = require('openai');

const AIContainer = () => {
  const [loading, setLoading] = useState();
  const [userPrompt, setUserPrompt] = useState('');
  const [filterBy, setFilterBy] = useState('All');
  const [AIPrompt, setAIPrompt] = useState({
    promptName: 'Chat',
    promptDescription: 'A general chat bot.',
    prompt: '',
    instructions:
      'Ask it a question, have it write you a list, poem, story, whatever you can think of.',
  });

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
    setLoading(true);
    e.preventDefault();
    const { engineName } = AIEngine;

    const APIKey = process.env.REACT_APP_OPENAI_API_KEY_NEW;

    const data = {
      prompt: `${AIPrompt.prompt}${userPrompt}`,
      temperature: 0.5,
      max_tokens: 400,
      top_p: 0.3,
      frequency_penalty: 0.5,
      presence_penalty: 0.0,
    };
    const request = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${APIKey}`,
      },
      body: JSON.stringify(data),
    };
    fetch(
      `https://api.openai.com/v1/engines/${engineName}/completions`,
      request,
    )
      .then((response) => response.json())
      .then((resp) => {
        const responseText = resp.choices[0].text;
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
      });
  };

  return (
    <div className='AIContent w-70'>
      <div className='container'>
        <h1>Fun with AI</h1>
        <GeneralForm
          handleSubmit={handleSubmit}
          userPrompt={userPrompt}
          setUserPrompt={setUserPrompt}
          AIEngine={AIEngine}
          setAIEngine={setAIEngine}
          AIPrompt={AIPrompt}
          setAIPrompt={setAIPrompt}
          loading={loading}
        />
        <div className='container'>
          <ResponseFilter
            responses={responses}
            setFilterBy={setFilterBy}
            filterBy={filterBy}
          />
          <Responses
            responses={responses}
            setResponses={setResponses}
            filterBy={filterBy}
          />
        </div>
      </div>
    </div>
  );
};

export default AIContainer;
