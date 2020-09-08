import React from 'react';
import './App.scss';
import { SearchBar } from './components/search_bar/search_bar.component';
import logo from './assets/git_icon.png';
function App() {
  return (
    <div className="main-root">
      <header className="main-header"> 
        <img src={logo} alt="git_logo" />
        
      </header>
      <main>
        <SearchBar/>
      </main>
    
  
    </div>
  );
}

export default App;
