import React from 'react';
import './App.scss';

import { SideLine } from './components/SideLine/SideLine';
import { MainContent } from './components/MainContent/MainContent';

function App() {
  return (
    <div className="App">
      <div className="app_content">
        <SideLine />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
