import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';
import AIContainer from './Components/AIContainer/AIContainer';
import { useCurrentPath } from './Helpers/useCurrentPath';

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

  // check helpers folders for custom hooks:
  const currentPath = useCurrentPath(routes);

  return (
    <div className={currentPath === '' ? 'App cool-bg' : 'App'}>
      <Nav routes={routes} />
      <Routes>
        {routes.map((route, i) => {
          return (
            <Route key={i} path={`/${route.path}`} element={route.element} />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
