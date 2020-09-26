import React from 'react';
import './App.css';
import Data from './components/Data';
import Err from './components/Err'
import Load from './components/Load'

function App() {
  const url = process.env.REACT_APP_URL;

  return (
    <>
      <Load url={`${url}error`} />
      <Data url={`${url}data`} />
      <Err url={`${url}loading`} />
    </>
  );
}

export default App;
