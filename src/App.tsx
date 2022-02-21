import React from 'react';
import './App.scss';
import { MainContent } from './components/MainContent/MainContent';
import { db } from './database/firebase';
import { Header } from './components/Header/Header';
import { ScreenTitle } from './components/ScreenTitle/ScreenTitle';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="app_content">
        <Header />
        <ScreenTitle />
        <MainContent />
      </div>
    </div>
  );
};

export default App;
