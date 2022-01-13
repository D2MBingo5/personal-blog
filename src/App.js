import './App.css';
import {Routes, Route} from "react-router-dom"
import React from 'react';

import HomePage from './components/pages/home';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
      </Routes>
    </div>
  );
}

export default App;
