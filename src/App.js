import React from 'react';
import './App.css';

import Navbar from './Components/Navbar';
import Search from './Components/Search';
import Info from './Components/Info';

class App extends React.Component {
  render() {
    return (
      <div className="container">

        <Navbar />
        <Search/> <br/>
        <Info />
        
      </div>
    );
  }
}
export default App;