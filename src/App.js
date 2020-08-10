import React from 'react';
import ReactDOM from 'react-dom'
import NewForm from './components/newForm';
import './App.css';

const App =()=>{
return (
  <div className="app">
    <NewForm/>
   </div>
);
}
export default App;
ReactDOM.render(<App />, document.getElementById('root'));