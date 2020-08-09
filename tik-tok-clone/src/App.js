import React from 'react';
import Video from "../src/components/Video"
import './App.css';

function App() {
  return (
    // BEM
    <div className="app">
      
      <div className="app___videos">
        <Video />
        <Video />
        <Video />
        <Video />
        <Video />
        <Video />
      
      </div>
    </div>
  );
}

export default App;
