
import React from 'react';
import  {Route, Routes } from 'react-router-dom';
import Home from './home';
import Single_products from './single_products';  

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/card/:id' element={<Single_products/> }/>
      </Routes>

    </div>
  );
}   

export default App;
  