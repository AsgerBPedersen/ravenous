import React from 'react';
import './App.css';
import './components/BusinessList/BusinessList';
import './components/SearchBar/SearchBar';
import SearchBar from './components/SearchBar/SearchBar';
import BusinessList from './components/BusinessList/BusinessList';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar />
        <BusinessList /> 
      </div>
    );
  }
}

export default App;
