import React from 'react';
import './App.css';
import InputBox from './components/InputBox';
import TodoTable from './components/TodoTable';

function App() {
  fetch('/data',{method: 'GET'}).then((res)=>res.json()).then((resJson)=>console.log(resJson));
  return (
      <>
        <InputBox />
        <TodoTable />
      </>
    );
}

export default App;
