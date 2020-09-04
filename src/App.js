import React from 'react';
import './App.css';
import ImageGen from './ImageGen'
import DataHolder from './DataHolder'


function App() {


  return (
    <div className="app">

      <div className="app__container">
        <ImageGen />
        <DataHolder />
      </div>

    </div>
  );
}

export default App;
