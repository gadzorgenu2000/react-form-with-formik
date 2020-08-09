import React from 'react';
import ReactDOM from 'react-dom'
import Form from './form/form';
import './App.css';

const App =()=>{
return (
  <div className="app">
    <Form/>
   </div>
);
}
export default App;
ReactDOM.render(<App />, document.getElementById('root'));