import React, { Component } from 'react';

import Header from './Header';
import AddContact from '../containers/AddContact';
import VisibleContactList from '../containers/VisibleContactList';
import Footer from './Footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <AddContact />
          <VisibleContactList />
          <Footer />
      </div>
    );
  }
}

export default App;