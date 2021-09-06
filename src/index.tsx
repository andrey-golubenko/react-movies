import './index.css';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, AnyAction } from 'redux'
import { Provider } from 'react-redux'
import { rootReducer } from './store/rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk, { ThunkDispatch } from 'redux-thunk'
import { IMoviesAction } from './interfaces'

const store = createStore( rootReducer,
    composeWithDevTools( applyMiddleware<DispatchFunctionType, IMoviesAction>(thunk) )
);

type DispatchFunctionType = ThunkDispatch<IMoviesAction, undefined, AnyAction>



ReactDOM.render(
  <React.StrictMode>
      <Provider store={ store }>
          <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


