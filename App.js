import React from 'react';

import AuthNavigator from './navigation/AuthNavigator';
import {Provider} from 'react-redux';
import {store} from './store/Store';

const App = () => {
  return (
    <Provider store={store}>
      <AuthNavigator />
    </Provider>
  );
};

export default App;
