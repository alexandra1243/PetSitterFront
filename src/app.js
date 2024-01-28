import React, { Suspense } from 'react';
import { Switch } from 'react-router-dom';
import { routes } from 'routes';
import Route from 'components/security/route';

import './index.css';

const App = () => {
  return (
    <div>
      <Suspense>
        <Switch>
          {routes.map((props, index) => <Route key={index} {...props} />)}
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;
