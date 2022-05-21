import { Link } from 'react-router-dom';

const Nav = ({ routes }) => {
  return (
    <div className='Nav'>
      {routes.map((route) => {
        return (
          <Link to={`/${route.path}`} className='link'>
            {route.linkText}
          </Link>
        );
      })}
    </div>
  );
};

export default Nav;
