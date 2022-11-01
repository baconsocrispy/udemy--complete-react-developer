// Fragment element wraps content in a div that doesn't show up in the DOM
import { Fragment } from 'react';

// Outlet component indicates where child route content will display
// Link component turns content into a link to the specified 'to' route
import { Outlet, Link } from 'react-router-dom';

// ReactComponent turns content like svgs into a React component
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import './navigation.styles.scss';

const Navigation = () => {
  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrwnLogo className='logo' />
        </Link>
        
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          <Link className='nav-link' to='/sign-in'>
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
     </Fragment>
  );
};

export default Navigation;