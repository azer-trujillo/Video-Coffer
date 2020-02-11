import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const store = configureStore();
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <Router>
      <App />
      </Router>
    </Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
