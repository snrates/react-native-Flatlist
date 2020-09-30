import React from 'react';
import Router from './src/Router';
import reducers from './src/reducers'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

const App = () => { 
      const store=createStore(reducers,{},applyMiddleware(ReduxThunk));
   return(
      <Provider store={store}>
         <Router/>
      </Provider>
   );
 }
export default App;
