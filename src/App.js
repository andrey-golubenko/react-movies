import React from 'react'
import './App.css';
import {Header} from './layout/Header'
import {Footer} from './layout/Foter'
import {Main}   from './layout/Main';

function App() {
  return (
      <React.Fragment>
        <Header />
        <Main />
        <Footer />
      </React.Fragment>
  );
}

export default App;
