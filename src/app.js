import React, { Suspense } from 'react';
import { Switch } from 'react-router-dom';
import { routes } from 'routes';
import Route from 'components/security/route';

import './index.css';

const App = () => {
  return (
    <div>
      <div className='flex justify-between px-20 items-center bg-cyan-800 bg-opacity-80 h-12'>
        <div className='text-white font-pacifico text-md md:text-2xl'>Pet Sitter</div>
        <div className='text-white font-display text-md border border-1 rounded-md py-1 px-3 cursor-pointer hover:bg-white hover:text-cyan-800 transition-all font-medium'>LOGIN</div>
      </div>
      <Suspense>
        <Switch>
          {routes.map((props, index) => <Route key={index} {...props} />)}
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;
