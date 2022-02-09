import React from 'react';
import './App.scss';
import { Sidebar } from './components/Sidebar/Sidebar';
import { MainContent } from './components/MainContent/MainContent';
import { db } from './database/firebase';

function App() {
  // React.useEffect(() => {
  //   console.log(db);
  // });

  return (
    <div className="App">
      <div className="app_content">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
