import React, { FunctionComponent } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Routing } from '../Routing';
import { store } from '../../store';

const App: FunctionComponent = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  </Provider>
);

export { App };