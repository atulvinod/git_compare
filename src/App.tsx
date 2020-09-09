import React from 'react';
import './App.scss';
import { SearchBar } from './components/search_bar/search_bar.component';
import logo from './assets/git_icon.png';
import { UsersGrid } from './components/users_grid/users_grid.component';
function App() {
  return (
    <div className="main-root">
      <header className="main-header">
        <img src={logo} alt="git_logo" />

      </header>
      <main>
        <SearchBar />
      </main>
      <div className="container margin-top-medium">
      

      

        <hr  className="margin-top-medium"/>

        <UsersGrid></UsersGrid>
      </div>

    </div>
  );
}

export default App;
