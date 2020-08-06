import React from 'react';
import ReactDOM from 'react-dom'
import Form from './Form/form';
import { ThemeProvider, } from '@chakra-ui/core';
const App =()=>{
return (
  <ThemeProvider >    
     <Form/>
  </ThemeProvider>
);
}
export default App;
ReactDOM.render(<App />, document.getElementById('root'));