import React from 'react';
import './App.css';

function App() {
  fetch('/data',{method: 'GET'}).then((res)=>res.json()).then((resJson)=>console.log(resJson));
  return (
      <></>
    );
}

export default App;
