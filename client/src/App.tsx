import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom'
import Posts from './Posts'
import Users from './Users'
import Photos from "./Photos"
import Header from "./Header"
import './App.css';


const App: React.FC= () => {
  return (
    <Router>
      <div className="mainContainer">
      <div className="routesContainer">
        <Header />
        <Posts title="" body=""/>
        <Users username="" />
        <Photos url=""/>
      </div>
      </div>
    </Router>
  );
}

export default App;
