import { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';
import AIContainer from './Components/AIContainer/AIContainer';

function App() {
  // let navigate = useNavigate();

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
  // console.log(navigate);
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
