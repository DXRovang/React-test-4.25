import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import cardReducer from './reducers/cardReducer'
import characterReducer from './reducers/characterReducer'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const combinedReducer = combineReducers(
  {characters: characterReducer, cards: cardReducer}
)

let store = createStore(combinedReducer, composeEnhancers(applyMiddleware(thunk)))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router basename={process.env.PUBLIC_URL}> 
      <App/>
    </Router>
    </Provider>
  </React.StrictMode>
);

