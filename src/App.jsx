import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AIContainer from './Components/AIContainer/AIContainer';
import Home from './Components/Home/Home';

// import Form from './Components/Form/Form';
// import Responses from './Components/Responses/Responses';
// const { Configuration, OpenAIApi } = require('openai');

function App() {
  // const [loading, setLoading] = useState();
  // const [userPrompt, setUserPrompt] = useState('');

  // const [AIEngine, setAIEngine] = useState({
  //   engineName: 'text-curie-001',
  //   engineDescription: 'Very capable, but faster and lower cost than Davinci.',
  // });

  // // locale storage used to persist prompts:
  // const [responses, setResponses] = useState(() => {
  //   const saved = localStorage.getItem('responses');
  //   const initialValue = JSON.parse(saved);
  //   return initialValue || [];
  // });

  // // grabs already saved prompts from locale storage
  // useEffect(() => {
  //   localStorage.setItem('responses', JSON.stringify(responses));
  // }, [responses]);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setLoading(true);

  //   // fetching API data
  //   const configuration = new Configuration({
  //     apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  //   });
  //   const openai = new OpenAIApi(configuration);

  //   const { engineName } = AIEngine;

  //   openai
  //     .createCompletion(engineName, {
  //       prompt: userPrompt,
  //       temperature: 0.5,
  //       max_tokens: 100,
  //       top_p: 1,
  //       frequency_penalty: 0,
  //       presence_penalty: 0,
  //     })
  //     .then((resp) => {
  //       const responseText = resp.data.choices[0].text;
  //       const copiedResponses = [...responses];

  //       let newData = {
  //         response: responseText,
  //         prompt: userPrompt,
  //         engine: engineName,
  //       };

  //       copiedResponses.unshift(newData);

  //       setResponses(copiedResponses);

  //       setLoading(false);
  //       setUserPrompt('');
  //     })
  //     .catch((error) => {
  //       alert(error.message);
  //     });
  // };

  const [routes] = useState([
    {
      path: 'AI',
      element: <AIContainer />,
      linkText: 'Fun With AI',
    },
    {
      path: '',
      element: <Home />,
      linkText: 'Home',
    },
  ]);

  return (
    <BrowserRouter>
      <div>
        {routes.map((route) => {
          return (
            <Link to={`/${route.path}`} className='link'>
              {route.linkText}
            </Link>
          );
        })}
      </div>

      <Routes>
        {routes.map((route) => {
          return <Route path={`/${route.path}`} element={route.element} />;
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
