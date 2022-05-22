import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';
import AIContainer from './Components/AIContainer/AIContainer';

function App() {
  const [routes] = useState([
    {
      path: '',
      element: <Home />,
      linkText: 'Home',
    },
    {
      path: 'AI',
      element: <AIContainer />,
      linkText: 'Fun With AI',
    },
  ]);

  return (
    <div className='App'>
      <BrowserRouter>
        <Nav routes={routes} />
        <Routes>
          {routes.map((route, i) => {
            return (
              <Route key={i} path={`/${route.path}`} element={route.element} />
            );
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
