import React from 'react';
import './App.scss';
import  SearchBar  from './components/search_bar/search_bar.component';
import logo from './assets/git_icon.png';
import  UsersGrid  from './components/users_grid/users_grid.component';
import {Route} from 'react-router-dom';
function App() {
  return (
    <div className="main-root">
      <header className="main-header">
        <img src={logo} alt="git_logo" />

      </header>
      <main>
        <Route path="/" exact component={SearchBar}></Route>
      </main>
      <div className="container margin-top-medium">
      

      

        <hr  className="margin-top-medium"/>

        {/* <UsersGrid></UsersGrid> */}
        <Route path="/" exact component={UsersGrid}/>
      </div>

    </div>
  );
}

export default App;
