import React from 'react';
import ReactDOM from 'react-dom';
import './styles/stylesheet.css';
// import App from './App';
import Main from './components/Main';

import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import rootReducer from './redux/reducer';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { database } from './firebase/config';
// redux is not limited for react, it can used in any languages Angular can also use Redux but for react for the linkage of store to the application we  use provider which is benn provided by react-redux;
// what does Provider do? It provides our store (where state resides) to the child components 
// we have created store but this is not linked to our project yet hence for the linkage we are using react-redux package
const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store = { store }>
    <BrowserRouter>
      <Main/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);


// import React from 'react'
// import ReactDOM from 'react-dom'
// import './styles/stylesheet.css'
// import {BrowserRouter} from 'react-router-dom'
// import {createStore, applyMiddleware} from 'redux'
// import rootReducer from './redux/reducer'
// import {Provider} from 'react-redux'
// import App from './App'
// import thunk from 'redux-thunk'
// import {database} from './firebase/config'
// const store = createStore(rootReducer, applyMiddleware(thunk))
// ReactDOM.render(<Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>, document.getElementById('root'))
